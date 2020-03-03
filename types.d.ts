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

  namespace Intl {
    interface NumberFormatOptions {
      notation?: 'compact' | 'scientific' | 'engineering';
      compactDisplay?: 'long' | 'short';
    }

    interface RelativeTimeFormatOptions {
      localeMatcher?: string;
      numeric?: string;
      style?: string;
  }

  interface ResolvedRelativeTimeFormatOptions {
      locale: string;
      numeric: string;
      style: string;
      numberingSystem: string;
  }

  interface RelativeTimeFormat {
      format(value: number, unit: string): string;
      resolvedOptions(): ResolvedRelativeTimeFormatOptions;
  }
  var RelativeTimeFormat: {
      new(locales?: string | string[], options?: RelativeTimeFormatOptions): RelativeTimeFormat;
      (locales?: string | string[], options?: RelativeTimeFormatOptions): RelativeTimeFormat;
      supportedLocalesOf(locales: string | string[], options?: RelativeTimeFormatOptions): string[];
  };
  }
}
