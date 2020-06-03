import controller from '@squarespace/controller';
import { Tweak } from '@squarespace/core';

import resizeEnd from './utils/resizeEnd';
import './polyfills/classList';

import AncillaryLayout from './controllers/AncillaryLayout';
import MobileOverlayToggle from './controllers/MobileOverlayToggle';

controller.register('AncillaryLayout', AncillaryLayout);
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
