/*efeito de zoom-in no emote do ziggs*/
function zoomSlow(){
    var imagem = document.getElementById("emote_ziggs");
    for (var i = 100; i <= 200; i++){
        setTimeout(function(){
            zoom(imagem);
        }, 100 * (i / 10))
    }
}
function zoom(image){
    var width = image.width + 1;
    image.style.width = width + 'px';
    image.style.height = 'auto';
}

zoomSlow();