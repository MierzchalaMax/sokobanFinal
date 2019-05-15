// export {Game};


class Game {
    constructor(map){
        this.nbCol=0;
        this.nbRow=0;
        this.game = document.querySelector('#game');
        for(let i=0;i<map.length;i++){
            let rowContainer = document.createElement("div");
            this.nbRow++;
            rowContainer.id = "row"+i;
            for(let j=0;j<map[i].length;j++){
                let tile = document.createElement("div");
                tile.id = "row"+i+"col"+j;
                this.nbCol++;
                switch(map[i][j]){
                    case "#": Game.become(tile,'wall'); break
                    case "@": Game.become(tile,'player'); break
                    case "+": Game.become(tile,'playerOnGoal'); break;
                    case "$": Game.become(tile,'box'); break;
                    case "*": Game.become(tile,'boxOnGoal'); break;
                    case "-": Game.become(tile,'floor'); break;
                    case ".": Game.become(tile,'goal'); break;
                }
                rowContainer.appendChild(tile);
            }
            this.game.appendChild(rowContainer);
        }
        this.nbCol = this.nbCol/this.nbRow;
        console.log('nbCol --> '+parseInt(this.nbCol));
        console.log('nbRow --> '+this.nbRow);
    }




        


    


    

    static become(tile, arg){
        switch(arg){
            case "wall":
                if (tile.classList.contains('player')){tile.classList.remove('player');}
                if (tile.classList.contains('playerOnGoal')){tile.classList.remove('playerOnGoal');}
                if (tile.classList.contains('box')){tile.classList.remove('box');}
                if (tile.classList.contains('boxOnGoal')){tile.classList.remove('boxOnGoal');}
                if (tile.classList.contains('floor')){tile.classList.remove('floor');}
                if (!tile.classList.contains('wall')){tile.classList.add('wall');}
            break;
            case "player":
                if (tile.classList.contains('wall')){tile.classList.remove('wall');}
                if (tile.classList.contains('playerOnGoal')){tile.classList.remove('playerOnGoal');}
                if (tile.classList.contains('box')){tile.classList.remove('box');}
                if (tile.classList.contains('boxOnGoal')){tile.classList.remove('boxOnGoal');}
                if (tile.classList.contains('floor')){tile.classList.remove('floor');}
                if (!tile.classList.contains('player')){tile.classList.add('player');}
            break;
            case "playerOnGoal":
                if (tile.classList.contains('wall')){tile.classList.remove('wall');}
                if (tile.classList.contains('player')){tile.classList.remove('player');}
                if (tile.classList.contains('box')){tile.classList.remove('box');}
                if (tile.classList.contains('boxOnGoal')){tile.classList.remove('boxOnGoal');}
                if (tile.classList.contains('floor')){tile.classList.remove('floor');}
                if (!tile.classList.contains('playerOnGoal')){tile.classList.add('playerOnGoal');}
            break;
            case "box":
                if (tile.classList.contains('wall')){tile.classList.remove('wall');}
                if (tile.classList.contains('player')){tile.classList.remove('player');}
                if (tile.classList.contains('playerOnGoal')){tile.classList.remove('playerOnGoal');}
                if (tile.classList.contains('boxOnGoal')){tile.classList.remove('boxOnGoal');}
                if (tile.classList.contains('floor')){tile.classList.remove('floor');}
                if (!tile.classList.contains('box')){tile.classList.add('box');}
            break;
            case "boxOnGoal":
                if (tile.classList.contains('wall')){tile.classList.remove('wall');}
                if (tile.classList.contains('player')){tile.classList.remove('player');}
                if (tile.classList.contains('playerOnGoal')){tile.classList.remove('playerOnGoal');}
                if (tile.classList.contains('box')){tile.classList.remove('box');}
                if (tile.classList.contains('floor')){tile.classList.remove('floor');}
                if (!tile.classList.contains('boxOnGoal')){tile.classList.add('boxOnGoal');}
            break;
            case "floor":
                if (tile.classList.contains('wall')){tile.classList.remove('wall');}
                if (tile.classList.contains('player')){tile.classList.remove('player');}
                if (tile.classList.contains('playerOnGoal')){tile.classList.remove('playerOnGoal');}
                if (tile.classList.contains('box')){tile.classList.remove('box');}
                if (tile.classList.contains('boxOnGoal')){tile.classList.remove('boxOnGoal');}
                if (!tile.classList.contains('floor')){tile.classList.add('floor');}
            break;
            case "goal":
                if (tile.classList.contains('wall')){tile.classList.remove('wall');}
                if (tile.classList.contains('player')){tile.classList.remove('player');}
                if (tile.classList.contains('playerOnGoal')){tile.classList.remove('playerOnGoal');}
                if (tile.classList.contains('box')){tile.classList.remove('box');}
                if (tile.classList.contains('boxOnGoal')){tile.classList.remove('boxOnGoal');}
                if (tile.classList.contains('floor')){tile.classList.remove('floor');}
                if (!tile.classList.contains('goal')){tile.classList.add('goal');}

        }
    }
    focusOn(posX,posY,dir){
        switch(dir){
            case "top": posY==0 ? false : posY--; break;
            case "bottom": posY==nbRow ? false : posY++; break;
            case "left": posX==0 ? false : posX--; break;
            case "right": posX==nbRow ? false : posX++; break;
        }
    }
}