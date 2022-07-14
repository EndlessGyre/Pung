const gameState = {};

class GameScene extends Phaser.Scene{
    constructor() {
        super({
          key: 'GameScene'
        });
    }

    preload(){
        //console.log('preload');
        this.load.image('playerPaddle', './img/pung-paddle.png');
        this.load.image('enemyPaddle', './img/pung-paddle.png');
        this.load.image('ball', './img/ball.png');

    }//end prelaod

    create(){
        //console.log('create');
        gameState.player = this.physics.add.sprite(64, 256, 'playerPaddle');
        gameState.enemy = this.physics.add.sprite((config.width - 64), 256, 'enemyPaddle');
        gameState.ball = this.physics.add.sprite(750, 128, 'ball');

        this.physics.world.setBounds(0, 0, config.width, config.height, false, true, true, true);

        gameState.player.setCollideWorldBounds(true);
        gameState.enemy.setCollideWorldBounds(true);
        gameState.ball.setCollideWorldBounds(true);
        this.physics.add.collider(gameState.player, gameState.ball);
        gameState.player.setImmovable(true);
        gameState.enemy.setImmovable(true);

        gameState.ball.body.setVelocity(200, 200);
        gameState.ball.body.bounce.setTo(1,1);

        gameState.cursors = this.input.keyboard.createCursorKeys();
    }//end create

    update(){
        console.log('update');
        if(gameState.cursors.up.isDown){
            gameState.player.setVelocityY(-150);
        }else if(gameState.cursors.down.isDown){
            gameState.player.setVelocityY(150);
        }else{
            gameState.player.setVelocityY(0);
        }
    }//end update






}