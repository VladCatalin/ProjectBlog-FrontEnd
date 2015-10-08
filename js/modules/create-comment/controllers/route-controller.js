define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var CreateNewComment = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showNewComment: function (id) {
            app.showLayout(new CreateNewComment({id:id}));
        }
    });

    module.exports = new MapRouteController();
});