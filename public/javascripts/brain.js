/**
 * Created by igor on 6/27/15.
 */

function createBrain() {
    var ret = new ml.MLP({
        'input' : [
            [0.0, 0.0, 0.0, 110.0, 110.0]

        ],
        'label' : [
            [0.0, 0.0]
        ],
        'n_ins' : 5,
        'n_outs' : 2,
        'hidden_layer_sizes' : [3, 5] // it coud be something like: [3,3,3] or [3,4,5] or anything
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
                //brain.sigmoidLayers[i].b[j] = getRandomInt(-100000000000000000, 100000000000000000) / 100000000000000000.0;
                brain.sigmoidLayers[i].b[j] = 0;//getRandomInt(0,1);
            }
        } else {
            for (var j=0; j<brain.sigmoidLayers[i].W.length; j++) {
                for (var k=0; k<brain.sigmoidLayers[i].W[j].length; k++) {
                    brain.sigmoidLayers[i].W[j][k] = getRandomInt(-100000000000000000, 100000000000000000) / 100000000000000000.0;
                }
            }
            for (var j=0; j<brain.sigmoidLayers[i].b.length; j++) {
                //brain.sigmoidLayers[i].b[j] = getRandomInt(-100000000000000000, 100000000000000000) / 100000000000000000.0;
                brain.sigmoidLayers[i].b[j] = 0;//getRandomInt(0,1);

            }
        }
    }
}