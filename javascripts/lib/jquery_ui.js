/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(t,e){var i=0,n=Array.prototype.slice,o=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(s){}o(e)},t.widget=function(i,n,o){var s,r,a,l,c={},h=i.split(".")[0];i=i.split(".")[1],s=h+"-"+i,o||(o=n,n=t.Widget),t.expr[":"][s.toLowerCase()]=function(e){return!!t.data(e,s)},t[h]=t[h]||{},r=t[h][i],a=t[h][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new a(t,i)},t.extend(a,r,{version:o.version,_proto:t.extend({},o),_childConstructors:[]}),l=new n,l.options=t.widget.extend({},l.options),t.each(o,function(i,o){return t.isFunction(o)?(c[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,s=this._superApply;return this._super=t,this._superApply=e,i=o.apply(this,arguments),this._super=n,this._superApply=s,i}}(),e):(c[i]=o,e)}),a.prototype=t.widget.extend(l,{widgetEventPrefix:r?l.widgetEventPrefix:i},c,{constructor:a,namespace:h,widgetName:i,widgetFullName:s}),r?(t.each(r._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,a,i._proto)}),delete r._childConstructors):n._childConstructors.push(a),t.widget.bridge(i,a)},t.widget.extend=function(i){for(var o,s,r=n.call(arguments,1),a=0,l=r.length;l>a;a++)for(o in r[a])s=r[a][o],r[a].hasOwnProperty(o)&&s!==e&&(i[o]=t.isPlainObject(s)?t.isPlainObject(i[o])?t.widget.extend({},i[o],s):t.widget.extend({},s):s);return i},t.widget.bridge=function(i,o){var s=o.prototype.widgetFullName||i;t.fn[i]=function(r){var a="string"==typeof r,l=n.call(arguments,1),c=this;return r=!a&&l.length?t.widget.extend.apply(null,[r].concat(l)):r,a?this.each(function(){var n,o=t.data(this,s);return o?t.isFunction(o[r])&&"_"!==r.charAt(0)?(n=o[r].apply(o,l),n!==o&&n!==e?(c=n&&n.jquery?c.pushStack(n.get()):n,!1):e):t.error("no such method '"+r+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")}):this.each(function(){var e=t.data(this,s);e?e.option(r||{})._init():t.data(this,s,new o(r,this))}),c}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var o,s,r,a=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(a={},o=i.split("."),i=o.shift(),o.length){for(s=a[i]=t.widget.extend({},this.options[i]),r=0;o.length-1>r;r++)s[o[r]]=s[o[r]]||{},s=s[o[r]];if(i=o.pop(),n===e)return s[i]===e?null:s[i];s[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,o){var s,r=this;"boolean"!=typeof i&&(o=n,n=i,i=!1),o?(n=s=t(n),this.bindings=this.bindings.add(n)):(o=n,n=this.element,s=this.widget()),t.each(o,function(o,a){function l(){return i||r.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?r[a]:a).apply(r,arguments):e}"string"!=typeof a&&(l.guid=a.guid=a.guid||l.guid||t.guid++);var c=o.match(/^(\w+)\s*(.*)$/),h=c[1]+r.eventNamespace,u=c[2];u?s.delegate(u,h,l):n.bind(h,l)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var o,s,r=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(o in s)o in i||(i[o]=s[o]);return this.element.trigger(i,n),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,o,s){"string"==typeof o&&(o={effect:o});var r,a=o?o===!0||"number"==typeof o?i:o.effect||i:e;o=o||{},"number"==typeof o&&(o={duration:o}),r=!t.isEmptyObject(o),o.complete=s,o.delay&&n.delay(o.delay),r&&t.effects&&t.effects.effect[a]?n[e](o):a!==e&&n[a]?n[a](o.duration,o.easing,s):n.queue(function(i){t(this)[e](),s&&s.call(n[0]),i()})}})}(jQuery);