(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(158),o=a(156);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},151:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(151);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){"use strict";var n=a(152),r=a(4),i=a.n(r),o=a(0),l=a.n(o),s=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{position:"fixed",background:"#ffcf2b",padding:"1rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",top:0,flexShrink:0}},l.a.createElement("div",{style:{alignSelf:"flex-start"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(n.a,{to:"/",style:{color:"#505050",textDecoration:"none"}},t))),l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(n.a,{to:"/proposal/project-summary"},"Proposal")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/contribute"},"Contribute")))))};s.propTypes={siteTitle:i.a.string},s.defaultProps={siteTitle:""},t.a=s},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("footer",{style:{borderTop:"1px solid #e1e1e1",padding:"1rem 2rem",height:"50",flexShrink:0,textAlign:"center"}},"© ",(new Date).getFullYear(),", Sidewalk |"," ",r.a.createElement("a",{href:"https://humaan.ai"},"Humaan.ai"))}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(160),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Sidewalk",description:"The sidewalk analytics by using image processing.",author:"@humaan-ai"}}}}},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(152),c=a(153),u=a(155),d=(a(161),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",padding:"3.75rem 3.75rem",paddingTop:0}},i.a.createElement("main",{style:{marginTop:80,marginBottom:80}},t)),i.a.createElement(u.a,null))},data:n})});d.propTypes={children:l.a.node.isRequired},t.a=d},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Sidewalk"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-5453948e34b3e5edf6e9.js.map