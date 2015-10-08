define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var UpdateComment = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showUpdateComment: function (articleId,commentId) {

            app.showLayout(new UpdateComment({commentId:commentId,articleId:articleId}));
        }
    });

    module.exports = new MapRouteController();
});