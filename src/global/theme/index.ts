import { Palette, Theme, Shadows } from '@/types/theme';

const palette: Palette = {
    primary: '#1976D2',
    secondary: '#A5CA36',
    error: '#D32F2F',
    warning: '#ED6C02',
    gray: '#E6E6E6',
    darkGray: '#6B7280',
};

const shadows: Shadows = {
    main: '0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.19)',
};
export const theme: Theme = { palette: palette, shadows };
