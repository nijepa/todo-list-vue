(function(t){function e(e){for(var a,r,n=e[0],d=e[1],c=e[2],l=0,p=[];l<n.length;l++)r=n[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,r=1;r<o.length;r++){var d=o[r];0!==i[d]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=o[0]))}return t}var a={},i={app:0},s=[];function r(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"34ae1322"}[t]+".js"}function n(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.e=function(t){var e=[],o=i[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=i[t]=[e,a]}));e.push(o[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.src=r(t);var c=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(l);var o=i[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",c.name="ChunkLoadError",c.type=a,c.request=s,o[1](c)}i[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},n.m=t,n.c=a,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var u=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"03b1":function(t,e,o){},"0693":function(t,e,o){"use strict";var a=o("03b1"),i=o.n(a);i.a},"0792":function(t,e,o){},"0ea6":function(t,e,o){"use strict";var a=o("c94e"),i=o.n(a);i.a},"1e06":function(t,e,o){},"4dfa":function(t,e,o){"use strict";var a=o("606b"),i=o.n(a);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),o("router-view")],1)},s=[],r=(o("5c0b"),o("2877")),n={},d=Object(r["a"])(n,i,s,!1,null,null,null),c=d.exports,l=(o("d3b7"),o("8c4f")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),a("button",{attrs:{id:"add-pro"},on:{click:function(e){return t.addProject()}}}),a("div",{staticClass:"container"},[a("div",{staticClass:"projects"},t._l(t.allData,(function(e){return a("div",{key:e.id,staticClass:"project",class:{active:e.id==t.isActive},on:{click:function(o){return t.selectProject(o,e)}}},[a("project-item",{class:{active:e.id==t.isActive},attrs:{"projects-data":e}}),e.id==t.isActive?a("div",{staticClass:"active"},[a("button",{staticClass:"pro-btn",attrs:{id:"del"},on:{click:function(e){return t.deleteProject()}}},[t._v("Delete Project")]),a("button",{staticClass:"pro-btn",attrs:{id:"edit-pro"},on:{click:function(e){return t.updateProject()}}},[t._v("Edit Project")]),a("button",{staticClass:"pro-btn",attrs:{id:"add-todo"},on:{click:function(e){return t.addTodo()}}},[t._v("Add ToDo")])]):t._e()],1)})),0),a("div",{staticClass:"show"},[a("transition",{attrs:{name:"slide-fade"}},[t.newProject?a("div",{staticClass:"container-edit",class:{hidden:t.currentProject.id==t.isActive&&1==t.editProject}},[a("project-edit",{attrs:{"project-data":t.currentProject,type:"add"},on:{"send-message":t.handleProject}})],1):t._e()]),a("transition",{attrs:{name:"slide-fade"}},[t.currentProject!={}&&1==t.editProject?a("div",{staticClass:"container-edit"},[a("project-edit",{class:{active:t.currentProject.id==t.isActive},attrs:{"project-data":t.currentProject,type:"edit"},on:{"send-message":t.handleProject}})],1):t._e()]),a("transition",{attrs:{name:"slide-fade"}},[t.selectedTodo&&1==t.editTodo?a("div",{staticClass:"container-edit"},[a("todo-edit",{class:{active:t.selectedTodo==t.selectedTodo},attrs:{"todo-data":t.selectedTodo,type:"edit"},on:{"todo-edit":t.handleTodo}})],1):t._e()]),a("transition",{attrs:{name:"slide-fade"}},[t.newTodo?a("div",{staticClass:"container-edit"},[a("todo-edit",{class:{active:t.selectedTodo==t.selectedTodo},attrs:{"todo-data":t.currentTodo,type:"add"},on:{"todo-edit":t.handleTodo}})],1):t._e()])],1),a("div",{staticClass:"tasks"},[t.currentProject?a("div",{staticClass:"container-edit"},t._l(t.currentProject.todos,(function(e){return a("div",{key:e.id,staticClass:"todos",class:{active:e==t.selectedTodo},on:{click:function(o){return t.selectTask(o,e)}}},[a("todo-item",{class:{active:e==t.selectedTodo},attrs:{"todos-data":e}}),e==t.selectedTodo?a("div",{staticClass:"active"},[a("button",{attrs:{id:"del"},on:{click:function(e){return t.deleteTodo()}}},[t._v("Delete ToDo")])]):t._e()],1)})),0):t._e()])])])},p=[],h=(o("a4d3"),o("e01a"),o("c740"),o("c975"),o("d81d"),o("a434"),o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-card"},[o("h3",[t._v("Title : "),o("span",[t._v(t._s(t.projectsData.name))])]),o("p",[t._v("Description : "),o("span",[t._v(t._s(t.projectsData.desc))])])])}),f=[],m={name:"ProjectItem",props:{projectsData:Object}},v=m,D=(o("0693"),Object(r["a"])(v,h,f,!1,null,"1288da19",null)),j=D.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("form",{attrs:{action:""},on:{submit:function(t){t.preventDefault()}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("Title : ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.projectData.name,expression:"projectData.name"}],attrs:{type:"text",name:"title",id:"title",required:""},domProps:{value:t.projectData.name},on:{input:function(e){e.target.composing||t.$set(t.projectData,"name",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"desc"}},[t._v("Description : ")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.projectData.desc,expression:"projectData.desc"}],attrs:{name:"desc",id:"desc",cols:"25",rows:"3"},domProps:{value:t.projectData.desc},on:{input:function(e){e.target.composing||t.$set(t.projectData,"desc",e.target.value)}}})]),o("div",{staticClass:"form-btns"},[o("button",{attrs:{id:"cancel"},on:{click:function(e){return t.newProject(!1)}}},[t._v("Cancel")]),o("button",{attrs:{id:"save",type:"submit"},on:{click:function(e){return t.newProject(!0)}}},[t._v("Save")])])])])},P=[],g={name:"ProjectEdit",props:{projectData:Object,type:String,method:{type:Function}},data:function(){return{saveProject:!1}},mounted:function(){this.$emit("send-message",this.saveProject)},methods:{newProject:function(t){this.saveProject=!!t,this.$emit("send-message",this.saveProject,t,this.type)}}},T=g,b=(o("bb1e"),Object(r["a"])(T,y,P,!1,null,null,null)),_=b.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos"},[o("h3",{class:{finished:t.todosData.status}},[t._v(" Todo : "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todosData.status,expression:"todosData.status"}],attrs:{type:"checkbox",name:"status",id:"status"},domProps:{checked:Array.isArray(t.todosData.status)?t._i(t.todosData.status,null)>-1:t.todosData.status},on:{change:function(e){var o=t.todosData.status,a=e.target,i=!!a.checked;if(Array.isArray(o)){var s=null,r=t._i(o,s);a.checked?r<0&&t.$set(t.todosData,"status",o.concat([s])):r>-1&&t.$set(t.todosData,"status",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.todosData,"status",i)}}}),o("span",[t._v(" "+t._s(t.todosData.title)+" * ")]),o("span",[t._v(" "+t._s(t.todosData.dueDate)+" * ")]),o("span",{class:"priority-"+t.todosData.priority},[t._v(" "+t._s(1==t.todosData.priority?"high":2==t.todosData.priority?"medium":"low")+" ")])])])},k=[],x={name:"TodoItem",props:{todosData:Object}},C=x,O=(o("4dfa"),Object(r["a"])(C,w,k,!1,null,"5ffa62e4",null)),S=O.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("form",{attrs:{action:""},on:{submit:function(t){t.preventDefault()}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("Title : ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoData.title,expression:"todoData.title"}],attrs:{type:"text",name:"title",id:"title",required:""},domProps:{value:t.todoData.title},on:{input:function(e){e.target.composing||t.$set(t.todoData,"title",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"desc"}},[t._v("Description : ")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todoData.description,expression:"todoData.description"}],attrs:{name:"desc",id:"desc",cols:"25",rows:"3"},domProps:{value:t.todoData.description},on:{input:function(e){e.target.composing||t.$set(t.todoData,"description",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"dueDate"}},[t._v("Due Date : ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoData.dueDate,expression:"todoData.dueDate"}],attrs:{type:"date",name:"dueDate",id:"dueDate"},domProps:{value:t.todoData.dueDate},on:{input:function(e){e.target.composing||t.$set(t.todoData,"dueDate",e.target.value)}}})]),o("div",{staticClass:"task-item-radio"},[o("p",{staticClass:"task-element"},[t._v("Priority: ")]),o("input",{staticClass:"task-element ",attrs:{type:"radio",id:"high",name:"priority"},domProps:{checked:3==t.todoData.priority,value:{priority:t.todoData.priority}},on:{click:function(e){return t.setPriority(3)}}}),o("label",{staticClass:"task-element ",attrs:{for:"high"}},[t._v(" Low")]),o("input",{staticClass:"task-element ",attrs:{type:"radio",id:"medium",name:"priority"},domProps:{checked:2==t.todoData.priority,value:{priority:t.todoData.priority}},on:{click:function(e){return t.setPriority(2)}}}),o("label",{staticClass:"task-element ",attrs:{for:"medium"}},[t._v(" Medium")]),o("input",{staticClass:"task-element ",attrs:{type:"radio",id:"low",name:"priority"},domProps:{checked:1==t.todoData.priority,value:{priority:t.todoData.priority}},on:{click:function(e){return t.setPriority(1)}}}),o("label",{staticClass:"task-element ",attrs:{for:"low"}},[t._v(" High")])]),o("div",{staticClass:"form-group status"},[o("label",{staticClass:"status",attrs:{for:"status"}},[t._v("Finished : ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoData.status,expression:"todoData.status"}],staticClass:"status",attrs:{type:"checkbox",name:"status",id:"finished",value:"finished"},domProps:{checked:Array.isArray(t.todoData.status)?t._i(t.todoData.status,"finished")>-1:t.todoData.status},on:{change:function(e){var o=t.todoData.status,a=e.target,i=!!a.checked;if(Array.isArray(o)){var s="finished",r=t._i(o,s);a.checked?r<0&&t.$set(t.todoData,"status",o.concat([s])):r>-1&&t.$set(t.todoData,"status",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.todoData,"status",i)}}})]),o("div",{staticClass:"form-btns"},[o("button",{attrs:{id:"cancel"},on:{click:function(e){return t.newTodo(!1)}}},[t._v("Cancel")]),o("button",{attrs:{id:"save",type:"submit"},on:{click:function(e){return t.newTodo(!0)}}},[t._v("Save")])])])])},$=[],E={name:"TodoEdit",props:{todoData:Object,type:String,method:{type:Function}},data:function(){return{saveTodo:!1,priority:""}},mounted:function(){this.$emit("todo-edit",this.saveTodo),this.checkPriority()},methods:{newTodo:function(t){this.saveTodo=!!t,this.$emit("todo-edit",this.saveTodo,t,this.type)},checkPriority:function(){1==this.todoData.priority?this.priority="High":2==this.todoData.priority?this.priority="Medium":this.priority="Low"},setPriority:function(t){this.todoData.priority=1==t?1:2==t?2:3}}},I=E,N=(o("0ea6"),Object(r["a"])(I,A,$,!1,null,"9658d12e",null)),J=N.exports,M=void 0,H={name:"Home",components:{ProjectItem:j,TodoItem:S,ProjectEdit:_,TodoEdit:J},data:function(){return{allData:[{id:0,name:"Example project",desc:"Description of example project",todos:[]},{id:1,name:"Another example project",desc:"Project with some tasks",todos:[{id:0,title:"Example task",description:"Active task, medium priority",dueDate:"2020-02-09",priority:2,status:!1},{id:1,title:"Another example task",description:"Finished task, high priority",dueDate:"2020-02-06",priority:1,status:!0}]}],currentProject:{id:null,name:"",desc:""},currentTodo:{id:null,title:"",description:"",dueDate:"",status:"",priority:""},currentTodos:null,isActive:void 0,selectedTodo:null,editProject:!1,newProject:!1,newTodo:!1}},mounted:function(){localStorage.getItem("allData")?this.allData=JSON.parse(localStorage.getItem("allData")):localStorage.setItem("allData",JSON.stringify(this.allData))},methods:{populateStorage:function(){localStorage.setItem("allData",JSON.stringify(this.allData))},getStorage:function(){return console.log("uuu"),localStorage.getItem("allData")||M.populateStorage(),M.allData=JSON.parse(localStorage.getItem("allData")),M.allData},selectProject:function(t,e){var o=this;this.selectedTodo=null,this.editTodo=!1,this.newProject=!1,this.currentProject=e,this.isActive=e.id;var a=this.allData.findIndex((function(t){return t.id==o.currentProject.id})),i=this.allData[a].todos.map((function(t){return t.id})),s=i.indexOf(this.currentProject.id);return this.currentTodos=this.allData[a].todos[s],this.allData[a].todos[s]},selectTask:function(t,e){this.selectedTodo=e,this.editProject=!1,this.newTodo=!1,this.editTodo=!0},addProject:function(){this.editProject=!1,this.editTodo=!1,this.newProject=!0,this.newTodo=!1,this.currentProject={},this.isActive=void 0,this.selectedTodo=null},handleProject:function(t,e,o){var a=this;if(t&&e){if("add"==o)return this.allData.push({id:this.allData.length+1,name:this.currentProject.name,desc:this.currentProject.desc,todos:[]}),this.populateStorage(),this.newProject=!1,this.allData[this.allData.length-1];var i=this.allData.findIndex((function(t){return t.id==a.currentProject.id}));return this.allData[i].name=this.currentProject.name,this.allData[i].desc=this.currentProject.desc,this.populateStorage(),this.editProject=!1,this.allData[this.allData[i]]}0==e&&(this.newProject=!1,this.editProject=!1)},updateProject:function(){this.editProject=!0,this.newTodo=!1},deleteProject:function(){var t=this.allData.map((function(t){return t.id})).indexOf(this.currentProject.id);~t&&this.allData.splice(t,1),this.populateStorage()},addTodo:function(){this.editProject=!1,this.editTodo=!1,this.newTodo=!0,this.selectedTodo=null,this.currentTodo={}},updateTodo:function(){this.editTodo=!0},deleteTodo:function(){var t=this,e=this.allData.findIndex((function(e){return e.id==t.currentProject.id})),o=this.allData[e].todos.map((function(t){return t.id})),a=o.indexOf(this.selectedTodo.id);~o&&this.allData[e].todos.splice(a,1),this.populateStorage(),this.editTodo=!1,this.selectedTodo=null,this.newTodo=!0,this.currentTodo={}},handleTodo:function(t,e,o){var a=this;if(t&&e){if("add"==o){var i=this.allData.findIndex((function(t){return t.id==a.currentProject.id}));return this.allData[i].todos.push({id:this.allData[i].todos.length+1,title:this.currentTodo.title,description:this.currentTodo.description,dueDate:this.currentTodo.dueDate,priority:this.currentTodo.priority,status:this.currentTodo.status}),this.populateStorage(),this.newTodo=!1,this.allData[this.allData[i].todos.length-1]}var s=this.allData.findIndex((function(t){return t.id==a.currentProject.id})),r=this.allData.findIndex((function(t){return t.id==a.currentProject.id})),n=this.allData[s].todos.map((function(t){return t.id})),d=n.indexOf(this.selectedTodo.id);return this.allData[r].todos[d].title=this.selectedTodo.title,this.allData[r].todos[d].description=this.selectedTodo.description,this.allData[r].todos[d].dueDate=this.selectedTodo.dueDate,this.allData[r].todos[d].priority=this.selectedTodo.priority,this.allData[r].todos[d].status=this.selectedTodo.status,this.populateStorage(),this.selectedTodo=!1,this.allData[this.allData[r]]}0==e&&(this.newTodo=!1,this.editTodo=!1,this.selectedTodo=null)}}},F=H,L=(o("d88c"),Object(r["a"])(F,u,p,!1,null,"dd9a14ce",null)),q=L.exports;a["a"].use(l["a"]);var V=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],z=new l["a"]({mode:"history",base:"/",routes:V}),B=z,G=o("2f62");a["a"].use(G["a"]);var K=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:B,store:K,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var a=o("9c0c"),i=o.n(a);i.a},"606b":function(t,e,o){},"9c0c":function(t,e,o){},bb1e:function(t,e,o){"use strict";var a=o("0792"),i=o.n(a);i.a},c94e:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},d88c:function(t,e,o){"use strict";var a=o("1e06"),i=o.n(a);i.a}});
//# sourceMappingURL=app.dbe02e42.js.map