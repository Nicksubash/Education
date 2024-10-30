/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Make sure to add this if you're using images
    images: {
      unoptimized: true,
    }
  }
  
  module.exports = nextConfig