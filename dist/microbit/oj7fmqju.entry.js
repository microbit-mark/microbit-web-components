const s=window.microbit.h;import{a as t}from"./chunk-3d8ed500.js";class e{constructor(){this.services=void 0,this.sensitivity=1,this.frequency=20,this.stillClass="microbit-still",this.movedClass="microbit-moved",this.className=this.stillClass}async watchHandler(){if(!this.services||!this.services.accelerometerService)return void(this.className=this.stillClass);const s=this.services.accelerometerService;await s.setAccelerometerPeriod(this.frequency);const t=await s.readAccelerometerData();this.setClassName(t),s.addEventListener("accelerometerdatachanged",s=>this.setClassName(s.detail))}render(){return s("span",{class:this.className},s("slot",null))}setClassName(s){console.log(this.sensitivity),this.className=Math.abs(s.x)>this.sensitivity||Math.abs(s.y)>this.sensitivity||Math.abs(s.z)>this.sensitivity?this.movedClass:this.stillClass}static get is(){return"microbit-state-movement"}static get properties(){return{className:{state:!0},el:{elementRef:!0},frequency:{type:Number,attr:"frequency"},movedClass:{type:String,attr:"moved-class"},sensitivity:{type:Number,attr:"sensitivity"},services:{type:"Any",attr:"services",watchCallbacks:["watchHandler"]},stillClass:{type:String,attr:"still-class"}}}}t.injectProps(e,["services"]);export{e as MicrobitStateMovement};