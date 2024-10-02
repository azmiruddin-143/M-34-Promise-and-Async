// node event.js //
function a() {
    console.log("a");
    b()
    console.log("ab");
    // a b c cc bb ab/
}
function b() {
    console.log("b");
    c()
    console.log("bb");
    
}
function c() {
    console.log("c");
    console.log("cc");
}
a()