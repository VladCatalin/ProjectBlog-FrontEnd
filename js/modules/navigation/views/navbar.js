define(function(require, exports, module) {
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#navigation-navbar',
        className: 'container',
        initialize: function() {
            this.render();
        }
    });
});