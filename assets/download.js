/* eslint-disable */
export default {
  name: 'download',
  columnName:{
      software: 'Software',
      firmware: 'Firmware',
      manuals: 'Manuals',
  },
  snapmaker1: {
    containerCon: {
      h2text: 'Downloads',
      breadcrumb1: 'Home',
      breadcrumb2: 'Support',
      breadcrumb3: 'Downloads',
      bgSourceSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-m-bg.jpg',
      bgImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-bg.png',
    },
    softwareCon: {
      columnLeftImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-software.png',
      columnRight: {
        h2text: 'Snapmaker Luban',
        h3text: 'The most easy-to-use 3-in-1 Software',
        buttonCon: [
            {
              snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-x64.exe',
              iClass: 'windows',
              iText: 'Download for Win 64 bit',
            },
            {
              snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-ia32.exe',
              iClass: 'windows',
              iText: 'Download for Win 32 bit',
            },
            {
              snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-mac-x64.dmg',
              iClass: 'apple',
              iText: 'Download for Mac',
            },
        ],
        h4textPre: 'This is Version ',
        h4textNext: ' (stable release). You can download previous version or the Ubuntu version from our',
        h4AHref: 'https://github.com/Snapmaker/Luban/releases',
        snapmakerjsVersion: '2.5,4',
        h4AText: 'GitHub',
        h4ATextLast: ' page.',
      },
    },
    additionalSoftware: {
      h2text: 'Additional Files for the Software',
      buttonText: 'Download',
      githubImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_github_30x30@2x.png',
      iconImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_pc_download_30x30@2x.png',
      columnData: [
        {
          title: 'CH340 Driver for macOS Mojave 10.14 or later',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          title: 'CH340 Driver for Windows',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          title: 'Configuration Files & Tool Libraries',
          content: `Download and set up the configuration files for generating G-code on third-party CAD / CAM software.
              Supported software: Fusion 360, FreeCAD, ArtCAM, Aspire, and more to be added.`,
          githubHref: 'https://github.com/Snapmaker/snapmaker_cnc_post_process/',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
         },
      ],
      columnsCon: [
        {
            h2text: 'CH340 Driver for macOS Mojave 10.14 or later',

          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          h2text: 'Configuration Files for Fusion 360',
          h6text: '2021-01-20',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
        }
      ],
      columnsConSpe:[
        {
          h2text: 'CH340 Driver for Windows',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
            h2text: 'Firmware: Snapmaker-GD32Base-',
            h6text: '2018-12-18',
            content: 'This is the latest release of the Snapmaker Original firmware V2.11.',
            buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/firmware/Snapmaker-GD32Base-2.11.zip',
        },
      ],
    },
    quickStartGuide: {
      h2text: 'Quick Start Guides',
      aText: 'Read',
      columnsCon: [
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-3d-printing.png',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/3D-Printing-webview-V1.0.8.pdf',
        },
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Guide for Laser Engraving',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/laser-guide.png',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/Laser-webview-V1.0.6.pdf',
        },
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Guide for CNC Carving',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/cnc-guide.png',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/CNC-webview-V1.3.0.pdf',
        },
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Guide for Enclosure',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/enclosure-cover.png',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/enclosure-with-switch-webview-V1.0.pdf',
        },
      ],
    },

    softwareGuide: {
      h2text: 'User Manuals',
      guide: 'User Manuals',
      columnsCon: [
        {
          h4text: '3D Printing',
          aHref: 'https://support.snapmaker.com/hc/en-us/articles/360051723914-User-Manual-for-Snapmaker-Original-3D-Printing',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/use-3d.png',
        },
        {
          h4text: 'Laser Engraving',
          aHref: 'https://support.snapmaker.com/hc/en-us/articles/360051703674-User-Manual-for-Snapmaker-Original-Laser',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/use-laser.png',
        },
        {
          h4text: 'CNC Carving',
          aHref: 'https://support.snapmaker.com/hc/en-us/articles/360051673994-User-Manual-for-Snapmaker-Original-CNC',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/use-cnc.png',
        },
      ],
      },
  },
  snapmaker2: {
    containerCon: {
      h2text: 'Downloads',
      breadcrumb1: 'Home',
      breadcrumb2: 'Support',
      breadcrumb3: 'Downloads',
      bgSourceSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-cover-mobile.png',
      bgImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-cover.png',
    },
    softwareCon: {
      columnLeftImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-software.png',
      columnRight: {
        h2text: 'Snapmaker Luban',
        h3text: 'The most easy-to-use 3-in-1 Software',
        workshopTip: 'Turn Your Desktop Into A Workshop',
        buttonCon: [
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-x64.exe',
            iClass: 'windows',
            iText: 'Download for Win 64 bit',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-ia32.exe',
            iClass: 'windows',
            iText: 'Download for Win 32 bit',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-mac-x64.dmg',
            iClass: 'apple',
            iText: 'Download for Mac',
          },
        ],
        h4textPre: 'This is Version ',
        h4textNext: ' (stable release). You can download previous versions or the Ubuntu version from our',
        h4AHref: 'https://github.com/Snapmaker/Luban/releases',
        snapmakerjsVersion: '3.1.0',
        h4AText: 'GitHub',
        h4ATextLast: ' page.',
      },
    },
    additionalSoftware: {
      h2text: 'Additional Files for the Software',
      buttonText: 'Download',
      githubImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_github_30x30@2x.png',
      iconImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_pc_download_30x30@2x.png',
      columnData: [
        {
          title: 'CH340 Driver for macOS Mojave 10.14 or later',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          title: 'CH340 Driver for Windows',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          title: 'Configuration Files & Tool Libraries',
          content: `Download and set up the configuration files for generating G-code on third-party CAD / CAM software.
              Supported software: Fusion 360, FreeCAD, ArtCAM, Aspire, and more to be added.`,
          githubHref: 'https://github.com/Snapmaker/snapmaker_cnc_post_process/',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
         },
      ],
      columnsCon: [
        {
          h2text: 'CH340 Driver for macOS Mojave 10.14 or later',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          h2text: 'Configuration Files for Fusion 360',
          h6text:  '2021-01-20',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
        }
      ],
      columnsConSpe:[
        {
          h2text: 'CH340 Driver for Windows',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          h2text: 'Firmware: Snapmaker2_V',
          h6text: '2020-01-05',
          downloadFirmwareLast: 'history versions',
          forumLink: 'forum.',
          toolheadTip1:  'Please read this',
          toolheadTipText: 'article',
          toolheadTip2:  'before you upgrade the firmware to V1.12.0.',
          toolheadTipLink: 'https://forum.snapmaker.com/t/upgrade-the-toolheads-separately-with-snapmaker-firwmare-v1-12-0/17402',
          content: 'This is the latest release of the Snapmaker 2.0 firmware V',
          contentNext: '. Previous releases can be downloaded from our',
          link: 'https://forum.snapmaker.com/t/snapmaker-2-0-firmware-updates-and-downloads/5443',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/firmware/Snapmaker2_V1.7.0.0.zip',
        },
      ],
    },
    quickStartGuide: {
      h2text: 'Quick Start Guides',
      aText: 'Read',
      columnsCon: [
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for A150',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-instruction-A150.png',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/Snapmaker2_A150_EN_V1.3.0.pdf',
        },
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for A250',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/Snapmaker2_A250_EN_V1.3.0.pdf',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-instruction-A250.png',
        },
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for A350',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-instruction-A350.png',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/Snapmaker2_A350_EN_V1.3.0.pdf',
        },

        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for A150 Enclosure',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/A150-Enclosure-V1.0.0.pdf',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-enclosure-A150.png',
        },
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for A250/A350 Enclosure',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-enclosure-A250.png',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/A250-Enclosure-V1.0.0.pdf',
        },
      ],
    },
    softwareGuide: {
      h2text: 'User Manuals',
      guide: 'User Manuals',
      columnsCon: [
        {
          h4text: 'Snapmaker Luban 4.0 User Manual',
          aHref: 'https://support.snapmaker.com/hc/en-us/articles/4406229926935',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/software-menual.jpg',
        },
        {
          h4text: '3D Printing',
          aHref: 'https://support.snapmaker.com/hc/en-us/articles/360041733553-3D-Printing',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/document-snapmaker2.0-software-guide-01.png',
        },
        {
          h4text: 'Laser Engraving and Cutting',
          aHref: 'https://support.snapmaker.com/hc/en-us/articles/360041254874-Laser-Engraving-and-Cutting-',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/document-snapmaker2.0-software-guide-02.png',
        },
        {
          h4text: 'CNC Carving',
          aHref: 'https://support.snapmaker.com/hc/en-us/articles/360041252474-CNC-Carving',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/document-snapmaker2.0-software-guide-03.png',
        },
      ],
      },
  },
  snapmaker2F: {
    quickStartGuide: {
      h2text: 'Quick Start Guides',
      aText: 'Read',
      columnsCon: [
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',//require('../../../assets/img/navbar-logo.svg'),
          h2text: 'Quick Start Guide for F350 ',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker2F/download/f350_download.png',//require('../../../assets/newImg/snapmaker2F/download/f350_download.png'),
          aHref: 'https://s3.us-west-2.amazonaws.com/snapmaker.com/download/manual/Snapmaker2_F350_EN_V1.0.0.pdf',
        },
        {
          imgSrc: '',//require('../../../assets/img/navbar-logo.svg'),
          h2text: 'Quick Start Guide for F250 ',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker2F/download/f250_download.png',//require('../../../assets/newImg/snapmaker2F/download/f250_download.png'),
          aHref: 'https://s3.us-west-2.amazonaws.com/snapmaker.com/download/manual/Snapmaker2_F250_EN_V1.0.0.pdf',
        },
      ],
    },
    softwareGuide: {
      h2text: 'User Manuals',
      guide: 'User Manuals',
      columnsCon: [
          {
            h4text: 'Snapmaker Luban 4.0 User Manual ',
            aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker2F/download/f_luban.png',//require('../../../assets/newImg/snapmaker2F/download/f_luban.png'),
            aHref: 'https://support.snapmaker.com/hc/en-us/articles/4406229926935',
          },
        ],
      },
  },

  rotary: {
    containerCon: {
      h2text: 'Downloads',
      breadcrumb1: 'Home',
      breadcrumb2: 'Support',
      breadcrumb3: 'Downloads',
      bgSourceSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-cover-mobile.png',
      bgImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-cover.png',
    },
    softwareCon: {
      columnLeftImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-software.png',
      columnRight: {
        h2text: 'Snapmaker Luban',
        h3text: 'The most easy-to-use 3-in-1 Software',
        buttonCon: [
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-x64.exe',
            iClass: 'windows',
            iText: 'Download for Win 64 bit',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-ia32.exe',
            iClass: 'windows',
            iText: 'Download for Win 32 bit',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-mac-x64.dmg',
            iClass: 'apple',
            iText: 'Download for Mac',
          },
        ],
        h4textPre: 'This is Version ',
        h4textNext: ' (stable release). You can download previous version or the Ubuntu version from our',
        h4AHref: 'https://github.com/Snapmaker/Luban/releases',
        snapmakerjsVersion: '3.1.0',
        h4AText: 'GitHub',
        h4ATextLast: ' page.',
      },
    },
    additionalSoftware: {
      h2text: 'Additional Files for the Software',
      buttonText: 'Download',
      githubImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_github_30x30@2x.png',
      iconImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_pc_download_30x30@2x.png',
      columnData: [
        {
          title: 'CH340 Driver for macOS Mojave 10.14 or later',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          title: 'CH340 Driver for Windows',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          title: 'Configuration Files & Tool Libraries',
          content: `Download and set up the configuration files for generating G-code on third-party CAD / CAM software.
              Supported software: Fusion 360, FreeCAD, ArtCAM, Aspire, and more to be added.`,
          githubHref: 'https://github.com/Snapmaker/snapmaker_cnc_post_process/',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
         },
      ],
      columnsCon: [
        {
          h2text: 'CH340 Driver for macOS Mojave 10.14 or later',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          h2text: 'Configuration Files for Fusion 360',
          h6text:  '2021-01-20',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
        }
      ],
      columnsConSpe:[
        {
          h2text: 'CH340 Driver for Windows',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          h2text: 'Firmware: Snapmaker2_V',
          h6text: '2020-01-05',
          downloadFirmwareLast: 'history versions',
          forumLink: 'forum.',
          toolheadTip1:  'Please read this',
          toolheadTipText: 'article',
          toolheadTip2:  'before you upgrade the firmware to V1.12.0.',
          toolheadTipLink: 'https://forum.snapmaker.com/t/upgrade-the-toolheads-separately-with-snapmaker-firwmare-v1-12-0/17402',
          content: 'This is the latest release of the Snapmaker 2.0 firmware V',
          contentNext: '. Previous releases can be downloaded from our',
          link: 'https://forum.snapmaker.com/t/snapmaker-2-0-firmware-updates-and-downloads/5443',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/firmware/Snapmaker2_V1.7.0.0.zip',
        },
      ],
    },
    quickStartGuide: {
      h2text: 'Quick Start Guide',
      aText: 'Read',
      columnsCon: [
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
            h2text: 'Quick Start Guide for Rotary Module',
            divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/rotary-guide.png',
            aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/Snapmaker2_Rotary_Module_EN_V1.0.0.pdf',
          }
      ],
    },

    softwareGuide: {
      h2text: 'User Manuals',
      guide: 'User Manuals',
      columnsCon: [
        {
          h4text: 'CNC Carving',
          aHref: 'https://snapmaker.zendesk.com/hc/en-us/articles/1500001930021',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/CNC-manual.png',
        },
        {
          h4text: 'Laser Engraving and Cutting',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/laser-manual.png',
          aHref: 'https://snapmaker.zendesk.com/hc/en-us/articles/360060595414',
        },
      ],
     },
  },

  highLaser: {
    containerCon: {
      h2text: 'Downloads',
      breadcrumb1: 'Home',
      breadcrumb2: 'Support',
      breadcrumb3: 'Downloads',
      bgSourceSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-cover-mobile.png',
      bgImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-cover.png',
    },
    softwareCon: {
      columnLeftImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-software.png',
      columnRight: {
        h2text: 'Snapmaker Luban',
        h3text: 'The most easy-to-use 3-in-1 Software',
        workshopTip: 'Turn Your Desktop Into A Workshop',
        buttonCon: [
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-x64.exe',
            iClass: 'windows',
            iText: 'Download for Win 64 bit',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-ia32.exe',
            iClass: 'windows',
            iText: 'Download for Win 32 bit',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-mac-x64.dmg',
            iClass: 'apple',
            iText: 'Download for Mac',
          },
        ],
        h4textPre: 'This is Version ',
        h4textNext: ' (stable release). You can download previous versions or the Ubuntu version from our',
        h4AHref: 'https://github.com/Snapmaker/Luban/releases',
        snapmakerjsVersion: '3.1.0',
        h4AText: 'GitHub',
        h4ATextLast: ' page.',
      },
    },
    additionalSoftware: {
      h2text: 'Additional Files for the Software',
      buttonText: 'Download',
      githubImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_github_30x30@2x.png',
      iconImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_pc_download_30x30@2x.png',
      columnData: [
        {
          title: 'CH340 Driver for macOS Mojave 10.14 or later',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          title: 'CH340 Driver for Windows',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          title: 'Configuration Files & Tool Libraries',
          content: `Download and set up the configuration files for generating G-code on third-party CAD / CAM software.
              Supported software: Fusion 360, FreeCAD, ArtCAM, Aspire, and more to be added.`,
          githubHref: 'https://github.com/Snapmaker/snapmaker_cnc_post_process/',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
         },
      ],
      columnsCon: [
        {
          h2text: 'CH340 Driver for macOS Mojave 10.14 or later',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          h2text: 'Configuration Files for Fusion 360',
          h6text:  '2021-01-20',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
        }
      ],
      columnsConSpe:[
        {
          h2text: 'CH340 Driver for Windows',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          h2text: 'Firmware: Snapmaker2_V',
          h6text: '2020-01-05',
          downloadFirmwareLast: 'history versions',
          forumLink: 'forum.',
          toolheadTip1:  'Please read this',
          toolheadTipText: 'article',
          toolheadTip2:  'before you upgrade the firmware to V1.12.0.',
          toolheadTipLink: 'https://forum.snapmaker.com/t/upgrade-the-toolheads-separately-with-snapmaker-firwmare-v1-12-0/17402',
          content: 'This is the latest release of the Snapmaker 2.0 firmware V',
          contentNext: '. Previous releases can be downloaded from our',
          link: 'https://forum.snapmaker.com/t/snapmaker-2-0-firmware-updates-and-downloads/5443',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/firmware/Snapmaker2_V1.7.0.0.zip',
        },
      ],
    },
    quickStartGuide: {
      h2text: 'Quick Start Guide',
      aText: 'Read',
      columnsCon: [
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for 10W High Power Laser Module',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/high_power_laser_qsg.jpg',
          aHref: 'https://s3.us-west-2.amazonaws.com/snapmaker.com/download/manual/10W_Laser_Module_EN_V1.0.0.pdf',
        }
      ],
    },
    softwareGuide: {
      h2text: 'User Manual',
      guide: 'User Manual',
      columnsCon: [
        {
          h4text: 'User Manual for 10W High Power Laser Module',
          aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/download/hight_laser_um.jpg',
          aHref: 'https://support.snapmaker.com/hc/en-us/articles/4420456676887-10W-Laser-Module-EN-V1-0-0',
        },
      ],
    },
  },

  enclosureFilter:{
    containerCon: {
      h2text: 'Downloads',
      breadcrumb1: 'Home',
      breadcrumb2: 'Support',
      breadcrumb3: 'Downloads',
      bgSourceSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-cover-mobile.png',
      bgImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-cover.png',
    },
    softwareCon: {
      columnLeftImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-software.png',
      columnRight: {
        h2text: 'Snapmaker Luban',
        workshopTip: 'Turn Your Desktop Into A Workshop',
        h3text: 'The most easy-to-use 3-in-1 Software',
        buttonCon: [
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-x64.exe',
            iClass: 'windows',
            iText: 'Download for Win 64 bit',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-ia32.exe',
            iClass: 'windows',
            iText: 'Download for Win 32 bit',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-mac-x64.dmg',
            iClass: 'apple',
            iText: 'Download for Mac',
          },
        ],
        h4textPre: 'This is Version ',
        h4textNext: ' (stable release). You can download previous version or the Ubuntu version from our',
        h4AHref: 'https://github.com/Snapmaker/Luban/releases',
        snapmakerjsVersion: '3.1.0',
        h4AText: 'GitHub',
        h4ATextLast: ' page.',
      },
    },
    additionalSoftware: {
      h2text: 'Additional Files for the Software',
      buttonText: 'Download',
      githubImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_github_30x30@2x.png',
      iconImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_pc_download_30x30@2x.png',
      columnData: [
        {
          title: 'CH340 Driver for macOS Mojave 10.14 or later',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          title: 'CH340 Driver for Windows',
          content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          title: 'Configuration Files & Tool Libraries',
          content: `Download and set up the configuration files for generating G-code on third-party CAD / CAM software.
              Supported software: Fusion 360, FreeCAD, ArtCAM, Aspire, and more to be added.`,
          githubHref: 'https://github.com/Snapmaker/snapmaker_cnc_post_process/',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
         },
      ],
      columnsCon: [
        {
          h2text: 'CH340 Driver for macOS Mojave 10.14 or later',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          h2text: 'Configuration Files for Fusion 360',
          h6text:  '2021-01-20',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
        }
      ],
      columnsConSpe:[
        {
          h2text: 'CH340 Driver for Windows',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          h2text: 'Firmware: Snapmaker2_V',
          h6text: '2020-01-05',
          downloadFirmwareLast: 'history versions',
          forumLink: 'forum.',
          toolheadTip1:  'Please read this',
          toolheadTipText: 'article',
          toolheadTip2:  'before you upgrade the firmware to V1.12.0.',
          toolheadTipLink: 'https://forum.snapmaker.com/t/upgrade-the-toolheads-separately-with-snapmaker-firwmare-v1-12-0/17402',
          content: 'This is the latest release of the Snapmaker 2.0 firmware V',
          contentNext: '. Previous releases can be downloaded from our',
          link: 'https://forum.snapmaker.com/t/snapmaker-2-0-firmware-updates-and-downloads/5443',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/firmware/Snapmaker2_V1.7.0.0.zip',
        },
      ],
    },
    quickStartGuide: {
      h2text: 'Quick Start Guides',
      aText: 'Read',
      columnsCon: [
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for A150 Enclosure',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/A150-Enclosure-V1.0.0.pdf',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-enclosure-A150.png',
        },
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for A250/A350 Enclosure',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-snapmaker2.0-enclosure-A250.png',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/A250-Enclosure-V1.0.0.pdf',
        },
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for Air Purifier',
          divImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-air-purifier.png',
          aHref: 'https://s3.us-west-2.amazonaws.com/snapmaker.com/download/manual/Snapmaker2_Air+Purifier_EN_V1.0.0.pdf',
        }
      ],
    },

    // softwareGuide: {
    //   h2text: 'User Manuals',
    //   guide: 'User Manuals',
    //   columnsCon: [
    //     {
    //       h4text: 'CNC Carving',
    //       aHref: 'https://snapmaker.zendesk.com/hc/en-us/articles/1500001930021',
    //       aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/CNC-manual.png',
    //     },
    //     {
    //       h4text: 'Laser Engraving and Cutting',
    //       aSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/laser-manual.png',
    //       aHref: 'https://snapmaker.zendesk.com/hc/en-us/articles/360060595414',
    //     },
    //   ],
    //  }, 
  },

  originalContent: [
    {
      img: 'https://ditfjx9w4x3vl.cloudfront.net/img/support-snapmaker-original-cover.png',
      key: 1,
      h3: 'Snapmaker Original',
      buynow: 'Learn More',
      aHref: '/download/snapmaker1',
    },
    {
      img: 'https://ditfjx9w4x3vl.cloudfront.net/img/support-snapmaker-2.0-cover.png',
      key: 2,
      h3: 'Snapmaker 2.0',
      buynow: 'Learn More',
      aHref: '/download/snapmaker2',
    },
  ],
  containerCon: {
    h2text: 'Downloads',
    breadcrumb1: 'Home',
    breadcrumb2: 'Support',
    breadcrumb3: 'Downloads',
    bgSourceSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-m-bg.jpg',
    bgImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/download-bg.png',
  },
  warningCon: {
      support: `Snapmaker Luban for Windows 32bit computers does not support 3D Printing slicing.`,
      download: `Please download Snapmakerjs
       V2.5.2 for this feature.`,
  },
  opensourceContent: {
      title: `The Free, Open Source, and 3-in-1 Software`,
      mobileTitle: `The Free, Open Source, and 3-in-1 Software`,
      button: `Learn more`,
      buttonHref: 'https://luban.xyz/',
      imageMobile: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_open source bg_328x100.png',
      image: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_open source bg_1112x180@2x.png',
  }
};
