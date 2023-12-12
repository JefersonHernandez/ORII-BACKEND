import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import * as cors from "cors";
import helmet from "helmet";
import routes from "./routes";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();

    //middlewares
    app.use(express.json());
    app.use(cors());
    app.use(helmet());

    //routes
    app.use(routes);
    // setup express app here
    // ...

    // start express server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
