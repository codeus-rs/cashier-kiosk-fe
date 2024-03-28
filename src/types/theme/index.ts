export type Palette = {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    gray: string;
    darkGray: string;
};

export type Shadows = {
    main: string;
};

export type Theme = {
    palette: Palette;
    shadows: Shadows;
};
