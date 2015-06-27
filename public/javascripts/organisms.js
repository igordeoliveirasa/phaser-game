/**
 * Created by igor on 6/27/15.
 */



var Organism = function(game, x, y, w, angle, color, brain, score) {
    this.createShape = function(game, x, y, w, color) {
        var player = createCircle(game, x, y, w, null, null, color);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        player.body.bounce.y=0.25;
        return player;
    }

    this.update = function(up, left, right) {
        if (up) {
            this.speed = 2;
        }

        if (left && !right) {
            this.angle += 5 + this.speed;
        }

        if (right && !left) {
            this.angle -= 5 + this.speed;
        }

        if (this.angle > 360) {
            this.angle -= 360;
        }
        if (this.angle < -360) {
            this.angle += 360;
        }

        var radians = Math.PI/180 * this.angle;
        this._organism.x += this.speed * Math.cos(radians);
        this._organism.y += this.speed * Math.sin(radians);
    }

    this._organism = this.createShape(game, x, y, w, color)
    this.angle = angle;
    this.speed = 0.0;
    this.score = score;
    this.brain = brain;
    this.target = null;
}
