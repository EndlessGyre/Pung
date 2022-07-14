class StartScene extends Phaser.Scene{
    constructor(){
        super({key: 'StartScene'});
    }

    preload(){

    }

    create(){
        // Make Shift, Space, Enter, and Arrow keys availablle
        gameState.cursors = this.input.keyboard.createCursorKeys();
        
        // Add start screen text and prompt
        this.add.text((config.width/2), (config.height/2), "PUNG: The Game of Champiungs\n\nHit Enter to Play\n\nor don't...I don't care", {align: 'center'}).setOrigin(0.5);
    }

    update(){
        this.input.on('pointerup', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        });
    }
    
    















}