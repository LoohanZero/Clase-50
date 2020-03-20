// const pikachu = getPikachu();

const pikachu = getPikachu();
const bulbasaur = getBulbasaur();
const squirtle = getSquirtle();
const charmander = getCharmander();


const spreadPokemon = (pokemon) => {

    const spreadPokemon = {
        ...pokemon,
        ability: {...pokemon.ability},
        stats: {...pokemon.stats},
        moves: [...pokemon.moves],
        modifiers: {weakness: [...pokemon.modifiers.weakness],
        resistances: [...pokemon.modifiers.resistances]
        }
    }

    return spreadPokemon;
}

// const spreadPikachu = { 

//     ...pikachu,
//     ability: { ...pikachu.ability},
//     stats: { ...pikachu.stats },
//     moves: [...pikachu.moves],
//     modifiers: { 
//         weakness: [...pikachu.modifiers.weakness],
//         resistances: [...pikachu.modifiers.resistances]    
//     }
//  };


// const bulbasaur = getBulbasaur();

// const spreadBulbasaur = { 

//     ...bulbasaur,
//     ability: { ...bulbasaur.ability},
//     stats: { ...bulbasaur.stats },
//     moves: [...bulbasaur.moves],
//     modifiers: { 
//         weakness: [...bulbasaur.modifiers.weakness],
//         resistances: [...bulbasaur.modifiers.resistances]    
//     }
//  };


// const charmander = getCharmander();

// const spreadCharmander = { 

//     ...charmander,
//     ability: { ...charmander.ability},
//     stats: { ...charmander.stats },
//     moves: [...charmander.moves],
//     modifiers: { 
//         weakness: [...charmander.modifiers.weakness],
//         resistances: [...charmander.modifiers.resistances]    
//     }
//  };


//  const squirtle  = getSquirtle();

// const spreadSquirtle = { 

//     ...squirtle,
//     ability: { ...squirtle.ability},
//     stats: { ...squirtle.stats },
//     moves: [...squirtle.moves],
//     modifiers: { 
//         weakness: [...squirtle.modifiers.weakness],
//         resistances: [...squirtle.modifiers.resistances]    
//     }
//  };


// getMoves()
// Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos

const getMoves = (pokemon) => {
    const{ moves } = pokemon;

    return moves;
}

// getPrimaryAbility()
// Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria

const getPrimaryAbility = (pokemon) => {
    const{ability:{primary, hidden}} = pokemon;

    return primary;
}

// getWeaknesses()
// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const getWeaknesses = (pokemon) => {
    const{modifiers:{weakness, resistances}} = pokemon;

    return weakness;
    
}

// getResistances()
// Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const getResistances = (pokemon) => {
    const{modifiers:{weakness, resistances}} = pokemon;

    return resistances;
    
}


// resistsType()
// Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo

const resistsType = (pokemon, enemyType) => {
    const{modifiers:{weakness, resistances}} = pokemon;

    if(resistances.includes(enemyType)) {
        return true;
    }
    else {
        return false;
    }
    
}


// resistsMove()
// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: { name: "Rain dance", type: "water" }

const resistsMove = (pokemon, enemyMovement) => {
    const{ moves, modifiers:{weakness, resistances}} = pokemon;
    const {name: enemyName, type: enemyType } = enemyMovement;
    
    if (resistances.includes(enemyType)) {
        return true;
    }
    else if (moves.includes(enemyName)) {
        return true;
    }
    else {
        return false;
    }
}


// isWeakAgainst()
// Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es débil frente al tipo de pokémon que lo ataca

const isWeakAgainst = ({ attacker, attacked }) => {
    const{ type } = attacker;
    const{ modifiers:{weakness: enemyWeaknesses, resistances: enemyResistances}} = attacked;
   
    if (enemyWeaknesses.includes(type)) {
        return true;
    }
    else {
        return false;
    }
}


// isStrongAgainst()
// Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es resistente al tipo de pokémon que lo ataca

const isStrongAgainst = ({ attacker, attacked }) => {
    const{ modifiers:{weakness, resistances} } = attacker;
    const{ modifiers:{weakness: enemyWeaknesses, resistances: enemyResistances }} = attacked;
   
    if (enemyResistances.includes(type)) {
        return true;
    }
    else {
        return false;
    }
}


// addAbility()
// Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada


const addAbility = (pokemon, newAbility) => {
        pokemon = {

                ...pokemon,
                ability: {...pokemon.ability,
                          ...newAbility},
                stats: {...pokemon.stats},
                moves: [...pokemon.moves],
                modifiers: {weakness: [...pokemon.modifiers.weakness],
                resistances: [...pokemon.modifiers.resistances]
                }
            
        }

        return pokemon
}

// addMove()
// Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado


const addMove = (pokemon, newMove) => {
    pokemon = {

            ...pokemon,
            ability: {...pokemon.ability},
            stats: {...pokemon.stats},
            moves: [...pokemon.moves, newMove],
            modifiers: {weakness: [...pokemon.modifiers.weakness],
            resistances: [...pokemon.modifiers.resistances]
            }
        
    }

    return pokemon
}

// removeMove()
// Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado

