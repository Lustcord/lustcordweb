import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { parse } from 'querystring';
import { getConnection } from '../../../../../lib/db'; // Adjust the path as necessary

export async function GET(req: NextRequest) {
  const query = parse(req.url.split('?')[1]);
  const code = query.code as string;

  try {
    // Exchange code for access token
    const response = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!,
      client_secret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET!,
      grant_type: 'authorization_code',
      code,
      redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/discord/callback`,
    }).toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token } = response.data;

    // Fetch user data from Discord
    const userResponse = await axios.get('https://discord.com/api/v10/users/@me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const user = userResponse.data;

    // Fetch user's guilds
    const guildsResponse = await axios.get('https://discord.com/api/v10/users/@me/guilds', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const guilds = guildsResponse.data;

    // Connect to the database and save user and guilds
    const connection = await getConnection();
    
    await connection.query('INSERT INTO users (id, username, avatar) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE username = VALUES(username), avatar = VALUES(avatar)', [user.id, user.username, user.avatar]);
    
    for (const guild of guilds) {
      if (guild.owner) {
        await connection.query('INSERT INTO guilds (id, name, owner_id, icon, banner) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name)', [guild.id, guild.name, user.id, guild.icon, guild.banner]);
      }
    }

    // Redirect to the home page or dashboard
    return NextResponse.redirect(new URL('/', req.url).href);
  } catch (error) {
    console.error('Error during Discord OAuth2 flow:', error);
    return NextResponse.redirect(new URL('/error', req.url).href);
  }
}