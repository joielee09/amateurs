import './db';
import dotenv from "dotenv";
dotenv.config();
import app from './app'

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 1234;
const handleListening = () => console.log(`Listening on port ${PORT}`);

app.listen(PORT, handleListening) 