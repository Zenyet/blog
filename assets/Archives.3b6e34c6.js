import{m as d,_ as p,r as v,o as t,c as s,F as _,g as l,j as m,f as e,p as f,t as c,h as y}from"./index.246b2081.js";function g(){return d({method:"GET",url:"/api/archives"})}const k={class:"archives-container"},x={class:"timeline"},A={class:"archive-y-con"},b={class:"archive-year-header"},B={class:"archive-count"},$={class:"time_con"},C=["href","onClick"],E={class:"archive-entry-title"},F={__name:"Archives",setup(N){const h=m(),n=v([]);g().then(a=>{const{archives:i}=a;n.value=i});function u(a){h.push({name:"Post",params:{post_title:a}})}return(a,i)=>(t(),s("div",k,[(t(!0),s(_,null,l(n.value,o=>(t(),s("div",x,[e("header",A,[e("h2",b,[f(c(o.year)+" ",1),e("sup",B,c(o.nums),1)])]),e("ul",null,[(t(!0),s(_,null,l(o.data,r=>(t(),s("div",$,[e("li",null,[e("a",{class:"entry-link","aria-label":"post link to ",href:`/post/${r.post_title}`,onClick:y(P=>u(r.post_title),["prevent"])},[e("h3",E,c(r.post_title),1)],8,C),e("time",null,c(r.post_date),1)])]))),256))])]))),256))]))}},V=p(F,[["__scopeId","data-v-57c038b6"]]);export{V as default};
