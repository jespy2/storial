import { Router } from 'express'

import BookController from '../controllers/book-controller.js'

const router = Router()

router.post('/book', BookController.createBook)
router.put('/book/:id', BookController.updateBook)
router.delete('/book/:id', BookController.deleteBook)
router.get('/book/:id', BookController.getBookById)
router.get('/books', BookController.getBooks)

export default router