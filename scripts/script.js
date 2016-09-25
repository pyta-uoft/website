'use strict';

/* Delegate what happens when the DOM is ready.
 */
$(document).ready(function(){
    var nav = new HeaderToNav();
    nav.getElementArray('h2, h3').buildElements().insert('body');
});

/* Register event handlers.
 */
$('body').on('click', '#toggleButton', navToggle);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* Base function for adding navigation bar.
 */
function HeaderToNav() {
    this.elementsToNav = null;
    this.addToDom = '';  // string representation of elements to add to DOM.
}

/* For each header, add the jQuery element to an array.
 * Use all h2/h3 headers: 'h2' are categories, 'h3' are message items.
 * Concern separated to handle future changes of category/message element types.
 */
HeaderToNav.prototype.getElementArray = function (itemsToUse) {
    this.elementsToNav = $(itemsToUse);
    return this;
}


/* For each header item in the array, build the DOM element(s) to set.
 * 'h2' headers are categories used to group the messages.
 * 'h3' headers are the message items.
 * Some string functions are used for speed over typical jquery methods.
 */
HeaderToNav.prototype.buildElements = function() {
    var that = this;  // reference 'this' scope for different scope below.
    this.elementsToNav.each(function(){
        var text = $(this).text();
        var id = '#' + $(this).attr('id');

        // 'h2' headers are section categories used to group the messages.
        // 'h3' headers are the message items.
        var catClass = $(this).is('h2') ? ' class="navCategory"' : '';
        that.addToDom += '<li' + catClass + '><a href="' + id + '">' + text +
                         '</a></li>';
    });

    // wrap 'li' items in 'ul' and 'nav'.
    this.addToDom = '<nav id="side"><div id="toggleButton"><span></span></div><ul>' +
                    this.addToDom + '</ul></nav>';
    return this;
}


/* Insert (costly operation) given elements into DOM.
 * Default: prepend to 'body'.
 * @param   element     (existing) DOM element to prepend into.
 */
HeaderToNav.prototype.insert = function(element) {
    element = element || 'body';
    $(element).prepend(this.addToDom);
    navToggle();
    return this;
}


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/*
    Navigation bar (show/hide) when icon is clicked.
    The navigation collapses 'out of the way' when not needed.
    The margin-left property of 'div.content' is conditionally adjusted to
    prevent obstruction.
    On small screens:
      • open nav with overlay instead of narrowing content.
      • close the nav without overlay, to prevent covering content.
    Note: toggling 2 or more things is less robust (nondeterministic), and
    avoided for this reason.
 */
function navToggle() {
    // corresponds to '.content, #side' widths, and a small buffer
    var minScreenWidth = 780 + 50 + 30;
    if ($('nav#side ul').is(':visible')) { // Close side nav.
        $('nav#side ul').hide();
        $('#toggleButton span').removeClass('iconSideNavControl');
        if ($(window).width() < minScreenWidth) {
            // Prevent obstruction of content on small screens.
            $('.content').css('margin-left', $('nav#side').outerWidth() + "px");
        } else {
            $('.content').css('margin-left', 'auto');
        }
    } else {  // Show side nav.
        $('nav#side ul').show();
        $('#toggleButton span').addClass('iconSideNavControl');
        if ($(window).width() >= minScreenWidth) {
            // Overlay instead of narrowing content on small screens.
            $('.content').css('margin-left', $('nav#side').outerWidth() + "px");
        }
    }
}
