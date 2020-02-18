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


var animated = document.querySelectorAll('.animated');
observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var animation = entry.target.getAttribute('data-animation');
        if (entry.intersectionRatio > 0) {
            console.log('visible');
            setTimeout(function(){
                entry.target.classList.add(animation);
                console.log('se activo');
            }, 500);
        } else {
            //console.log('no visible')
            //entry.target.classList.remove(animation);
        }
    });
});
animated.forEach(e => {
    observer.observe(e);
});


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