import { Palette, Theme, Shadows } from '@/types/theme';
import { Breakpoints } from '@/types/theme';
import variables from '../variables.module.scss';

const palette: Palette = {
    primary: variables.primary,
    secondary: variables.secondary,
    tertiary: variables.tertiary,
    black: variables.black,
    white: variables.white,
    gray: variables.gray,
    error: variables.error,
    warning: variables.warning,
    success: variables.success,
    borderColor: variables.borderColor,
    lightBgColor: variables.lightBgColor,
    darkBgColor: variables.darkBgColor,
};

const breakpoints: Breakpoints = {
    xs: variables.xs, // small mobile screens 400px
    sm: variables.sm, // mobile screens 568px
    md: variables.md, // tablets 768px
    lg: variables.lg, // laptops 1024px
    xl: variables.xl, // desktop 1280px
    xxl: variables.xxl, // big screens 1920px
    xxxl: variables.xxxl, // big screens 2560px
};

const shadows: Shadows = {
    main: variables.inputShadow,
};

export const theme: Theme = {
    palette: palette,
    shadows,
    breakpoints: breakpoints,
    borderRadius: variables.borderRadius,
    transition: variables.transition,
};
