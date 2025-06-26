const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'res.cloudinary.com', 
      'media2.dev.to',
      'images.unsplash.com'  // Tambahkan ini untuk mengatasi error
    ]
  }
}