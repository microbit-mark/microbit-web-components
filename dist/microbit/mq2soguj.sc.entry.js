import{a as t}from"./chunk-3d8ed500.js";class e{constructor(){this.deviceInformation=void 0,this.disconnectedText="Disconnected",this.noInfo="No manufacturer name found"}render(){return this.deviceInformation?this.deviceInformation.manufacturer||this.noInfo:this.disconnectedText}static get is(){return"microbit-manufacturer"}static get properties(){return{deviceInformation:{type:"Any",attr:"device-information"},disconnectedText:{type:String,attr:"disconnected-text"},el:{elementRef:!0},noInfo:{type:String,attr:"no-info"}}}}t.injectProps(e,["deviceInformation"]);export{e as MicrobitManufacturer};