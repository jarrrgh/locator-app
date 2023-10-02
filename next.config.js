/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vignette.wikia.nocookie.net',
            },
        ],
    },
}

module.exports = nextConfig
