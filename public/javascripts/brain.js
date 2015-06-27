/**
 * Created by igor on 6/27/15.
 */

function createBrain() {
    var ret = new ml.MLP({
        'input' : [
            [0.0, 0.0, 0.0, 110.0, 110.0],
            //[100.0, 100.0, 0.0, 0.5, 110.0, 110.0],
            //[110.0, 110.0, 0.0, 0.5, 100.0, 100.0],
        ],
        'label' : [
            [0.0, 0.0, 0.0],
            [0.0, 0.0, 0.0],
        ],
        'n_ins' : 5,//x, y, angle, speed, x, y,
        'n_outs' : 3,
        'hidden_layer_sizes' : [3] // it coud be something like: [3,3,3] or [3,4,5] or anything
    });
    return ret;
}

function fillBrainRandomically(brain) {
    for (var i = 0; i < brain.sigmoidLayers.length; i++) {
        if (i !== brain.sigmoidLayers.length - 1) {
            for (var j=0; j<brain.sigmoidLayers[i].W.length; j++) {
                for (var k=0; k<brain.sigmoidLayers[i].W[j].length; k++) {
                    //console.log("antes: " + this.brain.sigmoidLayers[i].W[j][k]);
                    brain.sigmoidLayers[i].W[j][k] = getRandomInt(-100000000000000000, 100000000000000000) / 100000000000000000.0;
                    //console.log("depois: " + this.brain.sigmoidLayers[i].W[j][k]);
                }
            }
            for (var j=0; j<brain.sigmoidLayers[i].b.length; j++) {
                brain.sigmoidLayers[i].b[j] = getRandomInt(-100000000000000000, 100000000000000000) / 100000000000000000.0;
            }
            //console.log((i+1)+"th hidden layer b : ", brainA.sigmoidLayers[i].b);
            //console.log((i + 1) + "th hidden layer W : ", this.brain.sigmoidLayers[i].W);
            //console.log((i + 1) + "th hidden layer b : ", this.brain.sigmoidLayers[i].b);
        } else {
            //console.log("output layer W : " + this.brain.sigmoidLayers[i].W);
            //console.log("output layer b : " + this.brain.sigmoidLayers[i].b);
        }
    }
}