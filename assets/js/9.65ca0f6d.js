(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{376:function(e,v,r){e.exports=r.p+"assets/img/youtube.3d47bd3c.png"},396:function(e,v,r){"use strict";r.r(v);var t=r(27),_=Object(t.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[e._v("#")]),e._v(" HTML")]),e._v(" "),t("p",[e._v("想了想, 还是将HTML模块抽一个出来, 的确也有一些平时会遇到稀奇古怪的东西值得一说.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#html"}},[e._v("HTML")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#common"}},[e._v("common")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#video"}},[e._v("video")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E8%A7%86%E9%A2%91%E9%A6%96%E5%B1%8F%E6%9C%80%E5%85%88%E5%8A%A0%E8%BD%BD%E6%96%B9%E6%B3%95"}},[e._v("视频首屏最先加载方法")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%BC%95%E7%94%A8%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%A4%B1%E8%B4%A5"}},[e._v("引用视频播放失败")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#video-api"}},[e._v("video api")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#pre-and-code"}},[e._v("pre and code")])])])])]),e._v(" "),t("h2",{attrs:{id:"common"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[e._v("#")]),e._v(" common")]),e._v(" "),t("p",[e._v("编写"),t("code",[e._v("HTML")]),e._v("的一些好习惯:")]),e._v(" "),t("p",[e._v("每个标签都有自己的语义，coding 时应该编写具有语义化的代码。这样方便小蜘蛛(搜索引擎)的抓取收录网站信息。")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("h1 ~ h6")]),e._v("表示标题. 不准滥用"),t("code",[e._v("h1")]),e._v("标签")]),e._v(" "),t("li",[t("code",[e._v("ul")]),e._v(" 标签多用于无序列表")]),e._v(" "),t("li",[t("code",[e._v("ol")]),e._v(" 标签用于有序列表")]),e._v(" "),t("li",[t("code",[e._v("dl")]),e._v(" 标签用于定义数据列表")]),e._v(" "),t("li",[t("code",[e._v("em")]),e._v("、"),t("code",[e._v("strong")]),e._v(" 表示强调等")])]),e._v(" "),t("p",[e._v("在模块化工程中，"),t("code",[e._v("<script>")]),e._v("标签加上了"),t("code",[e._v('type="ecmascript-6"')]),e._v("后, eslint 部分规则会失效。")]),e._v(" "),t("h2",{attrs:{id:"video"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[e._v("#")]),e._v(" video")]),e._v(" "),t("h3",{attrs:{id:"视频首屏最先加载方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频首屏最先加载方法"}},[e._v("#")]),e._v(" 视频首屏最先加载方法")]),e._v(" "),t("p",[e._v("如爱奇艺、优酷等以视频为核心的网站, 用户点击进来无非就像看视频. 在进行性能优化的时候, 理所当然的先让用户看到想要看到的东西(视频). 因此我们需要把视频和相关依赖文件等最先加载.")]),e._v(" "),t("p",[t("img",{attrs:{src:r(376),alt:"YouTube在网络慢的场景"}})]),e._v(" "),t("p",[e._v("但是浏览器会默认的将多媒体资源放在最后面加载, 无论你的标签在文档中放的多靠前. 这时的解决方案就是将"),t("code",[e._v("<script>")]),e._v("(初始化视频的js文件)改用为"),t("code",[e._v("<link>")]),e._v("标签引用.")]),e._v(" "),t("h3",{attrs:{id:"引用视频播放失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用视频播放失败"}},[e._v("#")]),e._v(" 引用视频播放失败")]),e._v(" "),t("p",[e._v("在一些业务中，会使用到第三方的视频链接。然后该链接的提供者或许会根据"),t("code",[e._v("referrer")]),e._v("来判断来源，进而拒绝请求，视频将无法播放。因此可以在页面首部加上"),t("code",[e._v('<meta name="referrer" content="no-referrer">')]),e._v(".")]),e._v(" "),t("p",[e._v("但引用该头部后可能会影响其他依赖"),t("code",[e._v("referrer")]),e._v("的功能。比如百度统计会追踪"),t("code",[e._v("referrer")]),e._v("，设置"),t("code",[e._v("no-referrer")]),e._v("后将无法再进行统计。")]),e._v(" "),t("p",[e._v("遇到 "),t("code",[e._v("403")]),e._v(", 通常是防盗链在作用。")]),e._v(" "),t("h3",{attrs:{id:"video-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#video-api"}},[e._v("#")]),e._v(" video api")]),e._v(" "),t("p",[e._v("playbackRate 控制播放速度")]),e._v(" "),t("h2",{attrs:{id:"pre-and-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-and-code"}},[e._v("#")]),e._v(" pre and code")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://anran758.github.io/blog/2019/08/24/js-%E5%B0%86JSON%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E8%BE%93%E5%87%BA%E8%87%B3%E9%A1%B5%E9%9D%A2%E4%B8%8A/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pre 和 Code 标签之间的区别"),t("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=_.exports}}]);