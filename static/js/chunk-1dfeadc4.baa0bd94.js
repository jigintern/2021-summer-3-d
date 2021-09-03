(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dfeadc4"],{"1e81":function(t,e,a){"use strict";a("3c0a")},"37d3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"post"}},[a("v-app",{style:{background:t.$vuetify.theme.themes.light.background}},[a("div",{staticClass:"my-5"}),a("v-container",[a("v-row",{attrs:{justify:"center","align-content":"center"}},[a("v-col",[a("h1",{staticClass:"blue--text"},[t._v("編集画面")]),a("div",{staticClass:"my-5"}),a("v-row",{attrs:{justify:"center","align-content":"center"}},[a("v-col",[a("div",{staticClass:"white--text text-h4"},[t._v("プロフィール")]),a("div",{staticClass:"my-3"}),a("v-text-field",{class:"rounded-xl custom-placeholder-color custom-label-color",staticStyle:{width:"400px"},attrs:{"background-color":"#676767",label:"ユーザーネーム",placeholder:"ユーザーネーム",solo:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),a("div",{staticClass:"my-1"}),a("v-text-field",{class:"rounded-xl custom-placeholder-color custom-label-color",staticStyle:{width:"400px"},attrs:{"background-color":"#676767",label:"主にプレイしているゲーム",placeholder:"主にプレイしているゲーム",solo:""},model:{value:t.gameName,callback:function(e){t.gameName=e},expression:"gameName"}}),a("div",{staticClass:"my-1"}),a("v-text-field",{class:"rounded-xl custom-placeholder-color custom-label-color",staticStyle:{width:"800px"},attrs:{"background-color":"#676767",label:"プロフィール",placeholder:"プロフィール",solo:""},model:{value:t.profile,callback:function(e){t.profile=e},expression:"profile"}}),a("div",{staticClass:"my-1"})],1)],1),a("div",{staticClass:"white--text text-h4"},[t._v("一日のスケジュール")]),a("div",{staticClass:"my-3"}),a("v-row",{staticStyle:{width:"880px"}},[a("v-col",[a("v-text-field",{class:"rounded-xl custom-placeholder-color custom-label-color",staticStyle:{width:"400px"},attrs:{"background-color":"#676767",label:"メニュー",placeholder:"メニュー",solo:""},model:{value:t.actionContent,callback:function(e){t.actionContent=e},expression:"actionContent"}}),0!==this.actionDataList.length?a("div",t._l(t.actionDataList,(function(e,s){return a("div",{key:s},[a("div",{staticClass:"white--text text-h5"},[t._v(" ・"+t._s(e.start_time)+"～"+t._s(e.end_time)+":"+t._s(e.menu)+" ")])])})),0):t._e()],1),a("div",{staticClass:"my-3"}),a("v-col",[a("vue-timepicker",{staticClass:"timepicker",attrs:{format:"HH:mm"},model:{value:t.startTimeObject,callback:function(e){t.startTimeObject=e},expression:"startTimeObject"}})],1),a("v-col",[a("vue-timepicker",{attrs:{format:"HH:mm"},model:{value:t.endTimeObject,callback:function(e){t.endTimeObject=e},expression:"endTimeObject"}})],1),a("v-col",[a("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){return t.addActionData()}}},[a("v-icon",{attrs:{size:"50"}},[t._v("mdi-plus-circle")])],1)],1)],1)],1),a("v-col",[a("PieChart",{attrs:{"chart-data":t.chartItems,options:t.chartOptions}})],1)],1)],1),a("div",{staticClass:"my-5"}),a("v-container",[a("v-row",{attrs:{justify:"center","align-content":"center"}},[a("v-col",[a("div",{staticClass:"white--text text-h4"},[t._v("食事で気を付けること")]),a("div",{staticClass:"my-3"}),a("v-row",{staticStyle:{width:"800px"}},[a("v-col",[a("v-text-field",{class:"rounded-xl custom-placeholder-color custom-label-color",staticStyle:{width:"800px"},attrs:{"background-color":"#3e3e3e",label:"例：朝ごはんはきちんと食べる",placeholder:"例：朝ごはんはきちんと食べる",solo:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{attrs:{fab:"",small:""}},[a("v-icon",{attrs:{size:"50"}},[t._v("mdi-plus-circle")])],1)]},proxy:!0}]),model:{value:t.mealCarefulContent,callback:function(e){t.mealCarefulContent=e},expression:"mealCarefulContent"}})],1)],1),a("div",{staticClass:"my-5"}),a("div",{staticClass:"white--text text-h4"},[t._v("ゲームで気を付けること")]),a("div",{staticClass:"my-3"}),a("v-row",{staticStyle:{width:"800px"}},[a("v-col",[a("v-text-field",{class:"rounded-xl custom-placeholder-color custom-label-color",staticStyle:{width:"800px"},attrs:{"background-color":"#3e3e3e",color:"red",label:"例：朝ごはんはきちんと食べる",placeholder:"例：朝ごはんはきちんと食べる",solo:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{attrs:{fab:"",small:""}},[a("v-icon",{attrs:{size:"50"}},[t._v("mdi-plus-circle")])],1)]},proxy:!0}]),model:{value:t.gameCarefulContent,callback:function(e){t.gameCarefulContent=e},expression:"gameCarefulContent"}})],1)],1)],1)],1)],1),a("v-container",[a("v-row",{attrs:{justify:"end"}},[a("v-btn",{attrs:{color:"blue"},on:{click:function(e){return t.postData()}}},[t._v("投稿する")])],1)],1),a("div",{staticClass:"my-5"})],1)],1)},l=[],o=(a("d3b7"),a("748a")),c=a("97fc"),i=a.n(c),n=(a("1e11"),a("bc3a")),r=a.n(n),d={name:"Post",components:{PieChart:o["a"],"vue-timepicker":i.a},mounted:function(){this.fillData()},data:function(){return{isChartExist:!1,userName:null,gameName:null,profile:null,mealCarefulContent:null,gameCarefulContent:null,actionContent:null,actionDataList:[],latestId:0,beforeTime:25,chartItems:null,startTimeObject:{HH:"00",mm:"00"},endTimeObject:{HH:"00",mm:"00"},chartOptions:{maintainAspectRatio:!1}}},methods:{addActionData:function(){this.actionDataList.push({start_time:"".concat(this.startTimeObject.HH),end_time:"".concat(this.endTimeObject.HH),menu:this.actionContent});var t=this.actionDataList,e=60*(parseInt(t[t.length-1].end_time)-parseInt(t[t.length-1].start_time)),a=this.chartItems.datasets[0]["data"][this.chartItems.datasets[0]["data"].length-1];1!=this.chartItems.datasets[0]["data"].length?(this.chartItems.datasets[0]["data"][this.chartItems.datasets[0]["data"].length-1]=e,this.chartItems.datasets[0]["data"].push(a-e)):(this.chartItems.datasets[0]["data"].unshift(e),this.chartItems.datasets[0]["data"][this.chartItems.datasets[0]["data"].length-1]=a-e),console.log(this.chartItems),this.fillData(this.chartItems.datasets[0]["data"]),this.actionContent=""},fillData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.chartItems=t?{datasets:[{label:"一日の生活",backgroundColor:"#847636",data:t}]}:{datasets:[{label:"一日の生活",backgroundColor:"#847636",data:[1440]}]}},postData:function(){var t=this,e={headers:{"Content-Type":"application/json"}};r.a.post("https://3d.intern.jigd.info/api/articles",{userName:this.userName,gameName:this.gameName,meal_description:this.mealCarefulContent,notice:this.gameCarefulContent,profile:this.profile,schedule:this.actionDataList},e).then((function(e){var a=e.data;a.success?t.$router.push("/"):alert(a.msg)})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}))}}},u=d,m=(a("1e81"),a("2877")),h=a("6544"),v=a.n(h),p=a("7496"),f=a("8336"),b=a("62ad"),C=a("a523"),x=a("132d"),g=a("0fd9"),y=a("8654"),k=Object(m["a"])(u,s,l,!1,null,null,null);e["default"]=k.exports;v()(k,{VApp:p["a"],VBtn:f["a"],VCol:b["a"],VContainer:C["a"],VIcon:x["a"],VRow:g["a"],VTextField:y["a"]})},"3c0a":function(t,e,a){}}]);
//# sourceMappingURL=chunk-1dfeadc4.baa0bd94.js.map