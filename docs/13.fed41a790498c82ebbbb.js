(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CytV:function(n,l,o){"use strict";o.r(l);var e=o("LoAr"),u=function(){return function(){}}(),a=o("C9Ky"),t=o("pLqg"),r=o("7tlY"),s=o("Ckq/"),i=o("//aV"),c=o("U+go"),b=o("JZJv"),f=o("QoAl"),d=o("320Y"),m=o("ChgE"),g=o("fxml"),p=o("YzpY"),h=o("TeY9"),A=o("WV+C"),w=o("WT9V"),v=o("bcGG"),k=o("WjFU"),C=o("fDe+"),M=o("jQpT"),P=function(){return function(){this.code={import:"import { library } from '@fortawesome/fontawesome-svg-core';\n\nimport { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';\nimport { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';\nimport { faRedditAlien } from '@fortawesome/free-brands-svg-icons/faRedditAlien';\nimport { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';\nimport { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG';\nimport { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr';\nimport { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP';\nimport { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';\nimport { faVk } from '@fortawesome/free-brands-svg-icons/faVk';\nimport { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';\nimport { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';\nimport { faMix } from '@fortawesome/free-brands-svg-icons/faMix';\nimport { faXing } from '@fortawesome/free-brands-svg-icons/faXing';\nimport { faLine } from '@fortawesome/free-brands-svg-icons/faLine';\n\nimport { faCommentAlt } from '@fortawesome/free-solid-svg-icons/faCommentAlt';\nimport { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';\nimport { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';\nimport { faLink } from '@fortawesome/free-solid-svg-icons/faLink';\nimport { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';\nimport { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';\nimport { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';\nimport { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';\n\nconst icons = [\n  faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faPinterestP, faRedditAlien, faTumblr,\n  faWhatsapp, faVk, faFacebookMessenger, faTelegramPlane, faMix, faXing, faCommentAlt, faBook, faLine,\n  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus, faLightbulb, faCoffee, faInfo\n];\n\nlibrary.add(...icons);",icons:"import './icons';",libraryMethod:"import { library } from '@fortawesome/fontawesome-svg-core';\n\nimport { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';\n\nconst icons = [\n  // ... other icons\n  faFacebookSquare\n];\n\nlibrary.add(...icons);\n\nconst shareProp = {\n  facebook: {\n    icon: ['fab', 'facebook-square']\n  }\n};\n\n@NgModule({\n  imports: [\n    ShareButtonsModule.withConfig({ prop: shareProp })\n  ]\n})",literalMethod:"import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';\nconst shareProp = {\n  facebook: {\n    icon: faFacebookSquare\n  }\n};\n@NgModule({\n  imports: [\n    ShareButtonsModule.withConfig({ prop: shareProp })\n  ]\n})\n"}}}(),y=e.qb({encapsulation:0,styles:[[""]],data:{}});function K(n){return e.Mb(2,[(n()(),e.sb(0,0,null,null,62,"ng-scrollbar",[["shown","hover"]],[[1,"trackX",0],[1,"trackY",0],[1,"compact",0],[1,"autoHide",0]],null,null,i.b,i.a)),e.rb(1,4374528,null,0,c.a,[e.h,b.a,e.C],{shown:[0,"shown"],compact:[1,"compact"]},null),(n()(),e.sb(2,0,null,0,3,"header",[],null,null,null,f.b,f.a)),e.rb(3,49152,null,0,d.a,[],null,null),(n()(),e.sb(4,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Icons Guide"])),(n()(),e.sb(6,0,null,0,54,"div",[["class","page-content container"]],null,null,null,null,null)),(n()(),e.sb(7,0,null,null,9,"section",[],null,null,null,null,null)),(n()(),e.sb(8,0,null,null,2,"section-title",[],null,null,null,m.b,m.a)),e.rb(9,49152,null,0,g.a,[],null,null),(n()(),e.Kb(-1,0,["Overview"])),(n()(),e.sb(11,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["This library relies on "])),(n()(),e.sb(13,0,null,null,2,"b",[],null,null,null,null,null)),(n()(),e.sb(14,0,null,null,1,"a",[["href","https://fontawesome.com"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["FontAwesome"])),(n()(),e.Kb(-1,null,[" to display share buttons icons. By default the aliases of the share icons are selected, but you can still choose different icons aliases in the config should import the icons manually."])),(n()(),e.sb(17,0,null,null,14,"section",[],null,null,null,null,null)),(n()(),e.sb(18,0,null,null,2,"section-title",[],null,null,null,m.b,m.a)),e.rb(19,49152,null,0,g.a,[],null,null),(n()(),e.Kb(-1,0,["Usage"])),(n()(),e.sb(21,0,null,null,6,"p",[],null,null,null,null,null)),(n()(),e.sb(22,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["1."])),(n()(),e.Kb(-1,null,[" Create a new file e.g. "])),(n()(),e.sb(25,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["src/icons.ts"])),(n()(),e.Kb(-1,null,[" and import the share icons in it."])),(n()(),e.sb(28,0,null,null,1,"hl-code",[],null,null,null,p.b,p.a)),e.rb(29,4243456,null,0,h.a,[A.a,w.d],{code:[0,"code"],height:[1,"height"]},null),(n()(),e.sb(30,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Copy and paste the above code in your file, if you don't want to include all share buttons, remove the unneeded icons."])),(n()(),e.sb(32,0,null,null,3,"section",[],null,null,null,null,null)),(n()(),e.sb(33,0,null,null,2,"note",[["icon","lightbulb"]],null,null,null,v.b,v.a)),e.rb(34,49152,null,0,k.a,[],{icon:[0,"icon"]},null),(n()(),e.Kb(-1,0,[" Use the deep link to import an icon to avoid importing the rest in your bundle. "])),(n()(),e.sb(36,0,null,null,12,"section",[],null,null,null,null,null)),(n()(),e.sb(37,0,null,null,6,"p",[],null,null,null,null,null)),(n()(),e.sb(38,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["2."])),(n()(),e.Kb(-1,null,[" To load the icons on app bootstrap use "])),(n()(),e.sb(41,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["src/main.ts"])),(n()(),e.Kb(-1,null,[", add the following line: "])),(n()(),e.sb(44,0,null,null,1,"hl-code",[],null,null,null,p.b,p.a)),e.rb(45,4243456,null,0,h.a,[A.a,w.d],{code:[0,"code"]},null),(n()(),e.Kb(-1,null,[" Or you can lazy load them in a feature module e.g. "])),(n()(),e.sb(47,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["src/feature/feature.module.ts"])),(n()(),e.sb(49,0,null,null,11,"section",[],null,null,null,null,null)),(n()(),e.sb(50,0,null,null,2,"section-title",[],null,null,null,m.b,m.a)),e.rb(51,49152,null,0,g.a,[],null,null),(n()(),e.Kb(-1,0,["Custom icons"])),(n()(),e.sb(53,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Let's say you want to use facebook square icon instead of the default one"])),(n()(),e.sb(55,0,null,null,1,"hl-code",[],null,null,null,p.b,p.a)),e.rb(56,4243456,null,0,h.a,[A.a,w.d],{code:[0,"code"],height:[1,"height"]},null),(n()(),e.sb(57,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Kb(-1,null,["You can also set the icon directly"])),(n()(),e.sb(59,0,null,null,1,"hl-code",[],null,null,null,p.b,p.a)),e.rb(60,4243456,null,0,h.a,[A.a,w.d],{code:[0,"code"]},null),(n()(),e.sb(61,0,null,0,1,"footer",[],null,null,null,C.b,C.a)),e.rb(62,49152,null,0,M.a,[],null,null)],function(n,l){var o=l.component;n(l,1,0,"hover",!0),n(l,29,0,o.code.import,400),n(l,34,0,"lightbulb"),n(l,45,0,o.code.icons),n(l,56,0,o.code.libraryMethod,400),n(l,60,0,o.code.literalMethod)},function(n,l){n(l,0,0,e.Cb(l,1).trackX,e.Cb(l,1).trackY,e.Cb(l,1).compact,"hover"===e.Cb(l,1).shown)})}function F(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,1,"icons",[["class","page"]],null,null,null,K,y)),e.rb(1,49152,null,0,P,[],null,null)],null,null)}var L=e.ob("icons",P,F,{},{},[]),O=o("LYzL"),x=o("y7gG"),T=o("SeAg"),_=o("eXL1"),q=o("C7Lb"),j=o("CRa1"),E=o("SECt"),S=o("s8WJ"),G=o("SPdK"),V=o("IfiR"),Y=o("981U"),I=o("X7Hn"),X=o("EAoM"),W=o("a198"),H=o("IvSS"),U=o("V3Ng"),z=o("euho"),B=o("abkR"),N=o("Ho7M"),R=o("0xYh"),J=o("+3V+"),D=o("dgjn"),Q=o("GcYS"),Z=o("8xy9"),$=o("e8uv"),nn=o("rXXt"),ln=o("Hfg7"),on=o("XIB+"),en=o("z1EI"),un=o("qXP9"),an=o("5dmV"),tn=o("UelK"),rn=o("WgBV"),sn=o("LxDK"),cn=o("V7OE"),bn=o("AFqu"),fn=o("wEfT"),dn=o("FOLC"),mn=o("vA/A"),gn=o("6yYy"),pn=o("PCNd"),hn=o("rh80");o.d(l,"IconsPageModuleNgFactory",function(){return An});var An=e.pb(u,[],function(n){return e.zb([e.Ab(512,e.j,e.eb,[[8,[a.a,t.a,r.a,s.a,L]],[3,e.j],e.y]),e.Ab(4608,w.n,w.m,[e.v,[2,w.z]]),e.Ab(4608,O.b,O.b,[]),e.Ab(4608,x.c,x.c,[]),e.Ab(4608,T.f,O.c,[[2,O.g],[2,O.l]]),e.Ab(4608,_.c,_.c,[_.i,_.e,e.j,_.h,_.f,e.r,e.A,w.d,q.b,[2,w.h]]),e.Ab(5120,_.j,_.k,[_.c]),e.Ab(5120,j.a,j.b,[_.c]),e.Ab(5120,E.b,E.c,[_.c]),e.Ab(5120,S.c,S.d,[_.c]),e.Ab(135680,S.e,S.e,[_.c,e.r,[2,w.h],[2,S.b],S.c,[3,S.e],_.e]),e.Ab(4608,G.j,G.i,[G.d,G.g]),e.Ab(5120,e.b,function(n,l){return[G.m(n,l)]},[w.d,e.C]),e.Ab(4608,V.p,V.p,[]),e.Ab(4608,V.d,V.d,[]),e.Ab(1073742336,w.c,w.c,[]),e.Ab(1073742336,Y.r,Y.r,[[2,Y.x],[2,Y.o]]),e.Ab(1073742336,I.p,I.p,[]),e.Ab(1073742336,q.a,q.a,[]),e.Ab(1073742336,O.l,O.l,[[2,O.d],[2,T.g]]),e.Ab(1073742336,X.l,X.l,[]),e.Ab(1073742336,W.d,W.d,[]),e.Ab(1073742336,A.b,A.b,[]),e.Ab(1073742336,H.c,H.c,[]),e.Ab(1073742336,U.h,U.h,[]),e.Ab(1073742336,O.u,O.u,[]),e.Ab(1073742336,x.d,x.d,[]),e.Ab(1073742336,z.c,z.c,[]),e.Ab(1073742336,B.f,B.f,[]),e.Ab(1073742336,_.g,_.g,[]),e.Ab(1073742336,O.s,O.s,[]),e.Ab(1073742336,O.q,O.q,[]),e.Ab(1073742336,N.d,N.d,[]),e.Ab(1073742336,j.d,j.d,[]),e.Ab(1073742336,R.a,R.a,[]),e.Ab(1073742336,E.e,E.e,[]),e.Ab(1073742336,J.c,J.c,[]),e.Ab(1073742336,D.b,D.b,[]),e.Ab(1073742336,Q.c,Q.c,[]),e.Ab(1073742336,O.m,O.m,[]),e.Ab(1073742336,Z.b,Z.b,[]),e.Ab(1073742336,$.c,$.c,[]),e.Ab(1073742336,nn.c,nn.c,[]),e.Ab(1073742336,ln.a,ln.a,[]),e.Ab(1073742336,on.d,on.d,[]),e.Ab(1073742336,en.a,en.a,[]),e.Ab(1073742336,S.h,S.h,[]),e.Ab(1073742336,un.b,un.b,[]),e.Ab(1073742336,an.a,an.a,[]),e.Ab(1073742336,G.e,G.e,[]),e.Ab(1073742336,tn.b,tn.b,[]),e.Ab(1073742336,rn.b,rn.b,[]),e.Ab(1073742336,sn.a,sn.a,[]),e.Ab(1073742336,cn.a,cn.a,[[2,G.k],e.C]),e.Ab(1073742336,V.o,V.o,[]),e.Ab(1073742336,V.g,V.g,[]),e.Ab(1073742336,V.n,V.n,[]),e.Ab(1073742336,b.c,b.c,[]),e.Ab(1073742336,c.d,c.d,[]),e.Ab(1073742336,c.b,c.b,[]),e.Ab(1073742336,bn.d,bn.d,[]),e.Ab(1073742336,fn.e,fn.e,[]),e.Ab(1073742336,dn.f,dn.f,[]),e.Ab(1073742336,mn.b,mn.b,[]),e.Ab(1073742336,gn.b,gn.b,[]),e.Ab(1073742336,pn.a,pn.a,[]),e.Ab(1073742336,u,u,[]),e.Ab(256,W.a,{separatorKeyCodes:[hn.f]},[]),e.Ab(1024,Y.m,function(){return[[{path:"",component:P}]]},[])])})},WjFU:function(n,l,o){"use strict";o.d(l,"a",function(){return e});var e=function(){return function(){this.icon="info"}}()},bcGG:function(n,l,o){"use strict";var e=o("LoAr"),u=o("iwai"),a=o("FOLC"),t=o("SeAg");o("WjFU"),o.d(l,"a",function(){return r}),o.d(l,"b",function(){return s});var r=e.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;border-radius:.5em;box-shadow:0 3px 10px rgba(0,0,0,.1);overflow:hidden;margin:4em 0}.note-icon[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:80px;display:flex;justify-content:center;align-items:center;background-color:#00bcd4}fa-icon[_ngcontent-%COMP%]{font-size:1.7em;color:#fff}.note-content[_ngcontent-%COMP%]{margin-left:80px;text-align:justify;padding:.8em 1em}section[_ngcontent-%COMP%]{min-height:80px;position:relative;display:flex;align-items:center;background-color:#e0f7fa;margin:0}.note-coffee[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background-color:#d7ccc8}.note-coffee[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%]{background-color:#6d4c41}.note-lightbulb[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background-color:#dcedc8}.note-lightbulb[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%]{background-color:#7cb342}.note-book[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background-color:#ffcdd2}.note-book[_ngcontent-%COMP%]   .note-icon[_ngcontent-%COMP%]{background-color:#e53935}"]],data:{}});function s(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,7,"span",[],[[8,"className",0]],null,null,null,null)),(n()(),e.sb(1,0,null,null,6,"section",[],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,3,"span",[["class","note-icon"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,2,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,u.b,u.a)),e.rb(4,573440,null,0,a.a,[t.c,a.b],{iconProp:[0,"iconProp"]},null),e.Db(5,2),(n()(),e.sb(6,0,null,null,1,"div",[["class","note-content"]],null,null,null,null,null)),e.Bb(null,0)],function(n,l){var o=n(l,5,0,"fas",l.component.icon);n(l,4,0,o)},function(n,l){n(l,0,0,e.ub(1,"note note-",l.component.icon,"")),n(l,3,0,e.Cb(l,4).renderedIconHTML)})}}}]);