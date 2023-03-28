(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{497:function(s,e,n){"use strict";n.r(e);var a=n(4),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("在 umi 框架中发现结合 ant design 无法缓存表格或页面，因此在这里总结一下目前所使用的方案")])]),s._v(" "),n("h2",{attrs:{id:"react-activation-结合-umi-缓存页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-activation-结合-umi-缓存页面"}},[s._v("#")]),s._v(" react-activation 结合 umi 缓存页面")]),s._v(" "),n("h3",{attrs:{id:"使用原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用原因"}},[s._v("#")]),s._v(" 使用原因")]),s._v(" "),n("p",[s._v("由于 ant design 的表格并没有带有缓存功能,导致在表格中打开其他页面将造成返回时页面刷新的问题。因此引入开源插件 react-activation 来做页面的缓存")]),s._v(" "),n("h3",{attrs:{id:"结合-umi-使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结合-umi-使用方法"}},[s._v("#")]),s._v(" 结合 umi 使用方法")]),s._v(" "),n("h3",{attrs:{id:"_1-使用-npm-或者-yarn-安装插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-npm-或者-yarn-安装插件"}},[s._v("#")]),s._v(" 1. 使用 npm 或者 yarn 安装插件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yarn add react-activation\n# or\nnpm install react-activation\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-在-umi-中进行配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-umi-中进行配置"}},[s._v("#")]),s._v(" 2. 在 umi 中进行配置")]),s._v(" "),n("p",[s._v(".umirc.js 或者 config.js 中配置以下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  export default{\n    ...\n    extraBabelPlugins: ['react-activation/babel']\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_3-在-layout-中包裹标签来劫持-children"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-在-layout-中包裹标签来劫持-children"}},[s._v("#")]),s._v(" 3. 在 layout 中包裹"),n("AliveScope",[s._v("标签来劫持 children")])],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import { AliveScope } from 'react-activation';\nimport styles from './index.css';\n\nfunction BasicLayout(props) {\n  return (\n    <AliveScope>\n      <div className={styles.normal}>\n        {props.children}\n      </div>\n    </AliveScope>\n  );\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_4-在需要的页面使用缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-在需要的页面使用缓存"}},[s._v("#")]),s._v(" 4. 在需要的页面使用缓存")]),s._v(" "),n("p",[s._v("该组件官方的用法是通过"),n("KeepAlive",[s._v("标签包裹组件,但由于我们通常会在页面里进行数据的请求以至于还是会刷新页面,并且由于 umi 隐藏了路由。因此这里对官方的例子做了改动,可以在导出时用高阶函数进行包裹返回新的组件。")])],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import KeepAlive from 'react-activation'\nclass A extends Compontent{\n  ...\n}\nexport default props=>(\n  <>\n    <KeepAlive>\n      <A {...props} />\n    </KeepAlive>\n  </>\n)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_5-缓存控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-缓存控制"}},[s._v("#")]),s._v(" 5. 缓存控制")]),s._v(" "),n("p",[s._v("结合 umi 思路,可以在导航或者标签跳转时使用下方 clear 方法清空缓存中的 KeepAlive,之后可以结合 umi 插件能力来简化步骤。")]),s._v(" "),n("p",[s._v("①. 给需要控制缓存的 "),n("code",[s._v("<KeepAlive />")]),s._v(" 标签增加 "),n("code",[s._v("name")]),s._v(" 属性")]),s._v(" "),n("p",[s._v("②. 使用 "),n("code",[s._v("withAliveScope")]),s._v(" 或 "),n("code",[s._v("useAliveController")]),s._v(" 获取控制函数")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("drop(name)")]),s._v(":")]),s._v(" "),n("p",[s._v("按 name 卸载缓存状态下的 "),n("code",[s._v("<KeepAlive>")]),s._v(" 节点，name 可选类型为 "),n("code",[s._v("String")]),s._v(" 或 "),n("code",[s._v("RegExp")]),s._v("，注意，仅卸载命中 "),n("code",[s._v("<KeepAlive>")]),s._v(" 的第一层内容，不会卸载 "),n("code",[s._v("<KeepAlive>")]),s._v(" 中嵌套的、未命中的 "),n("code",[s._v("<KeepAlive>")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("dropScope(name)")])]),s._v(" "),n("p",[s._v("按 name 卸载缓存状态下的 "),n("code",[s._v("<KeepAlive>")]),s._v(" 节点，name 可选类型为 "),n("code",[s._v("String")]),s._v(" 或 "),n("code",[s._v("RegExp")]),s._v("，将卸载命中 "),n("code",[s._v("<KeepAlive>")]),s._v(" 的所有内容，包括 "),n("code",[s._v("<KeepAlive>")]),s._v(" 中嵌套的所有 "),n("code",[s._v("<KeepAlive>")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("clear()")])]),s._v(" "),n("p",[s._v("将清空所有缓存中的 KeepAlive")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("getCachingNodes()")])]),s._v(" "),n("p",[s._v("获取所有缓存中的节点")])])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("...\nimport KeepAlive, { withAliveScope, useAliveController } from 'react-activation'\n...\n<KeepAlive name=\"Test\">\n  ...\n    <KeepAlive>\n      ...\n        <KeepAlive>\n          ...\n        </KeepAlive>\n      ...\n    </KeepAlive>\n  ...\n</KeepAlive>\n...\nfunction App() {\n  const { drop, dropScope, clear, getCachingNodes } = useAliveController()\n\n  useEffect(() => {\n    drop('Test')\n    // or\n    drop(/Test/)\n    // or\n    dropScope('Test')\n\n    clear()\n  })\n\n  return (\n    ...\n  )\n}\n// or\n@withAliveScope\nclass App extends Component {\n  render() {\n    const { drop, dropScope, clear, getCachingNodes } = this.props\n\n    return (\n      ...\n    )\n  }\n}\n...\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br")])]),n("p",[s._v("插件以及参考资料来自"),n("a",{attrs:{href:"https://github.com/CJY0208/react-activation",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/CJY0208/react-activation"),n("OutboundLink")],1),s._v("更多使用方法可以进入查看本文只做自己使用部分的内容总结和归纳")])])}),[],!1,null,null,null);e.default=t.exports}}]);