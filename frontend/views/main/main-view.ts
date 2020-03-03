import { css, customElement, html, LitElement, property } from 'lit-element';

// @ts-ignore: 'Router' is declared but its value is never used
import { Router } from '@vaadin/router';

import '@vaadin/vaadin-app-layout/theme/lumo/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tab';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs';

interface MenuTab {
  route: string;
  name: string;
}

@customElement('main-view')
export class MainEndpoint extends LitElement {
  @property({ type: Object }) location: Router.Location | undefined;
  @property({ type: Array }) menuTabs: MenuTab[] = [
    {route: 'dashboard', name: 'Dashboard'},
    {route: 'master-detail', name: 'Master-Detail'},
    {route: 'card-list', name: 'Card List'},
    {route: 'form', name: 'Form'},
  ];

  static get styles() {
    return [
      // CSSModule('lumo-typography lumo-styles'),
      css`
        :host {
          display: block;
          height: 100%;
        }
      `
    ];
  }

  render() {
    return html`
      <vaadin-app-layout primary-section="drawer">
        <vaadin-drawer-toggle
          slot="navbar touch-optimized"
        ></vaadin-drawer-toggle>

        <vaadin-tabs
          slot="drawer"
          orientation="vertical"
          theme="minimal"
          id="tabs"
          .selected="${this.getIndexOfSelectedTab()}"
        >
          ${this.menuTabs.map(
            menuTab => html`
              <vaadin-tab>
                <a href="${menuTab.route}" tabindex="-1">${menuTab.name}</a>
              </vaadin-tab>
            `
          )}
        </vaadin-tabs>
        <slot></slot>
      </vaadin-app-layout>
    `;
  }

  private isCurrentLocation(route: string): boolean {
    if (!this.location) {
      return false;
    }

    const routeUrl = new URL(route, document.baseURI);
    return routeUrl.pathname === this.location.pathname;
  }

  private getIndexOfSelectedTab(): number {
    const index = this.menuTabs.findIndex(menuTab =>
      this.isCurrentLocation(menuTab.route)
    );

    // Select first tab if there is no tab for home in the menu
    if (index === -1 && this.isCurrentLocation('')) {
      return 0;
    }

    return index;
  }
}
