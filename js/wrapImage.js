function wrapImageWithFancyBox(){$("img").not(".sidebar-image img").not("#author-avatar img").not(".mdl-menu img").each(function(){var a=$(this),t=a.attr("title"),e=a.parent("a");e.size()<1&&(e=a.wrap('<a href="'+this.getAttribute("src")+'"></a>').parent("a")),e.addClass("fancybox"),e.attr("rel","group"),t&&(e.append('<p class="image-caption">'+t+"</p>"),e.attr("title",t))}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})}$(document).ready(function(){wrapImageWithFancyBox()});