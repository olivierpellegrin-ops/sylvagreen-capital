/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY || 'olivierpellegrin-ops/sylvagreen-capital';

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/' + repo.split('/')[1] : '',
  images: { unoptimized: true },
};

export default nextConfig;
