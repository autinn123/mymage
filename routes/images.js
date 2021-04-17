const express = require('express')
const router = express.Router()
const Image = require('../models/image')
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

router.get('/', async (req, res)=> {
    try {
        const images = await Image.find({})
    
        res.render('images/index', {images: images})
    } catch (error) {
        res.redirect('/')
    }
})
router.get('/slide', async (req, res)=> {
    try {
        const images = await Image.find({})
        res.render('images/slide', {images: images})
    } catch (error) {
        res.redirect('/')
    }
})

//New authors router
router.get('/new', async (req, res) => {
    res.render('images/new')
})


// Create Author Route
router.post('/', async (req, res) => {
    const image = new Image({
       name: req.body.name
      })
      saveCover(image, req.body.cover)
      try {
        const newImage = await image.save()
        res.redirect(`images`)
      } catch {
       res.redirect('images/new')
      }
})

function saveCover(book, coverEncoded) {
    if (coverEncoded == null) return
    const cover = JSON.parse(coverEncoded)
    if (cover != null && imageMimeTypes.includes(cover.type)) {
      book.coverImage = new Buffer.from(cover.data, 'base64')
      book.coverImageType = cover.type
    }
  }

module.exports = router