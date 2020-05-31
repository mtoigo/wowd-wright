import controller from '@squarespace/controller';
import { Tweak } from '@squarespace/core';

import resizeEnd from './utils/resizeEnd';
import './polyfills/classList';

import AncillaryLayout from './controllers/AncillaryLayout';
import FooterBreakpoints from './controllers/FooterBreakpoints';
import IndexNavigation from './controllers/IndexNavigation';
import HeaderNavFolderTouch from './controllers/HeaderNavFolderTouch';
import HeaderOverlay from './controllers/HeaderOverlay';
import MobileClassname from './controllers/MobileClassname';
import MobileOverlayFolders from './controllers/MobileOverlayFolders';
import MobileOffset from './controllers/MobileOffset';
import MobileOverlayToggle from './controllers/MobileOverlayToggle';
import UserAccountLink from './controllers/UserAccountLink';

controller.register('AncillaryLayout', AncillaryLayout);
controller.register('FooterBreakpoints', FooterBreakpoints);
controller.register('IndexNavigation', IndexNavigation);
controller.register('HeaderNavFolderTouch', HeaderNavFolderTouch);
controller.register('HeaderOverlay', HeaderOverlay);
controller.register('MobileClassname', MobileClassname);
controller.register('MobileOverlayFolders', MobileOverlayFolders);
controller.register('MobileOffset', MobileOffset);
controller.register('MobileOverlayToggle', MobileOverlayToggle);
controller.register('UserAccountLink', UserAccountLink);
controller.register('GlobalPlayer', (container) => {
  WOWDComponents.renderGlobalPlayer(container);
  WOWDComponents.activateLiveTrack();
});
controller.register('Schedule', (container) => {
  WOWDComponents.renderShowSchedule(container);
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
