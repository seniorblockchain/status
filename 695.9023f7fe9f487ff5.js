"use strict";(self.webpackChunkblockcore_status=self.webpackChunkblockcore_status||[]).push([[695],{2844:(y,p,a)=>{a.d(p,{o:()=>h,s:()=>g});var o=a(5861),t=a(5879),v=a(9862);class h extends Error{constructor(l,d,e){super(e),Object.setPrototypeOf(this,new.target.prototype),this.name=h.name,this.url=d,this.code=l}}let g=(()=>{var i;class l{constructor(e){this.http=e}download(e,n={}){return(0,o.Z)(function*(){const r=yield fetch(e,n),s=yield r.json();if(200!==r.status)throw s&&s.status?new h(s.status,e,JSON.stringify(s)):new h(r.status,e,r.statusText);return s})()}downloadRelative(e,n={}){var r=this;return(0,o.Z)(function*(){return r.download(r.baseUrl+e,n)})()}request(e,n={}){return(0,o.Z)(function*(){return yield fetch(e,n)})()}requestRelative(e,n={}){var r=this;return(0,o.Z)(function*(){return yield fetch(r.baseUrl+e,n)})()}loadSetup(e){var n=this;return(0,o.Z)(function*(){let r=null;r=yield n.download("https://chains.blockcore.net/chains/"+e.toUpperCase()+".json"),n.baseUrl=r.Explorer.Indexer.ApiUrl,n.baseUrl.endsWith("/")&&(n.baseUrl=n.baseUrl.substring(0,n.baseUrl.length-1)),n.resetUrl=n.baseUrl;const s=localStorage.getItem(e+"-url");return null!=s&&(n.baseUrl=s,console.log("storage baseUrl",n.baseUrl)),r})()}getBaseUrl(){var e=this;return(0,o.Z)(function*(){return e.baseUrl})()}setBaseUrl(e,n){var r=this;return(0,o.Z)(function*(){r.baseUrl=n,localStorage.setItem(e+"-url",n)})()}resetBaseUrl(e){var n=this;return(0,o.Z)(function*(){localStorage.removeItem(e+"-url"),n.baseUrl=n.resetUrl})()}loadChains(e){var n=this;return(0,o.Z)(function*(){return n.download(`https://chains.blockcore.net/CHAINS-${e}.json`)})()}loadIndexers(){var e=this;return(0,o.Z)(function*(){null==e.dnsendpoints&&(e.dnsendpoints=yield e.download("https://chains.blockcore.net/services/DNS.json")),e.endpoints=[];for(let n=0;n<e.dnsendpoints.length;n++){const r=e.dnsendpoints[n];try{const s=yield e.download(r.url+"/api/dns/services/service/Indexer");s.url=r.url,e.endpoints.push(s)}catch(s){e.errorMessage="{"===s.message[0]?JSON.parse(s.message):s,console.log(s)}}return e.endpoints})()}getInfo(){var e=this;return(0,o.Z)(function*(){return e.downloadRelative("/stats/info")})()}getLastBlock(e=!0){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/block/latest")})()}getBlocks(e,n){var r=this;return(0,o.Z)(function*(){return r.downloadRelative("/query/block?offset="+e+"&limit="+n)})()}getBlocksRequest(e,n){var r=this;return(0,o.Z)(function*(){return r.downloadRelative("/query/block?offset="+e+"&limit="+n)})()}getBlockByHeight(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/block/index/"+e)})()}getBlockByHash(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/block/"+e)})()}getTransaction(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/transaction/"+e)})()}getAddress(e,n=!1){var r=this;return(0,o.Z)(function*(){return r.downloadRelative("/query/address/"+e+(n?"/transactions":""))})()}getPeers(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/stats/peers/"+e.toISOString())})()}getRichlist(e,n){var r=this;return(0,o.Z)(function*(){return r.downloadRelative("/insight/richlist?offset="+e+"&limit="+n)})()}getSupply(){var e=this;return(0,o.Z)(function*(){return e.downloadRelative("/insight/supply")})()}getWallets(){var e=this;return(0,o.Z)(function*(){return e.downloadRelative("/insight/wallets")})()}getContractTransaction(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/cirrus/contract/transaction/"+e)})()}getContractAddress(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/cirrus/contract/"+e)})()}getContractCode(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/cirrus/contract/code/"+e)})()}}return(i=l).\u0275fac=function(e){return new(e||i)(t.LFG(v.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),l})()},8442:(y,p,a)=>{a.d(p,{U:()=>g});var o=a(5861),t=a(5619),v=a(5879),h=a(2844);let g=(()=>{var i;class l{get isCurrentRootChain(){return"blockcore"===this.current||"BLOCKCORE"===this.current}get current(){return this.currentChainSubjectBehavior.getValue()}set current(e){this.currentChainSubjectBehavior.next(e)}constructor(e){this.api=e,this.initialized=!1,this.currentChainSubjectBehavior=new t.X("BLOCKCORE"),this.currentChain$=this.currentChainSubjectBehavior.asObservable()}getIndexers(){var e=this;return(0,o.Z)(function*(){const n=yield e.api.loadIndexers();e.indexers=n})()}getChains(e){var n=this;return(0,o.Z)(function*(){const r=yield n.api.loadChains(e);n.chains=r})()}setChain(e){var n=this;return(0,o.Z)(function*(){if(n.current===e)return void(n.current=e);const r=yield n.api.loadSetup(e);return n.data=r,n.Chain=n.data.Chain,n.Network=n.data.Network,n.Indexer=n.data.Indexer,n.current=e,n.Chain?.Color&&document.documentElement.style.setProperty("--accent",n.Chain?.Color),null})()}}return(i=l).\u0275fac=function(e){return new(e||i)(v.LFG(h.s))},i.\u0275prov=v.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),l})()},69:(y,p,a)=>{a.d(p,{$:()=>E});var o=a(7394),t=a(5879),v=a(1088),h=a(4087);let g=(()=>{var c;class f{get darkMode(){if(localStorage.getItem("theme")){if("dark"===localStorage.getItem("theme"))return!0}else if(window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1}set darkMode(u){u?localStorage.setItem("theme","dark"):localStorage.setItem("theme","white"),this.updateMode()}init(){this.updateMode()}updateMode(){this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}return(c=f).\u0275fac=function(u){return new(u||c)},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),f})();var i=a(6814);let l=(()=>{var c;class f{constructor(u){this.document=u}disableRightClick(){this.document.addEventListener("contextmenu",u=>{var m=u.target;"INPUT"!=m.tagName&&"TEXTAREA"!=m.tagName&&u.preventDefault()},!1)}}return(c=f).\u0275fac=function(u){return new(u||c)(t.LFG(i.K0))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),f})();var d=a(1896),e=a(2651),n=a(617),r=a(1274),s=a(4505),b=a(110),U=a(3680),k=a(6385),O=a(965),S=a(7611),C=a(3814);function T(c,f){1&c&&t._UZ(0,"mat-progress-bar",19)}const L=function(){return["/"]},w=function(){return["/dashboard"]},A=function(){return["/github"]},I=function(){return["/chains"]},R=function(){return["/indexers"]},P=function(){return["/about"]};let E=(()=>{var c;class f{constructor(u,m,Z,x,M){this.changeDetectorRef=u,this.media=m,this.spinnerService=Z,this.theme=x,this.rightClickDisable=M,this.showSpinner=!1,this.userName="",this.isAdmin=!1,this.autoLogoutSubscription=new o.w0,this.mobileQuery=this.media.matchMedia("(max-width: 1000px)"),this._mobileQueryListener=()=>u.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener),this.rightClickDisable.disableRightClick()}ngOnInit(){this.theme.init()}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener),this.autoLogoutSubscription.unsubscribe()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}}return(c=f).\u0275fac=function(u){return new(u||c)(t.Y36(t.sBO),t.Y36(v.vx),t.Y36(h.V),t.Y36(g),t.Y36(l))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-layout"]],decls:51,vars:21,consts:[[1,"navbar-container"],["color","primary",1,"navbar"],["mat-icon-button","",3,"click"],["matTooltip","Home",1,"navbar-brand",3,"routerLink"],[1,"navbar-spacer"],["mat-icon-button","",1,"mat-icon-button",3,"click"],["aria-label","Menu",1,"material-icons"],[1,"navbar-sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"opened","mode","fixedInViewport"],["snav",""],["mat-subheader",""],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["mat-list-icon",""],["mat-line",""],[1,"sidenav-content"],[1,"progress-bar-container"],["color","accent","mode","indeterminate",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["color","accent","mode","indeterminate"]],template:function(u,m){if(1&u){const Z=t.EpF();t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),t.NdJ("click",function(){t.CHM(Z);const M=t.MAs(14);return t.KtG(M.toggle())}),t.TgZ(3,"mat-icon"),t._uU(4,"menu"),t.qZA()(),t.TgZ(5,"a",3)(6,"h1"),t._uU(7," Blockcore Status "),t.qZA()(),t._UZ(8,"span",4),t.TgZ(9,"button",5),t.NdJ("click",function(){return m.theme.darkMode=!m.theme.darkMode}),t.TgZ(10,"mat-icon",6),t._uU(11),t.qZA()()(),t.TgZ(12,"mat-sidenav-container",7)(13,"mat-sidenav",8,9)(15,"mat-nav-list")(16,"h3",10),t._uU(17,"Home"),t.qZA(),t.TgZ(18,"a",11)(19,"mat-icon",12),t._uU(20," dashboard "),t.qZA(),t.TgZ(21,"p",13),t._uU(22," Dashboard "),t.qZA()(),t.TgZ(23,"a",11)(24,"mat-icon",12),t._uU(25," business "),t.qZA(),t.TgZ(26,"p",13),t._uU(27," Github "),t.qZA()(),t.TgZ(28,"a",11)(29,"mat-icon",12),t._uU(30," widgets "),t.qZA(),t.TgZ(31,"p",13),t._uU(32," Chains "),t.qZA()(),t.TgZ(33,"a",11)(34,"mat-icon",12),t._uU(35," list "),t.qZA(),t.TgZ(36,"p",13),t._uU(37," Indexers "),t.qZA()(),t._UZ(38,"mat-divider"),t.TgZ(39,"a",11)(40,"mat-icon",12),t._uU(41," info_outline "),t.qZA(),t.TgZ(42,"p",13),t._uU(43," About "),t.qZA()()()(),t.TgZ(44,"mat-sidenav-content",14)(45,"div",15),t.YNc(46,T,1,0,"mat-progress-bar",16),t.ALo(47,"async"),t.qZA(),t.TgZ(48,"div",17)(49,"div",18),t._UZ(50,"router-outlet"),t.qZA()()()()()}2&u&&(t.ekj("example-is-mobile",m.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(15,L)),t.xp6(6),t.Oqu(m.theme.darkMode?"light_mode":"dark_mode"),t.xp6(2),t.Q6J("opened",!m.mobileQuery.matches)("mode",m.mobileQuery.matches?"over":"side")("fixedInViewport",m.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(16,w)),t.xp6(5),t.Q6J("routerLink",t.DdM(17,A)),t.xp6(5),t.Q6J("routerLink",t.DdM(18,I)),t.xp6(5),t.Q6J("routerLink",t.DdM(19,R)),t.xp6(6),t.Q6J("routerLink",t.DdM(20,P)),t.xp6(7),t.Q6J("ngIf",t.lcZ(47,13,m.spinnerService.visibility)))},dependencies:[d.lC,d.rH,d.Od,i.O5,e.JX,e.TM,e.Rh,n.Hw,r.Ye,s.eB,b.U,b.oh,U.X2,b.ap,b.Sc,k.d,O.eI,S.Kd,C.xw,C.Wh,C.yH,i.Ov],styles:[".navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{z-index:2}.navbar-brand[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.navbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;inset:0}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.navbar-sidenav-container[_ngcontent-%COMP%]{flex:1}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}mat-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:1px solid #eee}.progress-bar-container[_ngcontent-%COMP%]{height:5px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}"]}),f})()},5861:(y,p,a)=>{function o(v,h,g,i,l,d,e){try{var n=v[d](e),r=n.value}catch(s){return void g(s)}n.done?h(r):Promise.resolve(r).then(i,l)}function t(v){return function(){var h=this,g=arguments;return new Promise(function(i,l){var d=v.apply(h,g);function e(r){o(d,i,l,e,n,"next",r)}function n(r){o(d,i,l,e,n,"throw",r)}e(void 0)})}}a.d(p,{Z:()=>t})}}]);