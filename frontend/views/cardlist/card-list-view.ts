import {css, customElement, html, LitElement} from 'lit-element';
import {render, TemplateResult} from 'lit-html';
import {until} from 'lit-html/directives/until';

import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-grid/all-imports.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-lumo-styles/all-imports.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';

import * as CardListEndpoint from '../../generated/CardListEndpoint';
import Card from '../../generated/com/example/application/views/cardlist/Card';

@customElement('card-list-view')
export class CardListView extends LitElement {
  render() {
    const df = new Intl.DateTimeFormat('en', {
      month: 'long',
      day: 'numeric'
    });

    const nf = new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short'
    });

    // const rdf = new Intl.RelativeTimeFormat('en', {
    //   style: 'narrow',
    // });

    // <span class="date">${rdf.format(
    //   (new Date(item.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) | 0,
    //   'days')}</span>

    return html`
      <vaadin-grid id="grid" theme="no-border no-row-borders"
        .items="${until(CardListEndpoint.list(), [])}">
        <vaadin-grid-column .renderer="${renderer(card => html`
          <vaadin-horizontal-layout class="card">
            <img src="${card.imgUrl}">
            <vaadin-vertical-layout>
              <vaadin-horizontal-layout class="header">
                <span class="name">${card.name}</span>
                <span class="date">${df.format(new Date(card.date))}</span>
              </vaadin-horizontal-layout>
              <span class="post">${card.post}</span>
              <vaadin-horizontal-layout class="actions">
                <iron-icon icon="vaadin:heart"></iron-icon>
                <span class="likes">${nf.format(card.likes)}</span>
                <iron-icon icon="vaadin:comment"></iron-icon>
                <span class="comments">${card.comments}</span>
                <iron-icon icon="vaadin:connect"></iron-icon>
                <span class="shares">${card.shares}</span>
              </vaadin-horizontal-layout>
            </vaadin-vertical-layout>
          </vaadin-horizontal-layout>
        `)}">
        </vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          height: 100%;
        }

        vaadin-grid {
          height: 100%;
          line-height: var(--lumo-line-height-m);
        }

        vaadin-grid,
        vaadin-grid-cell-content {
          background-color: var(--lumo-contrast-10pct);
        }

        .card {
          background-color: var(--lumo-base-color);
          border-radius: var(--lumo-border-radius);
          box-shadow: var(--lumo-box-shadow-xs);
          padding: calc(var(--lumo-space-s) * 1.5) var(--lumo-space-m);
        }

        img {
          border-radius: 50%;
          flex-shrink: 0;
          height: var(--lumo-size-m);
          margin-right: calc(var(--lumo-space-s) * 1.5);
          width: var(--lumo-size-m);
        }

        .header {
          align-items: baseline;
        }

        .name {
          font-size: var(--lumo-font-size-s);
          font-weight: bold;
          margin-right: var(--lumo-space-s);
        }

        .date {
          color: var(--lumo-tertiary-text-color);
          font-size: var(--lumo-font-size-xs);
        }

        .post {
          color: var(--lumo-secondary-text-color);
          font-size: var(--lumo-font-size-s);
          margin-bottom: var(--lumo-space-s);
          white-space: normal;
        }

        .actions {
          align-items: center;
        }

        iron-icon {
          color: var(--lumo-tertiary-text-color);
          height: calc(var(--lumo-icon-size-s) * 0.8);
          margin-right: var(--lumo-space-s);
          width: calc(var(--lumo-icon-size-s) * 0.8);
        }

        .likes,
        .comments,
        .shares {
          color: var(--lumo-tertiary-text-color);
          font-size: var(--lumo-font-size-xs);
          margin-right: var(--lumo-space-l);
        }
      `
    ];
  }
}

function renderer(fn: (card: Card) => TemplateResult) {
  return function(
    root: Element | DocumentFragment,
    _: any,
    { item }: { item: Card }
  ) {
    render(fn(item), root);
  }
}
