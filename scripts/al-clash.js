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


function play(){
    // const homeSection = document.getElementById('home');
    // console.log(homeSection.classList);
    // const homeSection = document.getElementById('playground');
    // console.log(homeSection.classList);
    
    hideElementById('home');
    showElementById('playground');
    continueGame();
}

function continueGame(){
  const alphabet = getArandomAlphabet();
  //set alphabet on screen
  const currentAlpha = document.getElementById('current-alphabet');
  currentAlpha.innerText = alphabet;
  setBgById(alphabet);
}

