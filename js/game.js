const config = {
    width: 1024,
    height: 512,
    type: Phaser.AUTO,    
    backgroundColor: '#333333',    
    parent: 'board',
    scene: [StartScene, GameScene],        
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: 0
        }
    } 
}

const game = new Phaser.Game(config);