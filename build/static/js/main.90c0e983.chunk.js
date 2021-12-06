(this["webpackJsonpblog-application-frontend"]=this["webpackJsonpblog-application-frontend"]||[]).push([[0],{124:function(e,t,c){},150:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(30),o=c.n(a),s=c(13),i=c(11),l=(c(124),c(47)),j=c(10),b=c(74),d=c(62),u=c(4),h=c(85),O=c(7),g=c(15),x=c.n(g),m=c(0),p=m.createContext,f=m.useState,S=p(),v=function(e){var t=f(JSON.parse(localStorage.getItem("isLoggedIn"))||!1),c=Object(O.a)(t,2),n=c[0],r=c[1],a=f(JSON.parse(localStorage.getItem("user"))||!1),o=Object(O.a)(a,2),s=o[0],l=o[1];return Object(u.jsx)(S.Provider,{value:{isLoggedIn:n,login:function(e){r(!0),localStorage.setItem("isLoggedIn",JSON.stringify(!0)),l(e),localStorage.setItem("user",JSON.stringify(e))},user:s,logout:function(){return localStorage.setItem("isLoggedIn",JSON.stringify(!1)),r(!1),window.localStorage.removeItem("user"),l(null),Object(u.jsx)(i.a,{to:"/"})}},children:e.children})},y=function(e){var t=Object(n.useContext)(S),c=t.isLoggedIn,r=(t.login,t.logout),a=t.user,o=Object(j.c)(),i=o.isOpen,O=o.onOpen,g=o.onClose;return Object(u.jsxs)(b.c,Object(l.a)(Object(l.a)({as:"nav",align:"center",justify:"space-between",wrap:"wrap",padding:6,bg:"teal.500",color:"white"},e),{},{children:[Object(u.jsx)(b.c,{align:"center",mr:5,children:Object(u.jsx)(b.h,{as:s.b,to:"/",children:Object(u.jsx)(b.d,{as:"h1",size:"lg",letterSpacing:"tighter",children:"Blog Application"})})}),Object(u.jsx)(b.a,{display:{base:"block",md:"none"},onClick:function(){return i?g():O()},children:Object(u.jsx)(d.a,{})}),Object(u.jsxs)(b.a,{display:{base:i?"block":"none",md:"block"},mt:{base:4,md:0},children:[a&&Object(u.jsx)(h.a,{variant:"outline",_hover:{bg:"teal.700",borderColor:"teal.700"},children:a.name}),c&&Object(u.jsx)(h.a,{as:s.b,to:"/blogs",variant:"outline",_hover:{bg:"teal.700",borderColor:"teal.700"},children:"Create Blog"}),!c&&Object(u.jsx)(h.a,{as:s.b,to:"/login",variant:"outline",_hover:{bg:"teal.700",borderColor:"teal.700"},children:"LogIn or SignUp"}),c&&Object(u.jsx)(h.a,{onClick:r,variant:"outline",_hover:{bg:"teal.700",borderColor:"teal.700"},children:"Log Out"})]})]}))},w=c(52),C=c(90),k=c(19),I=c(89),z=function(e){var t,c=Object(n.useContext)(S),a=c.isLoggedIn,o=(c.login,c.logout,c.user),s=Object(i.g)().id,l=Object(n.useState)([]),j=Object(O.a)(l,2),d=j[0],g=j[1],m=Object(n.useState)(!1),p=Object(O.a)(m,2),f=p[0],v=p[1],y=Object(C.a)(),z=r.a.useState(!1),A=Object(O.a)(z,2),W=A[0],D=A[1],L=function(){return D(!1)},E=r.a.useRef();Object(n.useEffect)((function(){x.a.get("/api/v1/blogs/".concat(s)).then((function(e){g(e.data.blog)})).catch((function(e){}))}),[]);return Object(u.jsx)(k.a,{children:Object(u.jsx)(b.b,{maxW:"80rem",centerContent:!0,children:Object(u.jsx)(b.f,{columns:[1,1,1,1],children:Object(u.jsx)(b.a,(t={p:4,w:"1000px",display:{md:"flex"},borderWidth:1,margin:2},Object(w.a)(t,"p","2rem"),Object(w.a)(t,"children",Object(u.jsxs)(b.g,{align:{base:"center",md:"stretch"},textAlign:{base:"center",md:"left"},mt:{base:4,md:0},ml:{md:6},children:[Object(u.jsx)(b.h,{fontWeight:"bold",textTransform:"uppercase",fontSize:"lg",letterSpacing:"wide",color:"teal.600",children:d.name}),Object(u.jsx)(b.h,{my:1,display:"block",fontSize:"md",lineHeight:"normal",children:d.description}),Object(u.jsx)(b.h,{my:2,color:"gray.500",children:"Author: "+d.creator}),Object(u.jsx)(b.h,{my:2,color:"gray.500",children:"Created at: "+d.time}),a&&d.creator===o.name&&Object(u.jsx)(h.a,{w:"920px",variant:"outline",_hover:{bg:"teal.700",borderColor:"teal.700"},children:Object(u.jsx)("a",{href:"/blogs/"+s,children:" Update "})}),"error"===f&&Object(u.jsx)(b.h,{display:"block",fontSize:"sm",color:"red",children:"Something Went Wrong!! Please Try Again."}),"completed"===f&&Object(u.jsx)(i.a,{to:"/"}),a&&d.creator===o.name&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h.a,{colorScheme:"red",w:"920px",variant:"outline",_hover:{bg:"red.200",borderColor:"red.200"},onClick:function(){return D(!0)},children:"Delete"}),Object(u.jsx)(I.a,{isOpen:W,leastDestructiveRef:E,onClose:L,children:Object(u.jsx)(I.f,{children:Object(u.jsxs)(I.c,{children:[Object(u.jsx)(I.e,{fontSize:"lg",fontWeight:"bold",children:"Delete"}),Object(u.jsx)(I.b,{children:"Are you sure to delete this blog? You can't undo this action afterwards."}),Object(u.jsxs)(I.d,{children:[Object(u.jsx)(h.a,{ref:E,onClick:L,children:"Cancel"}),Object(u.jsx)(h.a,{colorScheme:"red",onClick:function(e){e.preventDefault(),v("loading"),x.a.delete("/api/v1/blogs/".concat(s),{headers:{Authorization:"Bearer ".concat(o.token)}}).then((function(e){v("completed"),y({title:"Blog successfully deleted!!",duration:4e3,status:"success",isClosable:!0})})).catch((function(e){v("error")}))},ml:3,children:"Delete"})]})]})})})]})]})),t))})})})};var A=function(e){var t=e.id,c=e.name,n=e.description,a=e.creator,o=e.time,s=r.a.useState(!1),i=Object(O.a)(s,2);return i[0],i[1],Object(u.jsx)(b.a,{p:4,display:{md:"flex"},maxWidth:"62rem",borderWidth:1,margin:2,children:Object(u.jsxs)(b.g,{align:{base:"center",md:"stretch"},textAlign:{base:"center",md:"left"},mt:{base:4,md:0},ml:{md:6},children:[Object(u.jsx)(b.h,{fontWeight:"bold",textTransform:"uppercase",fontSize:"lg",letterSpacing:"wide",color:"teal.600",children:c}),Object(u.jsx)(b.h,{my:1,display:"block",fontSize:"md",lineHeight:"normal",children:n.substring(0,200)+"...."}),Object(u.jsx)(b.h,{my:2,color:"gray.500",children:"Author: "+a}),Object(u.jsx)(b.h,{my:2,color:"gray.500",children:"Created at: "+o}),Object(u.jsx)(h.a,{maxWidth:"100px",my:2,"align-right":!0,children:Object(u.jsx)("a",{href:"/blogs/view/"+t,children:" Show More"})})]})})},W=function(e){var t=Object(n.useState)([]),c=Object(O.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){x.a.get("/api/v1/blogs").then((function(e){a(e.data.blog)})).catch((function(e){}))}),[]),Object(u.jsx)(k.a,{children:Object(u.jsx)(b.b,{maxW:"80rem",centerContent:!0,children:Object(u.jsx)(b.f,{columns:[1,1,1,1],children:r.map((function(e){var t=e.id,c=e.name,n=e.description,r=e.creator,a=e.time;return Object(u.jsx)(A,{id:t,name:c,description:n,creator:r,time:a})}))})})})},D=c(2),L=c(86),E=c(43),B=c(87),q=c(57),P=c(22),J=Object(D.d)(P.b),N=Object(D.d)(P.a),U=function(e){var t=Object(n.useState)(!1),c=Object(O.a)(t,2),r=c[0],a=c[1],o=function(){return a(!r)},s=Object(n.useState)(),l=Object(O.a)(s,2),j=l[0],d=l[1],g=Object(n.useContext)(S),m=g.isLoggedIn,p=(g.login,Object(n.useState)()),f=Object(O.a)(p,2),v=f[0],y=f[1],w=Object(n.useState)(),k=Object(O.a)(w,2),I=k[0],z=k[1],A=Object(n.useState)(),W=Object(O.a)(A,2),D=W[0],P=W[1],U=Object(n.useState)("not-requested"),R=Object(O.a)(U,2),T=R[0],_=R[1],H=Object(n.useState)(),F=Object(O.a)(H,2),M=F[0],Y=F[1],G=Object(C.a)();return m?Object(u.jsx)(i.a,{to:"/"}):Object(u.jsx)(b.c,{flexDirection:"column",width:"100wh",height:"100vh",backgroundColor:"gray.200",justifyContent:"center",alignItems:"center",children:Object(u.jsxs)(b.g,{flexDir:"column",mb:"2",justifyContent:"center",alignItems:"center",children:[Object(u.jsx)(L.a,{bg:"teal.500"}),Object(u.jsx)(b.d,{color:"teal.400",children:"Welcome"}),Object(u.jsx)(b.a,{minW:{base:"90%",md:"468px"},children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),_("loading"),x.a.post("/api/v1/users/signup",{name:v,email:j,password:I,passwordConfirm:D}).then((function(e){_("completed"),G({title:"You Successfully Create your Account!! Please Login to Continue!!",duration:4e3,status:"success",isClosable:!0})})).catch((function(e){e.response.data.errors?Y(e.response.data.errors[0]):e.response.data.message.message?Y(e.response.data.message.errors.passwordConfirm.message):Y("User name already exists"),_("error")}))},children:Object(u.jsxs)(b.g,{spacing:4,p:"1rem",backgroundColor:"whiteAlpha.900",boxShadow:"md",children:[Object(u.jsx)(E.a,{children:Object(u.jsxs)(B.b,{children:[Object(u.jsx)(B.c,{pointerEvents:"none",children:Object(u.jsx)(J,{color:"gray.300"})}),Object(u.jsx)(B.a,{placeholder:"Name",type:"text",name:"name",onChange:function(e){return y(e.target.value)},required:!0,autoFocus:!0})]})}),Object(u.jsx)(E.a,{children:Object(u.jsxs)(B.b,{children:[Object(u.jsx)(B.c,{pointerEvents:"none",children:Object(u.jsx)(J,{color:"gray.300"})}),Object(u.jsx)(B.a,{placeholder:"Email",type:"email",name:"email",onChange:function(e){return d(e.target.value)},required:!0})]})}),Object(u.jsx)(E.a,{children:Object(u.jsxs)(B.b,{children:[Object(u.jsx)(B.c,{pointerEvents:"none",color:"gray.300",children:Object(u.jsx)(N,{color:"gray.300"})}),Object(u.jsx)(B.a,{type:r?"text":"password",placeholder:"Password",name:"password",onChange:function(e){return z(e.target.value)},required:!0}),Object(u.jsx)(B.d,{width:"4.5rem",children:Object(u.jsx)(h.a,{h:"1.75rem",size:"sm",onClick:o,children:r?"Hide":"Show"})})]})}),Object(u.jsx)(E.a,{children:Object(u.jsxs)(B.b,{children:[Object(u.jsx)(B.c,{pointerEvents:"none",color:"gray.300",children:Object(u.jsx)(N,{color:"gray.300"})}),Object(u.jsx)(B.a,{type:r?"text":"password",placeholder:"Confirm Password",name:"passwordConfirm",onChange:function(e){return P(e.target.value)},required:!0}),Object(u.jsx)(B.d,{width:"4.5rem",children:Object(u.jsx)(h.a,{h:"1.75rem",size:"sm",onClick:o,children:r?"Hide":"Show"})})]})}),"error"===T&&Object(u.jsx)(b.h,{display:"block",fontSize:"sm",color:"red",children:M}),"completed"===T&&Object(u.jsx)(i.a,{to:"/login"}),Object(u.jsxs)(h.a,{borderRadius:0,type:"submit",variant:"solid",colorScheme:"teal",width:"full",disabled:"loading"===T?1:0,children:["loading"===T&&Object(u.jsx)(q.a,{mr:3}),"SignUp"]})]})})})]})})},R=Object(D.d)(P.b),T=Object(D.d)(P.a),_=function(e){var t=Object(n.useState)(!1),c=Object(O.a)(t,2),r=c[0],a=c[1],o=Object(n.useState)(),s=Object(O.a)(o,2),l=s[0],j=s[1],d=Object(n.useState)(),g=Object(O.a)(d,2),m=g[0],p=g[1],f=Object(n.useState)("not-requested"),v=Object(O.a)(f,2),y=v[0],w=v[1],k=Object(C.a)(),I=Object(n.useContext)(S),z=I.isLoggedIn,A=I.login;return z?Object(u.jsx)(i.a,{to:"/"}):Object(u.jsxs)(b.c,{flexDirection:"column",width:"100wh",height:"100vh",backgroundColor:"gray.200",justifyContent:"center",alignItems:"center",children:[Object(u.jsxs)(b.g,{flexDir:"column",mb:"2",justifyContent:"center",alignItems:"center",children:[Object(u.jsx)(L.a,{bg:"teal.500"}),Object(u.jsx)(b.d,{color:"teal.400",children:"Welcome!"}),Object(u.jsx)(b.a,{minW:{base:"90%",md:"468px"},children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),w("loading"),x.a.post("/api/v1/users/login",{email:l,password:m}).then((function(e){w("completed"),A(e.data),k({title:" You Logged in Successfully!!",duration:4e3,status:"success",isClosable:!0})})).catch((function(e){w("error")}))},children:Object(u.jsxs)(b.g,{spacing:4,p:"1rem",backgroundColor:"whiteAlpha.900",boxShadow:"md",children:[Object(u.jsx)(E.a,{children:Object(u.jsxs)(B.b,{children:[Object(u.jsx)(B.c,{pointerEvents:"none",children:Object(u.jsx)(R,{color:"gray.300"})}),Object(u.jsx)(B.a,{type:"text",placeholder:"Email",name:"email",onChange:function(e){return j(e.target.value)},required:!0})]})}),Object(u.jsx)(E.a,{children:Object(u.jsxs)(B.b,{children:[Object(u.jsx)(B.c,{pointerEvents:"none",color:"gray.300",children:Object(u.jsx)(T,{color:"gray.300"})}),Object(u.jsx)(B.a,{type:r?"text":"password",placeholder:"Password",name:"password",onChange:function(e){return p(e.target.value)},required:!0}),Object(u.jsx)(B.d,{width:"4.5rem",children:Object(u.jsx)(h.a,{h:"1.75rem",size:"sm",onClick:function(){return a(!r)},children:r?"Hide":"Show"})})]})}),"error"===y&&Object(u.jsx)(b.h,{display:"block",fontSize:"sm",color:"red",children:"Wrong Email or Password!!!"}),Object(u.jsx)(h.a,{borderRadius:0,type:"submit",variant:"solid",colorScheme:"teal",width:"full",children:"Login"})]})})})]}),Object(u.jsxs)(b.a,{children:["New to us?"," ",Object(u.jsx)(b.e,{color:"teal.500",href:"/signup",children:"Sign Up"})]})]})},H=c(88),F=(Object(D.d)(P.b),Object(D.d)(P.a),function(e){var t=Object(n.useContext)(S),c=t.isLoggedIn,r=(t.login,t.user),a=Object(n.useState)(),o=Object(O.a)(a,2),s=o[0],l=o[1],j=Object(n.useState)(),d=Object(O.a)(j,2),g=d[0],m=d[1],p=Object(n.useState)("not-requested"),f=Object(O.a)(p,2),v=f[0],y=f[1],w=Object(n.useState)(),k=Object(O.a)(w,2),I=k[0],z=k[1],A=Object(C.a)();return c?Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),y("loading"),x.a.post("/api/v1/blogs",{name:s,description:g},{headers:{Authorization:"Bearer ".concat(r.token)}}).then((function(e){y("completed"),A({title:"Blog successfully created!!",duration:4e3,status:"success",isClosable:!0})})).catch((function(e){z(e.response.data.errors[0]),y("error")}))},children:Object(u.jsxs)(b.g,{spacing:4,p:"5rem",backgroundColor:"whiteAlpha.900",boxShadow:"md",children:[Object(u.jsx)(H.a,{rows:"3",placeholder:"Blog Title",type:"text",name:"name",onChange:function(e){return l(e.target.value)},required:!0,size:"lg"}),Object(u.jsx)(H.a,{rows:"10",placeholder:"Blog Description",type:"text",name:"description",onChange:function(e){return m(e.target.value)},required:!0,size:"lg"}),"error"===v&&Object(u.jsx)(b.h,{display:"block",fontSize:"sm",color:"red",children:I}),"completed"===v&&Object(u.jsx)(i.a,{to:"/"}),Object(u.jsx)(h.a,{borderRadius:0,type:"submit",variant:"solid",colorScheme:"teal",width:"full",children:"SUBMIT"})]})}):Object(u.jsx)(i.a,{to:"/"})}),M=(Object(D.d)(P.b),Object(D.d)(P.a),function(e){var t=Object(n.useState)(!1),c=Object(O.a)(t,2),r=c[0],a=c[1],o=Object(i.g)().id,s=Object(n.useState)([]),l=Object(O.a)(s,2),j=(l[0],l[1]),d=Object(n.useState)(),g=Object(O.a)(d,2),m=g[0],p=g[1],f=Object(n.useState)(),v=Object(O.a)(f,2),y=v[0],w=v[1],k=Object(n.useState)(),I=Object(O.a)(k,2),z=I[0],A=I[1],W=Object(n.useState)(!1),D=Object(O.a)(W,2),L=D[0],E=D[1],B=Object(n.useState)(),q=Object(O.a)(B,2),P=q[0],J=q[1],N=Object(C.a)(),U=Object(n.useContext)(S),R=U.isLoggedIn,T=(U.login,U.user);Object(n.useEffect)((function(){x.a.get("/api/v1/blogs/".concat(o)).then((function(e){j(e.data.blog),p(e.data.blog.name),A(e.data.blog.description),w(e.data.blog.creator),E(!0),a(!0)})).catch((function(e){}))}),[]);return r?R&&y===T.name?Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),E("loading"),x.a.patch("/api/v1/blogs/".concat(o),{name:m,description:z},{headers:{Authorization:"Bearer ".concat(T.token)}}).then((function(e){E("completed"),N({title:"Blog successfully updated!!",duration:4e3,status:"success",isClosable:!0})})).catch((function(e){J(e.response.data.errors[0]),E("error")}))},children:Object(u.jsxs)(b.g,{spacing:4,p:"5rem",backgroundColor:"whiteAlpha.900",boxShadow:"md",children:[Object(u.jsx)(H.a,{rows:"3",type:"text",name:"name",value:m,onChange:function(e){return p(e.target.value)},autoFocus:!0,size:"lg"}),Object(u.jsx)(H.a,{rows:"10",value:z,type:"text",name:"description",onChange:function(e){return A(e.target.value)},size:"lg"}),"error"===L&&Object(u.jsx)(b.h,{display:"block",fontSize:"sm",color:"red",children:P}),"completed"===L&&Object(u.jsx)(i.a,{to:"/blogs/view/"+o}),Object(u.jsx)(h.a,{borderRadius:0,type:"submit",variant:"solid",colorScheme:"teal",width:"full",children:"UPDATE"})]})}):Object(u.jsx)(i.a,{to:"/blogs/view/"+o}):Object(u.jsx)("h1",{children:"loading..."})});var Y=function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(y,{}),Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{exact:!0,path:"/signup",component:U}),Object(u.jsx)(i.b,{exact:!0,path:"/login",component:_}),Object(u.jsx)(i.b,{exact:!0,path:"/",component:W}),Object(u.jsx)(i.b,{exact:!0,path:"/blogs",component:F}),Object(u.jsx)(i.b,{exact:!0,path:"/blogs/view/:id",component:z}),Object(u.jsx)(i.b,{exact:!0,path:"/blogs/:id",component:M})]})]})};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(k.a,{children:Object(u.jsx)(v,{children:Object(u.jsx)(Y,{})})})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.90c0e983.chunk.js.map