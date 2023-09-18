import express from "express"
import routerBook from "./book.js"
import routerCategory from "./category.js"

const router = express.Router()

router.use('/books', routerBook)
router.use('/categories', routerCategory)

// router.use('/u', routerUser)

export default router