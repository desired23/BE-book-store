import express from "express"
import { createAuthor, deleteAuthors, getAuthor, getAuthors, removeAuthor, updateAuthor } from "../controllers/author.js";

const routerAuthor = express.Router();

routerAuthor.get(`/`,getAuthors)
routerAuthor.get(`/:id`,getAuthor)
routerAuthor.post(`/add`,createAuthor)
routerAuthor.patch(`/:id/edit`,updateAuthor)
routerAuthor.delete(`/delete-books`,deleteAuthors)
routerAuthor.delete(`/:id`,removeAuthor)





export default routerAuthor;