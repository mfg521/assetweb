webpackJsonp([3],{"4T1v":function(t,e){},"7YIv":function(t,e){},"9Twn":function(t,e){},FmOo:function(t,e){},GImf:function(t,e){},"Igi/":function(t,e){},KwlU:function(t,e){},L87m:function(t,e){},ZHlz:function(t,e){},d6ZN:function(t,e){},oShF:function(t,e){},ojoC:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("4YfN"),o=s.n(i),a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("商标转让")])},staticRenderFns:[]};var n=s("vSla")({name:"TmkExchange"},a,!1,function(t){s("FmOo")},"data-v-6969a0c6",null).exports,r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("商标续展")])},staticRenderFns:[]};var c=s("vSla")({name:"TmkExtension"},r,!1,function(t){s("oShF")},"data-v-07139efd",null).exports,l=s("9rMa"),p={name:"TmkRequset",data:function(){return{summery:["12小时极速申报，推荐专业代理机构选择此项服务，所有商标申请材料由代理机构自行制作完成，通过平台上传由标掌柜代报，申请进度反馈：商标受理、初审公告、核准注册信息提醒及商标流程全程电子化管理。","8小时极速申报，专属顾问代为制作提交申请材料，一对一服务，一键委托办理，方便、快捷、省心；申请进度反馈：商标受理、初审公告、核准注册信息提醒及商标流程全程电子化管理。","5个小时瞬时申报；专属顾问代为制作提交申请材料，一对一服务，提供详细的注册建议及检索风险分析；一键委托办理，方便、快捷、省心；申请进度反馈：商标受理、初审公告、核准注册信息提醒及商标流程全程电子化管理。","商标注册如遇驳回，全程赔付1800元/件；5个小时瞬时申报；专属顾问代为制作提交申请材料，一对一服务，提供详细的注册建议及检索报告；一键委托办理，方便、快捷、省心； 申请进度反馈：商标受理、初审公告、核准注册信息提醒及商标流程全程电子化管理。"],requestType:"-1",shopnum:-1,ordernum:-1,choiceMCB:!0,choiceInvoice:!1,invoidceFare:.3,basePrice:300,totalPrice:0,simplePrice:0,price:[15,99,699,1500],businessTypeMark:["自助商标注册","省心商标注册","无忧商标注册","担保商标注册"]}},methods:o()({init:function(){this.shopnum=10,this.ordernum=1,this.choiceMCB=!1,this.requestType="0",this.choiceInvoice=!1},getTotalPrice:function(){this.simplePrice=this.basePrice+this.price[this.requestType],this.totalPrice=this.simplePrice,this.settotalPrice(this.totalPrice),this.setSimplePrice(this.simplePrice)}},Object(l.d)(["setrequestType","setshopnum","setordernum","setbasePrice","settotalPrice","setchoiceMCB","setchoiceInvoice","setrequestTypeMark","setSimplePrice"])),watch:{shopnum:function(){this.basePrice=30*this.shopnum,this.totalPrice=(this.basePrice+this.price[this.requestType]+(this.choiceMCB?98:0))*this.ordernum,this.totalPrice=this.totalPrice+(this.choiceInvoice?this.totalPrice*this.invoidceFare:0),this.setbasePrice(this.basePrice),this.setshopnum(this.shopnum),this.settotalPrice(this.totalPrice)},ordernum:function(){this.totalPrice=(this.basePrice+this.price[this.requestType]+(this.choiceMCB?98:0))*this.ordernum,this.totalPrice=this.totalPrice+(this.choiceInvoice?this.totalPrice*this.invoidceFare:0),this.setordernum(this.ordernum),this.settotalPrice(this.totalPrice)},choiceInvoice:function(){this.totalPrice=(this.basePrice+this.price[this.requestType]+(this.choiceMCB?98:0))*this.ordernum,this.totalPrice=this.totalPrice+(this.choiceInvoice?this.totalPrice*this.invoidceFare:0),this.settotalPrice(this.totalPrice),this.setchoiceInvoice(this.choiceInvoice)},choiceMCB:function(){this.totalPrice=(this.basePrice+this.price[this.requestType]+(this.choiceMCB?98:0))*this.ordernum,this.totalPrice=this.totalPrice+(this.choiceInvoice?this.totalPrice*this.invoidceFare:0),this.settotalPrice(this.totalPrice),this.setchoiceMCB(this.choiceMCB)},requestType:function(){this.getTotalPrice(),this.setrequestType(this.requestType),this.setrequestTypeMark(this.businessTypeMark[this.requestType])}},mounted:function(){this.init(),this.getTotalPrice(),this.setrequestTypeMark(this.businessTypeMark[0])},computed:{}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Row",[s("RadioGroup",{attrs:{type:"button"},model:{value:t.requestType,callback:function(e){t.requestType=e},expression:"requestType"}},[s("Radio",{attrs:{label:"0"}},[t._v(t._s(t.businessTypeMark[0]))]),t._v(" "),s("Radio",{attrs:{label:"1"}},[t._v(t._s(t.businessTypeMark[1]))]),t._v(" "),s("Radio",{attrs:{label:"2"}},[t._v(t._s(t.businessTypeMark[2]))]),t._v(" "),s("Radio",{attrs:{label:"3"}},[t._v(t._s(t.businessTypeMark[3]))])],1)],1),t._v(" "),s("br"),t._v(" "),s("Row",[s("Col",{staticStyle:{width:"550px"},attrs:{span:10}},[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("服务简介:")]),t._v(" "),s("p",{staticStyle:{"text-indent":"2em"}},[t._v(t._s(t.summery[t.requestType]))])])],1),t._v(" "),s("Row",[s("p",{staticStyle:{"font-size":"10px","margin-top":"5px"}},[t._v("注：5小时是指工作日内 从材料审核通过到递交完成时间不超过5小时。")])]),t._v(" "),s("br"),t._v(" "),s("Row",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("基础官费：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"15px","font-weight":"bold"}},[t._v(t._s(t.basePrice))]),t._v(" "),s("span",[t._v("元")])]),t._v(" "),s("br"),t._v(" "),s("Row",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("服务费用：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"15px","font-weight":"bold"}},[t._v(t._s(t.price[t.requestType]))]),t._v(" "),s("span",[t._v("元")])]),t._v(" "),s("br"),t._v(" "),s("Row",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("商品个数：")]),t._v(" "),s("InputNumber",{attrs:{min:10,max:100},model:{value:t.shopnum,callback:function(e){t.shopnum=e},expression:"shopnum"}}),t._v(" "),s("span",[t._v("个")]),t._v(" "),s("span",{staticStyle:{"margin-left":"5px","font-size":"12px"}},[t._v("*最低10个，超出10个按30元每个结算")])],1),t._v(" "),s("br"),t._v(" "),s("Row",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("订单个数：")]),t._v(" "),s("InputNumber",{attrs:{min:1,max:20},model:{value:t.ordernum,callback:function(e){t.ordernum=e},expression:"ordernum"}}),t._v(" "),s("span",[t._v("个")]),t._v(" "),s("span",{staticStyle:{"margin-left":"5px","font-size":"12px"}},[t._v("*如选多个订单，则每个订单的总费用一致")])],1),t._v(" "),s("br"),t._v(" "),s("Row",[s("Checkbox",{model:{value:t.choiceMCB,callback:function(e){t.choiceMCB=e},expression:"choiceMCB"}},[t._v("是否选择盲查宝，98元\n      （如购买盲查险，商标注册如遇盲查期驳回，赔付600元/件）")])],1),t._v(" "),s("br"),t._v(" "),s("Row",[s("Checkbox",{model:{value:t.choiceInvoice,callback:function(e){t.choiceInvoice=e},expression:"choiceInvoice"}},[t._v("是否需要发票\n      （如需发票，将收取30%的手续费）")])],1),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("Row",[s("Col",{staticStyle:{width:"250px"},attrs:{span:5}},[s("span",{staticStyle:{"font-weight":"bold","font-size":"16px"}},[t._v("订单总价格：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px","font-weight":"900"}},[t._v(t._s(t.totalPrice))]),t._v(" "),s("span",{staticStyle:{"font-weight":"bold","font-size":"16px"}},[t._v("元")])])],1)],1)},staticRenderFns:[]};var h=s("vSla")(p,v,!1,function(t){s("9Twn")},"data-v-27651b58",null).exports,d={name:"TmkUpdate",data:function(){return{basePrice:250,serviceprice:100,ordernum:1,totalPrice:0,choiceInvoice:!1,invoidceFare:.3,simplePrice:0}},methods:o()({init:function(){this.ordernum=1,this.choiceInvoice=!1}},Object(l.d)(["setordernum","settotalPrice","setchoiceInvoice","setSimplePrice"])),watch:{ordernum:function(){this.totalPrice=(this.basePrice+this.serviceprice)*this.ordernum,this.setordernum(this.ordernum),this.settotalPrice(this.totalPrice)},choiceInvoice:function(){this.totalPrice=(this.basePrice+this.serviceprice)*this.ordernum,this.totalPrice=this.totalPrice+(this.choiceInvoice?this.totalPrice*this.invoidceFare:0),this.setchoiceInvoice(this.choiceInvoice),this.settotalPrice(this.totalPrice)}},mounted:function(){this.totalPrice=(this.basePrice+this.serviceprice)*this.ordernum,this.simplePrice=this.basePrice+this.serviceprice,this.settotalPrice(this.totalPrice),this.setSimplePrice(this.simplePrice)}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Row",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("基础官费：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"15px","font-weight":"bold"}},[t._v(t._s(t.basePrice))]),t._v(" "),s("span",[t._v("元")])]),t._v(" "),s("br"),t._v(" "),s("Row",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("服务费用：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"15px","font-weight":"bold"}},[t._v(t._s(t.serviceprice))]),t._v(" "),s("span",[t._v("元")])]),t._v(" "),s("br"),t._v(" "),s("Row",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("订单个数：")]),t._v(" "),s("InputNumber",{attrs:{min:1,max:20},model:{value:t.ordernum,callback:function(e){t.ordernum=e},expression:"ordernum"}}),t._v(" "),s("span",[t._v("个")]),t._v(" "),s("span",{staticStyle:{"margin-left":"5px","font-size":"12px"}},[t._v("*如选多个订单，则每个订单的总费用一致")])],1),t._v(" "),s("br"),t._v(" "),s("Row",[s("Checkbox",{model:{value:t.choiceInvoice,callback:function(e){t.choiceInvoice=e},expression:"choiceInvoice"}},[t._v("是否需要发票\n      （如需发票，将收取30%的手续费）")])],1),t._v(" "),s("br"),t._v(" "),s("Row",[s("Col",{staticStyle:{width:"250px"},attrs:{span:5}},[s("span",{staticStyle:{"font-weight":"bold","font-size":"16px"}},[t._v("订单总价格：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px","font-weight":"900"}},[t._v(t._s(t.totalPrice))]),t._v(" "),s("span",{staticStyle:{"font-weight":"bold","font-size":"16px"}},[t._v("元")])])],1)],1)},staticRenderFns:[]};var m=s("vSla")(d,_,!1,function(t){s("L87m")},"data-v-1ad03465",null).exports,u={name:"TmkReqBusiness",data:function(){return{}},props:["businessContent"],computed:o()({},Object(l.c)(["requestType","shopnum","ordernum","basePrice","totalPrice","choiceMCB","requestTypeMark","choiceInvoice"]))},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("card",{staticStyle:{margin:"20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Row",[s("Col",{attrs:{span:10}},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n          确认订单\n        ")],1)],1)],1),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"20px"}},[s("Col",{attrs:{"class-name":"confirm_col",span:4}},[s("Row",[t._v("办理业务类型")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.businessContent))])],1),t._v(" "),s("Col",{attrs:{"class-name":"confirm_col",span:4}},[s("Row",[t._v("注册类型")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.requestTypeMark))])],1),t._v(" "),s("Col",{attrs:{"class-name":"confirm_col",span:4}},[s("Row",[t._v("订单个数")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.ordernum))])],1),t._v(" "),s("Col",{attrs:{"class-name":"confirm_col",span:4}},[s("Row",[t._v("商品个数")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.shopnum))])],1),t._v(" "),s("Col",{staticStyle:{"border-right":"1px solid #eee"},attrs:{"class-name":"confirm_col",span:4}},[s("Row",[t._v("是否选择盲查宝")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.choiceMCB?"是":"否"))])],1),t._v(" "),s("Col",{staticStyle:{"border-right":"1px solid #eee"},attrs:{"class-name":"confirm_col",span:4}},[s("Row",[t._v("是否选择发票")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.choiceInvoice?"是":"否"))])],1)],1),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"10px"}},[s("Col",{staticStyle:{width:"250px"},attrs:{span:5,offset:19}},[s("span",{},[t._v("订单总价格：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px"}},[t._v("￥"+t._s(t.totalPrice))])])],1),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"10px"}},[s("Col",{staticStyle:{width:"250px"},attrs:{span:5,offset:19}},[s("span",{},[t._v("优惠：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px"}},[t._v("￥ 0")])])],1),t._v(" "),s("br"),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"10px"}},[s("Col",{staticStyle:{width:"250px"},attrs:{span:5,offset:19}},[s("span",{staticStyle:{"font-weight":"bold","font-size":"16px",color:"coral"}},[t._v("待支付价格：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px","font-weight":"900"}},[t._v("￥"+t._s(t.totalPrice))])])],1)],1)],1)},staticRenderFns:[]};var y=s("vSla")(u,f,!1,function(t){s("ZHlz")},"data-v-719429f8",null).exports,x={name:"TmkReqBusiness",data:function(){return{}},props:["businessContent","hadpay","payOrderId","contractId","paytype"],computed:o()({},Object(l.c)(["requestType","shopnum","ordernum","basePrice","totalPrice","choiceMCB","requestTypeMark"]))},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("card",{staticStyle:{margin:"20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Row",[s("Col",{attrs:{span:10}},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n          详情\n        ")],1)],1)],1),t._v(" "),s("Row",[s("Row",[s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("合同号:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.contractId))])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("业务类型:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.businessContent))])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("申请类型:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.requestTypeMark))])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("商品个数:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.shopnum))])],1),s("br")],1)],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("订单个数:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.ordernum))])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("支付方式:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.paytype))])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("总价格:")]),t._v(" "),s("Col",{staticStyle:{color:"coral"},attrs:{span:17}},[t._v("￥"+t._s(t.totalPrice))])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{xs:6,sm:7,lg:11}},[t._v("是否选择盲查宝:")]),t._v(" "),s("Col",{attrs:{xs:15,sm:17,lg:13}},[t._v(t._s(t.choiceMCB?"是":"否"))])],1),s("br")],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("支付状态:")]),t._v(" "),t.hadpay?s("Col",{staticStyle:{color:"#41c809"},attrs:{span:6}},[t._v("已支付")]):s("Col",{staticStyle:{color:"indianred"},attrs:{span:6}},[t._v("未支付")])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[t.hadpay?s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{xs:7,sm:7,lg:8}},[t._v("支付流水号:")]),t._v(" "),s("Col",{attrs:{xs:17,sm:17,lg:16}},[t._v(t._s(t.payOrderId))])],1):t._e(),s("br")],1)],1)],1)],1)},staticRenderFns:[]};var w=s("vSla")(x,b,!1,function(t){s("KwlU")},"data-v-3208d2cc",null).exports,C={name:"TmkExcComfirm",data:function(){return{}},props:["businessContent"],computed:o()({},Object(l.c)(["ordernum","totalPrice","choiceInvoice"]))},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("card",{staticStyle:{margin:"20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Row",[s("Col",{attrs:{span:10}},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n          确认订单\n        ")],1)],1)],1),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"20px"}},[s("Col",{attrs:{"class-name":"confirm_col",span:8}},[s("Row",[t._v("办理业务类型")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.businessContent))])],1),t._v(" "),s("Col",{attrs:{"class-name":"confirm_col",span:8}},[s("Row",[t._v("订单个数")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.ordernum))])],1),t._v(" "),s("Col",{staticStyle:{"border-right":"1px solid #eee"},attrs:{"class-name":"confirm_col",span:8}},[s("Row",[t._v("是否选择发票")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.choiceInvoice?"是":"否"))])],1)],1),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"10px"}},[s("Col",{staticStyle:{width:"250px"},attrs:{span:5,offset:19}},[s("span",{},[t._v("订单总价格：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px"}},[t._v("￥"+t._s(t.totalPrice))])])],1),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"10px"}},[s("Col",{staticStyle:{width:"250px"},attrs:{span:5,offset:19}},[s("span",{},[t._v("优惠：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px"}},[t._v("￥ 0")])])],1),t._v(" "),s("br"),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"10px"}},[s("Col",{staticStyle:{width:"250px"},attrs:{span:5,offset:19}},[s("span",{staticStyle:{"font-weight":"bold","font-size":"16px",color:"coral"}},[t._v("待支付价格：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px","font-weight":"900"}},[t._v("￥"+t._s(t.totalPrice))])])],1)],1)],1)},staticRenderFns:[]};var S=s("vSla")(C,g,!1,function(t){s("7YIv")},"data-v-22aace9d",null).exports,k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("TmkExc")])},staticRenderFns:[]};var R=s("vSla")({name:"TmkExcFinished"},k,!1,function(t){s("GImf")},"data-v-627cdcee",null).exports,P={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Tmkextconfirm")])},staticRenderFns:[]};var I=s("vSla")({name:"TmkExtConfirm"},P,!1,function(t){s("xcmv")},"data-v-4a6ebfc0",null).exports,T={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("TmkExtFinished")])},staticRenderFns:[]};var q=s("vSla")({name:"TmkExtFinished"},T,!1,function(t){s("4T1v")},"data-v-b081234c",null).exports,M={name:"TmkUptComfirm",data:function(){return{}},props:["businessContent"],computed:o()({},Object(l.c)(["ordernum","totalPrice","choiceInvoice"]))},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("card",{staticStyle:{margin:"20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Row",[s("Col",{attrs:{span:10}},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n          确认订单\n        ")],1)],1)],1),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"20px"}},[s("Col",{attrs:{"class-name":"confirm_col",span:8}},[s("Row",[t._v("办理业务类型")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.businessContent))])],1),t._v(" "),s("Col",{attrs:{"class-name":"confirm_col",span:8}},[s("Row",[t._v("订单个数")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.ordernum))])],1),t._v(" "),s("Col",{staticStyle:{"border-right":"1px solid #eee"},attrs:{"class-name":"confirm_col",span:8}},[s("Row",[t._v("是否选择发票")]),s("br"),t._v(" "),s("Row",{attrs:{"class-name":"confirm_item"}},[t._v(t._s(t.choiceInvoice?"是":"否"))])],1)],1),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"10px"}},[s("Col",{staticStyle:{width:"250px"},attrs:{span:5,offset:19}},[s("span",{},[t._v("订单总价格：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px"}},[t._v("￥"+t._s(t.totalPrice))])])],1),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"10px"}},[s("Col",{staticStyle:{width:"250px"},attrs:{span:5,offset:19}},[s("span",{},[t._v("优惠：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px"}},[t._v("￥ 0")])])],1),t._v(" "),s("br"),t._v(" "),s("Row",{staticStyle:{"margin-bottom":"10px"}},[s("Col",{staticStyle:{width:"250px"},attrs:{span:5,offset:19}},[s("span",{staticStyle:{"font-weight":"bold","font-size":"16px",color:"coral"}},[t._v("待支付价格：")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px","font-weight":"900"}},[t._v("￥"+t._s(t.totalPrice))])])],1)],1)],1)},staticRenderFns:[]};var F=s("vSla")(M,O,!1,function(t){s("r/Gx")},"data-v-44d92f94",null).exports,E={name:"TmkUptFinished",props:["businessContent","hadpay","payOrderId","contractId","paytype"],computed:o()({},Object(l.c)(["ordernum","totalPrice"]))},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("card",{staticStyle:{margin:"20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Row",[s("Col",{attrs:{span:10}},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n          详情\n        ")],1)],1)],1),t._v(" "),s("Row",[s("Row",[s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("合同号:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.contractId))])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("业务类型:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.businessContent))])],1),s("br")],1)],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("订单个数:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.ordernum))])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("支付方式:")]),t._v(" "),s("Col",{attrs:{span:17}},[t._v(t._s(t.paytype))])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("总价格:")]),t._v(" "),s("Col",{staticStyle:{color:"coral"},attrs:{span:17}},[t._v("￥"+t._s(t.totalPrice))])],1),s("br")],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{xs:24,lg:6,sm:12}},[s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{span:7}},[t._v("支付状态:")]),t._v(" "),t.hadpay?s("Col",{staticStyle:{color:"#41c809"},attrs:{span:6}},[t._v("已支付")]):s("Col",{staticStyle:{color:"indianred"},attrs:{span:6}},[t._v("未支付")])],1),s("br")],1),t._v(" "),s("Col",{attrs:{xs:24,lg:6,sm:12}},[t.hadpay?s("Row",[s("Col",{staticStyle:{"font-weight":"bold"},attrs:{xs:7,sm:7,lg:8}},[t._v("支付流水号:")]),t._v(" "),s("Col",{attrs:{xs:17,sm:17,lg:16}},[t._v(t._s(t.payOrderId))])],1):t._e(),s("br")],1)],1)],1)],1)},staticRenderFns:[]};var B={name:"AddOrder",components:{TmkExchange:n,TmkExtension:c,TmkRequset:h,TmkUpdate:m,TmkReqComfirm:y,TmkReqFinished:w,TmkExcComfirm:S,TmkExcFinished:R,TmkExtConfirm:I,TmkExtFinished:q,TmkUptComfirm:F,TmkUptFinished:s("vSla")(E,z,!1,function(t){s("Igi/")},"data-v-1944897f",null).exports},data:function(){return{model:{modalcontent:"",showmodel:!1},hadpay:!1,paymodel:!1,payRadio:"1",addorder_loadding:!1,tmkreqcheck:!0,tmkupdate:!1,tmkexchange:!1,tmkextension:!1,step:0,next_loading:!1,businessIndex:0,businessContent:["商标注册申请","商标变更","商标转让","商标续展"],contractId:"",weixinurl:"",payOrderId:""}},methods:o()({},Object(l.b)(["createOrder","getPayImageAction","createOtherOrder","isPayAction"]),{toGoBusiness:function(){this.$router.push({name:"myorder"})},radioSetAllFalse:function(){this.tmkreqcheck=!1,this.tmkupdate=!1,this.tmkexchange=!1,this.tmkextension=!1},changereqcheck:function(t){switch(this.radioSetAllFalse(),this.businessIndex=t,t){case 0:this.tmkreqcheck=!0;break;case 1:this.tmkupdate=!0;break;case 2:this.tmkexchange=!0;break;case 3:this.tmkextension=!0}},last_step:function(){this.step=this.step-1,this.step<0&&(this.step=0)},next_step:function(){var t=this,e=this;0===this.step?this.step=this.step+1:1===this.step?this.$Modal.confirm({title:"提示",content:"<p>确认提交订单？</p>",onOk:function(){t.addModel("正在生成订单..."),e.toceateOrder()},onCancel:function(){t.$Message.error("已取消")}}):2===this.step&&(this.getPayImage(),this.paymodel=!0)},toceateOrder:function(){switch(this.businessIndex){case 0:this.createReqestOrder();break;case 1:this.createUpateReqOrder();break;case 2:this.createExtensionOrder();break;case 3:this.createExchageOrder()}},createReqestOrder:function(){var t=this,e=this,s={};s.amount=this.ordernum,s.isMCB=this.choiceMCB?"1":"0",s.isNote=this.choiceInvoice?1:0,s.minterm=this.shopnum,s.token=this.token,s.totalPrice=this.simplePrice,s.tp=this.requestType,this.createOrder(s).then(function(s){"0"===s.state?(e.contractId=s.mapData.contractId,setTimeout(function(){e.clearModel(),e.step=e.step+1},1e3)):(t.$Message.error("错误："+s.msg),e.clearModel())})},createUpateReqOrder:function(){var t=this,e=this,s={};s.amount=this.ordernum,s.isNote=this.choiceInvoice?1:0,s.token=this.token,s.type="1",s.price=this.simplePrice,this.createOtherOrder(s).then(function(s){console.log(s.data[0]),"0"===s.state?(e.contractId=s.data[0].contractid,setTimeout(function(){e.clearModel(),e.step=e.step+1},1e3)):(t.$Message.error("错误："+s.msg),e.clearModel())})},createExtensionOrder:function(){alert("续展"),this.clearModel(),this.contractId="test",this.step=this.step+1},createExchageOrder:function(){alert("转让"),this.clearModel(),this.contractId="test",this.step=this.step+1},getPayImage:function(){var t=this;this.getPayImageAction({contractId:this.contractId,type:this.payRadio}).then(function(e){"0"===e.state?(t.weixinurl=e.data[0].url,t.payOrderId=e.data[0].payOrderId):t.$Notice.error({title:e.msg})})},clearModel:function(){this.model.showmodel=!1,this.model.modalcontent="",this.addorder_loadding=!1},addModel:function(t){this.model.showmodel=!0,this.model.modalcontent=t,this.addorder_loadding=!0},payCallback:function(){var t=this;this.isPayAction({payOrderId:this.payOrderId,contractId:this.contractId}).then(function(e){"0"===e.state?(t.hadpay=!0,t.$Notice.success({title:"支付成功"})):(t.hadpay=!1,t.$Notice.error({title:e.msg}))})},nopay:function(){this.step>=3?this.step=3:this.step=this.step+1,this.payCallback()},havepay:function(){this.step>=3?this.step=3:this.step=this.step+1,this.payCallback()}}),watch:{},computed:o()({},Object(l.c)(["requestType","shopnum","ordernum","basePrice","totalPrice","choiceMCB","choiceInvoice","requestTypeMark","simplePrice","token"]))},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Card",{staticStyle:{margin:"10px 20px"}},[s("Steps",{attrs:{current:t.step}},[s("Step",{attrs:{title:"进行中",content:"选择您要办理的业务"}}),t._v(" "),s("Step",{attrs:{title:1==t.step?"进行中":t.step>1?"已完成":"待进行",content:"订单确认"}}),t._v(" "),s("Step",{attrs:{title:2==t.step?"进行中":t.step>2?"已完成":"待进行",content:"支付"}}),t._v(" "),s("Step",{attrs:{title:3==t.step?"进行中":t.step>3?"已完成":"待进行",content:"完成"}})],1)],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.step,expression:"step===0"}]},[s("Card",{staticStyle:{margin:"10px 20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Row",[s("Col",{attrs:{span:10}},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n            请选择您要办理的业务类型\n          ")],1)],1)],1),t._v(" "),s("Row",{attrs:{gutter:20}},[s("Col",{staticStyle:{"max-width":"250px"},attrs:{span:5},on:{mouseover:function(t){}}},[s("Card",{attrs:{"dis-hover":""}},[s("Radio",{attrs:{label:"apple"},nativeOn:{click:function(e){t.changereqcheck(0)}},model:{value:t.tmkreqcheck,callback:function(e){t.tmkreqcheck=e},expression:"tmkreqcheck"}},[s("Icon",{attrs:{type:"android-star"}}),t._v(" "),s("span",[t._v(t._s(t.businessContent[0]))])],1)],1)],1),t._v(" "),s("Col",{staticStyle:{"max-width":"250px"},attrs:{span:5},nativeOn:{click:function(e){t.changereqcheck(1)}}},[s("Card",{attrs:{"dis-hover":""}},[s("Radio",{attrs:{label:"apple"},model:{value:t.tmkupdate,callback:function(e){t.tmkupdate=e},expression:"tmkupdate"}},[s("Icon",{attrs:{type:"android-star"}}),t._v(" "),s("span",[t._v(t._s(t.businessContent[1]))])],1)],1)],1),t._v(" "),s("Col",{staticStyle:{"max-width":"250px",width:"250px"},attrs:{span:5},on:{mouseover:function(t){}}},[s("Card",{attrs:{"dis-hover":""}},[s("Icon",{attrs:{type:"android-star"}}),t._v(" "),s("span",{staticStyle:{color:"#C0C0C0","font-size":"12px"}},[t._v("其他业务办理正在努力开发中…")])],1)],1),t._v(" "),t._e()],1)],1),t._v(" "),t.tmkreqcheck?s("Card",{staticStyle:{margin:"0px 20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n        商标注册申请\n      ")],1),t._v(" "),s("TmkRequset")],1):t._e(),t._v(" "),t.tmkupdate?s("Card",{staticStyle:{margin:"10px 20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n        商标变更\n      ")],1),t._v(" "),s("TmkUpdate")],1):t._e(),t._v(" "),t.tmkexchange?s("Card",{staticStyle:{margin:"10px 20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n        商标转让\n      ")],1),t._v(" "),s("TmkExchange")],1):t._e(),t._v(" "),t.tmkextension?s("Card",{staticStyle:{margin:"10px 20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n        商标续展\n      ")],1),t._v(" "),s("TmkExtension")],1):t._e()],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.step,expression:"step===1"}]},[t.tmkreqcheck?s("TmkReqComfirm",{attrs:{businessContent:t.businessContent[t.businessIndex]}}):t._e(),t._v(" "),t.tmkexchange?s("TmkExcComfirm"):t._e(),t._v(" "),t.tmkextension?s("TmkExtConfirm"):t._e(),t._v(" "),t.tmkupdate?s("TmkUptComfirm",{attrs:{businessContent:t.businessContent[t.businessIndex]}}):t._e()],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step===2"}]},[s("card",{staticStyle:{margin:"20px"}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("Row",[s("Col",{attrs:{span:10}},[s("Icon",{attrs:{type:"ios-list"}}),t._v("\n            支付\n          ")],1)],1)],1),t._v(" "),s("Row",[s("span",{staticStyle:{"margin-right":"25px"}},[t._v("合同号")]),t._v(" "),s("span",[t._v(t._s(t.contractId))])]),t._v(" "),s("br"),t._v(" "),s("Row",[s("span",{staticStyle:{"margin-right":"10px"}},[t._v("支付金额")]),t._v(" "),s("span",{staticStyle:{color:"coral","font-size":"16px","font-weight":"900"}},[t._v("￥"+t._s(t.totalPrice))])]),t._v(" "),s("br"),t._v(" "),s("Row",[s("span",{staticStyle:{"margin-right":"10px"}},[t._v("支付方式")]),t._v(" "),s("RadioGroup",{model:{value:t.payRadio,callback:function(e){t.payRadio=e},expression:"payRadio"}},[t._e(),t._v(" "),s("Radio",{attrs:{label:"1"}},[s("span",[t._v("微信")])])],1)],1)],1)],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:3===t.step,expression:"step===3"}]},[t.tmkreqcheck?s("TmkReqFinished",{attrs:{hadpay:t.hadpay,businessContent:t.businessContent[t.businessIndex],payOrderId:t.payOrderId,contractId:t.contractId,paytype:"1"==t.payRadio?"微信":"支付宝"}}):t._e(),t._v(" "),t.tmkexchange?s("TmkExcFinished"):t._e(),t._v(" "),t.tmkextension?s("TmkExtFinished"):t._e(),t._v(" "),t.tmkupdate?s("TmkUptFinished",{attrs:{hadpay:t.hadpay,businessContent:t.businessContent[t.businessIndex],payOrderId:t.payOrderId,contractId:t.contractId,paytype:"1"==t.payRadio?"微信":"支付宝"}}):t._e()],1),t._v(" "),t.step<3&&t.step>=0?s("Row",{staticStyle:{margin:"40px"}},[s("Col",{attrs:{span:12,offset:9}},[s("ButtonGroup",{attrs:{size:"large",shape:"circle"}},[t.step<=1?s("Button",{staticStyle:{width:"100px","margin-right":"2px"},attrs:{type:"success"},on:{click:t.last_step}},[s("Icon",{attrs:{type:"chevron-left"}}),t._v("\n            上一步")],1):t._e(),t._v(" "),s("Button",{staticStyle:{width:"100px"},attrs:{type:"success"},on:{click:t.next_step}},[t._v("\n          下一步  "),s("Icon",{attrs:{type:"chevron-right"}})],1)],1)],1)],1):3==t.step?s("Row",[t.hadpay?s("Col",{attrs:{span:12,offset:11}},[s("Button",{attrs:{type:"success",size:"large"},on:{click:t.toGoBusiness}},[t._v("完成")])],1):s("Col",{attrs:{span:12,offset:9}},[s("Button",{attrs:{type:"info"},on:{click:function(e){t.paymodel=!0}}},[t._v("立即支付")]),t._v(" "),s("Button",{attrs:{type:"ghost"},on:{click:t.toGoBusiness}},[t._v("暂不支付")])],1)],1):t._e(),t._v(" "),s("Modal",{attrs:{"class-name":"vertical-center-modal",closable:!1,"mask-closable":!1,width:"360"},model:{value:t.model.showmodel,callback:function(e){t.$set(t.model,"showmodel",e)},expression:"model.showmodel"}},[s("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[s("Icon",{attrs:{type:"information-circled"}}),t._v(" "),s("span",[t._v("提示")])],1),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("p",[t._v(t._s(t.model.modalcontent))]),t._v(" "),t.addorder_loadding?s("Spin",{attrs:{fix:""}}):t._e()],1),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"})]),t._v(" "),s("Modal",{attrs:{title:"微信扫码支付","class-name":"vertical-center-modal","mask-closable":!1,closable:!1,"cancel-text":"暂不支付","ok-text":"已支付"},on:{"on-ok":t.havepay,"on-cancel":t.nopay},model:{value:t.paymodel,callback:function(e){t.paymodel=e},expression:"paymodel"}},[s("div",{staticStyle:{"text-align":"center"}},[s("div",{staticStyle:{color:"coral","font-size":"16px","font-weight":"900"}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),s("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:"http://paysdk.weixin.qq.com/qrcode.php?data="+t.weixinurl}}),t._v(" "),""==t.weixinurl?s("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)])],1)},staticRenderFns:[]};var N=s("vSla")(B,$,!1,function(t){s("d6ZN")},"data-v-3e3f0894",null);e.default=N.exports},"r/Gx":function(t,e){},xcmv:function(t,e){}});