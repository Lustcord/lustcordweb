/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media1.tenor.com',
                port: '',
                pathname: '/m/**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
