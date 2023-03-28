(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{501:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"字符填充-padstart（可以在-1-12-月填充时使用）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符填充-padstart（可以在-1-12-月填充时使用）"}},[s._v("#")]),s._v(" 字符填充 padStart（可以在 1~12 月填充时使用）")]),s._v(" "),n("p",[s._v("String.prototype.padStart()")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const str1 = '5';\n\nconsole.log(str1.padStart(2, '0'));\n// expected output: \"05\"\n\nconst fullNumber = '2034399002125581';\nconst last4Digits = fullNumber.slice(-4);\nconst maskedNumber = last4Digits.padStart(fullNumber.length, '*');\n\nconsole.log(maskedNumber);\n// expected output: \"************5581\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"生成随机数-csprng"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成随机数-csprng"}},[s._v("#")]),s._v(" 生成随机数 CSPRNG")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function randomFloat() {\n    // 生成 32 位随机值\n    const fooArray = new Uint32Array(1);\n    // 最大值是 2^32 –1\n    const maxUint32 = 0xFFFFFFFF;\n    // 用最大可能的值来除\n    return crypto.getRandomValues(fooArray)[0] / maxUint32;\n}\nconsole.log(randomFloat());\n// 0.503365161945895\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"中断请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中断请求"}},[s._v("#")]),s._v(" 中断请求")]),s._v(" "),n("p",[s._v("Fetch API 支持通过 AbortController/AbortSignal 对中断请求。调用 AbortController.\nabort()会中断所有网络传输，特别适合希望停止传输大型负载的情况。中断进行中的 fetch()请求会\n导致包含错误的拒绝。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let abortController = new AbortController();\n\nfetch('wikipedia.zip', { signal: abortController.signal })\n.catch(() => console.log('aborted!');\n// 10 毫秒后中断请求\nsetTimeout(() => abortController.abort(), 10);\n// 已经中断\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);