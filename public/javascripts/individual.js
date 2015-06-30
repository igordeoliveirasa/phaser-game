/**
 * Created by igor on 6/27/15.
 */



var Individual = function(game, id, x, y, w, angle, color, brain, score) {
    this.createShape = function(game, x, y, w, color) {
        var player = createCircle(game, x, y, w, null, null, color);
        game.physics.arcade.enable(player);
        //player.body.collideWorldBounds = true;
        player.body.bounce.y=0.25;
        return player;
    };

    this.update = function(up, angle) {

        if (this.energy <= 0) {
            left = 0;
            right = 0;
            this.speed = 0;
            return;
        }

        var max_speed = 2.0;
        var acceleration = 0.2;
        var angleRotation = 5;

        this.speed = max_speed * up;
        this.angle = 360 * angle;

        //if (up) {
        //    this.speed += acceleration;
        //} else {
        //    this.speed -= acceleration;
        //}
        //
        //if (this.speed < 0) {
        //    this.speed = 0;
        //} else if (this.speed > max_speed) {
        //    this.speed = max_speed;
        //}
        //
        //if (left) {
        //    this.angle +=  angleRotation;
        //}
        //
        //if (right) {
        //    this.angle -= angleRotation;
        //}
        //
        //if (this.angle > 360) {
        //    this.angle -= 360;
        //}
        //if (this.angle < -360) {
        //    this.angle += 360;
        //}

        var radians = Math.PI/180 * this.angle;
        this.shape.x += this.speed * Math.cos(radians);
        this.shape.y += this.speed * Math.sin(radians);
    };

    this.id = id;
    this.shape = this.createShape(game, x, y, w, color)
    this.angle = angle;
    this.speed = 0.0;
    this.score = score;
    this.brain = brain;
    this.target = null;
    this.energy = 100;
}
