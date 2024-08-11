import path from 'path';

const __dirname = import.meta.dirname;

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/sign_in_form',
    output: 'export',
    reactStrictMode: true,
    typescript: {
        tsconfigPath: './tsconfig.json',
    },
    webpack(config) {
        config.resolve.alias['@'] = path.join(__dirname, 'src');
        return config;
    },
    distDir: 'docs',
};

export default nextConfig;
