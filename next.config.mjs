/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images:{
        domains: ['res.cloudinary.com'],
        remotePatterns:[
            {
                protocol:"https",
                hostname:"res.cloudinary.com",
                pathname:"/djfop5zyp/**",
            },
        ],
    },
};

export default nextConfig;
