function red(){
    console.log('red')
}
function green(){
    console.log('green')
}
function yellow(){
    console.log('yellow')
}

var tic = function(timer,cb){
    return new Promise(function(resolve){
        setTimeout(function(){
            cb();
            resolve();
        },timer)
    })
}
var d = new Promise(function(resolve,reject){
    resolve();
})
var step = function(def){
    def.then(function(){
        return tic(3000,red);
    }).then(function(){
        return tic(2000,green);
    }).then(function(){
        return tic(1000,yellow);
    }).then(function(){
        step(def);
    }).catch(e => console.error(e))
}
step(d);