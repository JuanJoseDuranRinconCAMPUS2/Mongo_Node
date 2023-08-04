import { Router } from "express";
import {limitGrt} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppCampus = Router();
let db = await con();

AppCampus.use(limitGrt());

AppCampus.get('/', async (req, res) =>{
    if(!req.rateLimit) return;

    let { id } = req.body;
    let usuario = db.collection("usuario");
    // let result = await usuario.find({_id: new ObjectId(id)}).toArray();
    let result = await usuario.find({}).toArray();
    res.send(result);

})

export default AppCampus;