
//compliment
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
//compliment

//fortune
const fortuneBtn = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
        .then(res => {
            const data = res.data;
            alert(data);
        });
    };
    fortuneBtn.addEventListener('click', getFortune)
/////////////////////////////////////////////////////////////////////////////////////
const gamesContainer = document.querySelector('#games-container');
const form = document.querySelector('form')

const baseURL = 'http://localhost:4000/api/games'///////

const gamesCallback = ({ data: games }) => displayGames(games);
const errCallback = err => console.log(err)







const getAllGames = () => axios.get('http://localhost:4000/api/games').then(gamesCallback).catch(errCallback)
const createGame = body => axios.post(baseURL, body).then(gamesCallback).catch(errCallback)
const deleteGame = id => axios.delete(`${baseURL}/${id}`).then(gamesCallback).catch(errCallback)
const updateGame = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(gamesCallback).catch(errCallback)









function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let yearReleased = document.querySelector('#yearReleased')
    let numberOfLikes = document.querySelector('#numberOfLikes')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        yearReleased: yearReleased.value, 
        numberOfLikes: numberOfLikes.value,
        imageURL: imageURL.value
    }

    createGame(bodyObj)

    title.value = ''
    yearReleased.value = ''
    numberOfLikes.value = ''
    imageURL.value = ''
}






function createGameCard(game) {
    const gameCard = document.createElement('div')
    gameCard.classList.add('game-card')

    gameCard.innerHTML = `<img alt='game cover' src=${game.imageURL} class="game-cover"/>
    <p class="game-title">${game.title}</p>
    <div class="btns-container">
        <button onclick="updategame(${game.id}, 'like')">like</button>
        <p class="game-rating">${game.rating} likes</p>
       
    </div>
    <button onclick="deleteGame(${game.id})">delete</button>
    `


    gamesContainer.appendChild(gameCard)
}








function displayGames(arr) {
    gamesContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++) {
        createGameCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

 getAllGames()