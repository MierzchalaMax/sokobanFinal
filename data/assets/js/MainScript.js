let lvl = levelMaker(0);
let game = new Game(lvl);
setStyleProperty();





function setStyleProperty(){
    // Container
    let sokoban = document.querySelector('#sokoban');
    sokoban.style.height = "100%";
    sokoban.style.width = "100%";
    sokoban.style.display = "flex";
    // All tile
    document.body.querySelectorAll("div#sokoban>div>div").forEach(function(node){
        node.style.display = "block";
        node.style.height = "50px";
        node.style.width = "50px";
        node.style.border = "1px solid black";
    });
}



