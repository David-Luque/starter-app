(this["webpackJsonpstart-app-client"]=this["webpackJsonpstart-app-client"]||[]).push([[0],{38:function(t,e,n){},39:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(30),o=n.n(s),a=(n(38),n(2)),i=n(3),l=n(5),j=n(4),u=(n(39),n(6)),h=n(33),d=n(8),p=n(10),b=n(16),f=n.n(b),g=function t(){var e=this;Object(a.a)(this,t),this.allProjects=function(){return e.service.get("/").then((function(t){return t.data}))},this.addProject=function(t,n){return e.service.post("/",{title:t,description:n}).then((function(t){return t.data}))},this.projectDetails=function(t){return e.service.get("/".concat(t)).then((function(t){return t.data}))},this.editProject=function(t,n,r){return e.service.put("/".concat(t),{title:n,description:r}).then((function(t){return t.data}))},this.deleteProject=function(t){return e.service.delete("/".concat(t)).then((function(t){return t.data}))};var n=f.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,withCredentials:!0});this.service=n},O=n(0),v=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={title:"",description:""},t.service=new g,t.handleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(p.a)({},r,c))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,r=n.title,c=n.description;t.service.addProject(r,c).then((function(e){console.log(e),t.props.getData(),t.setState({title:"",description:""})})).catch((function(t){console.log(t)}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{className:"addProject",children:[Object(O.jsx)("h2",{children:"Create project"}),Object(O.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(O.jsx)("label",{children:"Title: "}),Object(O.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("label",{children:"Description: "}),Object(O.jsx)("input",{type:"text",name:"description",value:this.state.description,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("button",{children:"Create"})]})]})}}]),n}(r.Component),m=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={allProjects:[]},t.service=new g,t.componentDidMount=function(){t.getAllProjects()},t.getAllProjects=function(){t.service.allProjects().then((function(e){t.setState({allProjects:e})})).catch((function(t){console.log(t)}))},t.renderAllProjects=function(){return Object(h.a)(t.state.allProjects).map((function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)(d.b,{to:"/projects/".concat(t._id),children:Object(O.jsx)("h3",{children:t.title})}),Object(O.jsx)("ul",{children:t.tasks.map((function(t,e){return Object(O.jsx)("li",{children:t.title},e)}))})]},t._id)}))},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[this.state.allProjects.length>0&&this.renderAllProjects(),Object(O.jsx)("div",{children:Object(O.jsx)(v,{getData:this.getAllProjects})})]})}}]),n}(r.Component),x=n(9),I=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={title:t.props.theProject.title,description:t.props.theProject.description},t.service=new g,t.handleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(p.a)({},r,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,r=n.title,c=n.description,s=t.props.theProject._id;t.service.editProject(s,r,c).then((function(){t.props.getProjectInfo()})).catch((function(t){return console.log(t)}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("h3",{children:"Edit project"}),Object(O.jsxs)("form",{className:"editProject",onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{children:"Title: "}),Object(O.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("label",{children:"Description: "}),Object(O.jsx)("textarea",{name:"description",value:this.state.description,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("button",{children:"Confirm"})]})]})}}]),n}(r.Component),k=function t(){var e=this;Object(a.a)(this,t),this.getTask=function(t,n){return e.service.get("/projects/".concat(t,"/tasks/").concat(n)).then((function(t){return t.data}))},this.createTask=function(t,n,r,c){return console.log(c),e.service.post("/tasks",{title:t,description:n,imageUrl:r,projectId:c}).then((function(t){return t.data}))},this.editTask=function(t,n,r,c,s){return e.service.put("/tasks/".concat(t),{title:n,description:r,isCompleted:c,imageUrl:s}).then((function(t){return t.data}))},this.fileUpload=function(t){return e.service.post("/upload",t).then((function(t){return t.data}))},this.deleteTask=function(t){return e.service.delete("/tasks/".concat(t)).then((function(t){return t.data}))};var n=f.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,withCredentials:!0});this.service=n},C=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={title:"",description:"",imageUrl:"",isShowingForm:!1},t.service=new k,t.toggleShowForm=function(){t.setState({isShowingForm:!t.state.isShowingForm})},t.handleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(p.a)({},r,c))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,r=n.title,c=n.description,s=n.imageUrl,o=t.props.theProject._id;t.service.createTask(r,c,s,o).then((function(){t.props.getProjectInfo(),t.setState({title:"",description:"",imageUrl:""})})).catch((function(t){console.log(t)}))},t.handleFileUpload=function(e){var n=new FormData;n.append("imageUrl",e.target.files[0]),t.service.fileUpload(n).then((function(e){console.log(e),t.setState({imageUrl:e.secure_url})})).catch((function(t){return console.log("Error uploading file",t)}))},t.showAddTaskForm=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Add task"}),Object(O.jsxs)("form",{onSubmit:t.handleFormSubmit,children:[Object(O.jsx)("label",{children:"Title: "}),Object(O.jsx)("input",{type:"text",name:"title",value:t.state.title,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("label",{children:"Description: "}),Object(O.jsx)("textarea",{name:"description",value:t.state.description,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("label",{children:"Image:"}),Object(O.jsx)("input",{type:"file",onChange:function(e){t.handleFileUpload(e)}}),Object(O.jsx)("button",{children:"Confirm"})]})]})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"addTask",children:[Object(O.jsx)("hr",{}),Object(O.jsx)("button",{onClick:this.toggleShowForm,children:this.state.isShowingForm?"Cancel":"Add task"}),this.state.isShowingForm&&this.showAddTaskForm()]})}}]),n}(r.Component),S=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={projectInfo:{}},t.service=new g,t.componentDidMount=function(){t.getProjectInfo()},t.componentDidUpdate=function(e){if(e.match.params.id!==t.props.match.params.id){var n=t.props.match.params.id;t.service.projectDetails(n).then((function(e){t.setState({projectInfo:e})})).catch((function(t){return console.log(t)}))}},t.getProjectInfo=function(){var e=t.props.match.params.id;t.service.projectDetails(e).then((function(e){t.setState({projectInfo:e})})).catch((function(t){return console.log(t)}))},t.displayPorjectInfo=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:t.state.projectInfo.title}),Object(O.jsx)("p",{children:t.state.projectInfo.description})]})},t.displayTasks=function(){return Object(x.a)({},t.state.projectInfo).tasks.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)(d.b,{to:"/projects/".concat(t.state.projectInfo._id,"/tasks/").concat(e._id),children:Object(O.jsx)("h4",{children:e.title})}),Object(O.jsx)("p",{children:e.description}),Object(O.jsx)("p",{children:e.isCompleted?"DONE":"Pending"})]},e._id)}))},t.renderEditForm=function(){if(t.state.projectInfo.title)return Object(O.jsx)(I,Object(x.a)({theProject:t.state.projectInfo,getProjectInfo:t.getProjectInfo},t.props));t.getProjectInfo()},t.deleteProject=function(){var e=t.props.match.params.id;t.service.deleteProject(e).then((function(e){console.log(e),t.props.history.push("/projects")})).catch((function(t){return console.log(t)}))},t.renderAddTaskForm=function(){if(t.state.projectInfo.title)return Object(O.jsx)(C,{theProject:t.state.projectInfo,getProjectInfo:t.getProjectInfo})},t.ownerCheck=function(){if(t.props.loggedInUser&&t.state.projectInfo.owner===t.props.loggedInUser._id)return Object(O.jsxs)("div",{children:[t.renderEditForm(),t.renderAddTaskForm(),Object(O.jsx)("button",{onClick:function(){t.deleteProject()},children:"DELETE PROJECT"})]})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("article",{className:"projectDetails",children:[this.state.projectInfo.title&&this.displayPorjectInfo(),Object(O.jsx)("hr",{}),this.state.projectInfo.tasks&&this.state.projectInfo.tasks.length>0&&Object(O.jsx)("h3",{children:"Tasks:"}),Object(O.jsx)("ol",{children:this.state.projectInfo.tasks&&this.displayTasks()}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{children:this.ownerCheck(this.state.projectId)}),Object(O.jsx)("br",{}),Object(O.jsx)(d.b,{to:"/projects",children:"Back to projects"})]})}}]),n}(r.Component),U=function t(){var e=this;Object(a.a)(this,t),this.signup=function(t,n){return e.service.post("/signup",{username:t,password:n}).then((function(t){return t.data}))},this.loggedIn=function(){return e.service.get("/loggedIn").then((function(t){return t.data}))},this.login=function(t,n){return e.service.post("/login",{username:t,password:n}).then((function(t){return t.data}))},this.logout=function(){return e.service.post("/logout",{}).then((function(t){return t.data}))};var n=f.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,withCredentials:!0});this.service=n},T=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={loggedInUser:null},t.service=new U,t.logoutUser=function(){t.service.logout().then((function(){t.setState({loggedInUser:null}),t.props.getUser(null)})).catch()},t.renderUserWelcome=function(){return Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Welcome, ",t.state.loggedInUser.username]}),Object(O.jsxs)("li",{children:[" ",Object(O.jsx)(d.b,{to:"/projects",children:"Projects"})," "]}),Object(O.jsx)("li",{children:Object(O.jsx)(d.b,{to:"/",children:Object(O.jsx)("button",{onClick:t.logoutUser,children:"Log out"})})})]})},t.renderSignupLogin=function(){return Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[" ",Object(O.jsx)(d.b,{to:"/signup",children:"Sign up"})," "]}),Object(O.jsxs)("li",{children:[" ",Object(O.jsx)(d.b,{to:"/login",children:"Login"})," "]})]})},t}return Object(i.a)(n,[{key:"componentWillReceiveProps",value:function(t){this.setState(Object(x.a)(Object(x.a)({},this.state),{},{loggedInUser:t.userInSession}))}},{key:"render",value:function(){return Object(O.jsx)("nav",{children:this.state.loggedInUser?this.renderUserWelcome():this.renderSignupLogin()})}}]),n}(r.Component),P=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={title:t.props.taskInfo.title,description:t.props.taskInfo.description,isCompleted:t.props.taskInfo.isCompleted},t.service=new k,t.handleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(p.a)({},r,c))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,r=n.title,c=n.description,s=n.isCompleted,o=n.imageUrl,a=t.props.taskInfo._id;t.service.editTask(a,r,c,s,o).then((function(){t.props.getTaskInfo()})).catch((function(t){return console.log(t)}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:function(e){t.handleFormSubmit(e)},children:[Object(O.jsx)("label",{children:" Title: "}),Object(O.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("label",{children:"Description: "}),Object(O.jsx)("input",{type:"text",name:"description",value:this.state.description,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("button",{children:"Confirm"})]})})}}]),n}(r.Component),w=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={taskInfo:{}},t.service=new k,t.componentDidMount=function(){t.getTaskInfo()},t.getTaskInfo=function(){var e=t.props.match.params,n=e.projectId,r=e.taskId;t.service.getTask(n,r).then((function(e){t.setState({taskInfo:e})})).catch((function(t){return console.log(t)}))},t.changeTaskStatus=function(){console.log(t.state.taskInfo.isCompleted),t.setState({taskInfo:Object(x.a)(Object(x.a)({},t.state.taskInfo),{},{isCompleted:!t.state.taskInfo.isCompleted})},(function(){var e=t.state.taskInfo,n=e._id,r=e.title,c=e.description,s=e.isCompleted,o=e.imageUrl;console.log(s),t.service.editTask(n,r,c,s,o).then((function(t){return console.log(t)}))}))},t.deleteTask=function(){t.service.deleteTask(t.state.taskInfo._id).then((function(e){console.log(e),t.props.history.push("/projects/".concat(t.props.match.params.projectId))})).catch((function(t){return console.log(t)}))},t.renderEditForm=function(){if(t.state.taskInfo.title)return Object(O.jsx)(P,Object(x.a)({taskInfo:t.state.taskInfo,getTaskInfo:t.getTaskInfo},t.props));t.getTaskInfo()},t.displayTaskInfo=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:t.state.taskInfo.title}),Object(O.jsx)("p",{children:t.state.taskInfo.description}),Object(O.jsx)("button",{onClick:t.changeTaskStatus,children:t.state.taskInfo.isCompleted?"DONE":"Pending"}),Object(O.jsx)("hr",{}),t.state.taskInfo.imageUrl&&Object(O.jsx)("img",{src:t.state.taskInfo.imageUrl,alt:"".concat(t.state.taskInfo.title)}),Object(O.jsx)("hr",{}),t.renderEditForm(),Object(O.jsx)("hr",{}),Object(O.jsx)("button",{onClick:function(){t.deleteTask()},children:"DELETE TASK"})]})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:this.state.taskInfo&&this.displayTaskInfo()})}}]),n}(r.Component),y=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={username:"",password:""},t.service=new U,t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,r=n.username,c=n.password;t.service.signup(r,c).then((function(e){t.setState({username:"",password:""}),console.log(e),t.props.getUser(e.aNewUser),t.props.history.push("/projects")})).catch((function(t){return console.log(t)}))},t.handleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(p.a)({},r,c))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(O.jsx)("label",{children:"Username: "}),Object(O.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("label",{children:"Password: "}),Object(O.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("button",{children:"Sign up"})]}),Object(O.jsxs)("p",{children:["Already have an account?",Object(O.jsx)(d.b,{to:"/login",children:"Log in"})]})]})}}]),n}(r.Component),_=Object(u.g)(y),A=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={username:"",password:""},t.service=new U,t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,r=n.username,c=n.password;t.service.login(r,c).then((function(e){t.setState({username:"",password:""}),t.props.getUser(e),t.props.history.push("/projects")})).catch((function(t){return console.log(t)}))},t.handleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(p.a)({},r,c))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(O.jsx)("label",{children:"Username: "}),Object(O.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("label",{children:"Password: "}),Object(O.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:function(e){t.handleChange(e)}}),Object(O.jsx)("button",{children:"Log in"})]}),Object(O.jsxs)("p",{children:["Don't have account?",Object(O.jsx)(d.b,{to:"/signup",children:"Sign Up"})]})]})}}]),n}(r.Component),E=Object(u.g)(A),D=n(32),F=function(t){var e=t.component,n=t.user,r=Object(D.a)(t,["component","user"]);return Object(O.jsx)(u.b,Object(x.a)(Object(x.a)({},r),{},{render:function(t){return n?Object(O.jsx)(e,Object(x.a)(Object(x.a)({},t),{},{loggedInUser:n})):Object(O.jsx)(u.a,{to:{pathname:"/",state:{from:t.location}}})}}))},R=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={loggedInUser:null},t.service=new U,t.fetchUser=function(){null===t.state.loggedInUser&&t.service.loggedIn().then((function(e){t.setState({loggedInUser:e})})).catch((function(e){console.log(e),t.setState({loggedInUser:!1})}))},t.getTheUser=function(e){t.setState({loggedInUser:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return this.fetchUser(),this.state.loggedInUser?Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(T,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),Object(O.jsxs)(u.d,{children:[Object(O.jsx)(F,{user:this.state.loggedInUser,exact:!0,path:"/projects",component:m}),Object(O.jsx)(F,{user:this.state.loggedInUser,exact:!0,path:"/projects/:id",component:S}),Object(O.jsx)(F,{user:this.state.loggedInUser,exact:!0,path:"/projects/:projectId/tasks/:taskId",component:w})]})]}):Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(T,{userInSession:this.state.loggedInUser}),Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{exact:!0,path:"/signup",render:function(){return Object(O.jsx)(_,{getUser:t.getTheUser})}}),Object(O.jsx)(u.b,{exact:!0,path:"/login",render:function(){return Object(O.jsx)(E,{getUser:t.getTheUser})}}),Object(O.jsx)(F,{user:this.state.loggedInUser,exact:!0,path:"/projects",component:m}),Object(O.jsx)(F,{user:this.state.loggedInUser,exact:!0,path:"/projects/:id",component:S}),Object(O.jsx)(F,{user:this.state.loggedInUser,exact:!0,path:"/projects/:projectId/tasks/:taskId",component:w})]})]})}}]),n}(r.Component),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),s(t),o(t)}))};o.a.render(Object(O.jsx)(d.a,{children:Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(R,{})})}),document.getElementById("root")),L()}},[[67,1,2]]]);
//# sourceMappingURL=main.1af894dd.chunk.js.map