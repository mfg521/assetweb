webpackJsonp([5],{CCtY:function(e,t){},QoDS:function(e,t){},RUHY:function(e,t){},TMN5:function(e,t){},WSqg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("4YfN"),i=a.n(n),r=a("9rMa"),l={data:function(){var e=this;return{isnote:!1,allcount:0,ordersData:[],pageNum:1,pageSize:10,datevalue1:"",datevalue2:"",inputvalue:"",select:"",modal1:!1,priceModal:!1,orderId:"",payOrderId:"",weixinurl:"",selectList:[{value:"订单号",label:"订单号"},{value:"商标名称",label:"商标名称"}],columns1:[{title:"订单号",key:"cOrderid",align:"center",width:162},{title:"价格(元)",key:"dPrice",align:"center",width:80},{title:"业务类型",key:"cOrdername",align:"center",width:85},{title:"申请人名称",key:"subjectType ",align:"center",minWidth:100,render:function(e,t){return e("div",{props:{}},"0"==t.row.subjectType?"0"==t.row.cType?t.row.cTruename:"null"==t.row.cType?"":t.row.cChName:t.row.cChName)}},{title:"商标名称",key:"cTradename",align:"center",minWidth:100},{title:"商标图片",key:"cBusinessLicense",width:85,render:function(e,t){return null==t.row.tradeUrl||""==t.row.tradeUrl?e("div",[e("img",{attrs:{src:"http://pab15trc8.bkt.clouddn.com/imgalt.png"},style:{width:"65px",height:"55px"}})]):e("div",[e("img",{attrs:{src:t.row.tradeTureUrl},style:{width:"65px",height:"55px"}})])}},{title:"申请类别",key:"iTradetype",align:"center",width:85},{title:"创建日期",key:"createtime",align:"center",width:160},{title:"订单状态",key:"iOrderstate",align:"center",width:98,filters:[{label:"待处理",value:0},{label:"待审核",value:1},{label:"审核未通过",value:2},{label:"已审核",value:3}],filterMultiple:!1,filterMethod:function(e,t){return 0===e?0===t.iOrderstate:1===e?1===t.iOrderstate:2===e?2===t.iOrderstate:3===e?3===t.iOrderstate:void 0},render:function(e,t){var a="";switch(t.row.iOrderstate){case 0:return e("div",{style:{color:"#2d8cf0"}},a="待处理");case 1:return e("div",{style:{color:"#ff9900"}},a="待审核");case 2:return e("div",{style:{color:"#ed3f14"}},a="审核未通过");case 3:return e("div",{style:{color:"#19be6b"}},a="已审核")}return e("div",{props:{}},a)}},{title:"操作",key:"action",width:130,align:"center",render:function(t,a){return 0==a.row.iPaystate?t("div",[t("Button",{props:{type:"warning",size:"small"},on:{click:function(){e.toPay(a.row.cOrderid,a.row.isNote)}},style:{marginRight:"10px"}},"支付"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.handleDel(a.row.cOrderid)}}},"删除")]):"0"==a.row.iOrderstate?t("div",[t("Button",{props:{type:"info",size:"small"},on:{click:function(){e.toDoBusiness(a.row)}},style:{marginRight:"10px"}},"业务办理")]):"1"==a.row.iOrderstate?t("div",[t("Button",{props:{type:"success",size:"small"},on:{click:function(){e.handleDetail(a.row)}},style:{marginRight:"10px"}},"查看详情")]):"3"==a.row.iOrderstate?t("div",[t("Button",{props:{type:"success",size:"small"},on:{click:function(){e.handleDetail(a.row)}},style:{marginRight:"10px"}},"查看详情")]):"2"==a.row.iOrderstate?t("div",[t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.toDoBusiness(a.row)}},style:{marginRight:"10px"}},"去修改")]):void 0}}]}},methods:i()({},Object(r.b)(["handleGetOrders","handleDelOrder","handleCodeOrder","handleweChatOrder"]),{toPay:function(e,t){var a=this;this.isnote="1"==t,this.orderId=e,this.priceModal=!0;var n={type:"1"};n.orderId=e,this.handleCodeOrder(n).then(function(e){console.log(e),a.weixinurl=e.data[0].url,a.payOrderId=e.data[0].payOrderId})},isPay:function(){var e=this,t={};t.payOrderId=this.payOrderId,t.orderId=this.orderId,this.handleweChatOrder(t).then(function(t){e.$Message.info(t.msg),0==t.state&&e.handleOrders()})},noPay:function(){var e=this,t={};t.payOrderId=this.payOrderId,t.orderId=this.orderId,this.handleweChatOrder(t).then(function(t){e.$Message.info(t.msg)})},toDoBusiness:function(e){console.log(e);var t=0,a="0";2===e.iOrderstate&&(t="2"),"商标变更"==e.cOrdername&&(a="1"),"商标转让"==e.cOrdername&&(a="2"),"商标续展"==e.cOrdername&&(a="3");this.$router.push({query:{token:this.token,orderid:e.cOrderid,state:t,type:a},path:"dealbusiness"})},handleDetail:function(e){var t={};t.orderId=e.cOrderid,t.token=this.token,alert(e.cOrdername),"商标变更"==e.cOrdername&&this.$router.push({path:"/order/changeorderdetail",query:t}),"商标转让"==e.cOrdername&&this.$router.push({name:"订单详情",query:t}),"商标续展"==e.cOrdername&&this.$router.push({name:"订单详情",query:t}),"商标注册"==e.cOrdername&&this.$router.push({name:"订单详情",query:t})},handletoAdd:function(){this.$router.push({name:"addorder"})},handleOrders:function(){var e=this,t={};t.token=this.token,t.pageNum=this.pageNum,t.pageSize=this.pageSize,this.handleGetOrders(t).then(function(t){console.log(t),e.$store.commit("setallCount",t.totalCount),e.allcount=e.allCount,e.ordersData=t.data})},handleSearch:function(){var e=this,t={};t.token=this.token,t.pageNum=1,t.pageSize=this.pageSize,""!=this.datevalue1&&(t.startTime=this.datevalue1),""!=this.datevalue2&&(t.endTime=this.datevalue2),"订单号"==this.select&&(t.cOrderid=this.inputvalue),"商标名称"==this.select&&(t.cTradename=this.inputvalue),this.handleGetOrders(t).then(function(t){e.allcount=t.totalCount,e.ordersData=t.data})},handleDel:function(e){this.modal1=!0,sessionStorage.setItem("orderId",e)},ok:function(){var e=this,t=sessionStorage.getItem("orderId"),a={};a.token=this.token,a.orderId=t,this.handleDelOrder(a).then(function(t){e.$Message.info(t.msg),e.handleOrders()})},changePage:function(e){this.pageNum=e,this.handleOrders()},handleDate1:function(e){this.datevalue1=e},handleDate2:function(e){this.datevalue2=e}}),computed:i()({},Object(r.c)(["token","allCount"])),mounted:function(){this.handleOrders()}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Col",{attrs:{span:"3"}},[a("Button",{staticStyle:{"margin-bottom":"17px"},attrs:{type:"dashed",icon:"plus-round"},on:{click:e.handletoAdd}},[e._v("添加订单信息")])],1),e._v(" "),a("Col",{staticStyle:{width:"290px"},attrs:{span:"6"}},[a("Input",{staticClass:"seaechInput",staticStyle:{width:"280px"},attrs:{placeholder:"请输入内容"},model:{value:e.inputvalue,callback:function(t){e.inputvalue=t},expression:"inputvalue"}},[a("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.selectList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"5"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:e.datevalue1,type:"date",placeholder:"选择起始日期"},on:{"on-change":e.handleDate1}})],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"4"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:e.datevalue2,type:"date",placeholder:"选择截止日期"},on:{"on-change":e.handleDate2}})],1),e._v(" "),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")])],1)],1),e._v(" "),a("Row",[a("Table",{attrs:{columns:e.columns1,data:e.ordersData}}),e._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:e.allcount,"page-size":e.pageSize,current:1},on:{"on-change":e.changePage}})],1)]),e._v(" "),a("Modal",{attrs:{title:"提示","class-name":"vertical-center-modal"},on:{"on-ok":e.ok},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[a("p",[e._v("确认删除吗？")])]),e._v(" "),a("Modal",{staticStyle:{"text-align":"center"},attrs:{title:"微信扫码支付","ok-text":"已支付","class-name":"vertical-center-modal"},on:{"on-ok":e.isPay,"on-cancel":e.noPay},model:{value:e.priceModal,callback:function(t){e.priceModal=t},expression:"priceModal"}},[a("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:"http://paysdk.weixin.qq.com/qrcode.php?data="+e.weixinurl}}),e._v(" "),e.isnote?a("p",{staticStyle:{"font-size":"14px"}},[e._v("需支付30%的税费")]):e._e()])],1)],1)},staticRenderFns:[]};var d=a("vSla")(l,s,!1,function(e){a("qAw7")},null,null).exports,o={data:function(){var e=this;return{paycount:0,ordersData:[],pageNum:1,pageSize:10,datevalue1:"",datevalue2:"",inputvalue:"",select:"",modal1:!1,priceModal:!1,orderId:"",payOrderId:"",weixinurl:"",selectList:[{value:"订单号",label:"订单号"},{value:"商标名称",label:"商标名称"}],columns1:[{title:"订单号",key:"cOrderid",align:"center"},{title:"价格",key:"dPrice",align:"center"},{title:"业务类型",key:"cOrdername",align:"center"},{title:"小项个数",key:"minterm",align:"center"},{title:"操作",key:"action",align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"warning",size:"small"},on:{click:function(){e.toPay(a.row.cOrderid)}},style:{marginRight:"10px"}},"支付"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.handleDel(a.row.cOrderid)}}},"删除")])}}]}},methods:i()({},Object(r.b)(["handleGetOrders","handleDelOrder","handleCodeOrder","handleweChatOrder"]),{toPay:function(e){var t=this;this.orderId=e,this.priceModal=!0;var a={type:"1"};a.orderId=e,this.handleCodeOrder(a).then(function(e){t.weixinurl=e.data[0].url,t.payOrderId=e.data[0].payOrderId})},isPay:function(){var e=this,t={};t.payOrderId=this.payOrderId,t.orderId=this.orderId,this.handleweChatOrder(t).then(function(t){e.$Message.info(t.msg),0==t.state&&e.handleOrders()})},noPay:function(){var e=this,t={};t.payOrderId=this.payOrderId,t.orderId=this.orderId,this.handleweChatOrder(t).then(function(t){e.$Message.info(t.msg)})},handletoAdd:function(){this.$router.push({name:"addorder"})},handleOrders:function(){var e=this,t={};t.token=this.token,t.iPaystate="0",t.pageNum=this.pageNum,t.pageSize=this.pageSize,this.handleGetOrders(t).then(function(t){e.$store.commit("setpayCount",t.totalCount),e.paycount=e.payCount,e.ordersData=t.data})},handleSearch:function(){var e=this,t={};t.token=this.token,t.pageNum=1,t.pageSize=this.pageSize,t.iPaystate="0",""!=this.datevalue1&&(t.startTime=this.datevalue1),""!=this.datevalue2&&(t.endTime=this.datevalue2),"订单号"==this.select&&(t.cOrderid=this.inputvalue),"商标名称"==this.select&&(t.cTradename=this.inputvalue),this.handleGetOrders(t).then(function(t){e.paycount=t.totalCount,e.ordersData=t.data})},handleDel:function(e){this.modal1=!0,sessionStorage.setItem("orderId",e)},ok:function(){var e=this,t=sessionStorage.getItem("orderId"),a={};a.token=this.token,a.orderId=t,this.handleDelOrder(a).then(function(t){e.$Message.info(t.msg),e.handleOrders()})},changePage:function(e){this.pageNum=e,this.handleOrders()},handleDate1:function(e){this.datevalue1=e},handleDate2:function(e){this.datevalue2=e}}),computed:i()({},Object(r.c)(["token","payCount"])),mounted:function(){this.handleOrders()}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Col",{staticStyle:{width:"290px"},attrs:{span:"5"}},[a("Input",{staticClass:"seaechInput",staticStyle:{width:"280px"},attrs:{placeholder:"请输入内容"},model:{value:e.inputvalue,callback:function(t){e.inputvalue=t},expression:"inputvalue"}},[a("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.selectList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px","margin-bottom":"17px"},attrs:{value:e.datevalue1,type:"date",placeholder:"选择起始日期"},on:{"on-change":e.handleDate1}})],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:e.datevalue2,type:"date",placeholder:"选择截止日期"},on:{"on-change":e.handleDate2}})],1),e._v(" "),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")])],1)],1),e._v(" "),a("Row",[a("Table",{attrs:{columns:e.columns1,data:e.ordersData}}),e._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:e.paycount,"page-size":e.pageSize,current:1},on:{"on-change":e.changePage}})],1)]),e._v(" "),a("Modal",{attrs:{title:"提示","class-name":"vertical-center-modal"},on:{"on-ok":e.ok},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[a("p",[e._v("确认删除吗？")])]),e._v(" "),a("Modal",{staticStyle:{"text-align":"center"},attrs:{title:"微信扫码支付","ok-text":"已支付","class-name":"vertical-center-modal"},on:{"on-ok":e.isPay,"on-cancel":e.noPay},model:{value:e.priceModal,callback:function(t){e.priceModal=t},expression:"priceModal"}},[a("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:"http://paysdk.weixin.qq.com/qrcode.php?data="+e.weixinurl}})])],1)],1)},staticRenderFns:[]};var u=a("vSla")(o,c,!1,function(e){a("RUHY")},null,null).exports,h={data:function(){var e=this;return{pendcount:0,ordersData:[],pageNum:1,pageSize:10,datevalue1:"",datevalue2:"",inputvalue:"",select:"",selectList:[{value:"订单号",label:"订单号"},{value:"商标名称",label:"商标名称"}],columns1:[{title:"订单号",key:"cOrderid",align:"center",width:162},{title:"价格(元)",key:"dPrice",align:"center",width:80},{title:"业务类型",key:"cOrdername",align:"center",width:85},{title:"申请人名称",key:"subjectType ",align:"center",minWidth:100,render:function(e,t){return e("div",{props:{}},"0"==t.row.subjectType&&"0"==t.row.cType?t.row.cTruename:t.row.cChName)}},{title:"商标名称",key:"cTradename",align:"center",minWidth:100},{title:"商标图片",key:"cBusinessLicense",width:85,render:function(e,t){return null==t.row.tradeUrl||""==t.row.tradeUrl?e("div",[e("img",{attrs:{src:"http://pab15trc8.bkt.clouddn.com/imgalt.png"},style:{width:"65px",height:"55px"}})]):e("div",[e("img",{attrs:{src:t.row.tradeTureUrl},style:{width:"65px",height:"55px"}})])}},{title:"申请类别",key:"iTradetype",align:"center",width:85},{title:"创建日期",key:"createtime",align:"center",width:150},{title:"小项个数",key:"minterm",align:"center",minWidth:100},{title:"操作",key:"action",width:140,align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"success",size:"small"},on:{click:function(){e.toDoBusiness(a.row)}},style:{marginRight:"10px"}},"业务办理")])}}]}},methods:i()({},Object(r.b)(["handleGetOrders"]),{toDoBusiness:function(e){this.$router.push({query:{token:this.token,orderid:e.cOrderid},path:"dealbusiness"})},handletoAdd:function(){this.$router.push({name:"addorder"})},handleOrders:function(){var e=this,t={};t.token=this.token,t.iOrderstate="0",t.pageNum=this.pageNum,t.pageSize=this.pageSize,this.handleGetOrders(t).then(function(t){e.$store.commit("setpendCount",t.totalCount),e.pendcount=e.pendCount,e.ordersData=t.data})},handleSearch:function(){var e=this,t={};t.token=this.token,t.pageNum=1,t.pageSize=this.pageSize,t.iOrderstate="0",""!=this.datevalue1&&(t.startTime=this.datevalue1),""!=this.datevalue2&&(t.endTime=this.datevalue2),"订单号"==this.select&&(t.cOrderid=this.inputvalue),"商标名称"==this.select&&(t.cTradename=this.inputvalue),this.handleGetOrders(t).then(function(t){e.pendcount=t.totalCount,e.ordersData=t.data})},changePage:function(e){this.pageNum=e,this.handleOrders()},handleDate1:function(e){this.datevalue1=e},handleDate2:function(e){this.datevalue2=e}}),computed:i()({},Object(r.c)(["token","pendCount"])),mounted:function(){this.handleOrders()}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Col",{staticStyle:{width:"290px"},attrs:{span:"5"}},[a("Input",{staticClass:"seaechInput",staticStyle:{width:"280px"},attrs:{placeholder:"请输入内容"},model:{value:e.inputvalue,callback:function(t){e.inputvalue=t},expression:"inputvalue"}},[a("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.selectList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px","margin-bottom":"17px"},attrs:{value:e.datevalue1,type:"date",placeholder:"选择起始日期"},on:{"on-change":e.handleDate1}})],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:e.datevalue2,type:"date",placeholder:"选择截止日期"},on:{"on-change":e.handleDate2}})],1),e._v(" "),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")])],1)],1),e._v(" "),a("Row",[a("Table",{attrs:{columns:e.columns1,data:e.ordersData}}),e._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:e.pendcount,"page-size":e.pageSize,current:1},on:{"on-change":e.changePage}})],1)])],1)],1)},staticRenderFns:[]};var v=a("vSla")(h,p,!1,function(e){a("TMN5")},"data-v-2e06d3c2",null).exports,m={data:function(){var e=this;return{checkcount:0,ordersData:[],pageNum:1,pageSize:10,datevalue1:"",datevalue2:"",inputvalue:"",select:"",selectList:[{value:"订单号",label:"订单号"},{value:"商标名称",label:"商标名称"}],columns1:[{title:"订单号",key:"cOrderid",align:"center",width:162},{title:"价格(元)",key:"dPrice",align:"center",width:80},{title:"业务类型",key:"cOrdername",align:"center",width:85},{title:"申请人名称",key:"subjectType ",align:"center",minWidth:100,render:function(e,t){return e("div",{props:{}},"0"==t.row.subjectType&&"0"==t.row.cType?t.row.cTruename:t.row.cChName)}},{title:"商标名称",key:"cTradename",align:"center",minWidth:100},{title:"商标图片",key:"cBusinessLicense",width:85,render:function(e,t){return null==t.row.tradeUrl||""==t.row.tradeUrl?e("div",[e("img",{attrs:{src:"http://pab15trc8.bkt.clouddn.com/imgalt.png"},style:{width:"65px",height:"55px"}})]):e("div",[e("img",{attrs:{src:t.row.tradeTureUrl},style:{width:"65px",height:"55px"}})])}},{title:"申请类别",key:"iTradetype",align:"center",width:85},{title:"创建日期",key:"createtime",align:"center",width:150},{title:"小项个数",key:"minterm",align:"center",minWidth:100},{title:"操作",key:"action",width:140,align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"info"},on:{click:function(){e.handleDetail(a.row.cOrderid)}},style:{marginRight:"10px"}},"查看详情")])}}]}},methods:i()({},Object(r.b)(["handleGetOrders"]),{handletoAdd:function(){this.$router.push({name:"addorder"})},handleOrders:function(){var e=this,t={};t.token=this.token,t.iOrderstate="1",t.pageNum=this.pageNum,t.pageSize=this.pageSize,this.handleGetOrders(t).then(function(t){e.$store.commit("setcheckCount",t.totalCount),e.checkcount=e.checkCount,e.ordersData=t.data})},handleDetail:function(e){var t={};t.orderId=e,t.token=this.token,this.$router.push({name:"订单详情",query:t})},handleSearch:function(){var e=this,t={};t.token=this.token,t.pageNum=1,t.pageSize=this.pageSize,t.iOrderstate="1",""!=this.datevalue1&&(t.startTime=this.datevalue1),""!=this.datevalue2&&(t.endTime=this.datevalue2),"订单号"==this.select&&(t.cOrderid=this.inputvalue),"商标名称"==this.select&&(t.cTradename=this.inputvalue),this.handleGetOrders(t).then(function(t){e.checkcount=t.totalCount,e.ordersData=t.data})},changePage:function(e){this.pageNum=e,this.handleOrders()},handleDate1:function(e){this.datevalue1=e},handleDate2:function(e){this.datevalue2=e}}),computed:i()({},Object(r.c)(["token","checkCount"])),mounted:function(){this.handleOrders()}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Col",{staticStyle:{width:"290px"},attrs:{span:"5"}},[a("Input",{staticClass:"seaechInput",staticStyle:{width:"280px"},attrs:{placeholder:"请输入内容"},model:{value:e.inputvalue,callback:function(t){e.inputvalue=t},expression:"inputvalue"}},[a("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.selectList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px","margin-bottom":"17px"},attrs:{value:e.datevalue1,type:"date",placeholder:"选择起始日期"},on:{"on-change":e.handleDate1}})],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:e.datevalue2,type:"date",placeholder:"选择截止日期"},on:{"on-change":e.handleDate2}})],1),e._v(" "),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")])],1)],1),e._v(" "),a("Row",[a("Table",{attrs:{columns:e.columns1,data:e.ordersData}}),e._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:e.checkcount,"page-size":e.pageSize,current:1},on:{"on-change":e.changePage}})],1)])],1)],1)},staticRenderFns:[]};var y=a("vSla")(m,g,!1,function(e){a("CCtY")},"data-v-7041bd02",null).exports,f={data:function(){var e=this;return{checkedcount:0,ordersData:[],pageNum:1,pageSize:10,datevalue1:"",datevalue2:"",inputvalue:"",select:"",selectList:[{value:"订单号",label:"订单号"},{value:"商标名称",label:"商标名称"}],columns1:[{title:"订单号",key:"cOrderid",align:"center",width:162},{title:"价格(元)",key:"dPrice",align:"center",width:80},{title:"业务类型",key:"cOrdername",align:"center",width:85},{title:"申请人名称",key:"subjectType ",align:"center",minWidth:100,render:function(e,t){return e("div",{props:{}},"0"==t.row.subjectType&&"0"==t.row.cType?t.row.cTruename:t.row.cChName)}},{title:"商标名称",key:"cTradename",align:"center",minWidth:100},{title:"商标图片",key:"cBusinessLicense",width:85,render:function(e,t){return null==t.row.tradeUrl||""==t.row.tradeUrl?e("div",[e("img",{attrs:{src:"http://pab15trc8.bkt.clouddn.com/imgalt.png"},style:{width:"65px",height:"55px"}})]):e("div",[e("img",{attrs:{src:t.row.tradeTureUrl},style:{width:"65px",height:"55px"}})])}},{title:"申请类别",key:"iTradetype",align:"center",width:85},{title:"创建日期",key:"createtime",align:"center",width:150},{title:"小项个数",key:"minterm",align:"center",minWidth:100},{title:"操作",key:"action",width:140,align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"info"},on:{click:function(){e.handleDetail(a.row.cOrderid)}},style:{marginRight:"10px"}},"查看详情")])}}]}},methods:i()({},Object(r.b)(["handleGetOrders"]),{handletoAdd:function(){this.$router.push({name:"addorder"})},handleOrders:function(){var e=this,t={};t.token=this.token,t.iOrderstate="3",t.pageNum=this.pageNum,t.pageSize=this.pageSize,this.handleGetOrders(t).then(function(t){e.$store.commit("setcheckedCount",t.totalCount),e.checkedcount=e.checkedCount,e.ordersData=t.data})},handleDetail:function(e){var t={};t.orderId=e,t.token=this.token,this.$router.push({name:"订单详情",query:t})},handleSearch:function(){var e=this,t={};t.token=this.token,t.pageNum=1,t.pageSize=this.pageSize,t.iOrderstate="3",""!=this.datevalue1&&(t.startTime=this.datevalue1),""!=this.datevalue2&&(t.endTime=this.datevalue2),"订单号"==this.select&&(t.cOrderid=this.inputvalue),"商标名称"==this.select&&(t.cTradename=this.inputvalue),this.handleGetOrders(t).then(function(t){e.checkedcount=t.totalCount,e.ordersData=t.data})},changePage:function(e){this.pageNum=e,this.handleOrders()},handleDate1:function(e){this.datevalue1=e},handleDate2:function(e){this.datevalue2=e}}),computed:i()({},Object(r.c)(["token","checkedCount"])),mounted:function(){this.handleOrders()}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Col",{staticStyle:{width:"290px"},attrs:{span:"5"}},[a("Input",{staticClass:"seaechInput",staticStyle:{width:"280px"},attrs:{placeholder:"请输入内容"},model:{value:e.inputvalue,callback:function(t){e.inputvalue=t},expression:"inputvalue"}},[a("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.selectList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px","margin-bottom":"17px"},attrs:{value:e.datevalue1,type:"date",placeholder:"选择起始日期"},on:{"on-change":e.handleDate1}})],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:e.datevalue2,type:"date",placeholder:"选择截止日期"},on:{"on-change":e.handleDate2}})],1),e._v(" "),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")])],1)],1),e._v(" "),a("Row",[a("Table",{attrs:{columns:e.columns1,data:e.ordersData}}),e._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:e.checkedcount,"page-size":e.pageSize,current:1},on:{"on-change":e.changePage}})],1)])],1)],1)},staticRenderFns:[]};var w=a("vSla")(f,k,!1,function(e){a("eEIh")},"data-v-84e0e4d4",null).exports,O={data:function(){var e=this;return{nopasscount:0,ordersData:[],pageNum:1,pageSize:10,datevalue1:"",datevalue2:"",inputvalue:"",select:"",selectList:[{value:"订单号",label:"订单号"},{value:"商标名称",label:"商标名称"}],columns1:[{title:"订单号",key:"cOrderid",align:"center",width:162},{title:"价格(元)",key:"dPrice",align:"center",width:80},{title:"业务类型",key:"cOrdername",align:"center",width:85},{title:"申请人名称",key:"subjectType ",align:"center",minWidth:100,render:function(e,t){return e("div",{props:{}},"0"==t.row.subjectType&&"0"==t.row.cType?t.row.cTruename:t.row.cChName)}},{title:"商标名称",key:"cTradename",align:"center",minWidth:100},{title:"商标图片",key:"cBusinessLicense",width:85,render:function(e,t){return null==t.row.tradeUrl||""==t.row.tradeUrl?e("div",[e("img",{attrs:{src:"http://pab15trc8.bkt.clouddn.com/imgalt.png"},style:{width:"65px",height:"55px"}})]):e("div",[e("img",{attrs:{src:t.row.tradeTureUrl},style:{width:"65px",height:"55px"}})])}},{title:"申请类别",key:"iTradetype",align:"center",width:85},{title:"创建日期",key:"createtime",align:"center",width:150},{title:"小项个数",key:"minterm",align:"center"},{title:"操作",key:"action",width:140,align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"error"},on:{click:function(){e.toDoBusiness(a.row)}},style:{marginRight:"10px"}},"去修改")])}}]}},methods:i()({},Object(r.b)(["handleGetOrders"]),{handletoAdd:function(){this.$router.push({name:"addorder"})},handleOrders:function(){var e=this,t={};t.token=this.token,t.iOrderstate="2",t.pageNum=this.pageNum,t.pageSize=this.pageSize,this.handleGetOrders(t).then(function(t){e.$store.commit("setnopassCount",t.totalCount),e.nopasscount=e.nopassCount,e.ordersData=t.data})},toDoBusiness:function(e){var t="0";2===e.iOrderstate&&(state="2"),"商标变更"==e.cOrdername&&(t="1"),"商标转让"==e.cOrdername&&(t="2"),"商标续展"==e.cOrdername&&(t="3"),this.$router.push({query:{token:this.token,orderid:e.cOrderid,state:"2",type:t},path:"dealbusiness"})},handleSearch:function(){var e=this,t={};t.token=this.token,t.pageNum=1,t.pageSize=this.pageSize,t.iOrderstate="2",""!=this.datevalue1&&(t.startTime=this.datevalue1),""!=this.datevalue2&&(t.endTime=this.datevalue2),"订单号"==this.select&&(t.cOrderid=this.inputvalue),"商标名称"==this.select&&(t.cTradename=this.inputvalue),this.handleGetOrders(t).then(function(t){e.nopasscount=t.totalCount,e.ordersData=t.data})},changePage:function(e){this.pageNum=e,this.handleOrders()},handleDate1:function(e){this.datevalue1=e},handleDate2:function(e){this.datevalue2=e}}),computed:i()({},Object(r.c)(["token","nopassCount"])),mounted:function(){this.handleOrders()}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Col",{staticStyle:{width:"290px"},attrs:{span:"5"}},[a("Input",{staticClass:"seaechInput",staticStyle:{width:"280px"},attrs:{placeholder:"请输入内容"},model:{value:e.inputvalue,callback:function(t){e.inputvalue=t},expression:"inputvalue"}},[a("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.selectList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px","margin-bottom":"17px"},attrs:{value:e.datevalue1,type:"date",placeholder:"选择起始日期"},on:{"on-change":e.handleDate1}})],1),e._v(" "),a("Col",{staticStyle:{width:"210px"},attrs:{span:"3"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:e.datevalue2,type:"date",placeholder:"选择截止日期"},on:{"on-change":e.handleDate2}})],1),e._v(" "),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")])],1)],1),e._v(" "),a("Row",[a("Table",{attrs:{columns:e.columns1,data:e.ordersData}}),e._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:e.nopasscount,"page-size":e.pageSize,current:1},on:{"on-change":e.changePage}})],1)])],1)],1)},staticRenderFns:[]};var x={components:{allorders:d,payment:u,pending:v,checkpending:y,checked:w,nopass:a("vSla")(O,S,!1,function(e){a("QoDS")},"data-v-f293e182",null).exports},computed:i()({},Object(r.c)(["allCount","payCount","pendCount","checkCount","checkedCount","nopassCount"]))},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",{staticStyle:{margin:"25px"},attrs:{"dis-hover":""}},[a("Tabs",[a("TabPane",{attrs:{label:"全部订单("+e.allCount+")",name:"name1"}},[a("allorders")],1),e._v(" "),a("TabPane",{attrs:{label:"待付款("+e.payCount+")",name:"name2"}},[a("payment")],1),e._v(" "),a("TabPane",{attrs:{label:"待处理("+e.pendCount+")",name:"name3"}},[a("pending")],1),e._v(" "),a("TabPane",{attrs:{label:"待审核("+e.checkCount+")",name:"name4"}},[a("checkpending")],1),e._v(" "),a("TabPane",{attrs:{label:"已审核("+e.checkedCount+")",name:"name5"}},[a("checked")],1),e._v(" "),a("TabPane",{attrs:{label:"审核未通过("+e.nopassCount+")",name:"name6"}},[a("nopass")],1)],1)],1)],1)},staticRenderFns:[]};var C=a("vSla")(x,b,!1,function(e){a("vTzG")},"data-v-a5bb206a",null);t.default=C.exports},eEIh:function(e,t){},qAw7:function(e,t){},vTzG:function(e,t){}});