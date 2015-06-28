/**
 * Created by igor on 6/27/15.
 */

function crossover(brainA, brainB) {
    var ret = createBrain();

    for (var i = 0; i < brainA.sigmoidLayers.length; i++) {
        if (i !== brainA.sigmoidLayers.length - 1) {
            for (var j = 0; j < brainA.sigmoidLayers[i].W.length; j++) {
                for (var k = 0; k < brainA.sigmoidLayers[i].W[j].length; k++) {
                    //console.log("antes: " + this.brain.sigmoidLayers[i].W[j][k]);
                    var weight = 0;
                    if ((k+1) <= Math.abs(brainA.sigmoidLayers[i].W[j].length/2)) {
                        weight = brainA.sigmoidLayers[i].W[j][k];
                    }
                    else {
                        weight = brainB.sigmoidLayers[i].W[j][k];
                    }
                    ret.sigmoidLayers[i].W[j][k] = weight;
                }
            }

            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                var bias = 0;
                if ((j+1) <= Math.abs(brainA.sigmoidLayers[i].b.length/2)) {
                    bias = brainA.sigmoidLayers[i].b[j];
                }
                else {
                    bias = brainB.sigmoidLayers[i].b[j];
                }
                ret.sigmoidLayers[i].b[j] = bias;
            }
        } else {

            //console.log("output layer W before: " + brainA.sigmoidLayers[i].W);
            for (var j=0; j<brainA.sigmoidLayers[i].W.length; j++) {
                for (var k=0; k<brainA.sigmoidLayers[i].W[j].length; k++) {
                    var w = 0;
                    if ((k+1) <= brainA.sigmoidLayers[i].W[j].length/2)
                    {
                        w = brainA.sigmoidLayers[i].W[j][k];
                    }
                    else
                    {
                        w = brainB.sigmoidLayers[i].W[j][k];
                    }
                    ret.sigmoidLayers[i].W[j][k] = w;
                }
            }
            //console.log("output layer W after: " + ret.sigmoidLayers[i].W);
            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                var b = 0;
                if ((j+1) <= brainA.sigmoidLayers[i].b.length/2) {
                    b = brainA.sigmoidLayers[i].b[j];
                } else {
                    b = brainB.sigmoidLayers[i].b[j];
                }
                ret.sigmoidLayers[i].b[j] = b;
            }

            //console.log("output layer W : " + this.brain.sigmoidLayers[i].W);
            //console.log("output layer b : " + this.brain.sigmoidLayers[i].b);
        }
    }

    return ret;
}

function crossoverMod(brainA, brainB) {
    var ret = createBrain();

    for (var i = 0; i < brainA.sigmoidLayers.length; i++) {
        if (i !== brainA.sigmoidLayers.length - 1) {
            for (var j = 0; j < brainA.sigmoidLayers[i].W.length; j++) {
                for (var k = 0; k < brainA.sigmoidLayers[i].W[j].length; k++) {

                    var weight = 0;
                    if ((k+1)%2==0) {
                        weight = brainA.sigmoidLayers[i].W[j][k];
                    }
                    else {
                        weight = brainB.sigmoidLayers[i].W[j][k];
                    }
                    //console.log("antes: " + this.brain.sigmoidLayers[i].W[j][k]);
                    ret.sigmoidLayers[i].W[j][k] = weight;
                    //console.log("depois: " + this.brain.sigmoidLayers[i].W[j][k]);
                }
            }

            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                var bias = 0;
                if ((j+1) % 2 == 0) {
                    bias = brainA.sigmoidLayers[i].b[j];
                }
                else {
                    bias = brainB.sigmoidLayers[i].b[j];
                }
                ret.sigmoidLayers[i].b[j] = bias;
            }

            //console.log((i+1)+"th hidden layer b : ", brainA.sigmoidLayers[i].b);
            //console.log((i + 1) + "th hidden layer W : ", this.brain.sigmoidLayers[i].W);
            //console.log((i + 1) + "th hidden layer b : ", this.brain.sigmoidLayers[i].b);
        } else {
            for (var j=0; j<brainA.sigmoidLayers[i].W.length; j++) {
                for (var k = 0; k < brainA.sigmoidLayers[i].W[j].length; k++) {
                    var w = 0;
                    if ((k+1) % 2 == 0) {
                        w = brainA.sigmoidLayers[i].W[j][k];
                    }
                    else {
                        w = brainB.sigmoidLayers[i].W[j][k];
                    }
                    ret.sigmoidLayers[i].W[j][k] = w;
                }
            }
            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                var b = 0;
                if ((j+1) % 2 == 0) {
                    b = brainA.sigmoidLayers[i].b[j];
                }
                else {
                    b = brainB.sigmoidLayers[i].b[j];
                }
                ret.sigmoidLayers[i].b[j] = b;
            }
            //console.log("output layer W : " + this.brain.sigmoidLayers[i].W);
            //console.log("output layer b : " + this.brain.sigmoidLayers[i].b);
        }
    }

    return ret;
}


