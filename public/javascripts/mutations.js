/**
 * Created by igor on 6/27/15.
 */

function mutate(brain) {
    var ret = createBrain();
    for (var i = 0; i < brain.sigmoidLayers.length; i++) {
        if (i !== brain.sigmoidLayers.length - 1) {
            for (var j = 0; j < brain.sigmoidLayers[i].W.length; j++) {
                for (var k = 0; k < brain.sigmoidLayers[i].W[j].length; k++) {
                    //console.log("antes: " + this.brain.sigmoidLayers[i].W[j][k]);
                    if (getRandomInt(0,1)==1) {
                        ret.sigmoidLayers[i].W[j][k] = getRandomInt(-100000000000000000, 100000000000000000) / 100000000000000000;
                    }
                    else {
                        ret.sigmoidLayers[i].W[j][k] = brain.sigmoidLayers[i].W[j][k];
                    }
                }
            }

            for (var j=0; j<brain.sigmoidLayers[i].b.length; j++) {
                if (getRandomInt(0,1)==1) {
                    brain.sigmoidLayers[i].b[j] = getRandomInt(-100000000000000000, 100000000000000000) / 100000000000000000;
                } else {
                    ret.sigmoidLayers[i].b[j] = brain.sigmoidLayers[i].b[j];
                }
            }
        } else {
            for (var j=0; j<brain.sigmoidLayers[i].W.length; j++) {
                for (var k=0; k<brain.sigmoidLayers[i].W[j].length; k++) {
                    if (getRandomInt(0,1)==1) {
                        brain.sigmoidLayers[i].W[j][k] = getRandomInt(-100000000000000000, 100000000000000000) / 100000000000000000;
                    } else {
                        ret.sigmoidLayers[i].W[j][k] = brain.sigmoidLayers[i].W[j][k];
                    }
                }
            }
            for (var j=0; j<brain.sigmoidLayers[i].b.length; j++) {
                if (getRandomInt(0,1)==1) {
                    brain.sigmoidLayers[i].b[j] = getRandomInt(-100000000000000000, 100000000000000000) / 100000000000000000;
                } else {
                    ret.sigmoidLayers[i].b[j] = brain.sigmoidLayers[i].b[j];
                }
            }
        }
    }
    return ret;
}
