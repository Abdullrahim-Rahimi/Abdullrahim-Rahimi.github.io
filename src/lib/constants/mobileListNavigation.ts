export const mobileListNavigation = [
  { title: 'Home', nav: '/' },
  { title: 'Fetures', nav: '/features' },
  { title: 'Pricing', nav: '/pricing' },
  {
    title: 'Resources',
    nav: '/resources',
    submenu: [
      {
        title: 'Blog posts',
        subtitle: 'Find cool stories and ideas ',
        nav: '/resources/blog-post',
      },
      {
        title: 'Customer testimonials',
        subtitle: 'Lorem ipsum dolor sit dolor ',
        nav: '/resources/testimonials',
      },
      {
        title: 'Tutorials & Guides',
        subtitle: 'Lorem ipsum dolor sit dolor ',
        nav: '/resources/tutorials',
      },
      {
        title: 'Stay Updated',
        subtitle: 'Lorem ipsum dolor sit dolor ',
        nav: '/resources/updates',
      },
    ],
  },
  { title: 'About', nav: '/about' },
  { title: 'Contact', nav: '/contact' },
];
