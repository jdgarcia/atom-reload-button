'use babel';

import ReloadButtonView from './reload-button-view';

export default {

  reloadButtonView: null,

  deactivate() {
    this.reloadButtonView.destroy();
  },

  consumeStatusBar(statusBar) {
    this.reloadButtonView = new ReloadButtonView(statusBar);
  }

};
