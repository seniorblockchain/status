"use strict";(self.webpackChunkblockcore_status=self.webpackChunkblockcore_status||[]).push([[949],{4949:(Q,v,n)=>{n.r(v),n.d(v,{DashboardModule:()=>S,playerFactory:()=>f});var y=n(9808),t=n(6763),x=n(1271),e=n(5e3),M=n(7261);let l=(()=>{class o{constructor(a){this.snackBar=a}openSnackBar(a){this.snackBar.open(a,"",{duration:5e3})}}return o.\u0275fac=function(a){return new(a||o)(e.LFG(M.ux))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=n(2313),m=n(7968),u=n(7093),Z=n(5245);const d=[{path:"",component:x.$,children:[{path:"",component:(()=>{class o{constructor(a,b,D){this.notificationService=a,this.titleService=b,this.logger=D,this.options={path:"/assets/animations/blockchain.json"}}animationCreated(a){}ngOnInit(){this.titleService.setTitle("blockcore dapp - Dashboard"),this.logger.log("Dashboard loaded")}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(l),e.Y36(p.Dx),e.Y36(m.Kf))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dashboard-home"]],decls:10,vars:0,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["fxFlex","50%",1,"text-center","no-records","animate"]],template:function(a,b){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",0)(3,"h2"),e._uU(4,"Welcome to Blockcore Status!"),e.qZA()(),e.TgZ(5,"div",0)(6,"div",2)(7,"mat-icon"),e._uU(8,"dashboard"),e.qZA()(),e._UZ(9,"mat-icon"),e.qZA()()())},dependencies:[u.xw,u.Wh,u.yH,Z.Hw],styles:[".single-cards[_ngcontent-%COMP%]{margin:20px 0}.single-card[_ngcontent-%COMP%]   .mat-card-avatar[_ngcontent-%COMP%]{width:50px;height:50px}.single-card[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:55px}.projects-card[_ngcontent-%COMP%] > mat-card-content[_ngcontent-%COMP%]{max-height:400px;overflow:auto}"]}),o})()}]}];let T=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.Bz.forChild(d),t.Bz]}),o})();var L=n(4466),A=n(3713),O=n(4487),h=n.n(O);let S=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[y.ez,A.CT.forRoot({player:f}),T,L.m]}),o})();function f(){return h()}},1271:(Q,v,n)=>{n.d(v,{$:()=>k});var y=n(727),t=n(5e3),x=n(5113),e=n(4649);let M=(()=>{class r{get darkMode(){if(localStorage.getItem("theme")){if("dark"===localStorage.getItem("theme"))return!0}else if(window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1}set darkMode(i){i?localStorage.setItem("theme","dark"):localStorage.setItem("theme","white"),this.updateMode()}init(){this.updateMode()}updateMode(){this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var l=n(6763),p=n(9808),m=n(2638),u=n(5245),Z=n(4594),C=n(7423),d=n(4623),T=n(508),L=n(4834),A=n(5899),O=n(7238),h=n(7093);function S(r,g){1&r&&t._UZ(0,"mat-progress-bar",19)}const f=function(){return["/"]},o=function(){return["/dashboard"]},s=function(){return["/github"]},a=function(){return["/chains"]},b=function(){return["/indexers"]},D=function(){return["/about"]};let k=(()=>{class r{constructor(i,c,U,P){this.changeDetectorRef=i,this.media=c,this.spinnerService=U,this.theme=P,this.showSpinner=!1,this.userName="",this.isAdmin=!1,this.autoLogoutSubscription=new y.w0,this.mobileQuery=this.media.matchMedia("(max-width: 1000px)"),this._mobileQueryListener=()=>i.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){this.theme.init()}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener),this.autoLogoutSubscription.unsubscribe()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(t.sBO),t.Y36(x.vx),t.Y36(e.V),t.Y36(M))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-layout"]],decls:51,vars:21,consts:[[1,"navbar-container"],["color","primary",1,"navbar"],["mat-icon-button","",3,"click"],["matTooltip","Home",1,"navbar-brand",3,"routerLink"],[1,"navbar-spacer"],["mat-icon-button","",1,"mat-icon-button",3,"click"],["aria-label","Menu",1,"material-icons"],[1,"navbar-sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"opened","mode","fixedInViewport"],["snav",""],["mat-subheader",""],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["mat-list-icon",""],["mat-line",""],[1,"sidenav-content"],[1,"progress-bar-container"],["color","accent","mode","indeterminate",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["color","accent","mode","indeterminate"]],template:function(i,c){if(1&i){const U=t.EpF();t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),t.NdJ("click",function(){t.CHM(U);const I=t.MAs(14);return t.KtG(I.toggle())}),t.TgZ(3,"mat-icon"),t._uU(4,"menu"),t.qZA()(),t.TgZ(5,"a",3)(6,"h1"),t._uU(7," Blockcore Status "),t.qZA()(),t._UZ(8,"span",4),t.TgZ(9,"button",5),t.NdJ("click",function(){return c.theme.darkMode=!c.theme.darkMode}),t.TgZ(10,"mat-icon",6),t._uU(11),t.qZA()()(),t.TgZ(12,"mat-sidenav-container",7)(13,"mat-sidenav",8,9)(15,"mat-nav-list")(16,"h3",10),t._uU(17,"Home"),t.qZA(),t.TgZ(18,"a",11)(19,"mat-icon",12),t._uU(20," dashboard "),t.qZA(),t.TgZ(21,"p",13),t._uU(22," Dashboard "),t.qZA()(),t.TgZ(23,"a",11)(24,"mat-icon",12),t._uU(25," business "),t.qZA(),t.TgZ(26,"p",13),t._uU(27," Github "),t.qZA()(),t.TgZ(28,"a",11)(29,"mat-icon",12),t._uU(30," widgets "),t.qZA(),t.TgZ(31,"p",13),t._uU(32," Chains "),t.qZA()(),t.TgZ(33,"a",11)(34,"mat-icon",12),t._uU(35," list "),t.qZA(),t.TgZ(36,"p",13),t._uU(37," Indexers "),t.qZA()(),t._UZ(38,"mat-divider"),t.TgZ(39,"a",11)(40,"mat-icon",12),t._uU(41," info_outline "),t.qZA(),t.TgZ(42,"p",13),t._uU(43," About "),t.qZA()()()(),t.TgZ(44,"mat-sidenav-content",14)(45,"div",15),t.YNc(46,S,1,0,"mat-progress-bar",16),t.ALo(47,"async"),t.qZA(),t.TgZ(48,"div",17)(49,"div",18),t._UZ(50,"router-outlet"),t.qZA()()()()()}2&i&&(t.ekj("example-is-mobile",c.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(15,f)),t.xp6(6),t.Oqu(c.theme.darkMode?"light_mode":"dark_mode"),t.xp6(2),t.Q6J("opened",!c.mobileQuery.matches)("mode",c.mobileQuery.matches?"over":"side")("fixedInViewport",c.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(16,o)),t.xp6(5),t.Q6J("routerLink",t.DdM(17,s)),t.xp6(5),t.Q6J("routerLink",t.DdM(18,a)),t.xp6(5),t.Q6J("routerLink",t.DdM(19,b)),t.xp6(6),t.Q6J("routerLink",t.DdM(20,D)),t.xp6(7),t.Q6J("ngIf",t.lcZ(47,13,c.spinnerService.visibility)))},dependencies:[l.lC,l.yS,l.Od,p.O5,m.JX,m.TM,m.Rh,u.Hw,Z.Ye,C.lW,d.Hk,d.Tg,T.X2,d.Nh,d.gs,L.d,A.pW,O.gM,h.xw,h.Wh,h.yH,p.Ov],styles:[".navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{z-index:2}.navbar-brand[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.navbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.navbar-sidenav-container[_ngcontent-%COMP%]{flex:1}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}mat-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:1px solid #eee}.progress-bar-container[_ngcontent-%COMP%]{height:5px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}"]}),r})()}}]);