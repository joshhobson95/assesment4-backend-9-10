let games = require('./db.json')
let globalID = 7;
let clickCount = 0;
let clickLimit = 4;


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A good friendship is often more important than a passionate romance.", "A lifetime friend shall soon be made.", "A pleasant surprise is waiting for you.", "Adventure can be real happiness.", "All your hard work will soon pay off."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomCompliment = fortunes[randomIndex];
      
        res.status(200).send(randomCompliment);

},

//GAMES FUNCTION
    getGames: (req, res) => {
        res.status(200).send(games)
    }, 

    deleteGame: (req, res) => {
        let index = games.findIndex(elem => elem.id === +req.params.id)
        games.splice(index, 1)
        res.status(200).send(games)
      
    },
    createGame: (req, res) => {
        const {title, yearReleased, numberOfLikes, imageURL} = req.body
        let newGame = {
            title,
            yearReleased,
            numberOfLikes: Number(numberOfLikes),
            imageURL,
            id: globalID
          
        }
        games.push(newGame)
      
        globalID++
       
        res.status(200).send(games)
    },
    updateGame: (req, res) => {
        // console.log(req.params.id)
        // console.log(req.body.type)
        const {type} = req.body;
        let index = games.findIndex(elem => elem.id === +req.params.id)
        if(type === 'numberOfLikes' && clickCount <= clickLimit){
            games[index].numberOfLikes += 1;
            clickCount++
            res.status(200).send(games)
        }
            
       else {
            res.status(400).send('Invalid like rating!')
        }

},

}