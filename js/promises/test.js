function getData(milliseconds, callback){
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
    } 
    callback(milliseconds);
}
function ejecutar(){
    getData(5000, function(data){
        console.log(data);
    });
    console.log("hola");
}
