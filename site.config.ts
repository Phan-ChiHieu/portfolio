export const tags = [
  'finance',
  'hiring',
  'career',
  'software',
  'design',
  'interview',
  'speaking',
  'design-system',
  'accessibility',
  'state-machine',
  'react',
  'jest',
  'testing',
  'component',
  'open-source',
  'tips',
  'github-actions',
  'ci',
];

const shared = {
  name: 'Edric Phan',
  repo: 'https://github.com/segunadebayo/adebayosegun.com',
  editUrl: 'https://github.com/segunadebayo/adebayosegun.com/edit/main/data/',
  website: 'https://adebayosegun.com',
  title:
    'EdricPhan (Phan Chi Hieu) - UI Engineer (Design Systems), Software Developer and Product Designer',
  description:
    'UI Engineer passionate about design systems, state machines, accessibility, DX and Rust.',
  image: 'https://adebayosegun.com/static/images/banner.png',
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: 'website',
  title: shared.title,
  titleTemplate: '%s - Edric Phan',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/EdricPhan1997',
    linkedin: 'https://www.linkedin.com/in/edric-phan-b51064231/',
    email: 'mailto:devpch.wwp@gmail.com',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@thesegunadebayo',
    site: '@thesegunadebayo',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: 'https://edricphan-port.netlify.app/static/images/banner-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'EdricPhan (Phan Chi Hieu) - UI Engineer (Design Systems), Software Developer and Product Designer',
      },
    ],
  },
};

export default siteConfig;
