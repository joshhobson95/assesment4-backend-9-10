const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
// compliment
const { getCompliment, getFortune, getGames, deleteGame, createGame, updateGame} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/games", getGames);
app.delete('/api/games/:id', deleteGame);
app.post("api/games", createGame);
app.put("api/games/:id", updateGame);

//


















app.listen(4000, () => console.log("Server running on 4000"));
