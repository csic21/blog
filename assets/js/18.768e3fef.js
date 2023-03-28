(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{501:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("原来使用 jquery 的项目重构，正好拆分模块，使用 umi 加 qiankun 进行重构")])]),s._v(" "),a("h1",{attrs:{id:"umi-以及-qiankun-的使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#umi-以及-qiankun-的使用方法"}},[s._v("#")]),s._v(" umi 以及 qiankun 的使用方法")]),s._v(" "),a("h2",{attrs:{id:"_1-先搭建-umi-项目，这里就不概述了，详情请访问官网umi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-先搭建-umi-项目，这里就不概述了，详情请访问官网umi"}},[s._v("#")]),s._v(" 1. 先搭建 umi 项目，这里就不概述了，详情请访问官网"),a("a",{attrs:{href:"https://umijs.org/zh-CN/docs",target:"_blank",rel:"noopener noreferrer"}},[s._v("umi"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_2-安装-umi-集成的-qiankun-插件-umijs-plugin-qianku"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-umi-集成的-qiankun-插件-umijs-plugin-qianku"}},[s._v("#")]),s._v(" 2. 安装 umi 集成的 qiankun 插件 "),a("a",{attrs:{href:"https://umijs.org/zh-CN/plugins/plugin-qiankun",target:"_blank",rel:"noopener noreferrer"}},[s._v("@umijs/plugin-qianku"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("code",[s._v("yarn add @umijs/plugin-qiankun -D")])]),s._v(" "),a("h2",{attrs:{id:"_3-使用官方推荐的路由绑定方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用官方推荐的路由绑定方式"}},[s._v("#")]),s._v(" 3. 使用官方推荐的路由绑定方式")]),s._v(" "),a("p",[s._v("载入应用地址在 config 或者 umirc.(js/ts)下设置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// config.xx.ts\nexport default {\n  qiankun: {\n    master: {\n      // 注册子应用信息\n      apps: [\n        {\n          name: 'app1', // 唯一 id\n          entry: '//localhost:7001', // html entry\n        },\n        {\n          name: 'app2', // 唯一 id\n          entry: '//localhost:7002', // html entry\n        },\n      ],\n    },\n  },\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"路由配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由配置"}},[s._v("#")]),s._v(" 路由配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// router.ts\nexport default {\n\troutes: [\n    {\n      path: '/',\n      component: '../layouts/index.js',\n      routes: [\n        {\n          path: '/app1',\n          component: './app1/index.js',\n          routes: [\n            {\n              path: '/app1/user',\n              component: './app1/user/index.js',\n            },\n+            // 配置微应用 app1 关联的路由\n+            {\n+              path: '/app1/project',\n+              microApp: 'app1',\n+            },\n          ],\n        },\n+       // 配置 app2 关联的路由\n+       {\n+         path: '/app2',\n+         microApp: 'app2'\n+       },\n        {\n          path: '/',\n          component: './index.js',\n        },\n      ],\n    },\n  ],\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h3",{attrs:{id:"这样子应用就可以通过主应用的路由进行访问了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这样子应用就可以通过主应用的路由进行访问了"}},[s._v("#")]),s._v(" 这样子应用就可以通过主应用的路由进行访问了")]),s._v(" "),a("h2",{attrs:{id:"_4-父子应用通讯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-父子应用通讯"}},[s._v("#")]),s._v(" 4. 父子应用通讯")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// src/app.ts\nexport function useQiankunStateForSlave() {\n  const [masterState, setMasterState] = useState({});\n\n  return {\n    masterState,\n    setMasterState,\n  };\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("官方说了如何在路由绑定的模式下如何进行父组件向着子组件传递")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import { useModel } from 'umi';\n\nfunction MyPage() {\n  const masterProps = useModel('@@qiankunStateFromMaster');\n  return <div>{JSON.stringify(masterProps)}</div>;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这里有一个问题，并没有说父组件如何改变自身的属性，也就是没有告知如何在父组件修改"),a("code",[s._v("masterState")]),a("br"),s._v("\n这里其实原理一样只不过要将"),a("code",[s._v("'@@qiankunStateFromMaster'")]),s._v("改为"),a("code",[s._v("'@@qiankunStateForSlave'")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import { useModel } from 'umi';\n\nfunction MyPage() {\n  const masterProps = useModel('@@qiankunStateFromSlave');\n  return <div>{JSON.stringify(masterProps)}</div>;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_5-项目打包配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-项目打包配置"}},[s._v("#")]),s._v(" 5. 项目打包配置")]),s._v(" "),a("p",[a("strong",[a("em",[s._v("首先子应用要将 css、font、img 资源打包,这里举个例子,其他资源也是一样的")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import { defineConfig } from 'umi';\n\nexport default defineConfig({\n  ...\n  chainWebpack(config) {\n    config.module.rule('TTF').test(/.TTF$/).use('file-loader').loader('file-loader');\n    const imgRule = config.module.rule('images');\n    imgRule.uses.clear();\n    imgRule\n      .test(/\\.(png|jpe?g|gif|webp|svg)(\\?.*)?$/)\n      .use('url-loader')\n      .loader('url-loader')\n      .options({\n        limit: 4096, // 小于4kb将会被打包成 base64\n        fallback: {\n          loader: 'file-loader',\n          options: {\n            name: 'img/[name].[hash:8].[ext]',\n            publicPath: this.publicPath,\n          },\n        },\n      });\n  },\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"其次是子应用的公共前缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其次是子应用的公共前缀"}},[s._v("#")]),s._v(" 其次是子应用的公共前缀")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export default {\n  define: {\n    // 全局变量\n  },\n  publicPath: '/micro/',\n  targets: {\n    ie: 11,\n  },\n};\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" nginx 配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    server{\n        # 主应用地址里填写这个server的域名以及端口这里我只随便写的一个（root后需要跟一个斜杠）\n        listen 8001;\n        location / {\n            root /usr/share/nginx/html/microApp/;\n            try_files $uri $uri/ /index.html;\n            index  index.html index.htm;\n            autoindex on;\n\t    }\n    }\n    server {\n        listen 80;\n        # 这里一定要和 公共前缀配置的publicPath一样（micro后面不需要斜杠）\n        location /micro {\n        proxy_pass http://127.0.0.1:8001/;\n\n        ssi on;\n        ssi_types text/shtml;\n        ssi_value_length 512;\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"_6-其他问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他问题"}},[s._v("#")]),s._v(" 6. 其他问题")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"关于子应用动态加载路径错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于子应用动态加载路径错误"}},[s._v("#")]),s._v(" 关于子应用动态加载路径错误")])])]),s._v(" "),a("p",[s._v("在开启"),a("a",{attrs:{href:"https://umijs.org/zh-CN/config#dynamicimport",target:"_blank",rel:"noopener noreferrer"}},[s._v("dynamicImport"),a("OutboundLink")],1),s._v("按需加载配置时，由于"),a("code",[s._v("@umijs/plugin-qianku")]),s._v("插件会自动在运行时添加runtimePublicPath因此需要在子应用的配置文件里进行关闭")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// config.ts\nexport default defineConfig({\n    ...\n    runtimePublicPath: false,\n    ...\n});\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("总结一下，首先子应用需要在配置中先配置好"),a("code",[s._v("publicPath")]),s._v("这个属性，其次是对于资源文件使用"),a("code",[s._v("file-loader")]),s._v("和"),a("code",[s._v("url-loader")]),s._v("保证路径不会出错，如果需要开启按需加载，择需要手动关闭"),a("code",[s._v("runtimePublicPath")]),s._v("。以上情况是指在本地部署时才需要做的配置。")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"关于在非本地部署时的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于在非本地部署时的配置"}},[s._v("#")]),s._v(" 关于在非本地部署时的配置")])])]),s._v(" "),a("p",[s._v("通常可以将项目生成的文件上传至OSS通过CDN访问，这样做的好处，首先通过CDN可以增加访问速度，远端服务器容灾会比部署在本地要好得多。其次免去了配置前缀的问题，由于配置前缀需要nginx，umi的配置文件互相配合，如果忽略了某一处，容易导致项目无法顺利运行。\n可以使用"),a("a",{attrs:{href:"https://github.com/borenXue/webpack-alioss-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack-alioss-plugin"),a("OutboundLink")],1),s._v("上传，配置起来比较简单。这里需要注意通知运维人员开启oss的跨域请求。")])])}),[],!1,null,null,null);n.default=t.exports}}]);