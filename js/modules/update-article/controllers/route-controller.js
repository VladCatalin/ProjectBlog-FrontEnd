define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var UpdateArticle = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showUpdateArticle: function (id) {

            app.showLayout(new UpdateArticle({id:id}));
        }
    });

    module.exports = new MapRouteController();
});