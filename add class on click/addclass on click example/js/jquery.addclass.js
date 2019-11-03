// page init
jQuery(function(){
	initAddClasses();
});

// add class on click
function initAddClasses() {
	jQuery('div.div-class').clickClass({
		classAdd: 'div-add-class'
	});
	jQuery('a.a-class').clickClass({
		classAdd: 'div-parent-add-class',
		addToParent: true
	});
}

/*
 * Add class plugin
 */
jQuery.fn.clickClass = function(opt) {
	var options = jQuery.extend({
		classAdd: 'add-class',
		addToParent: false,
		event: 'click'
	}, opt);

	return this.each(function() {
		var classItem = jQuery(this);
		if(options.addToParent) {
			if(typeof options.addToParent === 'boolean') {
				classItem = classItem.parent();
			} else {
				classItem = classItem.parents('.' + options.addToParent);
			}
		}
		jQuery(this).bind(options.event, function(e) {
			classItem.toggleClass(options.classAdd);
			e.preventDefault();
		});
	});
};