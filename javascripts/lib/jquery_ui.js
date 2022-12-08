/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(t,e){var n=0,i=Array.prototype.slice,o=t.cleanData;t.cleanData=function(e){for(var n,i=0;null!=(n=e[i]);i++)try{t(n).triggerHandler("remove")}catch(r){}o(e)},t.widget=function(n,i,o){var r,s,a,u,h={},c=n.split(".")[0];n=n.split(".")[1],r=c+"-"+n,o||(o=i,i=t.Widget),t.expr[":"][r.toLowerCase()]=function(e){return!!t.data(e,r)},t[c]=t[c]||{},s=t[c][n],a=t[c][n]=function(t,n){return this._createWidget?(arguments.length&&this._createWidget(t,n),e):new a(t,n)},t.extend(a,s,{version:o.version,_proto:t.extend({},o),_childConstructors:[]}),u=new i,u.options=t.widget.extend({},u.options),t.each(o,function(n,o){return t.isFunction(o)?(h[n]=function(){var t=function(){return i.prototype[n].apply(this,arguments)},e=function(t){return i.prototype[n].apply(this,t)};return function(){var n,i=this._super,r=this._superApply;return this._super=t,this._superApply=e,n=o.apply(this,arguments),this._super=i,this._superApply=r,n}}(),e):(h[n]=o,e)}),a.prototype=t.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:n},h,{constructor:a,namespace:c,widgetName:n,widgetFullName:r}),s?(t.each(s._childConstructors,function(e,n){var i=n.prototype;t.widget(i.namespace+"."+i.widgetName,a,n._proto)}),delete s._childConstructors):i._childConstructors.push(a),t.widget.bridge(n,a)},t.widget.extend=function(n){for(var o,r,s=i.call(arguments,1),a=0,u=s.length;u>a;a++)for(o in s[a])r=s[a][o],s[a].hasOwnProperty(o)&&r!==e&&(n[o]=t.isPlainObject(r)?t.isPlainObject(n[o])?t.widget.extend({},n[o],r):t.widget.extend({},r):r);return n},t.widget.bridge=function(n,o){var r=o.prototype.widgetFullName||n;t.fn[n]=function(s){var a="string"==typeof s,u=i.call(arguments,1),h=this;return s=!a&&u.length?t.widget.extend.apply(null,[s].concat(u)):s,a?this.each(function(){var i,o=t.data(this,r);return o?t.isFunction(o[s])&&"_"!==s.charAt(0)?(i=o[s].apply(o,u),i!==o&&i!==e?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):e):t.error("no such method '"+s+"' for "+n+" widget instance"):t.error("cannot call methods on "+n+" prior to initialization; attempted to call method '"+s+"'")}):this.each(function(){var e=t.data(this,r);e?e.option(s||{})._init():t.data(this,r,new o(s,this))}),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(n,i){var o,r,s,a=n;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof n)if(a={},o=n.split("."),n=o.shift(),o.length){for(r=a[n]=t.widget.extend({},this.options[n]),s=0;o.length-1>s;s++)r[o[s]]=r[o[s]]||{},r=r[o[s]];if(n=o.pop(),i===e)return r[n]===e?null:r[n];r[n]=i}else{if(i===e)return this.options[n]===e?null:this.options[n];a[n]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(n,i,o){var r,s=this;"boolean"!=typeof n&&(o=i,i=n,n=!1),o?(i=r=t(i),this.bindings=this.bindings.add(i)):(o=i,i=this.element,r=this.widget()),t.each(o,function(o,a){function u(){return n||s.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?s[a]:a).apply(s,arguments):e}"string"!=typeof a&&(u.guid=a.guid=a.guid||u.guid||t.guid++);var h=o.match(/^(\w+)\s*(.*)$/),c=h[1]+s.eventNamespace,l=h[2];l?r.delegate(l,c,u):i.bind(c,u)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function n(){return("string"==typeof t?i[t]:t).apply(i,arguments)}var i=this;return setTimeout(n,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,n,i){var o,r,s=this.options[e];if(i=i||{},n=t.Event(n),n.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),n.target=this.element[0],r=n.originalEvent)for(o in r)o in n||(n[o]=r[o]);return this.element.trigger(n,i),!(t.isFunction(s)&&s.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,n){t.Widget.prototype["_"+e]=function(i,o,r){"string"==typeof o&&(o={effect:o});var s,a=o?o===!0||"number"==typeof o?n:o.effect||n:e;o=o||{},"number"==typeof o&&(o={duration:o}),s=!t.isEmptyObject(o),o.complete=r,o.delay&&i.delay(o.delay),s&&t.effects&&t.effects.effect[a]?i[e](o):a!==e&&i[a]?i[a](o.duration,o.easing,r):i.queue(function(n){t(this)[e](),r&&r.call(i[0]),n()})}})}(jQuery);