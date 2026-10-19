/** @type {import('next').NextConfig} */
// Site servi à la racine du domaine personnalisé www.sylvagreen-capital.fr
// (basePath nécessaire uniquement pour l'URL projet olivierpellegrin-ops.github.io/sylvagreen-capital/ —
// dans ce cas, définir BASE_PATH=sylvagreen-capital au build)
const nextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH ? '/' + process.env.BASE_PATH : '',
  images: { unoptimized: true },
};

export default nextConfig;
