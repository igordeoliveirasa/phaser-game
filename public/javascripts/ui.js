/**
 * Created by igor on 6/27/15.
 */
COLOR = {
    BLACK : "#000000",
    WHITE: "#ffffff",
    BLUE: "#0000ff",
    RED: "#ff0000"
};


function createCircle(game, x, y, w, lineWidthInString, strokeStyle, fillStyle) {
    // Create BitmapData
    var bmd = game.add.bitmapData(w, w)

    // Draw circle
    bmd.ctx.beginPath();

    if (strokeStyle) {
        bmd.ctx.strokeStyle = strokeStyle;
        bmd.ctx.stroke();
    }

    if (lineWidthInString) {
        bmd.ctx.lineWidth = lineWidthInString;
    }

    bmd.ctx.arc(w / 2, w / 2, w / 2, 0, Math.PI * 2, true);
    if (fillStyle) {
        bmd.ctx.fillStyle = fillStyle;
        bmd.ctx.fill();
    }

    bmd.ctx.closePath();

    var sprite = game.add.sprite(x, y, bmd);
    return sprite;
};

function outstandCircle(game, x, y, w) {
    var sprite = createCircle(game, x, y, w, null, null, 'rgba(255,0,0,0.5)');
    return sprite;
}
