(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7114"],{"3Yxf":function(t,e,n){"use strict";var o=n("V3us");n.n(o).a},"7Tqo":function(t,e,n){"use strict";n.r(e);var o={name:"vue-header",data:function(){return{options:[{label:"首页",value:"index"},{label:"产品",value:"product"},{label:"服务",value:"service"},{label:"团队",value:"team"},{label:"案例",value:"solution"},{label:"关于",value:"about"}],option:"index"}},methods:{link:function(){this.$router.push({path:"/"+this.option})}}},l=(n("3Yxf"),n("ZpG+")),a=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"bg-black"},[n("el-row",{staticClass:"nav"},[n("router-link",{attrs:{to:"/index"}},[n("el-col",{attrs:{span:2,offset:3}},[t._v("首页")])],1),t._v(" "),n("router-link",{attrs:{to:"/product"}},[n("el-col",{attrs:{span:2,offset:1}},[t._v("产品")])],1),t._v(" "),n("router-link",{attrs:{to:"/service"}},[n("el-col",{attrs:{span:2,offset:1}},[t._v("服务")])],1),t._v(" "),n("router-link",{attrs:{to:"/team"}},[n("el-col",{attrs:{span:2,offset:1}},[t._v("团队")])],1),t._v(" "),n("router-link",{attrs:{to:"/solution"}},[n("el-col",{attrs:{span:2,offset:1}},[t._v("案例")])],1),t._v(" "),n("router-link",{attrs:{to:"/about"}},[n("el-col",{attrs:{span:2,offset:1}},[t._v("关于")])],1)],1)],1),t._v(" "),n("div",{staticClass:"select"},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:t.link},model:{value:t.option,callback:function(e){t.option=e},expression:"option"}},t._l(t.options,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)])],1)},[],!1,null,null,null).exports,s={name:"vue-content"},r=Object(l.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("router-view")},[],!1,null,null,null).exports,i={name:"vue-footer"},u=(n("i8RH"),{data:function(){return{}},components:{vueHeader:a,vueContent:r,vueFooter:Object(l.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticClass:"footer"},[o("el-col",{attrs:{span:10,offset:4}},[o("div",{staticClass:"content"},[o("p",[t._v("联系我们")]),t._v(" "),o("p",{staticStyle:{"font-size":"18px"}},[t._v("广东朝阳全网通科技有限公司")]),t._v(" "),o("p",[t._v("东莞：中国广东省东莞市莞城区旗峰路168号中侨大厦")]),t._v(" "),o("p",[t._v("电话：0769-88770111")])])]),t._v(" "),o("el-col",{attrs:{span:9,offset:1}},[o("div",{staticClass:"tel content"},[o("img",{attrs:{src:n("PV5D"),alt:""}})])])],1)},[],!1,null,null,null).exports},mounted:function(){},methods:{}}),c=Object(l.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"layout"}},[e("vueHeader",{staticStyle:{position:"fixed",width:"100%",top:"0px","z-index":"999"}}),this._v(" "),e("vueContent",{staticStyle:{"margin-top":"80px","z-index":"998"}}),this._v(" "),e("vueFooter",{staticStyle:{"z-index":"998"}})],1)},[],!1,null,"153beff7",null);e.default=c.exports},PV5D:function(t,e,n){t.exports=n.p+"static/img/code.cc6e864.jpg"},"T/Gd":function(t,e,n){},V3us:function(t,e,n){},i8RH:function(t,e,n){"use strict";var o=n("T/Gd");n.n(o).a}}]);