import {customElement, html, LitElement, query, unsafeCSS} from 'lit-element';

import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-form-layout/vaadin-form-item';
import '@vaadin/vaadin-form-layout/vaadin-form-layout';
import '@vaadin/vaadin-notification/vaadin-notification';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-text-field/vaadin-text-field';

// import the remote endpoint
import * as viewEndpoint from '../../generated/FormEndpoint';

// import types used in the endpoint
import Employee from '../../generated/com/example/application/backend/Employee';

import { EndpointError } from '@vaadin/flow-frontend/Connect';

// utilities to import style modules
import { CSSModule } from '../../css-utils';

// @ts-ignore
import styles from './form-view.css';

@customElement('form-view')
export class FormViewElement extends LitElement {
  static get styles() {
    return [
      CSSModule('lumo-typography'),
      unsafeCSS(styles)
    ];
  }

  @query('#firstname')
  private firstName: any;
  @query('#lastname')
  private lastName: any;
  @query('#email')
  private email: any;
  @query('#notes')
  private notes: any;
  @query('#notification') private notification: any;

  render() {
    return html`
      <vaadin-vertical-layout id="wrapper" theme="padding">
        <h1>Form</h1>
        <vaadin-form-layout>
          <vaadin-form-item>
            <label slot="label">First name</label>
            <vaadin-text-field
              id="firstname"
              class="full-width"
            ></vaadin-text-field>
          </vaadin-form-item>
          <vaadin-form-item>
            <label slot="label">Last name</label>
            <vaadin-text-field class="full-width" id="lastname"></vaadin-text-field>
          </vaadin-form-item>
          <vaadin-form-item colspan="2">
            <label slot="label">Email</label>
            <vaadin-text-field class="full-width" id="email"></vaadin-text-field>
          </vaadin-form-item>
          <br />
          <vaadin-form-item colspan="2">
            <label slot="label">Notes</label>
            <vaadin-text-area class="full-width" id="notes"></vaadin-text-area>
          </vaadin-form-item>
        </vaadin-form-layout>
        <vaadin-horizontal-layout class="button-layout" theme="spacing">
          <vaadin-button theme="tertiary" slot="" @click="${this.clearForm}">
            Cancel
          </vaadin-button>
          <vaadin-button theme="primary" @click="${this.save}">
            Save
          </vaadin-button>
        </vaadin-horizontal-layout>
        <vaadin-notification duration="5000" id="notification">
        </vaadin-notification>
      </vaadin-vertical-layout>
    `;
  }

  private async save() {
    const employee: Employee = {
      idString: "",
      email: this.email.value,
      firstname: this.firstName.value,
      lastname: this.lastName.value,
      notes: this.notes.value,
      title: ''
    };
    try {
      await viewEndpoint.saveEmployee(employee);
    } catch (error) {
      if (error instanceof EndpointError) {
        this.notification.renderer = (root: Element) =>
        root.textContent = `Server error. ${error.message}`;
        this.notification.open();
      } else {
        throw error;
      }
    }
  }

  private clearForm() {
    this.firstName.value =  '';
    this.lastName.value =  '';
    this.email.value = '';
    this.notes.value = '';
  }
}
