(this.webpackJsonpgitmarkonics=this.webpackJsonpgitmarkonics||[]).push([[0],{179:function(e,t,a){},180:function(e,t,a){},278:function(e,t,a){},282:function(e,t,a){},286:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(107),r=a.n(c),l=(a(179),a(180),a(110)),i=a.n(l),s=a(159),o=a(82),d=a(160),j=a(168),b=a(167),h=a(34),g=(a(277),a(278),a(165)),u=a(302),p=a(298),x=a(314),O=a(303),m=a(313),f=a(304),C=a(56),y=a(311),v=a(301),k=a(3),_=function(e){return Object(k.jsx)(p.a,{flex:"1",bg:"white",border:"1px",borderColor:"gray.10",p:5,children:Object(k.jsxs)(y.e,{children:[Object(k.jsx)(y.b,{children:Object(k.jsx)(y.a,{children:"Output"})}),Object(k.jsx)(y.d,{children:Object(k.jsx)(y.c,{children:Object(k.jsx)(v.a,{whiteSpace:"pre-line",children:e.file})})})]})})},S=[{label:"Normal Text",style:"unstyled"},{label:"Header 1",style:"header-one"},{label:"Header 2",style:"header-two"},{label:"Header 3",style:"header-three"},{label:"Header 4",style:"header-four"},{label:"Header 5",style:"header-five"},{label:"Header 6",style:"header-six"}],w=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={editorState:h.EditorState.createEmpty(),file:"",value:"unstyled"},n.onChange=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({editorState:t});case 2:return e.next=4,Object(g.a)(n.state.editorState.getCurrentContent());case 4:a=e.sent,n.setState({file:n.replacer(a)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(a,[{key:"_onBoldClick",value:function(){this.onChange(h.RichUtils.toggleInlineStyle(this.state.editorState,"BOLD"))}},{key:"_onItalicClick",value:function(){this.onChange(h.RichUtils.toggleInlineStyle(this.state.editorState,"ITALIC"))}},{key:"_onBlockQuoteClick",value:function(){this.onChange(h.RichUtils.toggleBlockType(this.state.editorState,"blockquote"))}},{key:"toggleBulletPoints",value:function(){this.setState({editorState:h.RichUtils.toggleBlockType(this.state.editorState,"unordered-list-item")})}},{key:"handleHeadingChange",value:function(e){this.onChange(h.RichUtils.toggleBlockType(this.state.editorState,e.target.value)),this.setState({value:e.target.value})}},{key:"replacer",value:function(e){return e=(e=e.replace(/<p><br><\/p>/g,"<br>").replace(/<p>/g,"").replace(/<\/p>/g,"<br>").replace(/<strong>/g,"**").replace(/<\/strong>/g,"**").replace(/&nbsp;/g," ").replace(/<h1>/g,"# ").replace(/<\/h1>/g,"").replace(/<h2>/g,"## ").replace(/<\/h2>/g,"").replace(/<h3>/g,"### ").replace(/<\/h3>/g,"").replace(/<h4>/g,"#### ").replace(/<\/h4>/g,"").replace(/<h5>/g,"##### ").replace(/<\/h5>/g,"").replace(/<h6>/g,"###### ").replace(/<\/h6>/g,"").replace(/<blockquote>/g,">").replace(/<\/blockquote>/g," ").replace(/<ul>/g,"").replace(/<\/ul>/g,"").replace(/<li>/g,"* ").replace(/<\/li>/g," ")).replace(/<em>/g,"_").replace(/<\/em>/g,"_")}},{key:"onDownload",value:function(){var e=document.createElement("a");e.href="data:attachment/text,"+encodeURI(this.state.file),e.target="_blank",e.download=prompt("Please enter name of markdown file","README.md"),e.click()}},{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsxs)(u.a,{color:"black",children:[Object(k.jsxs)(p.a,{flex:"1",bg:"#F0A6CA",border:"0.5px",borderColor:"#F0E6EF",p:1,m:2,children:[Object(k.jsxs)(x.b,{direction:"row",spacing:1,align:"center",children:[Object(k.jsx)(O.a,{onChange:this.handleHeadingChange.bind(this),width:"50%",bg:"F0A6CA",value:this.state.value,children:S.map((function(e,t){return Object(k.jsx)("option",{value:e.style,children:e.label})}))}),Object(k.jsx)(m.a,{onClick:this._onBoldClick.bind(this),children:Object(k.jsx)(f.a,{as:C.a})}),Object(k.jsxs)(m.a,{onClick:this._onItalicClick.bind(this),children:[" ",Object(k.jsx)(f.a,{as:C.c})]}),Object(k.jsx)(m.a,{onClick:this._onBlockQuoteClick.bind(this),children:Object(k.jsx)(f.a,{as:C.e})}),Object(k.jsx)(m.a,{onClick:this.toggleBulletPoints.bind(this),children:Object(k.jsx)(f.a,{as:C.d})}),Object(k.jsxs)(m.a,{onClick:this.onDownload.bind(this),children:[Object(k.jsx)(f.a,{as:C.b})," \xa0Download"]})]}),Object(k.jsx)(p.a,{className:"editors-panel",children:Object(k.jsx)(h.Editor,{editorState:this.state.editorState,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,placeholder:"Lets Start Documenting ..."})})]}),Object(k.jsx)(_,{file:this.state.file})]})})}}]),a}(n.Component),R=(a(282),a(161)),N=a(305),E=a(68),B=a.p+"static/media/GitMarkonics_white.36ad85f7.png";var L=function(){return Object(k.jsx)(p.a,{className:"nav_header",p:1,children:Object(k.jsxs)(u.a,{direction:"row ",children:[Object(k.jsx)("img",{src:B,alt:"heading",width:"80px"}),Object(k.jsx)(N.a,{}),Object(k.jsxs)(x.b,{direction:"row",spacing:2,children:[Object(k.jsx)(E.b,{to:"/login",children:Object(k.jsx)(m.a,{leftIcon:Object(k.jsx)(R.a,{}),colorScheme:"pink",variant:"solid",children:"Login"})}),Object(k.jsx)(E.b,{to:"/register",children:Object(k.jsx)(m.a,{colorScheme:"white",variant:"outline",children:"Register"})})]})]})})},I=a(15),z=(a(286),a(306)),F=a(307),A=a(308),D=a(309),H=a(310),T=a(42);var U=function(){return Object(k.jsx)("div",{className:"login",children:Object(k.jsxs)("div",{className:"login__container",children:[Object(k.jsxs)("div",{className:"login__containerTop",children:[Object(k.jsx)("div",{className:"login__img"}),Object(k.jsx)("p",{children:"Add a crisp to your bulky documents !!"}),Object(k.jsx)("h4",{children:"Welcome to the website"})]}),Object(k.jsx)("div",{className:"login__containerBottom",children:Object(k.jsxs)(x.c,{className:"input__container",w:"65%",m:"auto",children:[Object(k.jsx)(z.a,{fontSize:"1.2rem",color:"blue.500",fontWeight:"semibold",py:3,children:"USER LOGIN"}),Object(k.jsxs)(F.a,{w:"95%",borderRadius:"full",bgColor:"gray.200",children:[Object(k.jsx)(A.a,{margin:"0 20px",pointerEvents:"none",children:Object(k.jsx)(T.a,{color:"#C6C6E8",fontSize:"2.1rem"})}),Object(k.jsx)(D.a,{borderRadius:"full",type:"tel",placeholder:"Username",paddingLeft:"60px"})]}),Object(k.jsxs)(F.a,{className:"login__input",w:"95%",borderRadius:"full",bgColor:"gray.200",children:[Object(k.jsx)(A.a,{margin:"0 20px",pointerEvents:"none",children:Object(k.jsx)(T.b,{color:"#C6C6E8",fontSize:"2.1rem"})}),Object(k.jsx)(D.a,{type:"tel",borderRadius:"full",placeholder:"Password",paddingLeft:"60px"})]}),Object(k.jsxs)(x.a,{className:"login__btn",alignSelf:"flex-end",children:[Object(k.jsx)(m.a,{colorScheme:"pink",px:"6",size:"sm",fontWeight:"bold",className:"loginBtn",children:"LOGIN"}),Object(k.jsx)(H.a,{fontSize:"sm",textDecoration:"underline",color:"blue",children:"Forgot password?"})]})]})})]})})};a(287);var P=function(){return Object(k.jsx)("div",{className:"Register",children:Object(k.jsxs)("div",{className:"Register__container",children:[Object(k.jsxs)("div",{className:"Register__containerTop",children:[Object(k.jsx)("div",{className:"Register__img"}),Object(k.jsx)("p",{children:"Add a crisp to your bulky documents !!"}),Object(k.jsx)("h4",{children:"Welcome to the website"})]}),Object(k.jsx)("div",{className:"Register__containerBottom",children:Object(k.jsxs)(x.c,{className:"input__container",w:"65%",m:"auto",children:[Object(k.jsx)(z.a,{fontSize:"1.2rem",color:"blue.500",fontWeight:"semibold",py:3,children:"Register HERE"}),Object(k.jsxs)(F.a,{w:"95%",borderRadius:"full",children:[Object(k.jsx)(D.a,{borderRadius:"full",type:"tel",placeholder:"First Name",bgColor:"gray.200"}),Object(k.jsx)(D.a,{borderRadius:"full",type:"tel",placeholder:"Last Name",bgColor:"gray.200",marginLeft:"4px"})]}),Object(k.jsxs)(F.a,{w:"95%",borderRadius:"full",bgColor:"gray.200",children:[Object(k.jsx)(A.a,{margin:"0 20px",pointerEvents:"none",children:Object(k.jsx)(T.a,{color:"#C6C6E8",fontSize:"2.1rem"})}),Object(k.jsx)(D.a,{borderRadius:"full",type:"tel",placeholder:"Username",paddingLeft:"60px"})]}),Object(k.jsxs)(F.a,{className:"Register__input",w:"95%",borderRadius:"full",bgColor:"gray.200",children:[Object(k.jsx)(A.a,{margin:"0 20px",pointerEvents:"none",children:Object(k.jsx)(T.b,{color:"#C6C6E8",fontSize:"2.1rem"})}),Object(k.jsx)(D.a,{type:"tel",borderRadius:"full",placeholder:"Password",paddingLeft:"60px"})]}),Object(k.jsxs)(F.a,{className:"Register__input",w:"95%",borderRadius:"full",bgColor:"gray.200",children:[Object(k.jsx)(A.a,{margin:"0 20px",pointerEvents:"none",children:Object(k.jsx)(T.b,{color:"#C6C6E8",fontSize:"2.1rem"})}),Object(k.jsx)(D.a,{type:"tel",borderRadius:"full",placeholder:" Confirm Password",paddingLeft:"60px"})]}),Object(k.jsxs)(x.a,{className:"Register__btn",alignSelf:"flex-end",children:[Object(k.jsx)(m.a,{colorScheme:"pink",px:"6",size:"sm",fontWeight:"bold",className:"RegisterBtn",children:"Register"}),Object(k.jsx)(H.a,{fontSize:"sm",textDecoration:"underline",color:"blue",children:"Forgot password?"})]})]})})]})})};var W=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(E.a,{children:Object(k.jsxs)(I.c,{children:[Object(k.jsx)(I.a,{path:"/login",children:Object(k.jsx)(U,{})}),Object(k.jsx)(I.a,{path:"/register",children:Object(k.jsx)(P,{})}),Object(k.jsxs)(I.a,{path:"/",children:[Object(k.jsx)(L,{}),Object(k.jsx)(w,{})]})]})})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,315)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))},G=a(312);r.a.render(Object(k.jsx)(G.a,{children:Object(k.jsx)(W,{})}),document.getElementById("root")),q()}},[[288,1,2]]]);
//# sourceMappingURL=main.cc35d42b.chunk.js.map