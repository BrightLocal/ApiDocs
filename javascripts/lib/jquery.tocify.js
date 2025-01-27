/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(t,e){var i=0,n=Array.prototype.slice,s=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(o){}s(e)},t.widget=function(i,n,s){var o,a,r,l,c={},h=i.split(".")[0];i=i.split(".")[1],o=h+"-"+i,s||(s=n,n=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[h]=t[h]||{},a=t[h][i],r=t[h][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),l=new n,l.options=t.widget.extend({},l.options),t.each(s,function(i,s){return t.isFunction(s)?(c[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=s.apply(this,arguments),this._super=n,this._superApply=o,i}}(),e):(c[i]=s,e)}),r.prototype=t.widget.extend(l,{widgetEventPrefix:a?l.widgetEventPrefix:i},c,{constructor:r,namespace:h,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete a._childConstructors):n._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var s,o,a=n.call(arguments,1),r=0,l=a.length;l>r;r++)for(s in a[r])o=a[r][s],a[r].hasOwnProperty(s)&&o!==e&&(i[s]=t.isPlainObject(o)?t.isPlainObject(i[s])?t.widget.extend({},i[s],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,s){var o=s.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,l=n.call(arguments,1),c=this;return a=!r&&l.length?t.widget.extend.apply(null,[a].concat(l)):a,r?this.each(function(){var n,s=t.data(this,o);return s?t.isFunction(s[a])&&"_"!==a.charAt(0)?(n=s[a].apply(s,l),n!==s&&n!==e?(c=n&&n.jquery?c.pushStack(n.get()):n,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new s(a,this))}),c}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var s,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},s=i.split("."),i=s.shift(),s.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;s.length-1>a;a++)o[s[a]]=o[s[a]]||{},o=o[s[a]];if(i=s.pop(),n===e)return o[i]===e?null:o[i];o[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];r[i]=n}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,s){var o,a=this;"boolean"!=typeof i&&(s=n,n=i,i=!1),s?(n=o=t(n),this.bindings=this.bindings.add(n)):(s=n,n=this.element,o=this.widget()),t.each(s,function(s,r){function l(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(l.guid=r.guid=r.guid||l.guid||t.guid++);var c=s.match(/^(\w+)\s*(.*)$/),h=c[1]+a.eventNamespace,u=c[2];u?o.delegate(u,h,l):n.bind(h,l)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,o,a=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var a,r=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),a=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),a&&t.effects&&t.effects.effect[r]?n[e](s):r!==e&&n[r]?n[r](s.duration,s.easing,o):n.queue(function(i){t(this)[e](),o&&o.call(n[0]),i()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(t){"use strict";t(window.jQuery,window,document)}(function(t,e,i,n){"use strict";var s="tocify",o="tocify-focus",a="tocify-hover",r="tocify-hide",l="tocify-header",c="."+l,h="tocify-subheader",u="."+h,d="tocify-item",f="."+d,p="tocify-extend-page",g="."+p;t.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.tocifyWrapper=t(".tocify-wrapper"),i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var t in e)if(t&&-1!==t.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),t(e).load(function(){i._setActiveElement(!0),t("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var e,i,n=this,o=n.options.ignoreSelector;return e=-1!==this.options.selectors.indexOf(",")?t(this.options.context).find(this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(","))):t(this.options.context).find(this.options.selectors.replace(/ /g,"")),e.length?(n.element.addClass(s),void e.each(function(e){t(this).is(o)||(i=t("<ul/>",{id:l+e,"class":l}).append(n._nestElements(t(this),e)),n.element.append(i),t(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===t(this).find(n.options.selectors).length?t(this).filter(n.options.selectors).each(function(){t(this).is(o)||n._appendSubheaders.call(this,n,i)}):t(this).find(n.options.selectors).each(function(){t(this).is(o)||n._appendSubheaders.call(this,n,i)})}))})):void n.element.addClass(r)},_setActiveElement:function(t){var i=this,n=e.location.hash.substring(1),s=i.element.find("li[data-unique='"+n+"']");return n.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),s.addClass(i.focusClass),i.options.showAndHide&&s.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!n.length&&t&&i.options.highlightDefault&&i.element.find(f).first().addClass(i.focusClass)),i},_nestElements:function(e,i){var n,s,o;return n=t.grep(this.items,function(t){return t===e.text()}),n.length?this.items.push(e.text()+i):this.items.push(e.text()),o=this._generateHashValue(n,e,i),s=t("<li/>",{"class":d,"data-unique":o}).append(t("<a/>",{text:e.text()})),e.before(t("<div/>",{name:o,"data-unique":o})),s},_generateHashValue:function(t,e,i){var n="",s=this.options.hashGenerator;if("pretty"===s){for(n=e.text().toLowerCase().replace(/\s/g,"-"),n=n.replace(/[^\x00-\x7F]/g,"");n.indexOf("--")>-1;)n=n.replace(/--/g,"-");for(;n.indexOf(":-")>-1;)n=n.replace(/:-/g,"-")}else n="function"==typeof s?s(e.text(),e):e.text().replace(/\s/g,"");return t.length&&(n+=""+i),n},_appendSubheaders:function(e,i){var n=t(this).index(e.options.selectors),s=t(e.options.selectors).eq(n-1),o=+t(this).prop("tagName").charAt(1),a=+s.prop("tagName").charAt(1);a>o?e.element.find(u+"[data-tag="+o+"]").last().append(e._nestElements(t(this),n)):o===a?i.find(f).last().after(e._nestElements(t(this),n)):i.find(f).last().after(t("<ul/>",{"class":h,"data-tag":o})).next(u).append(e._nestElements(t(this),n))},_setEventHandlers:function(){var s=this;this.element.on("click.tocify","li",function(i){if(s.options.history&&(e.location.hash=t(this).attr("data-unique")),s.element.find("."+s.focusClass).removeClass(s.focusClass),t(this).addClass(s.focusClass),s.options.showAndHide){var n=t('li[data-unique="'+t(this).attr("data-unique")+'"]');s._triggerShow(n)}s._scrollTo(t(this))}),this.element.find("li").on({"mouseenter.tocify":function(){t(this).addClass(s.hoverClass),t(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==s.options.theme&&t(this).removeClass(s.hoverClass)}}),t(e).on("resize",function(){s.calculateHeights()}),t(e).on("scroll.tocify",function(){t("html, body").promise().done(function(){var o,a,r,l,c=t(e).scrollTop(),h=t(e).height(),u=t(i).height(),d=t("body")[0].scrollHeight;if(s.options.extendPage&&(s.webkit&&c>=d-h-s.options.extendPageOffset||!s.webkit&&h+c>u-s.options.extendPageOffset)&&!t(g).length){if(a=t('div[data-unique="'+t(f).last().attr("data-unique")+'"]'),!a.length)return;r=a.offset().top,t(s.options.context).append(t("<div />",{"class":p,height:Math.abs(r-c)+"px","data-unique":p})),s.extendPageScroll&&(l=s.element.find("li.active"),s._scrollTo(t("div[data-unique="+l.attr("data-unique")+"]")))}setTimeout(function(){var a,r=null;0==s.cachedHeights.length&&s.calculateHeights();var l=t(e).scrollTop();if(s.cachedAnchors.each(function(t){return s.cachedHeights[t]-l<0?void(r=t):!1}),a=t(s.cachedAnchors[r]).attr("data-unique"),o=t('li[data-unique="'+a+'"]'),s.options.highlightOnScroll&&o.length&&!o.hasClass(s.focusClass)){s.element.find("."+s.focusClass).removeClass(s.focusClass),o.addClass(s.focusClass);var c=s.tocifyWrapper,h=t(o).closest(".tocify-header"),u=h.offset().top,d=c.offset().top,f=u-d;if(f>=t(e).height()){var p=f+c.scrollTop();c.scrollTop(p)}else 0>f&&c.scrollTop(0)}s.options.scrollHistory&&e.location.hash!=="#"+a&&a!==n&&(history.replaceState?history.replaceState({},"","#"+a):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+a,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),s.options.showAndHideOnScroll&&s.options.showAndHide&&s._triggerShow(o,!0)},0)})})},calculateHeights:function(){var e=this;e.cachedHeights=[],e.cachedAnchors=[];var i=t(e.options.context).find("div[data-unique]");i.each(function(i){var n=(t(this).next().length?t(this).next():t(this)).offset().top-e.options.highlightOffset;e.cachedHeights[i]=n}),e.cachedAnchors=i},show:function(e,i){var n=this;if(!e.is(":visible"))switch(e.find(u).length||e.parent().is(c)||e.parent().is(":visible")?e.children(u).length||e.parent().is(c)||(e=e.closest(u)):e=e.parents(u).add(e),n.options.showEffect){case"none":e.show();break;case"show":e.show(n.options.showEffectSpeed);break;case"slideDown":e.slideDown(n.options.showEffectSpeed);break;case"fadeIn":e.fadeIn(n.options.showEffectSpeed);break;default:e.show()}return e.parent().is(c)?n.hide(t(u).not(e)):n.hide(t(u).not(e.closest(c).find(u).not(e.siblings()))),n},hide:function(t){var e=this;switch(e.options.hideEffect){case"none":t.hide();break;case"hide":t.hide(e.options.hideEffectSpeed);break;case"slideUp":t.slideUp(e.options.hideEffectSpeed);break;case"fadeOut":t.fadeOut(e.options.hideEffectSpeed);break;default:t.hide()}return e},_triggerShow:function(t,e){var i=this;return t.parent().is(c)||t.next().is(u)?i.show(t.next(u),e):t.parent().is(u)&&i.show(t.parent(),e),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(c+","+u).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=o,this.hoverClass=a),this},setOption:function(){t.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){t.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(e){var i=this,n=i.options.smoothScroll||0,s=i.options.scrollTo;return t("html, body").promise().done(function(){t("html, body").animate({scrollTop:t('div[data-unique="'+e.attr("data-unique")+'"]').next().offset().top-(t.isFunction(s)?s.call():s)+"px"},{duration:n})}),i}})});