const removeMove = (pokemon, removeMove) => {
    const{ moves } = pokemon;

    moves.splice(moves.indexOf(removeMove), 1);

    return pokemon
}

// getAttackModifier()
// Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
// 2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
// 0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
// 1, si no es débil ni resistente

const getAttackModifier = ({ attacker, attacked }) => {
    const{ modifiers:{weakness, resistances}} = attacker;
    const{ modifiers:{weakness: enemyWeaknesses, resistances: enemyResistances}} = attacked;
   
    if (enemyResistances.includes(type) ) {
        return 0.5;
    }
    else if (enemyWeaknesses.includes(type)) {
        return 2;
    }
    else {
        return 1;
    }
}


// getAttackLog()
// Crear una función getAttackLog, que tome como argumento un objeto con las siguientes propiedades:
// {
//     attacker: "Squirtle",
//     attacked: "Pikachu",
//     move: "Water Gun",
//     damage: 12,
//     modifier: "weak" // otros valores: "resistant", "normal"
// }
// Y que devuelve un string con la siguiente plantilla:

// `${attacker} used ${move}! ${attacked} lost ${damage} HP!`
// Por ejemplo:

// "Squirtle used Water Gun! Pikachu lost 12 HP!"
// Si el pokémon es débil contra el tipo de su atacante, se debe agregar It's super effective!, si es resistente, se debe agregar It's not very effective!, por ejemplo:

// "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"

const getAttackLog = ({ attacker, attacked, move, damage, modifier= normal }) => {

    let message = `${attacker} used ${move}! ${attacked} lost ${damage} HP!`;

    if (modifier === "weak") {
        message += " It's not very effective!";
    }
    else if (modifier === "resistant") {
        message += " It's super effective!"
    }

    return message;
}

// CalculateDamage()
// Crear una función calculateDamage que tome como un argumento un objeto con la siguientes propiedades
// attack es el ataque del pokémon que ataca
// defense es la defensa del pokémon siendo atacado
// modifier el modificador del daño según el tipo del atacante y del atacado y devuelva el daño ocasionado. El daño se calcula con la siguiente fórmula:
// 0.5 * attack * (attack / defense) * modifier

const calculateDamage = ({ attack, defense, getAttackModifier, attacker, attacked }) => {
    const damage =  0.5 * attack * (attack / defense) * getAttackModifier({ attacker: attacker, attacked: attacked });

    return damage;    
    
}

const attack = (pokemon) => {
    const { moves } = pokemon;

    const index = Math.round(Math.random() * (moves.length - 1));
    const movement = moves[index];

    return movement;
}

const modifyHP = (pokemon, hp) => {
    pokemon = {
        ...pokemon,
        ability: {...pokemon.ability },
        stats: {...pokemon.stats,
                ...hp },
        moves: [...pokemon.moves],
        modifiers: {weakness: [...pokemon.modifiers.weakness],
        resistances: [...pokemon.modifiers.resistances]
        }
    }
    return pokemon
}

// battle()
// Crear un función battle que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
// Por ronda, cada pokémon ataca al contrario
// Comienza atacando el pokémon con más velocidad (speed)
// La batalla termina cuando la vida (hp, hit points, puntos de golpe) de un pokémon llega a 0 o menos
// El daño se obtiene con la función calculateDamage y se resta a la vida del pokémon atacado
// Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función getAttackLog
// El movimiento se elige de forma aleatoria en cada ataque
// El objeto que debe devolver como resultado debe seguir la siguiente estructura:
// {
//     rounds: 1,
//     results: {
//         winner: {
//             name: "Pikachu",
//             hp: 12 // vida restante
//         },
//         losser: {
//             name: "Squirtle",
//             hp: 0
//         }
//     },
//     history: [
//         "Squirtle used Water Gun! Pikachu lost 12 HP!", 
//         "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
//     ]
// }

const battle = (pokemon, enemyPokemon) => {
    let myPokemon = spreadPokemon(pokemon);
    let theEnemyPokemon = spreadPokemon(enemyPokemon);

    let {name, type, ability:{primary, hidden}, stats:{hp, attack, deffense, speed}, moves, modifiers:{weakness, resistances}} = myPokemon;
    let {name: enemyName, type: enemyType, ability:{ primary: enemyPrimary, hidden: enemyHidden}, stats: {hp: enemyHP, attack: enemyAttack, deffense: enemyDefense, speed: enemySpeed}, moves: enemyMoves, modifiers:{weakness: enemyWeaknesses, resistances: enemyResistances}} = theEnemyPokemon;
    

    if (speed > enemySpeed) {
        // const battleModifier = getAttackModifier( { attacker: myPokemon, attacked: theEnemyPokemon });
        let damage = calculateDamage({ attack: attack, defense: enemyDefense, getAttackModifier, attacker: myPokemon, attacked: theEnemyPokemon });
        enemyHP -= damage;
        theEnemyPokemon = modifyHP(theEnemyPokemon, { hp: enemyHP });

        damage = calculateDamage({ attack: enemyAttack, defense: defense, getAttackModifier, attacker: theEnemyPokemon, attacked: myPokemon });
        hp -= damage;
        myPokemon = modifyHP(myPokemon, {hp: hp});
        
    }
}


