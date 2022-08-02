"use strict";(self.webpackChunkblockcore_status=self.webpackChunkblockcore_status||[]).push([[97],{5384:(_,g,a)=>{a.d(g,{s:()=>v});var o=a(5861),t=a(5e3),m=a(520);class d extends Error{constructor(h,e,n){super(n),Object.setPrototypeOf(this,new.target.prototype),this.name=d.name,this.url=e,this.code=h}}let v=(()=>{class s{constructor(e){this.http=e}download(e,n={}){return(0,o.Z)(function*(){const r=yield fetch(e,n),i=yield r.json();if(200!==r.status)throw i&&i.status?new d(i.status,e,JSON.stringify(i)):new d(r.status,e,r.statusText);return i})()}downloadRelative(e,n={}){var r=this;return(0,o.Z)(function*(){return r.download(r.baseUrl+e,n)})()}request(e,n={}){return(0,o.Z)(function*(){return yield fetch(e,n)})()}requestRelative(e,n={}){var r=this;return(0,o.Z)(function*(){return yield fetch(r.baseUrl+e,n)})()}loadSetup(e){var n=this;return(0,o.Z)(function*(){let r=null;r=yield n.download("https://chains.blockcore.net/chains/"+e.toUpperCase()+".json"),n.baseUrl=r.Explorer.Indexer.ApiUrl,n.baseUrl.endsWith("/")&&(n.baseUrl=n.baseUrl.substring(0,n.baseUrl.length-1)),n.resetUrl=n.baseUrl;const i=localStorage.getItem(e+"-url");return null!=i&&(n.baseUrl=i,console.log("storage baseUrl",n.baseUrl)),r})()}getBaseUrl(){var e=this;return(0,o.Z)(function*(){return e.baseUrl})()}setBaseUrl(e,n){var r=this;return(0,o.Z)(function*(){r.baseUrl=n,localStorage.setItem(e+"-url",n)})()}resetBaseUrl(e){var n=this;return(0,o.Z)(function*(){localStorage.removeItem(e+"-url"),n.baseUrl=n.resetUrl})()}loadGithub(){var e=this;return(0,o.Z)(function*(){return e.download("https://status.seniorblockchain.io/github.json")})()}loadChains(e){var n=this;return(0,o.Z)(function*(){return n.download(`https://chains.blockcore.net/CHAINS-${e}.json`)})()}loadIndexers(){var e=this;return(0,o.Z)(function*(){null==e.dnsendpoints&&(e.dnsendpoints=yield e.download("https://chains.blockcore.net/services/DNS.json")),e.endpoints=[];for(let n=0;n<e.dnsendpoints.length;n++){const r=e.dnsendpoints[n];try{const i=yield e.download(r.url+"/api/dns/services/service/Indexer");i.url=r.url,e.endpoints.push(i)}catch(i){e.errorMessage="{"===i.message[0]?JSON.parse(i.message):i,console.log(i)}}return e.endpoints})()}getInfo(){var e=this;return(0,o.Z)(function*(){return e.downloadRelative("/stats/info")})()}getLastBlock(e=!0){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/block/latest")})()}getBlocks(e,n){var r=this;return(0,o.Z)(function*(){return r.downloadRelative("/query/block?offset="+e+"&limit="+n)})()}getBlocksRequest(e,n){var r=this;return(0,o.Z)(function*(){return r.downloadRelative("/query/block?offset="+e+"&limit="+n)})()}getBlockByHeight(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/block/index/"+e)})()}getBlockByHash(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/block/"+e)})()}getTransaction(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/transaction/"+e)})()}getAddress(e,n=!1){var r=this;return(0,o.Z)(function*(){return r.downloadRelative("/query/address/"+e+(n?"/transactions":""))})()}getPeers(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/stats/peers/"+e.toISOString())})()}getRichlist(e,n){var r=this;return(0,o.Z)(function*(){return r.downloadRelative("/insight/richlist?offset="+e+"&limit="+n)})()}getSupply(){var e=this;return(0,o.Z)(function*(){return e.downloadRelative("/insight/supply")})()}getWallets(){var e=this;return(0,o.Z)(function*(){return e.downloadRelative("/insight/wallets")})()}getContractTransaction(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/cirrus/contract/transaction/"+e)})()}getContractAddress(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/cirrus/contract/"+e)})()}getContractCode(e){var n=this;return(0,o.Z)(function*(){return n.downloadRelative("/query/cirrus/contract/code/"+e)})()}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(m.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},1652:(_,g,a)=>{a.d(g,{U:()=>v});var o=a(5861),t=a(1135),m=a(5e3),d=a(5384);let v=(()=>{class s{constructor(e){this.api=e,this.initialized=!1,this.currentChainSubjectBehavior=new t.X("BLOCKCORE"),this.currentChain$=this.currentChainSubjectBehavior.asObservable()}get isCurrentRootChain(){return"blockcore"===this.current||"BLOCKCORE"===this.current}get current(){return this.currentChainSubjectBehavior.getValue()}set current(e){this.currentChainSubjectBehavior.next(e)}getIndexers(){var e=this;return(0,o.Z)(function*(){const n=yield e.api.loadIndexers();e.indexers=n})()}getGithubData(){var e=this;return(0,o.Z)(function*(){const n=yield e.api.loadGithub();e.github=n})()}getChains(e){var n=this;return(0,o.Z)(function*(){const r=yield n.api.loadChains(e);n.chains=r})()}setChain(e){var n=this;return(0,o.Z)(function*(){var r,i;if(n.current===e)return void(n.current=e);const p=yield n.api.loadSetup(e);return n.data=p,n.Chain=n.data.Chain,n.Network=n.data.Network,n.Indexer=n.data.Indexer,n.current=e,!(null===(r=n.Chain)||void 0===r)&&r.Color&&document.documentElement.style.setProperty("--accent",null===(i=n.Chain)||void 0===i?void 0:i.Color),null})()}}return s.\u0275fac=function(e){return new(e||s)(m.LFG(d.s))},s.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},6002:(_,g,a)=>{a.d(g,{$:()=>P});var o=a(727),t=a(5e3),m=a(5113),d=a(4649);let v=(()=>{class u{get darkMode(){if(localStorage.getItem("theme")){if("dark"===localStorage.getItem("theme"))return!0}else if(window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1}set darkMode(c){c?localStorage.setItem("theme","dark"):localStorage.setItem("theme","white"),this.updateMode()}init(){this.updateMode()}updateMode(){this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})();var s=a(9808);let h=(()=>{class u{constructor(c){this.document=c}disableRightClick(){this.document.addEventListener("contextmenu",c=>{var l=c.target;"INPUT"!=l.tagName&&"TEXTAREA"!=l.tagName&&c.preventDefault()},!1)}}return u.\u0275fac=function(c){return new(c||u)(t.LFG(s.K0))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})();var e=a(6763),n=a(2638),r=a(5245),i=a(4594),p=a(7423),b=a(4623),x=a(508),k=a(4834),U=a(5899),T=a(7238),y=a(7093);function O(u,f){1&u&&t._UZ(0,"mat-progress-bar",19)}const S=function(){return["/"]},L=function(){return["/dashboard"]},w=function(){return["/github"]},A=function(){return["/chains"]},R=function(){return["/indexers"]},I=function(){return["/about"]};let P=(()=>{class u{constructor(c,l,Z,C,M){this.changeDetectorRef=c,this.media=l,this.spinnerService=Z,this.theme=C,this.rightClickDisable=M,this.showSpinner=!1,this.userName="",this.isAdmin=!1,this.autoLogoutSubscription=new o.w0,this.mobileQuery=this.media.matchMedia("(max-width: 1000px)"),this._mobileQueryListener=()=>c.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener),this.rightClickDisable.disableRightClick()}ngOnInit(){this.theme.init()}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener),this.autoLogoutSubscription.unsubscribe()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(t.sBO),t.Y36(m.vx),t.Y36(d.V),t.Y36(v),t.Y36(h))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-layout"]],decls:51,vars:21,consts:[[1,"navbar-container"],["color","primary",1,"navbar"],["mat-icon-button","",3,"click"],["matTooltip","Home",1,"navbar-brand",3,"routerLink"],[1,"navbar-spacer"],["mat-icon-button","",1,"mat-icon-button",3,"click"],["aria-label","Menu",1,"material-icons"],[1,"navbar-sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"opened","mode","fixedInViewport"],["snav",""],["mat-subheader",""],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["mat-list-icon",""],["mat-line",""],[1,"sidenav-content"],[1,"progress-bar-container"],["color","accent","mode","indeterminate",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["color","accent","mode","indeterminate"]],template:function(c,l){if(1&c){const Z=t.EpF();t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),t.NdJ("click",function(){t.CHM(Z);const M=t.MAs(14);return t.KtG(M.toggle())}),t.TgZ(3,"mat-icon"),t._uU(4,"menu"),t.qZA()(),t.TgZ(5,"a",3)(6,"h1"),t._uU(7," Blockcore Status "),t.qZA()(),t._UZ(8,"span",4),t.TgZ(9,"button",5),t.NdJ("click",function(){return l.theme.darkMode=!l.theme.darkMode}),t.TgZ(10,"mat-icon",6),t._uU(11),t.qZA()()(),t.TgZ(12,"mat-sidenav-container",7)(13,"mat-sidenav",8,9)(15,"mat-nav-list")(16,"h3",10),t._uU(17,"Home"),t.qZA(),t.TgZ(18,"a",11)(19,"mat-icon",12),t._uU(20," dashboard "),t.qZA(),t.TgZ(21,"p",13),t._uU(22," Dashboard "),t.qZA()(),t.TgZ(23,"a",11)(24,"mat-icon",12),t._uU(25," business "),t.qZA(),t.TgZ(26,"p",13),t._uU(27," Github "),t.qZA()(),t.TgZ(28,"a",11)(29,"mat-icon",12),t._uU(30," widgets "),t.qZA(),t.TgZ(31,"p",13),t._uU(32," Chains "),t.qZA()(),t.TgZ(33,"a",11)(34,"mat-icon",12),t._uU(35," list "),t.qZA(),t.TgZ(36,"p",13),t._uU(37," Indexers "),t.qZA()(),t._UZ(38,"mat-divider"),t.TgZ(39,"a",11)(40,"mat-icon",12),t._uU(41," info_outline "),t.qZA(),t.TgZ(42,"p",13),t._uU(43," About "),t.qZA()()()(),t.TgZ(44,"mat-sidenav-content",14)(45,"div",15),t.YNc(46,O,1,0,"mat-progress-bar",16),t.ALo(47,"async"),t.qZA(),t.TgZ(48,"div",17)(49,"div",18),t._UZ(50,"router-outlet"),t.qZA()()()()()}2&c&&(t.ekj("example-is-mobile",l.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(15,S)),t.xp6(6),t.Oqu(l.theme.darkMode?"light_mode":"dark_mode"),t.xp6(2),t.Q6J("opened",!l.mobileQuery.matches)("mode",l.mobileQuery.matches?"over":"side")("fixedInViewport",l.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(16,L)),t.xp6(5),t.Q6J("routerLink",t.DdM(17,w)),t.xp6(5),t.Q6J("routerLink",t.DdM(18,A)),t.xp6(5),t.Q6J("routerLink",t.DdM(19,R)),t.xp6(6),t.Q6J("routerLink",t.DdM(20,I)),t.xp6(7),t.Q6J("ngIf",t.lcZ(47,13,l.spinnerService.visibility)))},dependencies:[e.lC,e.yS,e.Od,s.O5,n.JX,n.TM,n.Rh,r.Hw,i.Ye,p.lW,b.Hk,b.Tg,x.X2,b.Nh,b.gs,k.d,U.pW,T.gM,y.xw,y.Wh,y.yH,s.Ov],styles:[".navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{z-index:2}.navbar-brand[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.navbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.navbar-sidenav-container[_ngcontent-%COMP%]{flex:1}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}mat-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:1px solid #eee}.progress-bar-container[_ngcontent-%COMP%]{height:5px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}"]}),u})()},5861:(_,g,a)=>{function o(m,d,v,s,h,e,n){try{var r=m[e](n),i=r.value}catch(p){return void v(p)}r.done?d(i):Promise.resolve(i).then(s,h)}function t(m){return function(){var d=this,v=arguments;return new Promise(function(s,h){var e=m.apply(d,v);function n(i){o(e,s,h,n,r,"next",i)}function r(i){o(e,s,h,n,r,"throw",i)}n(void 0)})}}a.d(g,{Z:()=>t})}}]);