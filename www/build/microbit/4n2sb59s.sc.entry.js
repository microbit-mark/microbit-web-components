const e=window.microbit.h;import{a as t}from"./chunk-d2120d7f.js";class c{constructor(){this.device=void 0,this.connectedText="Connected to ${device}",this.disconnectedText="Disconnected"}render(){return e("div",null,this.getText())}getText(){return this.device?this.connectedText.replace("${device}",this.device.name):this.disconnectedText}static get is(){return"microbit-status"}static get properties(){return{connectedText:{type:String,attr:"connected-text"},device:{type:"Any",attr:"device"},disconnectedText:{type:String,attr:"disconnected-text"},el:{elementRef:!0}}}}t.injectProps(c,["device","setDevice"]);export{c as MicrobitStatus};