/*  eslint-disable  */
export default{
  name: 'barlist',
  barProducts:{
      name: 'Products',
      id: 'Products',
      child: [
        {
          series:[
            {
              aLink: 'https://us.snapmaker.com/products/snapmaker-2-0-modular-3-in-1-3d-printer-a350t-a250t',
              description: '3-in-1 3D Printer (AT Models)',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/img/AT_Series.jpg',
            },
            {
              to: 'Snapmaker 2.0',
              description: '3-in-1 3D Printer (A Models)',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/img/A_Series_240x170.jpg',
            },
            {
              to: 'snapmaker2F',
              // aLink:'https://us.snapmaker.com/products/snapmaker-2-0-modular-3d-printer',
              description: '3D Printer (F Models)',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/img/F_Series_240x170.jpg',
            },
          ],
          name: 'Snapmaker 2.0',
          id: 'platform',
          showComing: true,
          addons:[
              {
                available: true,
                name: '10W Laser Module',
                img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/pic_10W Laser.png',
                url: '/snapmaker-10w-laser-module',
                coming: 'Coming soon...',
              },
              {
                available: true,
                // outsideLink: true,
                name: 'Enclosure',
                img: 'https://ditfjx9w4x3vl.cloudfront.net/img/enclosure@2x.png',
                // url: 'https://shop.snapmaker.com/collections/snapmaker-2-0/products/enclosure-for-snapmaker-2-0',
                url: '/product/filter-enclosure',
                coming: 'Coming soon...',
              },
              {
                available: true,
                img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_2.0_rotary.png',
                name: 'Rotary Module',
                url: '/product/rotary-module',
                coming: 'Coming soon...',
              },
              {
                available: true,
                img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_Filter_54x50.png',
                name: 'Air Purifier',
                url: '/product/filter-enclosure#air-purifier',
                coming: 'Coming soon...',
              },
              {
                available: true,
                outsideLink: true,
                img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_CanHub_54x50@2x.png',
                name: 'CAN Hub',
                url: 'https://shop.snapmaker.com/products/snapmaker-2-0-can-hub',
                coming: 'Coming soon...',
              }
          ],
        },
        {
          series:[
            {
              to: 'Snapmaker Original',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_orignal_240x170.png',
              description: '3-in-1 3D Printer',
            }
          ],
          name: 'Snapmaker Original',
          id: 'product',
          showComing: false,
          addons:[
              {
                available: true,
                img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_enclosure_54x50.png',
                name: 'Enclosure V1.1',
                url: '/product/snapmaker-original/addons#enclosure',
              },
              {
                available: true,
                name: '1600mW Laser Cutting Module',
                 img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_lasercutting_54x50.png',
                url: '/product/snapmaker-original/addons#laser-cutting-module',
              },
              {
                available: true,
                img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_zaxis_54x50.png',
                name: 'Z-Axis Extension Module',
                url: '/product/snapmaker-original/addons#z-axis-extension-module',
              },
          ]
        },
      ],
    },
  barSupport:
  {
    name: 'Support',
    id: 'Support',
    link: 'https://snapmaker.zendesk.com/hc/en-us',
    child: [
      {
        to: '/download',
        name: 'Downloads',
        id: 'download',
      },
      {
        to: '/document',
        name: 'Knowledge Base',
        id: 'document',
      },
      {
        to: '/repair',
        name: 'Repair Service',
        id: 'repair',
      },
      {
        to: '/spec',
        name: 'Specs',
        id: 'spec',
      },
    ],
  },
  barend: {
    buttons: [
        {
            url: 'https://shop.snapmaker.com/',
            name: 'Store',
            modalMsg:{
              title:'Choose your country or region',
              childrenPart:[
                {
                  aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/store_US.png',
                  aDivCon: 'United States',
                  aHref: 'https://us.snapmaker.com/',
                },{
                  aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/store_EU.png',
                  aDivCon: 'European Union',
                  aHref: 'https://eu.snapmaker.com/',
                },
                {
                  aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/store_Other.png',
                  aDivCon: 'Other Regions',
                  aHref: 'https://shop.snapmaker.com/'
                },
              ]
            }
        }
    ],
    country:'中文',
    switchLangIcon: 'https://ditfjx9w4x3vl.cloudfront.net/img/switchCn.png',
  },
  buttonText: 'Community',
};
