import controller from '@squarespace/controller';
import { Tweak } from '@squarespace/core';

import resizeEnd from './utils/resizeEnd';
import './polyfills/classList';

import AncillaryLayout from './controllers/AncillaryLayout';
import MobileOverlayToggle from './controllers/MobileOverlayToggle';
import MobileOverlayFolders from './controllers/MobileOverlayFolders';

controller.register('AncillaryLayout', AncillaryLayout);
controller.register('MobileOverlayToggle', MobileOverlayToggle);
controller.register('MobileOverlayFolders', MobileOverlayFolders);

controller.register('GlobalPlayer', (container) => {
  WOWDComponents.renderGlobalPlayer(container);
  WOWDComponents.activateLiveTrack();
});
controller.register('ListenLiveNavItem', (element) => {
  element.onclick = () => {
    WOWDComponents.toggleLiveTrack();
  };
  const buttonContainer = element.querySelector('.listenLiveNavButton');
  if (buttonContainer) {
    WOWDComponents.renderLiveTrackPlayButton(buttonContainer);
  }
});

// Spinitron Homepage iFrame auto refresh
const refreshInterval = 300000;

window.reloadIFrame = function() {
  const nowPlaying = document.getElementById("nowPlaying");
  const recentlyPlayed = document.getElementById("recentlyPlayedI");
  const upcomingShows = document.getElementById("upcomingShowsI");

  nowPlaying.src += '';
  recentlyPlayed.src += '';
  upcomingShows.src += '';
};

window.setInterval("reloadIFrame()", refreshInterval);
