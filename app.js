const pokemon = [
    { name: "Charmander", type: "Fire", maxHp: 100, attack: 15 },
    { name: "Squirtle", type: "Water", maxHp: 110, attack: 12 },
    { name: "Pikachu", type: "Electric", maxHp: 95, attack: 18 },
    { name: "Bulbasaur", type: "Grass", maxHp: 105, attack: 13 }
];

const total = pokemon.reduce((sum, itm) => {
    return sum + itm.maxHp;
}, 0);

const attackTotal = pokemon.reduce((sum, itm) => {
    return sum + itm.attack;
}, 0);

const average = attackTotal / pokemon.length;

document.getElementById("totalHp").innerHTML = "Total HP: " + total;
document.getElementById("averageAttack").innerHTML = "Average Attack: " + average;

const renderedPokemon = pokemon.map(itm => {
    const ele = document.createElement("div");
    ele.innerHTML = itm.name + " (" + itm.type + ") - " + itm.maxHp + " HP";
    ele.style.fontWeight = "bold";
    return ele;
});

function filterPokemon(fil) {

    const filteredPokemon = pokemon.filter(itm => {
        if (fil === "all") {
            return true;
        } else {
            return itm.type === fil;
        }
    });

    return filteredPokemon.map(itm => {
        const ele = document.createElement("div");
        ele.innerHTML = itm.name + " (" + itm.type + ") - " + itm.maxHp + " HP";
        ele.style.fontWeight = "bold";
        return ele;
    });
}

function renderPokemon(pokemonList) {

    document.getElementById("wrapper").innerHTML = "";

    pokemonList.forEach(itm => {
        document.getElementById("wrapper").appendChild(itm);
    });
}

document.getElementById("select").addEventListener("change", (event) => {
    renderPokemon(filterPokemon(event.target.value));
});

renderPokemon(renderedPokemon);