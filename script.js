
function download() {
    document.location.href = "Dino.apk";
}

movePage = (i => {
    length = 6;

    return function(direction) {
        i -= direction;
        i = i < 0 ? length + i : i; 

        for (let j = 0; j < length; j++) 
            if (document.getElementById(`img-${j}`))
                document.getElementById(`img-${j}`).src = "screenshots/" + ((i + j) % length) + ".png";
    }
})(0);

setInterval(movePage, 5000, -1);