export type Palette = {
    primary: string;
    secondary: string;
    tertiary: string;
    black: string;
    white: string;
    gray: string;
    error: string;
    warning: string;
    success: string;
    borderColor: string;
    lightBgColor: string;
    darkBgColor: string;
};

export type Shadows = {
    main: string;
};
export type Breakpoints = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
};

export type Theme = {
    palette: Palette;
    shadows: Shadows;
    breakpoints: Breakpoints;
    borderRadius: string;
    transition: string;
};
