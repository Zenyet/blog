import{r as P,b as g,w as C,d as N,e as p,o as r,c as d,f as s,F as z,g as B,u as t,h,i as _,t as v,j as M,k as S,l as H,n as L}from"./index.246b2081.js";function m(o,e,n=!1){o.style.width=e*100+"%",n&&(o.style.boxShadow="none")}function f(o){return o/(o+1)}let w=5e3;const j={class:"home-container"},E={id:"slash"},O={class:"outer"},V=s("div",{id:"left-dotted-line"},null,-1),D=s("div",{id:"right-dotted-line"},null,-1),F=["id"],q=["id","href","onClick"],G={class:"post-name"},I={class:"post-time"},J={key:0,class:"mask"},K=["src"],Q={class:"pagination"},T=["onClick","href"],U=s("svg",{t:"1662477401244",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1764",width:"200",height:"200"},[s("path",{d:"M474.496 512l338.752-338.752-90.496-90.496L293.504 512l429.248 429.248 90.496-90.496z","p-id":"1765"})],-1),W=[U],X={class:"nowPage"},Y=["onClick","href"],Z=s("svg",{t:"1662477293780",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3186",width:"200",height:"200"},[s("path",{d:"M613.504 512L274.752 173.248l90.496-90.496L794.496 512l-429.248 429.248-90.496-90.496z","p-id":"3187"})],-1),ee=[Z],oe={__name:"Home",setup(o){let e=P(1);const n=P(null),c=M(),i=S(),a=H();e.value=i.params.pageNum||1;const u=g(()=>a.state.pages.totalPages),x=g(()=>a.state.pages.pageResults),A=g(()=>!navigator.userAgent.includes("Android")&&!navigator.userAgent.includes("iPhone"));i.params.from!=="others"&&a.dispatch("pages/addPageResult",e.value);function $(k){c.push({name:"Post",params:{post_title:k}})}function b(){e.value!==u.value&&(++e.value,!Object.keys(a.state.pages.pageResults).includes(`page${e.value}`)&&(!navigator.userAgent.includes("Android")||!navigator.userAgent.includes("iPhone"))&&p({timing:f,draw:m,duration:w,dom:n.value}),a.dispatch("pages/addPageResult",e.value),c.push({name:"Page",params:{pageNum:e.value}}))}function R(){if(e.value===1||i.path==="/page/1"){c.push({name:"Home"});return}--e.value,!Object.keys(a.state.pages.pageResults).includes(`page${e.value}`)&&(!navigator.userAgent.includes("Android")||!navigator.userAgent.includes("iPhone"))&&p({timing:f,draw:m,duration:w,dom:n.value}),a.dispatch("pages/addPageResult",e.value),c.push({name:"Page",params:{pageNum:e.value}})}return C(()=>{e.value=+i.params.pageNum||1,(i.path==="/page/1"||i.path==="/")&&c.replace({name:"Home"})}),N(()=>{(!navigator.userAgent.includes("Android")||!navigator.userAgent.includes("iPhone"))&&p({timing:f,draw:m,duration:w,dom:n.value})}),(k,se)=>(r(),d("div",j,[s("div",E,[s("div",{id:"inner_slash",ref_key:"inner_slash",ref:n},null,512)]),s("div",O,[V,D,(r(!0),d(z,null,B(t(x)[`page${t(e)}`],(l,y)=>(r(),d("div",{class:"box",id:`box${y+1}`},[s("a",{id:`coordinates${y+1}`,href:`/post/${l.post_title}`,style:{"z-index":"997"},class:"coordinate",onClick:h(te=>$(l.post_title),["prevent"])},[s("div",G,v(l.post_title),1),s("time",I,v(l.post_date),1)],8,q),t(A)?(r(),d("div",J,[s("img",{src:l.post_cover,class:"mask-img",alt:"default",style:{opacity:"0"}},null,8,K),s("div",{class:"img-shadow",style:L([{background:`url(${l.post_cover})`,backgroundSize:"cover"},{opacity:"0"}])},null,4)])):_("",!0)],8,F))),256))]),s("div",Q,[s("nav",null,[t(e)>1?(r(),d("a",{key:0,class:"prev",onClick:h(R,["prevent"]),href:`/page/${t(e)-1}`},W,8,T)):_("",!0),s("div",X,v(t(e)+"/"+t(u)),1),t(u)>1&&t(e)!=t(u)?(r(),d("a",{key:1,class:"next",onClick:h(b,["prevent"]),href:`/page/${t(e)+1}`},ee,8,Y)):_("",!0)])])]))}};export{oe as default};
