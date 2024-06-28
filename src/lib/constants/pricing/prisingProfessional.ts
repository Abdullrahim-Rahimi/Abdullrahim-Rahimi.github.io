export interface PricingOption {
  title: string;
  subTitle: string;
  description: string;
  price: string;
  optionPlus: string;
  options: string[];
  priceYear: string;
}
export const pricingProfessionalCard = [
  {
    title: 'Starter',
    subTitle: 'First 100 bookings Free',
    description:
      'Just starting out but want to build a solid customer base & brand and while growing their presence as a professional service provider',
    price: 'Free',
    priceYear: 'Free',
    optionPlus: '',
    options: [
      '1 User / Calendar',
      '1 Branch/location',
      '1 country ',
      '100 Bookings',
      'Themed Profile site with Social links & booking feature',
      'Schedule Management',
      'Sales Management (POS)',
      'Client Management',
      'Mobile & Desktop App',
      'General Reports',
      'Customer Reviews Management',
      'In App & Email Notifications',
      'WhatsApp Notifications',
      'Portfolio of services',
      'Social Media Daisy Link',
      'Phone Contacts Syncing',
      'Google Calendar',
      'Basic Customer Support',
    ],
  },
  {
    title: 'Professional',
    subTitle: 'First 100 bookings Free',
    description:
      'Ideal for Solo Experienced Professionals that want to provide an exceptional experience to their customers',
    price: '50',
    priceYear: '500',
    optionPlus: 'Starter',
    options: [
      '1 User / Calendar',
      '1 Branch/location',
      '1 country ',
      'Unlimited bookings',
      'Automated reminders to reduce no shows & encourage early rebooking',
      'Subscription packages',
      'Online Payments',
      'Enforce Cancellation Fees & Refunds',
      'App Elastic search visibility',
      'Marketplace App visibility',
      'Customer Reviews & Feedback',
      'Advanced Analytics and Trends',
      'Free Data Migration',
      'Free Assisted Onboarding & Services Menu Setup',
      'Priority Customer Support',
    ],
  },
  {
    title: 'Elite',
    subTitle: 'First 100 bookings Free',
    description:
      'Ideal for Solo Experienced Professionals that want to provide an exceptional experience to their customers',
    price: '100',
    priceYear: '1000',
    optionPlus: 'Professional',
    options: [
      '1 User / Calendar',
      '1 Branch/location',
      '1 country ',
      'Unlimited bookings',
      'Automated reminders to reduce no shows & encourage early rebooking',
      'Subscription packages',
      'Online Payments',
      'Enforce Cancellation Fees & Refunds',
      'App Elastic search visibility',
      'Marketplace App visibility',
      'Customer Reviews & Feedback',
      'Advanced Analytics and Trends',
      'Free Data Migration',
      'Free Assisted Onboarding & Services Menu Setup',
      'Priority Customer Support',
    ],
  },
];
