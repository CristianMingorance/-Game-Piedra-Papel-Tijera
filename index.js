function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function getRandomElemArray(arr) {

    //let posicion = Math.floor(Math.random() * (arr.length)) + 0;
    let posicion = getRandomNumber(arr.length, 0);

    return arr[posicion];

}

function getRandomGame() {

    return getRandomElemArray(["piedra", "papel", "tijera"])
}











function juego(jugador1) {


    let imgPiedra = document.querySelectorAll("body > div.row > div.col-md-6.margin-left-auto > footer > div")[0];
    let imgTijera = document.querySelectorAll("body > div.row > div.col-md-6.margin-left-auto > footer > div")[0];
    let imgPapel = document.querySelectorAll("body > div.row > div.col-md-6.margin-left-auto > footer > div")[0];

    let imgPiedra2 = document.querySelectorAll("body > div.row > div.col-md-6.text-center > div > div > div")[0];
    let imgTijera2 = document.querySelectorAll("body > div.row > div.col-md-6.text-center > div > div > div")[0];
    let imgPapel2 = document.querySelectorAll("body > div.row > div.col-md-6.text-center > div > div > div")[0];

    let jugador2 = getRandomGame();

    console.log(jugador2)
    console.log(jugador1)


    if (jugador1 == "piedra") {
        imgPiedra.innerHTML = '<img style="height: 270px;" src="img/piedra.jpg">'
    }
    if (jugador1 == "tijera") {
        imgTijera.innerHTML = '<img  style="height: 270px;" src="img/tijera.png" >'

    }
    if (jugador1 == "papel") {
        imgPapel.innerHTML = '<img  style="height: 270px;" src="img/papel_arrugado.jpg">'
    }


    if (jugador2 == "piedra") {
        imgPiedra2.innerHTML = '<img style="height: 270px;" src="img/piedra2.jpg">'
    }
    if (jugador2 == "tijera") {
        imgTijera2.innerHTML = '<img  style="height: 270px;" src="img/tijera2.png" >'
    }
    if (jugador2 == "papel") {
        imgPapel2.innerHTML = '<img  style="height: 270px;" src="img/papel_arrugado2.jpg">'
    }


    if (jugador1 == "piedra" && jugador2 == "tijera") {}
    if (jugador1 == "tijera" && jugador2 == "papel") {}
    if (jugador1 == "papel" && jugador2 == "piedra") {}



    if (jugador2 == "piedra" && jugador1 == "tijera") {
        imgPiedra2.innerHTML = '<img style="height: 270px;" src="img/piedra.jpg">'
    }
    if (jugador2 == "piedra" && jugador1 == "papel") {
        imgPiedra2.innerHTML = '<img style="height: 270px;" src="img/piedra.jpg">'
    }
    if (jugador2 == "piedra" && jugador1 == "piedra") {
        imgPiedra2.innerHTML = '<img style="height: 270px;" src="img/piedra.jpg">'
    }
    if (jugador2 == "tijera" && jugador1 == "papel") {
        imgTijera2.innerHTML = '<img  style="height: 270px;" src="img/tijera.png" >'
    }
    if (jugador2 == "papel" && jugador1 == "piedra") {
        imgPapel2.innerHTML = '<img  style="height: 270px;" src="img/papel_arrugado.jpg">'

    }



    return;
}