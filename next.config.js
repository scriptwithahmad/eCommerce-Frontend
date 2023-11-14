/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "img.freepik.com"],
  },
  env: {
    MONGO_URI:
    "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/store?retryWrites=true&w=majority",
  },
  reactStrictMode: true,
}

module.exports = nextConfig