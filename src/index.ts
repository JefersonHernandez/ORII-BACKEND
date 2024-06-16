import * as express from "express";
import { AppDataSource } from "./data-source";
import * as cors from "cors";
import helmet from "helmet";
import routes from "./routes";
import config from "./config/config";

const PORT = config.SERVER_PORT || 3000;

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
