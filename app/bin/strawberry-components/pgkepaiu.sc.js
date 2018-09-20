/*! Built with http://stenciljs.com */
const{h:t}=window.StrawberryComponents;class e{constructor(){this.switched=!1}watchSwitched(){this.el.classList.toggle("switcher--switched",this.switched),this.el.classList.toggle("switcher--play-switched",this.switched),this.el.classList.toggle("switcher--play-unswitched",!this.switched),this.changed.emit(this.switched)}handleClick(){this.toggle()}componentDidLoad(){this.el.classList.toggle("switcher--switched",this.switched)}render(){return t("div",{class:"switcher",ref:t=>this.el=t,onClick:this.handleClick.bind(this)})}toggle(){this.switched=!this.switched}static get is(){return"strawberry-switcher"}static get encapsulation(){return"shadow"}static get host(){return{tabindex:0}}static get properties(){return{switched:{type:Boolean,attr:"switched",reflectToAttr:!0,mutable:!0,watchCallbacks:["watchSwitched"]}}}static get events(){return[{name:"changed",method:"changed",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-strawberry-switcher-h{display:inline-block}.sc-strawberry-switcher-h:focus{outline:0}.switcher.sc-strawberry-switcher{background:var(--strawberry-color--noise,#ebeff8);border-radius:14px;cursor:pointer;display:block;height:28px;position:relative;-webkit-transition:.3s;transition:.3s;width:48px}.switcher.sc-strawberry-switcher::after{background:var(--strawberry-color--white,#fff);border-radius:50%;content:'';display:inline-block;height:24px;left:2px;position:absolute;top:2px;width:24px}.switcher--switched.sc-strawberry-switcher{background:var(--strawberry-color--success,#79ca01)}.switcher--switched.sc-strawberry-switcher::after{left:22px}.switcher--play-switched.sc-strawberry-switcher::after{-webkit-animation:.3s linear forwards on;animation:.3s linear forwards on}.switcher--play-unswitched.sc-strawberry-switcher::after{-webkit-animation:.3s linear forwards off;animation:.3s linear forwards off}\@-webkit-keyframes on{0%{left:2px}50%{width:28px}100%{left:22px;width:24px}}\@keyframes on{0%{left:2px}50%{width:28px}100%{left:22px;width:24px}}\@-webkit-keyframes off{0%{left:22px}50%{width:28px}100%{left:2px;width:24px}}\@keyframes off{0%{left:22px}50%{width:28px}100%{left:2px;width:24px}}"}}export{e as StrawberrySwitcher};