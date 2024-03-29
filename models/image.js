const mongoose = require('mongoose')


const imageSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    coverImage: {
        type: Buffer,
        required: true
    },
    coverImageType: {
        type: String,
        required: true
    }
})

imageSchema.virtual('coverImagePath').get(function() {
    if (this.coverImage != null && this.coverImageType != null) {
      return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
  })
  
  module.exports = mongoose.model('images', imageSchema)