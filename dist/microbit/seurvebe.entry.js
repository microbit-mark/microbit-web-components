const s=window.microbit.h;import{a as e}from"./chunk-3d8ed500.js";class t{constructor(){this.services=void 0,this.releaseClass="microbit-release",this.shortPressClass="microbit-short-press",this.longPressClass="microbit-long-press",this.className=this.releaseClass}async watchHandler(){if(!this.services||!this.services.buttonService)return void(this.className=this.releaseClass);const s=this.services.buttonService,e=await s.readButtonAState();this.setClassName(e),s.addEventListener("buttonastatechanged",s=>this.setClassName(s.detail))}render(){return s("span",{class:this.className},s("slot",null))}setClassName(s){this.className=1===s?this.shortPressClass:2===s?this.longPressClass:this.releaseClass}static get is(){return"microbit-state-button-a"}static get properties(){return{className:{state:!0},el:{elementRef:!0},longPressClass:{type:String,attr:"long-press-class"},releaseClass:{type:String,attr:"release-class"},services:{type:"Any",attr:"services",watchCallbacks:["watchHandler"]},shortPressClass:{type:String,attr:"short-press-class"}}}}e.injectProps(t,["services"]);export{t as MicrobitStateButtonA};