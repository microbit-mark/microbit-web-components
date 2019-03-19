const e=window.microbit.h;import{a as t}from"./chunk-3d8ed500.js";class r{constructor(){this.services=void 0,this.bearing=0}async watchHandler(){if(!this.services||!this.services.magnetometerService)return;const e=this.services.magnetometerService;this.bearing=await e.getMagnetometerBearing(),e.addEventListener("magnetometerbearingchanged",e=>this.bearing=e.detail)}render(){return e("span",{style:{position:"absolute",transform:`rotate(${this.bearing}deg)`}},e("slot",null))}static get is(){return"microbit-compass"}static get properties(){return{bearing:{state:!0},el:{elementRef:!0},services:{type:"Any",attr:"services",watchCallbacks:["watchHandler"]}}}}t.injectProps(r,["services"]);export{r as MicrobitCompass};