import * as dotenv from "dotenv";
dotenv.config();

export default {
  JWT_SECRET: process.env.JWT_SECRET,
  SERVER_PORT: parseInt(process.env.PORT),
  MYSQL: {
    HOST: process.env.MYSQL_HOST,
    PORT: parseInt(process.env.MYSQL_PORT),
    USERNAME: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASS,
    DATABASE: process.env.MYSQL_NAME,
  },
};
