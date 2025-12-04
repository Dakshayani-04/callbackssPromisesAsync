function fun1(callback){
    console.log("hello")
    callback()
};
function fun2(){
    console.log("123")
}
fun1(fun2)