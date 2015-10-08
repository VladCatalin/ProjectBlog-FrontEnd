define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var updateArticleModel = require('../models/updateModel');

    module.exports = Marionette.ItemView.extend({
        id: 'updateArticle',
        template: '#update-article-layout',

        events:{
            'click #saveButton':'saveNewArticle',
            'click .ButtonDel' :'deleteArticle'
        },
        initialize:function(options){
            this.model = new updateArticleModel({

                id:options.id
            });
            this.model.fetch();
            this.listenTo(this.model,'destroy', this.goHome);
            this.listenTo(this.model,'sync', this.render);
        },
        goHome:function(){
            Backbone.history.navigate('#articole', true);
        },
        saveNewArticle : function() {
            var updateTitle = $('#updateTitle').val();
            var updateDescription = $('#updateDescription').val();
            var updateContent = $('#updateContent').val();
            var updateUrl = $('#updateUrl').val();

            this.model.set('title', updateTitle);
            this.model.set('description', updateDescription);
            this.model.set('content', updateContent);
            this.model.set('url_image', updateUrl);

            this.model.url = 'http://localhost:8081/blog-rest-service/article/' + this.id;

            this.model.save().always(function(){
                Backbone.history.navigate('#articole', true);
            });
        },

        deleteArticle : function(){
            this.model.url = 'http://localhost:8081/blog-rest-service/article/' + this.id;

            this.model.destroy().always(function(){
                Backbone.history.navigate('#articole', true);
            });

        }
    });
});
