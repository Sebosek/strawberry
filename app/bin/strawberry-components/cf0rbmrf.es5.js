/*! Built with http://stenciljs.com */
StrawberryComponents.loadBundle("cf0rbmrf",["exports"],function(t){var e=window.StrawberryComponents.h,a=function(){function t(){this.state="default",this.initials="",this._map={default:"avatar",blocked:"avatar avatar--blocked",running:"avatar avatar--blocked avatar--blocked--running"}}return t.prototype.watchState=function(t){if(!this._map[t])throw Error("Invalid value '"+t+"' of [state] attribute in <timer-avatar> element");"running"!==t?this._timer&&clearTimeout(this._timer):this._timer=setTimeout(this.timeoutCallback.bind(this),1e5)},t.prototype.render=function(){return e("div",{class:this._map[this.state],"data-initials":this.initials})},t.prototype.timeoutCallback=function(){this.state="default",this.elapsed.emit(this.initials)},Object.defineProperty(t,"is",{get:function(){return"strawberry-avatar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{initials:{type:String,attr:"initials",reflectToAttr:!0},state:{type:String,attr:"state",reflectToAttr:!0,mutable:!0,watchCallbacks:["watchState"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"elapsed",method:"elapsed",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:inline-block}.avatar{background:var(--strawberry-color--primary--light,#ffdfdf);border-radius:50%;color:var(--strawberry-color--primary,#fb929e);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;height:100px;position:relative;width:100px}.avatar::after{-ms-flex-item-align:center;align-self:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--strawberry-color--primary--light,#ffdfdf);border-radius:50%;color:currentColor;content:attr(data-initials);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:32px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:calc(100% - 12px);height:calc(100% - 12px)}.avatar--blocked{background:var(--strawberry-color--noise--light,#f6f9ff) -webkit-gradient(linear,left top,right top,color-stop(50%,transparent),color-stop(0,currentColor));background:var(--strawberry-color--noise--light,#f6f9ff) linear-gradient(to right,transparent 50%,currentColor 0);color:var(--strawberry-color--noise--dark,#d6d6d6)}.avatar--blocked::before{content:'';margin-left:50%;height:100%;width:50%;background-color:inherit;border-radius:0 100% 100% 0/50%;-webkit-transform:rotate(0turn);transform:rotate(0turn);-webkit-transform-origin:left;transform-origin:left;-webkit-animation:50s linear 2 forwards paused spin,100s step-end forwards paused color;animation:50s linear 2 forwards paused spin,100s step-end forwards paused color}.avatar--blocked::after{background:var(--strawberry-color--noise--light,#f6f9ff);color:currentColor}.avatar--blocked--running::before{-webkit-animation-play-state:running;animation-play-state:running}\@-webkit-keyframes color{100%,50%{background-color:currentColor}}\@keyframes color{100%,50%{background-color:currentColor}}\@-webkit-keyframes spin{to{-webkit-transform:rotate(.5turn);transform:rotate(.5turn)}}\@keyframes spin{to{-webkit-transform:rotate(.5turn);transform:rotate(.5turn)}}"},enumerable:!0,configurable:!0}),t}();t.StrawberryAvatar=a,Object.defineProperty(t,"__esModule",{value:!0})});