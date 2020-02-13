window.addEventListener('resize', responsive);

function responsive() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    if (w > 0) {
        document.getElementById('responsive').innerHTML = 'Width: ' + w + ', Heigth: ' + h;
        w++;
        h++;
    }
}
responsive();