var buttons = document.querySelectorAll("button");

function calculate(params) {
    if( params.length === 0 ) return "";
    return eval( params );
}

for (const button of buttons) {

    if (button.innerHTML === "=") {
        button.addEventListener('click', function (e) {
            pantalla.innerHTML = calculate(pantalla.innerHTML);
        }, false);
    } else if (button.dataset.value === "AC") {
        button.addEventListener( 'click', function(e) {
            pantalla.innerHTML = "";
        }, false);
    } else if( button.dataset.value === "C" ) {
        button.addEventListener( 'click', function(e) {
            pantalla.innerHTML = pantalla.innerHTML.slice(0, -1);
        }, false);
    } else {
        button.addEventListener('click', function (e) {
            pantalla.innerHTML += button.dataset.value;
        }, false);
    }
}
