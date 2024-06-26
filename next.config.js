/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER)
    return {
      reactStrictMode: true,
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '5001',
          },
        ],
      },
      env: {
        API_URL: 'http://127.0.0.1:5001/api',
        BOOKS_URL: 'http://127.0.0.1:5001/img/books/',
        AUTHORS_URL: 'http://127.0.0.1:5001/img/authors/',
        GENRES_URL: 'http://127.0.0.1:5001/img/genres/',
        USERS_URL: 'http://127.0.0.1:5001/img/users/',
        EBOOK_URL: 'http://127.0.0.1:5001/ebooks/',
        AUDIOBOOK_URL: 'http://127.0.0.1:5001/audio-books/',
      },
    }

  const hostnames = [
    'bookhive-book.s3.ap-south-1.amazonaws.com',
    'bookhive-author.s3.ap-south-1.amazonaws.com',
    'bookhive-ebook.s3.ap-south-1.amazonaws.com',
    'bookhive-genre.s3.ap-south-1.amazonaws.com',
  ]

  return {
    reactStrictMode: true,
    images: {
      remotePatterns: hostnames.map((hostname) => ({
        protocol: 'https',
        hostname,
      })),
    },
    env: {
      API_URL: 'https://bookhive.up.railway.app/api',
      BOOKS_URL: 'https://bookhive-book.s3.ap-south-1.amazonaws.com/',
      AUTHORS_URL: 'https://bookhive-author.s3.ap-south-1.amazonaws.com/',
      EBOOK_URL: 'https://bookhive-ebook.s3.ap-south-1.amazonaws.com/',
      AUDIOBOOK_URL: 'http://127.0.0.1:5000/audio-books/',
      GENRES_URL: 'https://bookhive-genre.s3.ap-south-1.amazonaws.com/',
      USERS_URL: '',
    },
  }
}

module.exports = nextConfig
