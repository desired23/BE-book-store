import express from "express";
import { addToCart, getCart, updateCart } from "../controllers/cart.js";
import { checkAuthenticatedUser, checkPermission } from "../middlewares/checkPermission.js";
const routerCart = express.Router()

routerCart.get('/', checkAuthenticatedUser, getCart)
// routerCart.get('/', checkPermission, getAllCart)

// routerCart.get('/:id', get)
routerCart.post('/add',checkAuthenticatedUser, addToCart)
// routerCart.delete('/:id', remove)
routerCart.patch('/edit', checkAuthenticatedUser, updateCart)

export default routerCart