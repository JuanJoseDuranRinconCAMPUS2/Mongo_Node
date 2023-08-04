import { Router } from "express";
import {configGet} from '../middleware/limit.js';
import bodyParser  from 'body-parser';

const AppCampus = Router();

AppCampus.use(configGet());
AppCampus.use(bodyParser.json({ limit: '400B' }));

AppCampus.get('/', (req, res) =>{
    console.log(req.headers);
    res.send("Wenas cabros")
})

export default AppCampus;