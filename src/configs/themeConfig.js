// You can customize the template with the help of this file

//Template config options
const themeConfig = {
  app: {
    appName: 'talentZea',
    appLogoImage: require('../assets/custom_images/logo.png').default
  },
  layout: {
    isRTL: false,
    skin: 'light', // light, dark, bordered, semi-dark
    routerTransition: 'fadeIn', // fadeIn, fadeInLeft, zoomIn, none or check this for more transition https://animate.style/
    type: 'horizontal', // vertical, horizontal
    contentWidth: 'full', // full, boxed
    menu: {
      isHidden: true,
      isCollapsed: true
    },
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      type: 'static', // static , sticky , floating, hidden
      backgroundColor: 'white' // BS color options [primary, success, etc]
    },
    footer: {
      type: 'static' // static, sticky, hidden
    },
    customizer: false,
    scrollTop: true // Enable scroll to top button
  }
}

export default themeConfig
