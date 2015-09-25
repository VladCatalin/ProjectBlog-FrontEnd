define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var ContactLayout = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showContact: function () {
            app.showLayout(new ContactLayout);
        }
    });

    module.exports = new MapRouteController();
});
