window.addEventListener('load', function () {
    var world = document.querySelector(body);
    var boxInteraction = document.querySelector('.box-interaction');
    var box = document.querySelector('.box-penguin');
    var background = document.querySelector('.background');
    var content = ` <a-scene id="canvas" class="fullscreen" color="black">
    <a-assets>
        <img id="penguin" src="img/penguin.jpg" alt="">
        <img id="sloth" src="img/sloth.jpg" alt="">
        <img id="starfish" src="img/starfish.jpg" alt="">
        <video  id="video" autoplay loop="true"  webkit-playsinline playsinline></video>
    </a-assets>  

    <a-videosphere class="background"  src="#video" position="0 1 0" rotation="0 -115 0"></a-videosphere>
    
    <a-box class="box-penguin" width="3" height="3" depth="0.1" position="0  2 -1" src="#penguin"></a-box> 

    <a-camera position="0 1 0">
        <a-cursor fuse="true" color="#ffffff"></a-cursor>
    </a-camera>
`;

    boxInteraction.addEventListener("click", function () {
        //background.setAttribute("src", "./video/Video2.mp4");
        world.innerHTML = content;
    });

    box.addEventListener("click", function () {
        background.setAttribute("src", "./video/Video2.mp4");
    });

});