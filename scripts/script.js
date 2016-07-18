'use strict';

/* Delegate what happens when the DOM is ready.
 */
$(document).ready(function(){
    var nav = new HeaderToNav();
    nav.getElementArray('h2, h3').buildElements().insert('body');
});

/* Register event handlers.
 */
$('body').on('click', '#toggleButton', toggleSideNav);


var HeaderToNav = function() {
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
    this.addToDom = '<nav id="side">&#9776;PyTA Menu<span id="toggleButton"></span><ul id="show">' + 
                    this.addToDom + '</ul></nav>'
    return this;
}


/* Insert (costly operation) given elements into DOM. 
 * Default: prepend to 'body'.
 * @param   element     (existing) DOM element to prepend into.
 */
HeaderToNav.prototype.insert = function(element) {
    var element = element || 'body';
    $(element).prepend(this.addToDom);
    adjustContent();  // temporarily turned off.
    return this;
}


/* TODO:
 * Toggle (show/hide) the navigation when icon is clicked.
 * The navigation should collapse 'out of the way' to small box when not needed.
 */
function toggleSideNav() {
    // Your code here...
    $("#side").toggle();
    adjustContent();  // temporarily turned off.
}

/* TODO:
 * Get the width of the navigation and set the margin-left of 'div.content' by
 * that amount, so the nav and content are not obstructing, side-by-side.
 */
function adjustContent() {
    $('.content').css('margin-left', $('#side').width() + "px");
}