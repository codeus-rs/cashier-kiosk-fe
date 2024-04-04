import { Palette, Theme, Shadows } from '@/types/theme';
import colors from '../colors.module.scss';

const palette: Palette = {
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    warning: colors.warning,
    gray: colors.gray,
    darkGray: colors.darkGray,
};
//if needed define breakpoints here also, to be able to use in style components
// const breakpoints: Breakpoints = {};
const shadows: Shadows = {
    main: '0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.19)',
};

export const theme: Theme = { palette: palette, shadows };
