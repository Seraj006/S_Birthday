document.getElementById('reveal-gift').addEventListener('click', function() {
    var gift = document.getElementById('gift');
    if (gift.classList.contains('hidden')) {
        gift.classList.remove('hidden');
    } else {
        gift.classList.add('hidden');
    }
});


document.getElementById('reveal-gift').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    audio.play();
});