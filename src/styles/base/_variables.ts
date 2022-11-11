export const size = {
  mobileMin: "320px",
  mobileMax: "767px",
  tabletMin: "768px",
  tabletMax: "1023px",
  labtopMin: "1024px",
  labtopMax: "1439px",
  desktopMin: "1440px",
};

export const device = {
  mobile: `(max-width: ${size.mobileMax})`,
  tablet: `(max-width: ${size.tabletMax})`,
  labtop: `(max-width: ${size.labtopMax})`,
  desktop: `(min-width: ${size.desktopMin})`,
};
