import "@emotion/react";

declare module "@emotion/react" {
  interface colorVariant {
    light: string;
    main: string;
    dark: string;
  }
  export interface Theme {
    colors: {
      primary: colorVariant;
      secondary: colorVariant;
      error: colorVariant;
      warning: colorVariant;
      info: colorVariant;
      success: colorVariant;
    };
  }
}
