//var animated = document.querySelectorAll('.animated');
//observer = new IntersectionObserver(entries => {
//    entries.forEach(entry => {
//        var animation = entry.target.getAttribute('data-animation');
//        if (entry.intersectionRatio > 0) {
//            console.log('visible');
//            setTimeout(function(){
//                entry.target.classList.add(animation);
//                console.log('se activo');
//            }, 500);
//        } else {
//            //console.log('no visible')
//            //entry.target.classList.remove(animation);
//        }
//    });
//});
//animated.forEach(e => {
//    observer.observe(e);
//});
(function() {
    'use strict';
    var animated = document.querySelectorAll('.animated');
    function isCompleteElementInViewport(e) {
        var viewport = e.getBoundingClientRect();
        return(
            viewport.top >= 0 &&
            viewport.left >= 0 &&
            viewport.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            viewport.top <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    //function isAnyPartOfElementInViewport(e) {
    //    const viewport = e.getBoundingClientRect();
    //    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    //    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    //    const vertInView = (viewport.top <= windowHeight) && ((viewport.top + viewport.height) >= 0);
    //    const horInView = (viewport.left <= windowWidth) && ((viewport.left + viewport.width) >= 0);
    //    return (vertInView && horInView);
    //}
    function callbackFunc() {
        for (var i = 0; i < animated.length; i++) {
            var animation = animated[i].getAttribute('data-animation');
            if (isCompleteElementInViewport(animated[i])) {
                //console.log('visible');
                animated[i].classList.add(animation);
            } else {
                //console.log('no visible');
                //animated[i].classList.remove(animation);
            }
        }
    }
    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    window.addEventListener('scroll', callbackFunc);
})();



// if (
//     'IntersectionObserver' in window &&
//     'IntersectionObserverEntry' in window &&
//     'intersectionRatio' in window.IntersectionObserverEntry.prototype
// ) {
//     let observer = new IntersectionObserver(entries => {
//         if (entries[0].boundingClientRect.y < 500) {
//             console.log('visible');
//         } else {
//             console.log('no visible');
//         }
//     });
//     observer.observe(document.querySelector('.animated'));
// }

// function scrolled() {
//     var html = document.getElementsByTagName('html')[0];
//     const animated = document.querySelectorAll('.animated');
//     document.addEventListener('wheel', function(){
//         var scrollWindow = html.scrollTop;
//         console.log(scrollWindow)
//         for(i = 0; i < animated.length; i++){
//             var elemTop = animated[i].offsetTop;
//             if(scrollWindow > elemTop - 500) {

//             } else {

//             }
//         }
//     });
// }
// scrolled();