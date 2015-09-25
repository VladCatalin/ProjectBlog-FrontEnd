define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var ArticoleLayout = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showArticole: function () {
            app.showLayout(new ArticoleLayout);
        }
    });

    module.exports = new MapRouteController();
});