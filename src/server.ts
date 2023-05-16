import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use( express.static(path.join(__dirname, '../public/')));

server.use(mainRoutes);
server.use((req:Request, res:Response)=>{
    res.status(404).send('Erro 404!')
})

//Routes

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor está online em: http://127.0.0.1:${process.env.PORT}`)
})