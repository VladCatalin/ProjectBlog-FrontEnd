define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var CreateArticleModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'createArticle',
        template: '#create-article-layout',

        events:{
            'click #saveButton':'saveNewArticle'
        },
        initialize:function(){
            this.model = new CreateArticleModel();
        },

        saveNewArticle : function() {
            var articleTitle = $('#articleTitle').val();
            var articleDescription = $('#articleDescription').val();
            var articleContent = $('#articleContent').val();
            var articleUrl = $('#articleUrl').val();

            this.model.set('title', articleTitle);
            this.model.set('description', articleDescription);
            this.model.set('content', articleContent);
            this.model.set('url_image', articleUrl);
            this.model.url = 'http://localhost:8081/blog-rest-service/article/';


            this.model.save().always(function(){
                Backbone.history.navigate('#articole', true);
            });
        }
    });
});
