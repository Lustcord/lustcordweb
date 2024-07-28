'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Callback = () => {
    const router = useRouter();
    const [code, setCode] = useState<string | null>(null);

    const supportServerInvite = process.env.NEXT_PUBLIC_SUPPORT_SERVER_INVITE;
    const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET;
    const redirectUri = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI;
    const botToken = process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN;
    const guildId = process.env.NEXT_PUBLIC_YOUR_GUILD_ID;

    useEffect(() => {
        if (typeof window !== 'undefined') {
        setCode(new URLSearchParams(window.location.search).get('code'));
        }
    }, []);

    useEffect(() => {
        console.log('Code:', code);
        console.log('Client ID:', clientId);
        console.log('Client Secret:', clientSecret);
        console.log('Redirect URI:', redirectUri);
        console.log('Bot Token:', botToken);
        console.log('Guild ID:', guildId);

        if (code) {
        const fetchAccessToken = async () => {
            try {
            const params = new URLSearchParams();
            params.append('client_id', clientId as string);
            params.append('client_secret', clientSecret as string);
            params.append('grant_type', 'authorization_code');
            params.append('code', code);
            params.append('redirect_uri', redirectUri as string);

            const response = await axios.post('https://discord.com/api/oauth2/token', params, {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const { access_token } = response.data;

            const userResponse = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                Authorization: `Bearer ${access_token}`,
                },
            });
            console.log(userResponse.data)
            const userId = userResponse.data.id;

            await axios.put(
                `https://discord.com/api/guilds/${guildId}/members/${userId}`,
                { access_token },
                {
                headers: {
                    Authorization: `Bot ${botToken}`,
                    'Content-Type': 'application/json',
                },
                }
            );

            window.location.href = supportServerInvite as string;
            } catch (error) {
            console.error('Error fetching access token or adding user to guild:', error);
            }
        };

        fetchAccessToken();
        }
    }, [code, clientId, clientSecret, redirectUri, supportServerInvite, botToken, guildId]);

    return <p>Redirecting to the support server...</p>;
};

export default Callback;