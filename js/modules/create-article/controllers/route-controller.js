define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var CreateNewArticle = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showNewArticle: function () {
            app.showLayout(new CreateNewArticle);
        }
    });

    module.exports = new MapRouteController();
});