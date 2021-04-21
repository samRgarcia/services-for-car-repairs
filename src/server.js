import express,{json} from 'express';
import http from 'http';
import morgan from  'morgan';
import cors from 'cors';
import routesUrl from '../src/routes/index';

class Server{
    constructor() {
        this.app = express();
        this.port = process.env.PORT_SERVER || 4000;
        this.server = http.createServer(this.app);
    }
    middleware(){
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(json());
    }
    initRouter(){
        this.app.use('/api',routesUrl);
    }
    execute(){
        this.middleware();
        this.initRouter();
        this.server.listen(this.port, () => {
            console.log('Server online', this.port)
        })
    }
}
module.exports = Server;
