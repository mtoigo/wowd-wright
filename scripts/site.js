import controller from '@squarespace/controller';
import { Tweak } from '@squarespace/core';

import resizeEnd from './utils/resizeEnd';
import './polyfills/classList';

import AncillaryLayout from './controllers/AncillaryLayout';
import IndexNavigation from './controllers/IndexNavigation';
import HeaderOverlay from './controllers/HeaderOverlay';
import MobileClassname from './controllers/MobileClassname';
import MobileOverlayFolders from './controllers/MobileOverlayFolders';
import MobileOffset from './controllers/MobileOffset';
import MobileOverlayToggle from './controllers/MobileOverlayToggle';

controller.register('AncillaryLayout', AncillaryLayout);
controller.register('IndexNavigation', IndexNavigation);
controller.register('HeaderOverlay', HeaderOverlay);
controller.register('MobileClassname', MobileClassname);
controller.register('MobileOverlayFolders', MobileOverlayFolders);
controller.register('MobileOffset', MobileOffset);
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
