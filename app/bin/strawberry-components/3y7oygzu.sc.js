/*! Built with http://stenciljs.com */
const{h:t}=window.StrawberryComponents;class a{constructor(){this.state="default",this.initials="",this._map={default:"avatar",running:"avatar avatar--blocked avatar--blocked--running"}}watchState(t,a){if(!this._map[t])throw Error(`Invalid value '${t}' of [state] attribute in <strawberry-avatar> element`);"default"!==a||"running"!==t?"default"===t&&this.clean():this.run()}componentWillLoad(){"running"===this.state&&this.run()}render(){return t("div",{class:this._map[this.state],"data-initials":this.initials})}timeoutCallback(){this.state="default",this.elapsed.emit(this.initials),this.clean()}run(){window&&(this._timer=window.setTimeout(this.timeoutCallback.bind(this),1e5))}clean(){window&&window.clearTimeout(this._timer)}static get is(){return"strawberry-avatar"}static get encapsulation(){return"shadow"}static get properties(){return{initials:{type:String,attr:"initials",reflectToAttr:!0},state:{type:String,attr:"state",reflectToAttr:!0,mutable:!0,watchCallbacks:["watchState"]}}}static get events(){return[{name:"elapsed",method:"elapsed",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-strawberry-avatar-h{display:inline-block}.avatar.sc-strawberry-avatar{background:var(--strawberry-color--primary--light,#ffdfdf);border-radius:50%;color:var(--strawberry-color--primary,#fb929e);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;height:100px;position:relative;width:100px}.avatar.sc-strawberry-avatar::after{-ms-flex-item-align:center;align-self:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--strawberry-color--primary--light,#ffdfdf);border-radius:50%;color:currentColor;content:attr(data-initials);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:32px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:calc(100% - 12px);height:calc(100% - 12px)}.avatar--blocked.sc-strawberry-avatar{background:var(--strawberry-color--noise--light,#f6f9ff) -webkit-gradient(linear,left top,right top,color-stop(50%,transparent),color-stop(0,currentColor));background:var(--strawberry-color--noise--light,#f6f9ff) linear-gradient(to right,transparent 50%,currentColor 0);color:var(--strawberry-color--noise--dark,#d6d6d6)}.avatar--blocked.sc-strawberry-avatar::before{content:'';margin-left:50%;height:100%;width:50%;background-color:inherit;border-radius:0 100% 100% 0/50%;-webkit-transform:rotate(0turn);transform:rotate(0turn);-webkit-transform-origin:left;transform-origin:left;-webkit-animation:50s linear 2 forwards paused spin,100s step-end forwards paused color;animation:50s linear 2 forwards paused spin,100s step-end forwards paused color}.avatar--blocked.sc-strawberry-avatar::after{background:var(--strawberry-color--noise--light,#f6f9ff);color:currentColor}.avatar--blocked--running.sc-strawberry-avatar::before{-webkit-animation-play-state:running;animation-play-state:running}\@-webkit-keyframes color{100%,50%{background-color:currentColor}}\@keyframes color{100%,50%{background-color:currentColor}}\@-webkit-keyframes spin{to{-webkit-transform:rotate(.5turn);transform:rotate(.5turn)}}\@keyframes spin{to{-webkit-transform:rotate(.5turn);transform:rotate(.5turn)}}"}}export{a as StrawberryAvatar};