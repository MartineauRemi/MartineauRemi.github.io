(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[9],{24:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return d}));var s=i(1),r=[{title:"Designo-Website",subtitle:"Award-winning custom designs & digital branding solutions",description:"Site vitrine 'multipage' d'une agence fictive sp\xe9cialis\xe9e en design digital. Le site inclut un formulaire de contact.",stack:["React","React Router DOM","Styled Components","Formik"],github:"https://github.com/MartineauRemi/designo-website",url:"https://martineauremi.github.io/designo-website/"},{title:"Dev-Finder",subtitle:"",description:"Application web qui \xe0 partir de l'API 'Github-users-API' affiche l'aper\xe7u d'un profil Github selon le nom d'utilisateur.",stack:["React","Styled Components"],github:"https://github.com/MartineauRemi/dev-finder",url:"https://martineauremi.github.io/dev-finder/"},{title:"Galleria-Slideshow",subtitle:"Discover some of the most famous paintings in the world !",description:"Galerie d'art virtuelle. Lancez le diaporama pour en apprendre plus sur chaque oeuvre, et contr\xf4lez le \xe0 votre rythme.",stack:["React","Styled Components"],github:"https://github.com/MartineauRemi/galleria-slideshow",url:"https://martineauremi.github.io/galleria-slideshow/"},{title:"Audiophile",subtitle:"",overview:"Site E-Commerce de mat\xe9riel audio.",stack:["React","React Router","Sass"],github:"https://github.com/MartineauRemi/Audiophile",url:"https://martineauremi.github.io/Audiophile/",ready:!0,mobile:!1},{title:"Photosnap",subtitle:"Create and share your photo stories",overview:"Site vitrine pour une application de partage de photos.",stack:["HTML","Sass","Javascript"],github:"https://github.com/MartineauRemi/Photosnap",url:"https://martineauremi.github.io/Photosnap/",ready:!0,mobile:!1},{title:"Dine",subtitle:"Exquisite dining since 1989",overview:"Site web d'un restaurant qui se concentre sur un design int\xe9ressant et sur la validation d'un formulaire de r\xe9servation.",stack:["HTML","Sass","Javascript"],github:"https://github.com/MartineauRemi/Dine",url:"https://martineauremi.github.io/Dine/",ready:!0,mobile:!1},{title:"Easybank",subtitle:"Next Generation Digital Banking",overview:"Easybank est une page d'accueil fictive pour une banque en ligne.",stack:["HTML","Sass","Javascript"],github:"https://github.com/MartineauRemi/Easybank",url:"https://martineauremi.github.io/Easybank/",ready:!0,mobile:!1},{title:"Pomodoro",subtitle:"Boostez votre productivit\xe9 !",overview:"Ma\xeetriser son temps de travail et de pause en adoptant la m\xe9thode de productivit\xe9 'Pomodoro'.",stack:["React","Sass"],github:"https://github.com/MartineauRemi/Pomodoro",url:"https://martineauremi.github.io/Pomodoro/",ready:!0,mobile:!1},{title:"MyMovies",subtitle:"",overview:"Application mobile qui vous permet d'acc\xe9der \xe0 tous les d\xe9tails d'un film et de le partager \xe0 vos amis. Vous pouvez cr\xe9er une liste de vos films favoris, ou des prochains films que vous souhaitez voir.",stack:["React Native","Redux"],github:"https://github.com/MartineauRemi/MyMovies",url:"https://github.com/MartineauRemi/MyMovies",ready:!0,mobile:!0}],a=[{title:"Birdy",subtitle:"",overview:"PWA (Progressive Web App) inspir\xe9e de Twitter, qui couple les fonctionnalit\xe9s d'un r\xe9seau social et d'une messagerie instantan\xe9e.",stack:["React","PHP","MySQL","MongoDB"],github:"",url:"",ready:!1,mobile:!1}],o=i(3),n=i(14),c=i(18),l=i(0);function u(e){var t=e.title,i=e.subtitle,r=e.overview,a=e.stack,u=e.github,d=e.url,b=e.ready,h=e.mobile,p=Object(s.useState)(!1),m=Object(o.a)(p,2),j=m[0],v=m[1];return Object(l.jsxs)("div",{className:"project",onClick:function(){j||v(!0)},children:[j?Object(l.jsxs)("div",{className:"project__overview ".concat(j?"project__overview--visible":""),children:[Object(l.jsxs)("div",{className:"btn btn--close project__overview-close-btn",onClick:function(){j&&v(!1)},children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]}),Object(l.jsxs)("div",{className:"project__heading",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("h4",{children:i})]}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("ul",{className:"project__stack",children:a.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))}),b?Object(l.jsxs)("ul",{className:"project__links",children:[Object(l.jsx)("li",{className:"project__link",children:Object(l.jsx)("a",{href:u,title:"Voir code source",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(n.b,{})})}),Object(l.jsx)("li",{className:"project__link ".concat(h||""===d?"project__link--hidden":""),children:Object(l.jsx)("a",{href:d,title:"Acc\xe9der au site",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(c.a,{})})})]}):null]}):Object(l.jsx)("div",{id:t,className:"project__thumbnail ".concat(b?"":"project__thumbnail--not-ready"," ").concat(h?"project__thumbnail--mobile":""),children:"Easybank"===t?Object(l.jsx)("div",{className:"inner"}):b?null:Object(l.jsx)(n.h,{className:"project__thumbnail-tool-icon"})}),Object(l.jsx)("div",{className:"project__title",children:Object(l.jsx)("h3",{children:t})})]})}function d(){return Object(l.jsxs)("section",{id:"projects",className:"projects",children:[Object(l.jsxs)("div",{className:"projects__main-heading",children:[Object(l.jsx)("h2",{children:"Projets"}),Object(l.jsx)("p",{children:"Voici mes projets les plus r\xe9cents. Vous pouvez retrouver le reste de mon travail sur mon profil Github."})]}),Object(l.jsx)("div",{className:"projects__main-content",children:r.map((function(e,t){return Object(l.jsx)(u,{title:e.title,subtitle:e.subtitle,overview:e.overview,stack:e.stack,github:e.github,url:e.url,ready:e.ready,mobile:e.mobile},t)}))}),Object(l.jsxs)("div",{className:"projects__soon-heading",children:[Object(l.jsx)("h2",{children:"\xc0 Venir"}),Object(l.jsx)("p",{children:"Les projets ci-dessous sont ce sur quoi je travaille \xe0 l'heure actuelle. Ils sont encore en d\xe9veloppement et seront mis en ligne dans les prochains jours."})]}),Object(l.jsx)("div",{className:"projects__soon-content",children:a.map((function(e,t){return Object(l.jsx)(u,{title:e.title,subtitle:e.subtitle,overview:e.overview,stack:e.stack,github:e.github,url:e.url,ready:e.ready,mobile:e.ready},t)}))})]})}}}]);
//# sourceMappingURL=9.6fe63db1.chunk.js.map