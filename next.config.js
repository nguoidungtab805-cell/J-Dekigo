const remotePatterns = [
    {
        protocol: "https",
        hostname: "res.cloudinary.com",
    },
];

const r2PublicBaseUrl = process.env.R2_PUBLIC_BASE_URL || process.env.R2_PUBLIC_URL;

if (r2PublicBaseUrl) {
    try {
        const r2PublicUrl = new URL(r2PublicBaseUrl);
        remotePatterns.push({
            protocol: r2PublicUrl.protocol.replace(":", ""),
            hostname: r2PublicUrl.hostname,
            port: r2PublicUrl.port,
            pathname: `${r2PublicUrl.pathname.replace(/\/$/, "")}/**`,
        });
    } catch {
        console.warn("R2_PUBLIC_BASE_URL/R2_PUBLIC_URL is invalid; R2 images will not be allowed by next/image.");
    }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=(self)" },
                    { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'" },
                ],
            },
        ];
    },
    images: {
        remotePatterns,
    },
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            };
            config.cache = false;
        }

        return config;
    },
    experimental: {
        workerThreads: false,
        cpus: 1,
    }
};

module.exports = nextConfig;
