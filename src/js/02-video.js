import Player from '@vimeo/player';

const player = new Player('vimeo-player');

player.on('timeupdate', function (data) {
  // localStorage.setItem('videoplayer-current-time', data);
  console.log(data);
});
