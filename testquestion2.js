let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    background(0)
    textAlign(CENTER,CENTER)
    textSize(20)
    yPos = 100;

for(let i = 0; i<pokemons.length; i++){
    text(pokemons[i], width/2, yPos - 20*i)
}
}

