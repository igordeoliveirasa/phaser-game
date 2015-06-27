/**
 * Created by igor on 6/27/15.
 */


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min );
}

function calculateDistance(x1, y1, x2, y2) {
    var xs = 0;
    var ys = 0;
    xs = Math.abs(x2 - x1);
    xs = xs * xs;
    ys = Math.abs(y2 - y1);
    ys = ys * ys;
    return Math.sqrt(xs + ys);
}