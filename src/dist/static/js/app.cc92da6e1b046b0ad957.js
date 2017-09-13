webpackJsonp([0],{0:function(t,e){},"1xd6":function(t,e){},"42Hy":function(t,e,s){"use strict";function a(t){s("HbxX")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("DK6z"),n=s("SvoC"),o=s("VU/8"),c=a,r=o(i.a,n.a,c,null,null);e.default=r.exports},A65E:function(t,e){},DK6z:function(t,e,s){"use strict";e.a={data:function(){return{rooms:[]}},methods:{createRoom:function(){var t=this;this.$http.post("api/room/").then(function(e){t.$router.push({name:"room",query:{label:e.body.label}})})}},mounted:function(){var t=this;this.$http.get("api/room/").then(function(e){t.rooms=e.body})}}},F12q:function(t,e){},HbxX:function(t,e){},M93x:function(t,e,s){"use strict";function a(t){s("1xd6"),s("A65E")}var i=s("xJD8"),n=s("X8QV"),o=s("VU/8"),c=a,r=o(i.a,n.a,c,null,null);e.a=r.exports},Mh98:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("ROOM: "+t._s(t.$route.query.label))]),t._v(" "),t.messages.length>0?s("div",{staticClass:"ui segment"},[s("router-link",{attrs:{to:{name:"index"}}},[s("div",{staticClass:"ui green basic button icon",staticStyle:{position:"absolute",right:"10px"}},[s("i",{staticClass:"home icon"})])]),t._v(" "),s("div",{staticClass:"ui selection list"},t._l(t.messages,function(e,a){return s("div",{key:a,staticClass:"item",staticStyle:{padding:"1em 0"}},[s("div",{staticClass:"ui grid"},[s("div",{staticClass:"four wide column"},[t._v("\n                        "+t._s(e.timestamp)+"\n                    ")]),t._v(" "),s("div",{staticClass:"eight wide column"},[t._v("\n                        "+t._s(e.message)+"\n                    ")]),t._v(" "),s("div",{staticClass:"two wide column"},[t._v("\n                        "+t._s(e.handle)+"\n                    ")])])])}))],1):t._e(),t._v(" "),s("div",{staticClass:"ui segment"},[s("div",{staticClass:"ui grid"},[s("div",{staticClass:"six wide column"},[s("div",{staticClass:"ui fluid labeled input"},[s("div",{staticClass:"ui label"},[t._v("\n                      Handle\n                    ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.handle,expression:"handle"}],attrs:{type:"text",placeholder:"Your name"},domProps:{value:t.handle},on:{input:function(e){e.target.composing||(t.handle=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"eight wide column"},[s("div",{staticClass:"ui fluid input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newMessage,expression:"newMessage"}],attrs:{type:"text",placeholder:"Message..."},domProps:{value:t.newMessage},on:{input:function(e){e.target.composing||(t.newMessage=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"two wide column"},[s("button",{staticClass:"ui teal right labeled right floated icon button",on:{click:t.send}},[s("i",{staticClass:"reply icon"}),t._v("\n                  Send\n              ")])])])])])},i=[],n={render:a,staticRenderFns:i};e.a=n},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("M93x"),n=s("YaEn"),o=s("ORbq");a.a.use(o.a),window.wsScheme="https:"==window.location.protocol?"wss":"ws",a.a.use(o.a),a.a.http.options.root=window.location.protocol+"//"+window.location.host,window.wsRoot=window.wsScheme+"://"+window.location.host,a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,template:"<App/>",components:{App:i.a}})},SvoC:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticStyle:{"margin-top":"2em","font-size":"5em"}},[t._v("Django Channels Example")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"ui huge grey basic button",staticStyle:{"font-size":"2.42857143rem","margin-bottom":"1em"},on:{click:t.createRoom}},[t._v("Create New Room")]),t._v(" "),s("div",{staticClass:"ui segment"},[s("div",{staticClass:"ui selection list"},[t._m(1),t._v(" "),t._l(t.rooms,function(e){return s("div",{key:e.id,staticClass:"item"},[s("div",{staticClass:"ui grid"},[s("div",{staticClass:"two wide column"},[s("h3",{staticClass:"ui header"},[t._v(t._s(e.id))])]),t._v(" "),s("div",{staticClass:"eight wide column"},[t._v("\n                        "+t._s(e.label)+"\n                    ")]),t._v(" "),s("div",{staticClass:"six wide column"},[s("router-link",{attrs:{to:{name:"room",query:{label:e.label}}}},[s("h5",{staticClass:"ui green header",staticStyle:{float:"right"}},[t._v("进入")])])],1)])])})],2)]),t._v(" "),t._m(2)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui",staticStyle:{"margin-top":"2em","margin-bottom":"2em","font-size":"2em","line-height":"150%"}},[t._v("\n        This is a demo using "),s("a",{attrs:{href:"http://channels.readthedocs.org/en/latest/"}},[t._v("Django Channels")]),t._v(" and "),s("a",{attrs:{href:"https://cn.vuejs.org/index.html"}},[t._v("Vue.js")]),t._v(" to implement a simple WebSocket-based chat server. You can see the "),s("a",{attrs:{href:"https://github.com/jackeyGao/django-vuejs"}},[t._v("code on GitHub")]),t._v(", or try the app:\n    ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",{staticClass:"ui grid"},[s("div",{staticClass:"two wide column"},[s("h3",{staticClass:"ui header"},[t._v("#")])]),t._v(" "),s("div",{staticClass:"eight wide column"},[s("h3",{staticClass:"ui header"},[t._v("Label")])]),t._v(" "),s("div",{staticClass:"six wide column"},[s("h3",{staticClass:"ui right floated header"},[t._v("-")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"ui grey header"},[t._v("Or, you can visit "),s("span",{staticClass:"code"},[t._v("http://127.0.0.1:8000/any-path-you-want")]),t._v(" to create a arbitrary room or join one whose name you know.")])}],n={render:a,staticRenderFns:i};e.a=n},X8QV:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container",attrs:{id:"app"}},[s("router-view")],1)},i=[],n={render:a,staticRenderFns:i};e.a=n},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),i=s("/ocq");s("42Hy"),s("t3u0");a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"index",component:function(t){return new Promise(function(t){t()}).then(function(){var e=[s("42Hy")];t.apply(null,e)}.bind(this)).catch(s.oe)}},{path:"/room",name:"room",component:function(t){return new Promise(function(t){t()}).then(function(){var e=[s("t3u0")];t.apply(null,e)}.bind(this)).catch(s.oe)}}]})},t3u0:function(t,e,s){"use strict";function a(t){s("F12q")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("xLEQ"),n=s("Mh98"),o=s("VU/8"),c=a,r=o(i.a,n.a,c,"data-v-49b61f60",null);e.default=r.exports},xJD8:function(t,e,s){"use strict";e.a={name:"app"}},xLEQ:function(t,e,s){"use strict";var a=s("mvHQ"),i=s.n(a);e.a={data:function(){return{chatsock:null,messages:[],handle:"",newMessage:""}},methods:{send:function(){var t={handle:this.handle,message:this.newMessage};this.chatsock.send(i()(t)),this.newMessage=""}},mounted:function(){var t=this,e="api/message/?limit=50&label="+this.$route.query.label;this.$http.get(e).then(function(e){t.messages=e.body});var s=this;this.chatsock=new WebSocket(window.wsRoot+"/chat/"+this.$route.query.label),this.chatsock.onmessage=function(t){var e=JSON.parse(t.data);s.messages.push(e)}}}}},["NHnr"]);
//# sourceMappingURL=app.cc92da6e1b046b0ad957.js.map