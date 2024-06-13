function sayHello(){
    console.log("Hello there");
    return;
}

function sayGoodbye()
{
console.log("bye bye");
}

function init(){
    console.log("hello world");
    sayHello();
    sayGoodbye();

}

window.onload = init;