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

// Hide instructions above Schedule iFrame when a link inside is clicked
const schedule = document.getElementById('schedule');
const scheduleInstructions = document.getElementById('archive-instructions');
const scheduleInstructionsTitle = document.getElementById('archive-instructions-title');
const scheduleInstructionsMobile = document.getElementById('archive-instructions-mobile');
const scheduleInstructionsTitleMobile = document.getElementById('archive-instructions-title-mobile');
window.clicksInSchedule = 0;
window.scheduleFrameLoad = function() {

  if (clicksInSchedule >= 1) {
    scheduleInstructions.style.display = 'none';
    scheduleInstructionsTitle.style.display = 'none';
    scheduleInstructionsMobile.style.display = 'none';
    scheduleInstructionsTitleMobile.style.display = 'none';
  }
  clicksInSchedule++;
};