export {
  VaadinVerticalLayout,
  VaadinHorizontalLayout
}

declare class VaadinVerticalLayout extends HTMLElement {
}

declare class VaadinHorizontalLayout extends HTMLElement {
}

declare global {
  interface HTMLElementTagNameMap {
    "vaadin-vertical-layout": VaadinVerticalLayout;
    "vaadin-horizontal-layout": VaadinHorizontalLayout;
  }
}
