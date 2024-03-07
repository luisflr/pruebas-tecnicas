import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

class Server {
  public app: express.Application = express();
  private port: number = 8000;

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.app.get('/', (req, res) => {
      res.status(200).send('<h1> Hola mundo </h1>')
    })

    this.app.get('/api/v1', (req, res) => {
      res.status(200).json({
        message: 'Hola mundo'
      })
    })

    this.listen();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor escuchando en el puerto 8000')
    });
  }

}

new Server();