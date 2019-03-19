let loc = 1;

function projects(dir) {
    let slideshow = document.getElementById("slideshow");
    let title = document.querySelector("h4");
    let click = document.getElementById("clickable");
    let source;
    loc += dir;
    if (loc < 1) {
        loc = 4;
    }else if (loc > 4) {
        loc = 1;
    }
    if (loc == 1) {
        source = "assets/images/fragments.png";
        title.innerHTML = "Fragments";
        click.href = "/fragments"
    }else if (loc == 2) {
        source = "assets/images/asteroids1.png";
        title.innerHTML = "Asteroids";
        click.href = "/asteroids"
    }else if (loc ==3) {
        source = "assets/images/maze1.png";
        title.innerHTML = "The Maze";
        click.href = "/maze"
    }else if (loc ==4) {
        source = "assets/images/as1.png";
        title.innerHTML = "Animal Stackers";
        click.href = "/animalstackers"
    }
    
    slideshow.src = source;
}
const moveSlide = (dir) => {
    let slideshow = document.getElementById("slideshow");
    let id = document.querySelector("body").id;
    loc += dir;
    if (loc < 1) {
        loc = 3;
    }else if (loc > 3) {
        loc = 1;
    }
    var source = "assets/images/" + id + loc + ".png";
    
    slideshow.src = source;
}