'use client';

import { useEffect } from 'react';

const AddBot = () => {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI;

    console.log('Client ID:', clientId);
    console.log('Redirect URI:', redirectUri);

    if (clientId && redirectUri) {
      const discordOauthUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot%20guilds.join%20identify&permissions=8&response_type=code&redirect_uri=${redirectUri}`;
      console.log('Redirecting to:', discordOauthUrl);
      window.location.href = discordOauthUrl;
    }
  }, []);

  return <p>Redirecting...</p>;
};

export default AddBot;