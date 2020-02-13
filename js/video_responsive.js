//window.addEventListener('resize', chsrc);
var video = document.getElementById('video_home');
var source = document.getElementById('video_source');


function chsrc(event) {
    var winSize = window.innerWidth || document.body.clientWidth;
    if (winSize <= 768) {
        source.setAttribute('src', 'assets/video/playersdot_mobile.mp4');
        video.load();
    } else {
        source.setAttribute('src', 'assets/video/playersdot.mp4');
        video.load();
    }
}

chsrc();

