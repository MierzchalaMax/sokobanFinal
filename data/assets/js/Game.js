// ########################################
// ########## CLASS GAME ##########
// ########################################
class Game {
    constructor(map){ 
        this.nbCol=0;
        this.nbRow=0;
        this.sokoban = document.querySelector('#sokoban');
        // init game board
        for(let i=0;i<map.length;i++){
            let rowContainer = document.createElement("div");
            this.nbRow++;
            rowContainer.id = "row"+i;
            for(let j=0;j<map[i].length;j++){
                let tile = document.createElement("div");
                tile.id = "row"+i+"col"+j;
                this.nbCol++;
                // apply style & init player
                switch(map[i][j]){
                    case "#": Game.become(tile,'wall'); break
                    case "@": 
                        Game.become(tile,'floor');
                        this.player = new Game.Player(i,j);
                    break
                    case "+": 
                        Game.become(tile,'goal');
                        this.player = new Game.Player(i,j);
                    break;
                    case "$": Game.become(tile,'box'); break;
                    case "*": Game.become(tile,'boxOnGoal'); break;
                    case "-": Game.become(tile,'floor'); break;
                    case ".": Game.become(tile,'goal'); break;
                }
                rowContainer.appendChild(tile);
            }
            this.sokoban.appendChild(rowContainer);
        }
        this.nbCol = this.nbCol/this.nbRow;
    }
    // ########################################
    // ########## NESTED STATIC CLASS ##########
    // ########################################

    // Parent [static allocation] class 
    static Player = class {
        constructor(posX,posY){ 
            this.posX = posX;
            this.posY = posY;
            this.token = document.createElement("img");
            this.token.id = "player";
            this.token.style.height = "100%";
            this.token.style.width = "auto";
            this.token.src = "assets/img/player/normal/player_01.png";
            Game.toTile(posX,posY).appendChild(this.token);
        }
        move(){

        }
    }

    static Box = class {
        constructor(posX,posY){
            this.posX = posX;
            this.posY = posY;
            this.cratePath = "assets/img/crate/Crate_Brown.png";
            this.crateDarkPath = "assets/img/crate/CrateDark_Brown.png";
            this.token.className = "box";
            this.token.style.height = "80%";
            this.token.style.width = "auto";
            this.token.src = this.cratePath;
            Game.toTile(posX,posY).appendChild(this.token);
        }
        move(){

        }
    }
    // ########################################
    // ########## STATIC METHOD ##########
    // ########################################
    static toTile(posX, posY) {
        return document.querySelector('#row'+posY+'col'+posX);
    }
    
    static become(tile, arg){
        switch(arg){
            case "wall":
                tile.style.backgroundImage = "url(assets/img/wall/Wall_Gray.png)";
                tile.style.backgroundSize = "cover";
            break;
            case "box":
                tile.style.backgroundImage = "url(assets/img/crate/Crate_Blue.png, url(assets/img/ground/GroundGravel_Sand.png)";
                tile.style.backgroundSize = "80% auto";
                tile.style.backgroundRepeat = "no-repeat";
                tile.style.backgroundPosition = "center";

            break;
            case "boxOnGoal":
                tile.style.backgroundImage = "url(assets/img/crate/CrateDark_Blue.png)";
                tile.style.backgroundSize = "cover";
            break;
            case "floor":
                tile.style.backgroundImage = "url(assets/img/ground/GroundGravel_Sand.png)";
                tile.style.backgroundSize = "cover";
            break;
            case "goal":
                tile.style.backgroundImage = "url(assets/img/environment/environment_03.png), url(assets/img/ground/GroundGravel_Sand.png)";
                tile.style.backgroundSize = "cover";
            break;
        }
    }


    
    static focusOn(posX,posY,dir){
        switch(dir){
            case "top": posY==0 ? false : posY--; break;
            case "bottom": posY==nbRow ? false : posY++; break;
            case "left": posX==0 ? false : posX--; break;
            case "right": posX==nbRow ? false : posX++; break;
        }
        // return ret = 
    }
}