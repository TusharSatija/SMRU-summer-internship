let newgame={
    title:"cricket",
    players:11
}

let game={
    fulldetal:function(greet)
{
    console.log(`${greet}  ${this.title} and ${this.players}`);
}
}

// game.fulldetal.call(newgame);

let r=game.fulldetal.bind(newgame,"hello");
r();
game.fulldetal.apply(newgame,["welcome"]);
 

// function details()
// {
//     console.log(`${this.title} and ${this.players}`);
// }

// details();