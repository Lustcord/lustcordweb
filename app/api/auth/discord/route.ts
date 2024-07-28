import { NextResponse } from 'next/server';

export async function GET() {
  const redirectUri = `${process.env.NEXTAUTH_URL}/api/auth/discord/callback`;
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!;
  const scope = 'identify guilds';
  const responseType = 'code';

  const url = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${scope}`;

  return NextResponse.redirect(url);
}