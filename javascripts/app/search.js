!function(t){function e(){$("h1, h2").each(function(){var t=$(this),e=t.nextUntil("h1, h2");h.add({id:t.prop("id"),title:t.text(),body:e.text()})})}function o(){l=$(".content"),r=$(".dark-box"),s=$(".search-results"),$("#input-search").on("keyup",n)}function n(t){if(i(),s.addClass("visible"),27===t.keyCode&&(this.value=""),this.value){var e=h.search(this.value).filter(function(t){return t.score>1e-4});e.length?(s.empty(),$.each(e,function(t,e){s.append("<li><a href='#"+e.ref+"'>"+$("#"+e.ref).text()+"</a></li>")}),a.call(this)):(s.html("<li></li>"),$(".search-results li").text('No Results Found for "'+this.value+'"'))}else i(),s.removeClass("visible")}function a(){this.value&&l.highlight(this.value,c)}function i(){l.unhighlight(c)}var l,r,s,c=($(t),{element:"span",className:"search-highlight"}),h=new lunr.Index;h.ref("id"),h.field("title",{boost:10}),h.field("body"),h.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(e),$(o)}(window);