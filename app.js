import dotnev from 'dotenv';
import express from 'express';
import AppCampus from './routes/campers.js';
console.clear();
dotnev.config();

const Api = express();
Api.use(express.json());

// import { Collection } from 'mongodb';
// import { con } from './db/atlas.js';

// let db = await con();

// ════════ ⋆★⋆ ════════
Api.use('/Campus', AppCampus)
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
Api.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})




//como saber si una coleccion existe

// const collections = await db.listCollections().toArray();
// console.log(collections);
// const bandera = collections.some((Collection) => Collection.name === "DB_Prueba");
// console.log(bandera);

