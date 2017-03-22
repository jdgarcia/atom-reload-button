'use babel';

import { Disposable } from 'atom';

export default class ReloadButtonView {

  constructor(statusBar) {
    this.element = document.createElement('a');
    this.element.classList.add('icon', 'icon-sync');

    this.element.addEventListener('click', this.onClick);
    this.clickEventDisposable = new Disposable(() => this.element.removeEventListener('click', this.onClick));

    this.statusBarTile = statusBar.addRightTile({ item: this.element, priority: 1000 });
  }

  destroy() {
    this.clickEventDisposable.dispose();

    this.statusBarTile.destroy();
    this.statusBarTile = null;

    this.element.remove();
    this.element = null;
  }

  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    atom.commands.dispatch(atom.views.getView(atom.workspace), 'window:reload');
  }

}
