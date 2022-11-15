const container =  document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {

    // mengganti jumbo dengan thumb dgn traversal
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
    // menambah fitur fade pada jumbo
    jumbo.classList.add('fade');
    // setInterval untuk mereset animasi fade
    setTimeout(function() {
        jumbo.classList.remove('fade');
    }, 500);
    }

    // memberikan jejak opacity pada thumb
    thumbs.forEach(function(thumb) {
        thumb.className = 'thumb';
    });

    e.target.classList.add('active');

});