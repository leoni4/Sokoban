
export class MainScene extends Phaser.Scene {
    private tileSet: Phaser.Tilemaps.Tileset;
    private tileMap: Phaser.Tilemaps.Tilemap;

    constructor() {
      super({
          key: "MainScene"
      });
    }

    preload(): void {
      this.load.atlas('assets', './assets/img/assets.png', './assets/img/assets.json');
      this.load.tilemapTiledJSON('level', './assets/tiles1.json');
    }

    create(): void {
      this.tileMap = this.make.tilemap({key:'level'});
      this.tileSet = this.tileMap.addTilesetImage('assets');
      this.tileMap.createStaticLayer('Tile Layer 1', this.tileSet, x, y);
    }
}
