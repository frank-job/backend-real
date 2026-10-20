// import { Router } from "express";
import express from 'express';
import { ShowHomePage } from "./controllers/index.js";
import { ShowProducts } from './controllers/products.js';
import { ShowCreate } from './controllers/create.js';

const router = express.Router();

router.get('/', ShowHomePage);
router.get('/products', ShowProducts)
router.get('/create', ShowCreate)


export default router;