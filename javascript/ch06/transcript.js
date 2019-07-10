//Different ways to define functions - functions are objects
function speakSomething(what) {
    what = what || "Speaking"; 

    for (var i = 0; i < 10; i++) {
        console.log(what);
    }
}

var speakSomething = function(what) {
    what = what || "Speaking";

    for (var i = 0; i < 10; i++) {
        console.log(what);
    }
};

window.setTimeout(speakSomething, 5000);

var obj = {
    sayHello: function() {
        console.log("Hello");
    }
};

obj.sayHello();