define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var ArticoleRouter = require('modules/articole/router');
    var ContactRouter = require('modules/contact/router');
    var CreateArticle = require('modules/create-article/router');
    var UpdateArticle = require('modules/update-article/router');
    var ShowArticle = require('modules/showArticle/router');
    var CreateComment = require('modules/create-comment/router');
    var UpdateComment = require('modules/updateComment/router');


    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new ArticoleRouter();
                new ContactRouter();
                new CreateArticle();
                new UpdateArticle();
                new ShowArticle();
                new CreateComment();
                new UpdateComment();
            });
        }
    });

    module.exports = new RouterInitializer();
});
