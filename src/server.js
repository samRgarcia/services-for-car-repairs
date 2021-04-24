import express,{json} from 'express';
import cors from 'cors';
import morgan from  'morgan';
import http from 'http';

import routesUrl from '../src/routes/index';

class Server{
    constructor() {
        this.app = express();
        this.port = process.env.PORT_SERVER || 4000;
        this.server = http.createServer(this.app);
    }
    corsOptionsDelegate (req, callback) {
        var allowlist = [
            "http://localhost:3000",
            "http://localhost:3001",
        ];
        var corsOptions;
        if (allowlist.indexOf(req.header("Origin")) !== -1) {
            corsOptions = { origin: true };
        } else {
            corsOptions = { origin: false };
        }
        callback(null, corsOptions);
    }

    middleware(){
        this.app.use(morgan("dev"));
        this.app.use(cors(this.corsOptionsDelegate));
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
