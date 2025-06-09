interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: "JiangKai's Running Records",
  siteUrl: 'https://run.jiangkai.org',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: "JiangKai's Running Records",
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://www.jiangkai.org',
    },
    {
      name: 'Garden',
      url: 'https://garden.jiangkai.org',
    },
    {
      name: 'Running',
      url: 'https://run.jiangkai.org',
    },
    {
      name: 'About',
      url: 'https://garden.jiangkai.org/about',
    },
    {
      name: 'Thanks',
      url: 'https://github.com/yihong0618/running_page',
    },
  ],
};

export default data;
