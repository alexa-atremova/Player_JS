var txt = "Just choose your favorite sound and enjoy :)";
var headline = txt.split("");
var content = document.getElementById('headline');
(function anim() {
    headline.length > 0 ? content.innerHTML += headline.shift() : clearTimeout(running);
    var running = setTimeout(anim,50);
})();