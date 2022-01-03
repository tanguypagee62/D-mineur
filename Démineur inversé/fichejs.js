let bombe = getRandomNumber(1,17);
let count = 0;

function getRandomNumber(min,max){

    return Math.floor((max-min)*Math.random()+min);
}

console.log('La bombe est à la case ' +bombe);

function doClick(id){
    console.log('Vous avez cliqué sur la case ' +id);
    if (bombe == id){
        console.log('Perdu, le sandwich est jeté aux crocodiles')
    }
    let tries = document.querySelector('#essai');
    count = count + 1;
    tries.innerHTML='essai : ' + count;
}

 