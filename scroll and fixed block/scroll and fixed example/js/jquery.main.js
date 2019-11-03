function initFixedBlocks() {
	var win = jQuery(window);
	var blocks = jQuery('#header, #footer');

	var fixPosition = function() {
		var scrollLeft = win.scrollLeft();
		blocks.css({
			marginLeft: -scrollLeft
		});
	};
	fixPosition();
	win.bind('scroll resize', fixPosition);
}

$(initFixedBlocks);