"use strict";(self.webpackChunkblockcore_status=self.webpackChunkblockcore_status||[]).push([[949],{4949:(S,g,e)=>{e.r(g),e.d(g,{DashboardModule:()=>T});var f=e(9808),t=e(6763),b=e(1271),o=e(5e3),x=e(7261);let m=(()=>{class n{constructor(a){this.snackBar=a}openSnackBar(a){this.snackBar.open(a,"",{duration:5e3})}}return n.\u0275fac=function(a){return new(a||n)(o.LFG(x.ux))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=e(2313),l=e(2838),u=e(7093),M=e(5245);const d=[{path:"",component:b.$,children:[{path:"",component:(()=>{class n{constructor(a,p,L){this.notificationService=a,this.titleService=p,this.logger=L}ngOnInit(){this.titleService.setTitle("blockcore dapp - Dashboard"),this.logger.log("Dashboard loaded")}}return n.\u0275fac=function(a){return new(a||n)(o.Y36(m),o.Y36(v.Dx),o.Y36(l.Kf))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-dashboard-home"]],decls:12,vars:0,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["fxFlex","50%",1,"text-center","no-records","animate"]],template:function(a,p){1&a&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",0)(3,"h2"),o._uU(4,"Welcome to Blockcore Status!"),o.qZA()(),o.TgZ(5,"div",0)(6,"div",2)(7,"mat-icon"),o._uU(8,"dashboard"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"This is the dashboard."),o.qZA()(),o._UZ(11,"mat-icon"),o.qZA()()())},dependencies:[u.xw,u.Wh,u.yH,M.Hw],styles:[".single-cards[_ngcontent-%COMP%]{margin:20px 0}.single-card[_ngcontent-%COMP%]   .mat-card-avatar[_ngcontent-%COMP%]{width:50px;height:50px}.single-card[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:55px}.projects-card[_ngcontent-%COMP%] > mat-card-content[_ngcontent-%COMP%]{max-height:400px;overflow:auto}"]}),n})()}]}];let Z=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[t.Bz.forChild(d),t.Bz]}),n})();var C=e(6390);let T=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[f.ez,Z,C.m]}),n})()},1271:(S,g,e)=>{e.d(g,{$:()=>Q});var f=e(727),t=e(5e3),b=e(5113),o=e(4649);let x=(()=>{class r{get darkMode(){if(localStorage.getItem("theme")){if("dark"===localStorage.getItem("theme"))return!0}else if(window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1}set darkMode(s){s?localStorage.setItem("theme","dark"):localStorage.setItem("theme","white"),this.updateMode()}init(){this.updateMode()}updateMode(){this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}return r.\u0275fac=function(s){return new(s||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var m=e(6763),v=e(9808),l=e(2638),u=e(5245),M=e(4594),y=e(7423),d=e(4623),Z=e(508),C=e(4834),T=e(5899),n=e(7238),i=e(7093);function a(r,h){1&r&&t._UZ(0,"mat-progress-bar",19)}const p=function(){return["/"]},L=function(){return["/dashboard"]},D=function(){return["/github"]},U=function(){return["/chains"]},P=function(){return["/indexers"]},k=function(){return["/about"]};let Q=(()=>{class r{constructor(s,c,A,O){this.changeDetectorRef=s,this.media=c,this.spinnerService=A,this.theme=O,this.showSpinner=!1,this.userName="",this.isAdmin=!1,this.autoLogoutSubscription=new f.w0,this.mobileQuery=this.media.matchMedia("(max-width: 1000px)"),this._mobileQueryListener=()=>s.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){this.theme.init()}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener),this.autoLogoutSubscription.unsubscribe()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}}return r.\u0275fac=function(s){return new(s||r)(t.Y36(t.sBO),t.Y36(b.vx),t.Y36(o.V),t.Y36(x))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-layout"]],decls:51,vars:21,consts:[[1,"navbar-container"],["color","primary",1,"navbar"],["mat-icon-button","",3,"click"],["matTooltip","Home",1,"navbar-brand",3,"routerLink"],[1,"navbar-spacer"],["mat-icon-button","",1,"mat-icon-button",3,"click"],["aria-label","Menu",1,"material-icons"],[1,"navbar-sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"opened","mode","fixedInViewport"],["snav",""],["mat-subheader",""],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["mat-list-icon",""],["mat-line",""],[1,"sidenav-content"],[1,"progress-bar-container"],["color","accent","mode","indeterminate",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["color","accent","mode","indeterminate"]],template:function(s,c){if(1&s){const A=t.EpF();t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),t.NdJ("click",function(){t.CHM(A);const I=t.MAs(14);return t.KtG(I.toggle())}),t.TgZ(3,"mat-icon"),t._uU(4,"menu"),t.qZA()(),t.TgZ(5,"a",3)(6,"h1"),t._uU(7," Blockcore Status "),t.qZA()(),t._UZ(8,"span",4),t.TgZ(9,"button",5),t.NdJ("click",function(){return c.theme.darkMode=!c.theme.darkMode}),t.TgZ(10,"mat-icon",6),t._uU(11),t.qZA()()(),t.TgZ(12,"mat-sidenav-container",7)(13,"mat-sidenav",8,9)(15,"mat-nav-list")(16,"h3",10),t._uU(17,"Home"),t.qZA(),t.TgZ(18,"a",11)(19,"mat-icon",12),t._uU(20," dashboard "),t.qZA(),t.TgZ(21,"p",13),t._uU(22," Dashboard "),t.qZA()(),t.TgZ(23,"a",11)(24,"mat-icon",12),t._uU(25," business "),t.qZA(),t.TgZ(26,"p",13),t._uU(27," Github "),t.qZA()(),t.TgZ(28,"a",11)(29,"mat-icon",12),t._uU(30," business "),t.qZA(),t.TgZ(31,"p",13),t._uU(32," Chains "),t.qZA()(),t.TgZ(33,"a",11)(34,"mat-icon",12),t._uU(35," business "),t.qZA(),t.TgZ(36,"p",13),t._uU(37," Indexers "),t.qZA()(),t._UZ(38,"mat-divider"),t.TgZ(39,"a",11)(40,"mat-icon",12),t._uU(41," info_outline "),t.qZA(),t.TgZ(42,"p",13),t._uU(43," About "),t.qZA()()()(),t.TgZ(44,"mat-sidenav-content",14)(45,"div",15),t.YNc(46,a,1,0,"mat-progress-bar",16),t.ALo(47,"async"),t.qZA(),t.TgZ(48,"div",17)(49,"div",18),t._UZ(50,"router-outlet"),t.qZA()()()()()}2&s&&(t.ekj("example-is-mobile",c.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(15,p)),t.xp6(6),t.Oqu(c.theme.darkMode?"light_mode":"dark_mode"),t.xp6(2),t.Q6J("opened",!c.mobileQuery.matches)("mode",c.mobileQuery.matches?"over":"side")("fixedInViewport",c.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(16,L)),t.xp6(5),t.Q6J("routerLink",t.DdM(17,D)),t.xp6(5),t.Q6J("routerLink",t.DdM(18,U)),t.xp6(5),t.Q6J("routerLink",t.DdM(19,P)),t.xp6(6),t.Q6J("routerLink",t.DdM(20,k)),t.xp6(7),t.Q6J("ngIf",t.lcZ(47,13,c.spinnerService.visibility)))},dependencies:[m.lC,m.yS,m.Od,v.O5,l.JX,l.TM,l.Rh,u.Hw,M.Ye,y.lW,d.Hk,d.Tg,Z.X2,d.Nh,d.gs,C.d,T.pW,n.gM,i.xw,i.Wh,i.yH,v.Ov],styles:[".navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{z-index:2}.navbar-brand[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.navbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.navbar-sidenav-container[_ngcontent-%COMP%]{flex:1}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}mat-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:1px solid #eee}.progress-bar-container[_ngcontent-%COMP%]{height:5px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}"]}),r})()}}]);