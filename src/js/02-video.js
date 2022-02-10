var throttle = require('lodash.throttle'); 
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', throttle(onSaveTime, 1000));

let  currentTime = localStorage.getItem("videoplayer-current-time");

console.log(currentTime);
function onSaveTime(evt) {
  const saveTime = evt.seconds;
    localStorage.setItem("videoplayer-current-time", saveTime);
   
}

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
