import express from "express"
import { create, deleteBooks, getBook, getBooks, remove, update } from "../controllers/book.js";

const routerBook = express.Router();

routerBook.get(`/`,getBooks)
routerBook.get(`/:id`,getBook)
routerBook.post(`/add`,create)
routerBook.patch(`/:id/edit`,update)
routerBook.delete(`/delete-books`,deleteBooks)
routerBook.delete(`/:id`,remove)





export default routerBook;