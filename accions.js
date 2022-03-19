
/* Variables globales */
const idNombre = document.getElementById("namePok"),
idTipo = document.getElementById("tipo"),
idAltura = document.getElementById("altura"),
texto = document.getElementById("movesDesc"),
tMoves = document.getElementById("tMoves"),
pokePhoto = document.getElementById("pokeImg"),
idPeso = document.getElementById("peso"),
idHp = document.getElementById("hp"),
idAtack = document.getElementById("attack"),
idDef = document.getElementById("defense"),
idspA = document.getElementById("spA"),
idspD = document.getElementById("spD"),
idSpeed = document.getElementById("speed");
/*-----------------------------------------------------------*/

const fetchPokemon = () => {
    clean();
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/sad-pikachu.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_shiny;
            pokeImage(pokeImg);
            movesNames(data.moves,data.moves.length);
            nombre(data.name);
            console.log(data.name);
            tipo(data.types);
            altura(data.height);
            peso(data.weight);
            stats(data.stats);
        }
    });
}

const movesNames = (movimientos,size) => {
    tMoves.innerText = tMoves.innerText+" "+size;
    for (let i = 0; i<size; i++) {
        let mov = movimientos[i].move.name;
        texto.value =texto.value+mov+" \n ";
        console.log(mov);
     }
}
const nombre = (nombre) => {
    idNombre.innerText = idNombre.innerText+" "+nombre;
}
const pokeImage = (url) => {
    pokePhoto.src = url;
}
const tipo = (tipo) => {
    for (let i = 0; i<tipo.length; i++) {
        let datos = tipo[i].type.name;
        idTipo.innerText = idTipo.innerText+" "+datos;
     }
}
const altura = (altura) => {
    idAltura.innerText = idAltura.innerText+" "+altura;
}
const peso = (peso) => {
    idPeso.innerText = idPeso.innerText+" "+peso;
}
const stats = (array) => {
    idHp.innerText = idHp.innerText + array[0].base_stat;
    idAtack.innerText = idAtack.innerText + array[1].base_stat;
    idDef.innerText = idDef.innerText +" " + array[2].base_stat;
    idspA.innerText = idspA.innerText +" " + array[3].base_stat;
    idspD.innerText = idspD.innerText +" " + array[4].base_stat;
    idSpeed.innerText = idSpeed.innerText +" " + array[5].base_stat;
}

/* PARA GENERAR UN POKEMON ALEATORIO */
const randomPokemon = () => {
    clean();
    let num = random();
    const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/sad-pikachu.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_shiny;
            pokeImage(pokeImg);
            movesNames(data.moves,data.moves.length);
            nombre(data.name);
            console.log(data.name);
            tipo(data.types);
            altura(data.height);
            peso(data.weight);
            stats(data.stats);
        }
    });
}
function random() {
    return Math.floor((Math.random() * (898 - 1 + 1)) + 1);
}

const clean = () => {
    idNombre.innerText = "Nombre: ";
    idTipo.innerText = "Tipo: "
    idAltura.innerText = "Altura: ";
    pokePhoto.src = "./img/blanco.png";
    idHp.innerText = "Vida: ";
    idAtack.innerText = "Ataque: ";
    idDef.innerText = "Defensa: ";
    idspA.innerText = "Ataque especial: ";
    idspD.innerText = "Defensa especial: ";
    idSpeed.innerText = "Velocidad: ";
    texto.value = "";
    tMoves.innerText = "Total de movimientos: ";
    idPeso.innerText = "Peso: ";
}
