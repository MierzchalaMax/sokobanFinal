window.addEventListener("keydown", eventManager);
function eventManager() {
    if (event.type == "keydown") {
        switch(event.key) {
            case 'ArrowUp':
                link.moveTop();
            break;
            case 'ArrowRight':
                link.moveRight();
            break;
            case 'ArrowLeft':
                link.moveLeft();
            break;
            case 'ArrowDown':
                link.moveBottom();
            break;
        }
    }
}