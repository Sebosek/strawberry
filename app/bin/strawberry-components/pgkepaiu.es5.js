/*! Built with http://stenciljs.com */
StrawberryComponents.loadBundle("pgkepaiu",["exports"],function(e){var t=window.StrawberryComponents.h,i=function(){function e(){this.switched=!1}return e.prototype.watchSwitched=function(){this.el.classList.toggle("switcher--switched",this.switched),this.el.classList.toggle("switcher--play-switched",this.switched),this.el.classList.toggle("switcher--play-unswitched",!this.switched),this.changed.emit(this.switched)},e.prototype.handleClick=function(){this.toggle()},e.prototype.componentDidLoad=function(){this.el.classList.toggle("switcher--switched",this.switched)},e.prototype.render=function(){var e=this;return t("div",{class:"switcher",ref:function(t){return e.el=t},onClick:this.handleClick.bind(this)})},e.prototype.toggle=function(){this.switched=!this.switched},Object.defineProperty(e,"is",{get:function(){return"strawberry-switcher"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{tabindex:0}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{switched:{type:Boolean,attr:"switched",reflectToAttr:!0,mutable:!0,watchCallbacks:["watchSwitched"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"changed",method:"changed",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block}:host(:focus){outline:0}.switcher{background:var(--strawberry-color--noise,#ebeff8);border-radius:14px;cursor:pointer;display:block;height:28px;position:relative;-webkit-transition:.3s;transition:.3s;width:48px}.switcher::after{background:var(--strawberry-color--white,#fff);border-radius:50%;content:'';display:inline-block;height:24px;left:2px;position:absolute;top:2px;width:24px}.switcher--switched{background:var(--strawberry-color--success,#79ca01)}.switcher--switched::after{left:22px}.switcher--play-switched::after{-webkit-animation:.3s linear forwards on;animation:.3s linear forwards on}.switcher--play-unswitched::after{-webkit-animation:.3s linear forwards off;animation:.3s linear forwards off}\@-webkit-keyframes on{0%{left:2px}50%{width:28px}100%{left:22px;width:24px}}\@keyframes on{0%{left:2px}50%{width:28px}100%{left:22px;width:24px}}\@-webkit-keyframes off{0%{left:22px}50%{width:28px}100%{left:2px;width:24px}}\@keyframes off{0%{left:22px}50%{width:28px}100%{left:2px;width:24px}}"},enumerable:!0,configurable:!0}),e}();e.StrawberrySwitcher=i,Object.defineProperty(e,"__esModule",{value:!0})});