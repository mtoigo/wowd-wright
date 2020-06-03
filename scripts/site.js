import controller from '@squarespace/controller';
import { Tweak } from '@squarespace/core';

import resizeEnd from './utils/resizeEnd';
import './polyfills/classList';

import AncillaryLayout from './controllers/AncillaryLayout';
import HeaderOverlay from './controllers/HeaderOverlay';
import MobileOverlayFolders from './controllers/MobileOverlayFolders';
import MobileOverlayToggle from './controllers/MobileOverlayToggle';

controller.register('AncillaryLayout', AncillaryLayout);
controller.register('HeaderOverlay', HeaderOverlay);
controller.register('MobileOverlayFolders', MobileOverlayFolders);
controller.register('MobileOverlayToggle', MobileOverlayToggle);
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