function crossoverBlock(brainA, brainB) {
    var ret = createBrain();

    for (var i = 0; i < brainA.sigmoidLayers.length; i++) {
        if (i !== brainA.sigmoidLayers.length - 1) {
            for (var j = 0; j < brainA.sigmoidLayers[i].W.length; j++) {
                for (var k = 0; k < brainA.sigmoidLayers[i].W[j].length; k++) {
                    var to = getRandomInt(0,brainA.sigmoidLayers[i].W[j].length-1);
                    var weight = 0;
                    if (k<=to) {
                        weight = brainA.sigmoidLayers[i].W[j][k];
                    }
                    else {
                        weight = brainB.sigmoidLayers[i].W[j][k];
                    }
                    ret.sigmoidLayers[i].W[j][k] = weight;
                }
            }

            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                var to = getRandomInt(0,brainA.sigmoidLayers[i].b.length-1);
                var bias = 0;
                if (j<=to) {
                    bias = brainA.sigmoidLayers[i].b[j];
                }
                else {
                    bias = brainB.sigmoidLayers[i].b[j];
                }
                ret.sigmoidLayers[i].b[j] = bias;
            }
        } else {
            for (var j=0; j<brainA.sigmoidLayers[i].W.length; j++) {
                for (var k = 0; k < brainA.sigmoidLayers[i].W[j].length; k++) {
                    var to = getRandomInt(0,brainA.sigmoidLayers[i].W[j].length-1);
                    var w = 0;
                    if (k<=to) {
                        w = brainA.sigmoidLayers[i].W[j][k];
                    }
                    else {
                        w = brainB.sigmoidLayers[i].W[j][k];
                    }
                    ret.sigmoidLayers[i].W[j][k] = w;
                }
            }
            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                var to = getRandomInt(0,brainA.sigmoidLayers[i].b.length-1);
                var b = 0;
                if (j<=to) {
                    b = brainA.sigmoidLayers[i].b[j];
                }
                else {
                    b = brainB.sigmoidLayers[i].b[j];
                }
                ret.sigmoidLayers[i].b[j] = b;
            }
        }
    }

    return ret;
}


function crossoverAvg(brainA, brainB) {
    var ret = createBrain();

    for (var i = 0; i < brainA.sigmoidLayers.length; i++) {
        if (i !== brainA.sigmoidLayers.length - 1) {
            for (var j = 0; j < brainA.sigmoidLayers[i].W.length; j++) {
                for (var k = 0; k < brainA.sigmoidLayers[i].W[j].length; k++) {
                    //console.log("antes: " + this.brain.sigmoidLayers[i].W[j][k]);
                    ret.sigmoidLayers[i].W[j][k] = (brainA.sigmoidLayers[i].W[j][k] + brainB.sigmoidLayers[i].W[j][k])/2;
                    //console.log("depois: " + this.brain.sigmoidLayers[i].W[j][k]);
                }
            }

            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                ret.sigmoidLayers[i].b[j] = (brainA.sigmoidLayers[i].b[j] + brainB.sigmoidLayers[i].b[j])/2;
            }

            //console.log((i+1)+"th hidden layer b : ", brainA.sigmoidLayers[i].b);
            //console.log((i + 1) + "th hidden layer W : ", this.brain.sigmoidLayers[i].W);
            //console.log((i + 1) + "th hidden layer b : ", this.brain.sigmoidLayers[i].b);
        } else {
            //console.log("output layer W before: " + brainA.sigmoidLayers[i].W);
            for (var j=0; j<brainA.sigmoidLayers[i].W.length; j++) {
                for (var k=0; k<brainA.sigmoidLayers[i].W[j].length; k++) {
                    //console.log("output layer W A: " + brainA.sigmoidLayers[i].W[j][k] + " B: " + brainB.sigmoidLayers[i].W[j][k]);
                    ret.sigmoidLayers[i].W[j][k] = (brainA.sigmoidLayers[i].W[j][k]+brainB.sigmoidLayers[i].W[j][k])/2;
                }
            }
            //console.log("output layer W after: " + ret.sigmoidLayers[i].W);
            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                ret.sigmoidLayers[i].b[j] = (brainA.sigmoidLayers[i].b[j]+brainB.sigmoidLayers[i].b[j])/2;
            }

            //console.log("output layer b : " + this.brain.sigmoidLayers[i].b);
        }
    }

    return ret;
}

function crossoverSame(brainA) {
    var ret = createBrain();

    for (var i = 0; i < brainA.sigmoidLayers.length; i++) {
        if (i !== brainA.sigmoidLayers.length - 1) {
            for (var j = 0; j < brainA.sigmoidLayers[i].W.length; j++) {
                for (var k = 0; k < brainA.sigmoidLayers[i].W[j].length; k++) {
                    //console.log("antes: " + this.brain.sigmoidLayers[i].W[j][k]);
                    ret.sigmoidLayers[i].W[j][k] = brainA.sigmoidLayers[i].W[j][k];
                    //console.log("depois: " + this.brain.sigmoidLayers[i].W[j][k]);
                }
            }

            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                ret.sigmoidLayers[i].b[j] = brainA.sigmoidLayers[i].b[j];
            }
        } else {
            //console.log("output layer W before: " + brainA.sigmoidLayers[i].W);
            for (var j=0; j<brainA.sigmoidLayers[i].W.length; j++) {
                for (var k=0; k<brainA.sigmoidLayers[i].W[j].length; k++) {
                    //console.log("output layer W A: " + brainA.sigmoidLayers[i].W[j][k] + " B: " + brainB.sigmoidLayers[i].W[j][k]);
                    ret.sigmoidLayers[i].W[j][k] = brainA.sigmoidLayers[i].W[j][k];
                }
            }
            //console.log("output layer W after: " + ret.sigmoidLayers[i].W);
            for (var j=0; j<brainA.sigmoidLayers[i].b.length; j++) {
                ret.sigmoidLayers[i].b[j] = brainA.sigmoidLayers[i].b[j];
            }

            //console.log("output layer b : " + this.brain.sigmoidLayers[i].b);
        }
    }

    return ret;
}