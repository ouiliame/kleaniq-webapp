webpackJsonp([3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(124),f=n(92),d=n(936),p=r(d),m=f.browserHistory,h=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return c.default.createElement(f.Router,{history:m},c.default.createElement(f.Route,{path:"/",component:p.default}))}}]),t}(u.Component);(0,s.render)(c.default.createElement(h,null),document.getElementById("root"))},647:function(e,t,n){t=e.exports=n(118)(),t.push([e.id,"#kiq-menu{position:relative;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px}#kiq-menu,#kiq-menu ul{display:-webkit-box;display:-ms-flexbox;display:flex}#kiq-menu ul{-ms-flex-pack:distribute;justify-content:space-around;list-style-type:none;padding:0}#kiq-menu li{padding-left:25px;padding-right:25px}#kiq-menu li:not(#kiq-menu-action):hover{opacity:.65;cursor:default}#kiq-menu-left #kiq-menu-logo{width:200px}#kiq-menu-center li{font-weight:bolder}#kiq-menu-dropdown-bg{position:absolute;top:0;left:0;height:1px;width:1px;background:#fff;opacity:0;box-shadow:0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1);border-radius:5px;z-index:1}#kiq-menu-dropdown-bg:before{content:'';position:absolute;border-style:solid;border-width:0 7px 11px;border-color:#fff transparent;display:block;width:0;margin-left:-7px;top:-11px;left:50%}#kiq-menu-content>div{position:absolute;left:0;top:0;padding:27px 27px 30px;opacity:0;visibility:hidden;-webkit-transition:opacity .2s,visibility .2s;transition:opacity .2s,visibility .2s}#kiq-menu-content>div.active{opacity:1;visibility:visible;z-index:2}#kiq-menu-right ul{-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},648:function(e,t,n){t=e.exports=n(118)(),t.push([e.id,"#kiq-site{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:100%}#kiq-site-triangles{position:absolute;z-index:-100;top:0;left:0;width:100%;height:100%}#kiq-site-header{margin-top:15px}#kiq-site-content{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}#kiq-site-footer{padding:15px;margin:15px;background-color:#fff;text-align:center}",""])},929:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(74),f=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return c.default.createElement(s.Modal,{dimmer:"blurring",trigger:c.default.createElement("li",null,c.default.createElement(s.Button,null,"Sign In"))},c.default.createElement(s.Grid,{columns:2},c.default.createElement(s.Grid.Column,null,c.default.createElement(s.Segment,{basic:!0,padded:"very"},c.default.createElement(s.Form,null,c.default.createElement(s.Form.Field,null,c.default.createElement("label",null,"User ID"),c.default.createElement(s.Input,{icon:"users",iconPosition:"left",placeholder:"User ID"})),c.default.createElement(s.Form.Field,null,c.default.createElement("label",null,"Password"),c.default.createElement(s.Input,{icon:"lock",type:"password",iconPosition:"left",placeholder:"Password"})),c.default.createElement(s.Button,{primary:!0,fluid:!0},"Login"),c.default.createElement("br",null),c.default.createElement(s.Button,{fluid:!0,disabled:!0},"I can't log in")))),c.default.createElement(s.Grid.Column,null,c.default.createElement("div",{style:{padding:25,paddingLeft:0}},c.default.createElement(s.Header,{as:"h2"},c.default.createElement(s.Header.Content,null,"No account? Sign up today.",c.default.createElement(s.Header.Subheader,null,"Join the world's most advanced kitchen network"))),c.default.createElement(s.Form,null,c.default.createElement(s.Form.Field,null,c.default.createElement("label",null,"Your Name"),c.default.createElement(s.Input,{icon:"user",iconPosition:"left",placeholder:"Your Name"})),c.default.createElement(s.Form.Field,null,c.default.createElement("label",null,"Phone Number"),c.default.createElement(s.Input,{icon:"call",iconPosition:"left",placeholder:"Phone Number"})),c.default.createElement(s.Form.Field,null,c.default.createElement("label",null,"Establishment Address"),c.default.createElement(s.Input,{icon:"marker",iconPosition:"left",placeholder:"Establishment"})),c.default.createElement(s.Button,{primary:!0,fluid:!0},"Request a demo"),c.default.createElement("br",null))))))}}]),t}(u.Component);t.default=f},930:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(57),d=r(f),p=n(295),m=n(74),h=n(929),b=r(h),y=n(934);n(1050);var g=n(138),v=r(g),E=function(e){return 0!=(0,v.default)(e+":hover").length},w=(0,d.default)(l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1,selectedItem:"",bgWidth:0,bgHeight:0,bgX:0,bgY:0},n}return o(t,e),u(t,[{key:"_enter",value:function(e){(0,v.default)("#kiq-menu-content > div").removeClass("active");var t=this._getMenuDimensions(e),n=t.width,r=t.height,a=this._getMenuItemCoords(e),i=a.top,o=a.left;this.setState({isOpen:!0,selectedItem:e,bgWidth:n,bgHeight:r,bgX:o,bgY:i});var l=(0,v.default)("#kiq-menu-content ."+e);l.addClass("active").css({transform:"translate3d("+o+"px, "+i+"px, 0px)"})}},{key:"_leave",value:function(){var e=this;setTimeout(function(){E("#kiq-menu-center ul")||E("#kiq-menu-content ."+e.state.selectedItem)||(e.setState({isOpen:!1}),(0,v.default)("#kiq-menu-content > div").removeClass("active"))},300)}},{key:"_getMenuDimensions",value:function(e){var t=(0,v.default)("#kiq-menu-content ."+e),n=[t.innerHeight(),t.innerWidth()],r=n[0],a=n[1];return{width:a,height:r}}},{key:"_getMenuItemCoords",value:function(e){var t=(0,v.default)("#kiq-menu-item-"+e),n=(0,v.default)("#kiq-menu-content ."+e);return{top:t.offset().top+40,left:t.offset().left+t.innerWidth()/2-n.innerWidth()/2}}},{key:"_makeBackground",value:function(e){var t=e.X,n=e.Y,r=e.width,a=e.height,i=e.opacity;return s.default.createElement("div",{id:"kiq-menu-dropdown-bg",style:{transform:"translate3d("+t+"px, "+n+"px, 0px)",width:r,height:a,opacity:i}})}},{key:"render",value:function(){var e=this,t=void 0;if(this.state.isOpen){var n=this._getMenuDimensions(this.state.selectedItem),r=n.width,a=n.height,i=this._getMenuItemCoords(this.state.selectedItem),o=i.top,l=i.left;t={X:(0,p.spring)(l),Y:(0,p.spring)(o),width:(0,p.spring)(r),height:(0,p.spring)(a),opacity:(0,p.spring)(1)}}else t={X:(0,p.spring)(this.state.bgX),Y:(0,p.spring)(this.state.bgY),width:(0,p.spring)(this.state.bgWidth),height:(0,p.spring)(this.state.bgHeight),opacity:(0,p.spring)(0)};return s.default.createElement("div",null,s.default.createElement(p.Motion,{style:t},function(t){return e._makeBackground(t)}),s.default.createElement("div",{id:"kiq-menu-content"},s.default.createElement(y.SolutionsMenu,{onMouseLeave:this._leave}),s.default.createElement(y.EnvironmentMenu,{onMouseLeave:this._leave}),s.default.createElement(y.CompanyMenu,{onMouseLeave:this._leave})),s.default.createElement(m.Container,{id:"kiq-menu"},s.default.createElement("div",{id:"kiq-menu-left"},s.default.createElement("object",{className:"hvr-grow",id:"kiq-menu-logo",type:"image/svg+xml",data:"/images/logo.svg"})),s.default.createElement("div",{id:"kiq-menu-center"}),s.default.createElement("div",{id:"kiq-menu-right"},s.default.createElement("ul",null,s.default.createElement("li",null,"Help"),s.default.createElement(b.default,null)))))}}]),t}(c.Component))||l;t.default=w},931:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(74),d={width:500},p=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",l({className:"company",style:d},this.props),s.default.createElement(f.List,null,s.default.createElement(f.List.Item,null,s.default.createElement(f.Image,{avatar:!0,src:"http://semantic-ui.com/images/avatar2/small/rachel.png"}),s.default.createElement(f.List.Content,null,s.default.createElement(f.List.Header,{as:"a"},"Rachel"),s.default.createElement(f.List.Description,null,"Last seen watching ",s.default.createElement("a",null,s.default.createElement("b",null,"Arrested Development"))," just now."))),s.default.createElement(f.List.Item,null,s.default.createElement(f.Image,{avatar:!0,src:"http://semantic-ui.com/images/avatar2/small/lindsay.png"}),s.default.createElement(f.List.Content,null,s.default.createElement(f.List.Header,{as:"a"},"Lindsay"),s.default.createElement(f.List.Description,null,"Last seen watching ",s.default.createElement("a",null,s.default.createElement("b",null,"Bob's Burgers"))," 10 hours ago."))),s.default.createElement(f.List.Item,null,s.default.createElement(f.Image,{avatar:!0,src:"http://semantic-ui.com/images/avatar2/small/matthew.png"}),s.default.createElement(f.List.Content,null,s.default.createElement(f.List.Header,{as:"a"},"Matthew"),s.default.createElement(f.List.Description,null,"Last seen watching ",s.default.createElement("a",null,s.default.createElement("b",null,"The Godfather Part 2"))," yesterday."))),s.default.createElement(f.List.Item,null,s.default.createElement(f.Image,{avatar:!0,src:"http://semantic-ui.com/images/avatar/small/jenny.jpg"}),s.default.createElement(f.List.Content,null,s.default.createElement(f.List.Header,{as:"a"},"Jenny Hess"),s.default.createElement(f.List.Description,null,"Last seen watching ",s.default.createElement("a",null,s.default.createElement("b",null,"Twin Peaks"))," 3 days ago."))),s.default.createElement(f.List.Item,null,s.default.createElement(f.Image,{avatar:!0,src:"http://semantic-ui.com/images/avatar/small/veronika.jpg"}),s.default.createElement(f.List.Content,null,s.default.createElement(f.List.Header,{as:"a"},"Veronika Ossi"),s.default.createElement(f.List.Description,null,"Has not watched anything recently")))))}}]),t}(c.Component);t.default=p},932:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f={width:647},d=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",l({className:"environment",style:f},this.props),s.default.createElement("h4",null,"FOR RESTAURANTS"),s.default.createElement("h4",null,"FOR PROVIDERS"))}}]),t}(c.Component);t.default=d},933:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(74),d={width:550},p=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",l({className:"solutions",style:d},this.props),s.default.createElement(f.Header,{as:"h3",image:"http://semantic-ui.com/images/icons/school.png",content:"For Restaurant Managers",subheader:"Manage your account settings and set email preferences"}),s.default.createElement(f.Header,{as:"h3",image:"http://semantic-ui.com/images/icons/school.png",content:"For Grease Service Providers",subheader:"Manage your account settings and set email preferences"}),s.default.createElement(f.Header,{as:"h3",image:"http://semantic-ui.com/images/icons/school.png",content:"For Biofuel Refiners and Distributors",subheader:"Manage your account settings and set email preferences"}))}}]),t}(c.Component);t.default=p},934:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyMenu=t.EnvironmentMenu=t.SolutionsMenu=void 0;var a=n(933),i=r(a),o=n(932),l=r(o),u=n(931),c=r(u);t.SolutionsMenu=i.default,t.EnvironmentMenu=l.default,t.CompanyMenu=c.default},935:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Navigation=void 0;var a=n(930),i=r(a);t.Navigation=i.default},936:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(935),f=n(74);n(1051);var d=n(601),p=r(d),m=n(138),h=r(m),b=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.trianglify=p.default,n.state={pattern:null},n}return o(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;(0,h.default)(window).resize(function(){return e.updateTriangles()}),this.updateTriangles()}},{key:"updateTriangles",value:function(){this.pattern=this.trianglify({width:window.innerWidth,height:window.innerHeight,cell_size:167,x_colors:"YlGnBu"}),this.pattern.canvas((0,h.default)("#kiq-site-triangles")[0])}},{key:"render",value:function(){return c.default.createElement("div",{id:"kiq-site"},c.default.createElement("div",{id:"kiq-site-header"},c.default.createElement(s.Navigation,null)),c.default.createElement("div",{id:"kiq-site-content"},c.default.createElement("canvas",{id:"kiq-site-triangles"}),c.default.createElement(f.Container,{id:"kiq-site-container"})),c.default.createElement("div",{id:"kiq-site-footer"},"© Urban",c.default.createElement("a",{style:{color:"black"},href:"admin/"},"X")," Renewables Group 2016"))}}]),t}(u.Component);t.default=b},1050:[1095,647],1051:[1095,648],1095:function(e,t,n,r){var a=n(r);"string"==typeof a&&(a=[[e.id,a,""]]),n(127)(a,{}),a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=static.js.map