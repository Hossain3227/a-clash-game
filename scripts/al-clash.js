function hideElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('hidden');
}

function showElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.remove('hidden');
}

function getArandomAlphabet(){
    const alphs = 'abcdefghijklmnopqurstuvwxyz';
    const alphabets = alphs.split('');
    // console.log(alphabets);
    //get a random index
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;
}

function setBgById(elementid){
 const element = document.getElementById(elementid);
 element.classList.add('bg-orange-500');
}
function removeBgById(elementid){
 const element = document.getElementById(elementid);
 element.classList.remove('bg-orange-500');
}

function getTextElementById(elementid){
    const element = document.getElementById(elementid);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}

function setTextElementValueById(elementid, value){
    const element = document.getElementById(elementid);
    element.innerText = value;
}


function getElementTextId(elementid){
    const element = document.getElementById(elementid);
    const text = element.innerText;
    return text;
}


function play(){
    // const homeSection = document.getElementById('home');
    // console.log(homeSection.classList);
    // const homeSection = document.getElementById('playground');
    // console.log(homeSection.classList);
    
    hideElementById('home');
    hideElementById('final-score');
    showElementById('playground');


    // rest life and score

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}


function handleKeyBoard(event){
    const playerPressed = event.key;
    console.log(playerPressed);

    //if player pressed esc stop the game
     if(playerPressed === 'Escape'){
        gameOver();
     }

    const currentAlpha = document.getElementById('current-alphabet');
    const current = currentAlpha.innerText;
    const expectedAlpha = current.toLowerCase();
    console.log(playerPressed,expectedAlpha);

    //check matched or not 

    if(playerPressed === expectedAlpha){
        console.log('you get a point');
        //update score
            const currentScore = getTextElementById('current-score');
            console.log(currentScore);
            const updatesScore = currentScore + 1;
            setTextElementValueById('current-score', updatesScore);
            



        // const currentScoreEle = document.getElementById('current-score'); 
        // const currentscText = currentScoreEle.innerText;
        // const currentSc = parseInt(currentscText);

        // console.log(currentscText);


        //increase score by 1

        // const newScore = currentSc + 1;

        //update
        // currentScoreEle.innerText = newScore;
        //start a new game
        removeBgById(expectedAlpha);
        continueGame();
    }
    else {
        console.log('you missed, you lost a life');

        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();

        }

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        //update life 

        // const newLife = currentLife -1;

        // currentLifeElement.innerText = newLife;

    }
}

document.addEventListener('keyup', handleKeyBoard);


function continueGame(){
  const alphabet = getArandomAlphabet();
  //set alphabet on screen
  const currentAlpha = document.getElementById('current-alphabet');
  currentAlpha.innerText = alphabet;
  setBgById(alphabet);
}


function gameOver(){
    hideElementById('playground');
    showElementById('final-score');

    //update final score 

    const lastScore = getTextElementById('current-score');
    setTextElementValueById('game-score',lastScore);

    //clear the last selected alphabet highlight 
    const currentAlphabet = getElementTextId('current-alphabet');
    removeBgById(currentAlphabet);

}