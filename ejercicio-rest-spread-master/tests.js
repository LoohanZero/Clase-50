describe ("getMoves()", () => {

    it("Devuelve un array", () => {

        expect(getMoves(getPikachu())).to.be.an('array');
    } )

    it("Devuelve un array con los movimientos del pokemon solicitado", () => {

        expect(getMoves(getBulbasaur())).to.deep.eql(["Growl", "Tackle", "Vine Whip", "Razor Leaf"]);
    })
})

describe ("getPrimaryAbility()", () => {

    it("Devuelve un string", () => {

        expect(getPrimaryAbility(getPikachu())).to.be.a('string');
    } )

    it("Devuelve con la habilidad del pokemon solicitado", () => {

        expect(getPrimaryAbility(getBulbasaur())).to.equal("Overgrow");
    })
})

describe ("getWeaknesses()", () => {

    it("Devuelve un array", () => {

        expect(getWeaknesses(getPikachu())).to.be.an('array');
    } )

    it("Devuelve un array con las debilidades del pokemon solicitado", () => {

        expect(getWeaknesses(getSquirtle())).to.deep.eql(["electric", "grass"]);
    })
})


describe ("getResistances()", () => {

    it("Devuelve un array", () => {

        expect(getResistances(getPikachu())).to.be.an('array');
    } )

    it("Devuelve un array con los tipos de pokemon a los que el pokemon solicitado es resistente", () => {

        expect(getResistances(getSquirtle())).to.deep.eql(["water", "fire", "ice", "steel"]);
    })
})


describe ("resistsType()", () => {

    it("Devuelve true si el pokemon ingresado es resistente al tipo ingresado", () => {

        expect(resistsType(getPikachu(), "electric")).to.be.true;
    } )

    it("Devuelve false si el pokemon ingresado es resistente al tipo ingresado", () => {

        expect(resistsType(getSquirtle(), "electric")).to.be.false;
    })
})

describe ("resistsMove()", () => {

    it("Devuelve true si el pokemon es resistente al ataque ingresado", () => {
        const movement = { name: "Rain dance", type: "water" };

        expect(resistsMove(getPikachu(), movement)).to.be.true;
    } )

    it("Devuelve false si el pokemon no es resistente al ataque ingresado", () => {
        const movement = { name: "Rain dance", type: "water" };

        expect(resistsMove(getCharmander(), movement)).to.be.false;
    })

    it("Devuelve true si el pokemon es resistente al ataque ingresado", () => {
        const movement = { name: "Quick Attack", type: "water" };

        expect(resistsMove(getPikachu(), movement)).to.be.true;
    })
})

describe ("isWeakAgainst()", () => {

    it("Devuelve true si el pokemon atacado es débil al tipo del pokemon que lo ataca", () => {

        const battle = { attacker: getPikachu(), attacked: getSquirtle() };
      

        expect(isWeakAgainst(battle)).to.be.true;
    } )

    it("Devuelve false si el pokemon atacado es resistente al tipo del pokemon que lo ataca", () => {
        const battle = { attacker: getPikachu(), attacked: getPikachu() };
        

        expect(isWeakAgainst(battle)).to.be.false;
    })
})


describe ("isStrongAgainst()", () => {

    it("Devuelve true si el pokemon atacado es resistente al tipo del pokemon que lo ataca", () => {
        const battle = { attacker: getSquirtle(), attacked: getCharmander() };
      

        expect(isStrongAgainst(battle)).to.be.false;
    } )

    it("Devuelve false si el pokemon atacado es débil al tipo del pokemon que lo ataca", () => {
        const battle = { attacker: getPikachu(), attacked: getSquirtle() };
        

        expect(isStrongAgainst(battle)).to.be.false;
    })
})

describe ("addAbility()", () => {

    it("devuelve un objeto", () => {
        const ability = { secondary: "Discharge" };
 
        expect(addAbility(getPikachu(), ability)).to.be.an('object');
    } )

    it("Devuelve la nueva habilidad agregada la anterior", () => {
    const ability = { secondary: "Discharge" };

    // const{name, type, ability:{primary, hidden, secondary}, stats:{hp, attack, deffense, speed}, moves, modifiers:{weakness, resistances}} = modifiedPikachu;
    
    expect(addAbility(getPikachu(), ability).to.deep.include({ability: {secondary: "Discharge"}}));
    })
})

describe ("addMove()", () => {

    it("devuelve un objeto", () => {
        const move = "Tail Whip";
        expect(addMove(getPikachu(), move)).to.be.an('object');
    } )

    // it("Devuelve el nuevo movimiento agregado a los anteriores", () => {
    //     const move = "Tail Whip";



    // expect(addAbility(getPikachu(), move).to.deep.eql());
    // })
})


describe ("removeMove()", () => {

    it("devuelve un objeto", () => {
        const move = "Tail Whip";

        expect(removeMove(getPikachu(), move)).to.be.an('object');
    } )

    it("Devuelve el nuevo movimiento agregado a los anteriores", () => {
        const move = "Tail Whip";
        const pikachu = getPikachu();
        const spreadPikachu = {
            ...pikachu,
            ability: {...pikachu.ability},
            stats: {...pikachu.stats},
            moves: [...pikachu.moves],
            modifiers: {weakness: [...pikachu.modifiers.weakness],
            resistances: [...pokemon.modifiers.resistances]
            }
        }

    expect(addAbility(getPikachu(), move).to.deep.eql());
    })
})


describe ("getAttackModifier()", () => {

    it("devuelve 1 si el pokemon atacado no es ni resistente ni débil al pokemon que lo ataca", () => {
        const battle = { attacker: getPikachu(), attacked: getCharmander() };
      
        
        expect(getAttackModifier(battle)).to.equal(1);
    } )

    it("devuelve 0.5 si el pokemon atacado es resistente al pokemon que lo ataca", () => {
        const battle = { attacker: getBulbasaur(), attacked: getCharmander() };
        
        expect(getAttackModifier(battle)).to.equal(0.5);
    } )

    it("devuelve 2 si el pokemon atacado es débil al pokemon que lo ataca", () => {
        const battle = { attacker: getSquirtle(), attacked: getCharmander() };
        
        expect(getAttackModifier(battle)).to.equal(2);
    } )
})

describe ("getAttackLog()", () => {

    it("devuelve un string", () => {
       const move = {
        attacker: "Squirtle",
        attacked: "Pikachu",
        move: "Water Gun",
        damage: 12,
        modifier: "weak" // otros valores: "resistant", "normal"
    }
      
        
        expect(getAttackLog(move)).to.be.a('string');
    } )

    it("devuelve un string diciendo Squirtle used Water Gun! Pikachu lost 12 HP! It's not very effective!", () => {
        const move = {
            attacker: "Squirtle",
            attacked: "Pikachu",
            move: "Water Gun",
            damage: 12,
            modifier: "weak" // otros valores: "resistant", "normal"
        }
          
        
        expect(getAttackLog(move)).to.equal("Squirtle used Water Gun! Pikachu lost 12 HP! It's not very effective!");
    } )

})

describe ("calculateDamage()", () => {

    it("devuelve NaN si no le paso todos números", () => {
        const battle = { attack: 49, defense: 43, modifier: "resistant" }; 
        
        expect(calculateDamage(battle)).to.be.NaN;
    } )

    it("Le paso el valor correspondiente a dos pokemones y devuelve el valor del daño realizado", () => {
        const battle = { attack: 49, defense: 43, modifier: 0.5 }; 
          
        
        expect(calculateDamage(battle)).to.be.within(13, 14);
    } )

})