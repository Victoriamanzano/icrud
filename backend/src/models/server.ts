import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routerClient from '../routes/client.routes';
import db from '../db/connection';
import routerChartjs from '../routes/chartjs.routes';
import routerMap from '../routes/map.routes';
import routerCalendar from '../routes/client.routes';


class Server { 
    private app: Application;
    private port: string;

    constructor() {
     
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running on the port ${this.port} ⚡`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
           res.json({
            msg: 'API Working'
           })
        })

        this.app.use('/api/clients', routerClient);
        this.app.use('/api/events', routerCalendar);  
        this.app.use('/maps', routerMap);
        this.app.use('/api/chartjs', routerChartjs);
    }

    middlewares() {

        this.app.use(express.json());   
        this.app.use(cors());
    }

    async dbConnect() {
     
         try {
            await db.authenticate();
        console.log('Connected database (^ ◡ ^ ) yuup!');
         } catch (error) {
            console.log(error);
            console.log('Error connecting people!! (  ◡́ .◡̀ )')
         }

    }
}

export default Server;

