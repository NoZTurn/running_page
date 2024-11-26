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

const data: ISiteMetadataResult = {
  siteTitle: 'JiangKai\'s Running Records',
  siteUrl: 'https://run.jiangkai.org',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'JiangKai\'s Running Records',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://www.jiangkai.org',
    },
    {
      name: 'Thanks',
      url: 'https://github.com/yihong0618/running_page',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
