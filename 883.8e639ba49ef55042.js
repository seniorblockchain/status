"use strict";(self.webpackChunkblockcore_status=self.webpackChunkblockcore_status||[]).push([[883],{4883:(F,l,i)=>{i.r(l),i.d(l,{ChainsModule:()=>T});var p=i(9808),d=i(6763),m=i(5861),t=i(5e3),u=i(1652);let g=(()=>{class n{constructor(o){this.setup=o}resolve(o,e){var s=this;return(0,m.Z)(function*(){yield s.setup.getChains("BLOCKCORE")})()}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(u.U))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=i(1271),r=i(6992);let f=(()=>{class n{constructor(o,e){this.dialogRef=o,this.data=e}ngOnInit(){}close(){this.dialogRef.close()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.so),t.Y36(r.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["network-modal"]],decls:8,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-raised-button","","color","accent",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1)(3,"p"),t._uU(4),t.qZA()(),t.TgZ(5,"div",2)(6,"button",3),t.NdJ("click",function(){return e.close()}),t._uU(7,"Close"),t.qZA()()),2&o&&(t.xp6(1),t.Oqu(e.data.symbol),t.xp6(3),t.hij("progress: ",e.data.progress,""))},encapsulation:2}),n})();var C=i(5384),c=i(9224);function v(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"mat-card",2)(1,"mat-card-header"),t._UZ(2,"img",3),t.TgZ(3,"mat-card-title",4),t.NdJ("click",function(){const M=t.CHM(o).$implicit,k=t.oxw();return t.KtG(k.openDialog(M.symbol))}),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA()()()}if(2&n){const o=a.$implicit;t.xp6(2),t.s9C("src",o.icon,t.LSH),t.s9C("alt",o.name),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(o.symbol)}}const y=[{path:"",component:h.$,children:[{path:"",component:(()=>{class n{constructor(o,e,s){this.api=o,this.setup=e,this.dialog=s}ngOnInit(){}openDialog(o){var e=this;return(0,m.Z)(function*(){e.chaininfo=yield e.api.download("https://"+o+".indexer.blockcore.net/api/stats"),e.dialog.open(f,{width:"250px",data:{progress:e.chaininfo.progress,symbol:e.chaininfo.symbol}})})()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(C.s),t.Y36(u.U),t.Y36(r.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-chains-page"]],decls:2,vars:1,consts:[[1,"flex-container"],["class","flex-item",4,"ngFor","ngForOf"],[1,"flex-item"],["mat-card-avatar","",3,"src","alt"],[1,"pointer",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,v,7,4,"mat-card",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",e.setup.chains))},dependencies:[p.sg,c.a8,c.dk,c.n5,c.$j,c.kc],styles:[".flex-container[_ngcontent-%COMP%]{margin-top:15px;display:flex;flex-wrap:wrap;gap:15px}.flex-item[_ngcontent-%COMP%]{flex:40%}@media (max-width: 800px){.flex-item[_ngcontent-%COMP%]{flex:100%}}.pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),n})(),resolve:{data:g}}]}];let Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(y),d.Bz]}),n})();var O=i(4466);let T=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,O.m,Z]}),n})()}}]);