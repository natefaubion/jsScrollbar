
apply();

document.getElementById('disable').onclick = function () {
	if (typeof this.toggle == 'undefined')
		this.toggle = true;
		
	if (this.toggle) {
		this.toggle = false;
		this.innerHTML = 'Enable jsScrollbar';
		for (var i = 0; i < jsScrollbar.scrollbars.length; i++) {
			jsScrollbar.scrollbars[i].disable();
		}
	} else {
		this.toggle = true;
		this.innerHTML = 'Disable jsScrollbar';
		for (var i = 0; i < jsScrollbar.scrollbars.length; i++) {
			jsScrollbar.scrollbars[i].enable();
		}
	}
	
	this.blur();
	return false;
};

/**
 * Opera Redraw Hack
 * Opera fails to redraw elements that are sized by absolute positioning when
 * its parent is resized. This forces Opera to redraw the child elements.
 */
function forceOperaRedraw (sb) {
	if (!window.opera) return;
	if (!sb.length) sb = [sb];
	var i = sb.length, o, r;
	while (i--) {
		o = sb[i].parent;
		if (o.offsetWidth > 0 && o.offsetHeight > 0) {
			o.style.display = 'none';
			r = o.offsetHeight;
			o.style.display = '';
		}
	}
}