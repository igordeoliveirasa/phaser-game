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

    this.update = function(left, right) {

        if (this.energy <= 0) {
            left = 0;
            right = 0;
            this.speed = 0;
            return;
        }
        var max_speed = 1.5;
        var left_speed = max_speed * left;
        var right_speed = max_speed * right;
        this.speed = max_speed * ((left_speed + right_speed)/2.0);



        //this.angle += ((this.angle * left) + (this.angle * right)) / 2;


        //var up = true;//left || right;

        //if (up) {
        //    this.speed = 2;
        //}
        //else {
        //    this.speed = 0;
        //}

        //this.speed = (left + right) * 1.5;//left * right;


        //this.angle = ((this.angle * left_speed) / max_speed) + ((this.angle * right_speed) / max_speed) / 2;

        this.angle += 90 * left;
        this.angle -= 90 * right;

        if (this.angle > 360) {
            this.angle -= 360;
        }
        if (this.angle < -360) {
            this.angle += 360;
        }

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
    this.energy = 1000;
}
