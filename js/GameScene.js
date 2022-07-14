const gameState = {};

class GameScene extends Phaser.Scene{
    constructor() {
        super({
          key: 'GameScene'
        });
    }

    preload(){
        // Loading in the game's three assets;
        this.load.image('playerPaddle', './img/pung-paddle.png');
        this.load.image('enemyPaddle', './img/pung-paddle2.png');
        this.load.image('ball', './img/ball.png');

    }// End prelaod (VSC has seriously weird italicized small ls);

    create(){
        // Create the three main sprites;
        gameState.player = this.physics.add.sprite(64, 256, 'playerPaddle');
        gameState.enemy = this.physics.add.sprite((config.width - 64), 256, 'enemyPaddle');
        gameState.ball = this.physics.add.sprite(750, 128, 'ball');

        // World is bounded on all sides except behind my paddle;
        this.physics.world.setBounds(0, 0, config.width, config.height, false, true, true, true);

        // Everything collides with the collide-able borders;
        gameState.player.setCollideWorldBounds(true);
        gameState.enemy.setCollideWorldBounds(true);
        gameState.ball.setCollideWorldBounds(true);

        // The ball collides with both paddles;
        this.physics.add.collider(gameState.player, gameState.ball);
        this.physics.add.collider(gameState.enemy, gameState.ball, () => {gameState.enemy.setVelocityY(0);});

        // The paddles are unmoved by the ball;
        gameState.player.setImmovable(true);
        gameState.enemy.setImmovable(true);

        // Sets ball initial movement and bounce factor;
        gameState.ball.body.setVelocity(200, 200);
        gameState.ball.body.bounce.setTo(1,1);

        // Makes Shift, Space, Enter, and Arrow keys availablle;
        gameState.cursors = this.input.keyboard.createCursorKeys();
    }//end create

    update(){
        //console.log('update');

        // Conditionals to handle player paddle movement;
        if(gameState.cursors.up.isDown){
            gameState.player.setVelocityY(-150);
        }else if(gameState.cursors.down.isDown){
            gameState.player.setVelocityY(150);
        }else{
            gameState.player.setVelocityY(0);
        }


        // Opponent tracks ball while it moves toward it
        if(gameState.ball.body.velocity.x > 0){
            if(gameState.ball.y > (gameState.enemy.y + 64)){
                gameState.enemy.setVelocityY(100);
            }else if(gameState.ball.y < (gameState.enemy.y - 64)){
                gameState.enemy.setVelocityY(-100);
            }else{
                gameState.enemy.setVelocityY(0);
            }
        
        if(gameState.ball.body.velocity.x < 0){            
            gameState.enemy.setVelocityY(0);            
        }

        

        }

        // Opponent paddle recenters when ball is moving away
        // if(gameState.ball.body.velocity.x < 0){
        //     gameState.enemy.setVelocityY(-50);
        // }else{
        //     gameState.enemy.setVelocityY(0);
        // }

    }//end update






}
