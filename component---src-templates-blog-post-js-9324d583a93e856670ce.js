"use strict";(self.webpackChunkneordinary=self.webpackChunkneordinary||[]).push([[989],{8678:function(e,t,n){var a=n(7294),r=n(1082);t.Z=function(e){var t,n=e.location,l=e.title,i=e.children,o="/"===n.pathname;return t=o?a.createElement("h1",{className:"main-heading"},a.createElement(r.Link,{to:"/"},l)):a.createElement(r.Link,{className:"header-link-home",to:"/"},l),a.createElement("div",{className:"global-wrapper","data-is-root-path":o},a.createElement("header",{className:"global-header"},t),a.createElement("main",null,i),a.createElement("footer",null,"© ",(new Date).getFullYear()," NE(O)RDINARY Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,n){var a=n(7294),r=n(1082),l=function(e){var t,n,l,i=e.description,o=(e.lang,e.title),c=e.children,m=(0,r.useStaticQuery)("2841359383").site,s=i||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?o+" | "+u:o),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(l=n.social)||void 0===l?void 0:l.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:s}),c)};l.defaultProps={description:""},t.Z=l},862:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return s}});var a=n(7294),r=n(1082),l=n(8678),i=n(9357),o=a.memo((function(e){var t=e.repo,n=e.theme,r=(0,a.createRef)();return(0,a.useLayoutEffect)((function(){var e=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:t,theme:n,"issue-term":"pathname",label:"post comment",crossOrigin:"anonymous",async:"true"};Object.entries(a).forEach((function(t){var n=t[0],a=t[1];e.setAttribute(n,a)})),r.current.appendChild(e)}),[t]),a.createElement("div",{ref:r})}));o.displayName="Utterances";var c=o,m=function(e){var t=e.data.markdownRemark;return a.createElement(i.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})},s=function(e){var t,n=e.data,i=n.previous,o=n.next,m=n.site,s=n.markdownRemark,u=e.location,d=(null===(t=m.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(l.Z,{location:u,title:d},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},s.frontmatter.title),a.createElement("p",null,s.frontmatter.author," (",a.createElement("a",{href:"mailto:"+s.frontmatter.authorMail},s.frontmatter.authorMail),")- ",s.frontmatter.date)),a.createElement("section",{dangerouslySetInnerHTML:{__html:s.html},itemProp:"articleBody"}),a.createElement("hr",null),a.createElement("footer",null,a.createElement(c,{repo:"neordinary/neordinary.github.io",theme:"github-light"}))),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,i&&a.createElement(r.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),a.createElement("li",null,o&&a.createElement(r.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9324d583a93e856670ce.js.map