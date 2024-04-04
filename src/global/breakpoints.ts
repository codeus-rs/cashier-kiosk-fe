interface Size {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
}

const size: Size = {
    xs: '25rem', // small mobile screens 400px
    sm: '35.5rem', // mobile screens 568px
    md: '48rem', // tablets 768px
    lg: '64rem', // laptops 1024px
    xl: '80rem', // desktop 1280px
    xxl: '120rem', // big screens 1920px
    xxxl: '160rem', // big screens 2560px
};

export const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`,
};
