define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var updateCommentModel = require('../models/updateModel');

    module.exports = Marionette.ItemView.extend({

        id: 'update-comment',
        template: '#updateComment-layout',

        events:{
            'click #saveButtonCom':'saveNewComment',
            'click .ButtonDelCom' :'deleteComment'
        },
        initialize:function(options){

            this.model = new updateCommentModel({
                commentId:options.commentId,
                articleId:options.articleId
            });
            this.model.fetch();
            this.listenTo(this.model,'destroy', this.goHome);
            this.listenTo(this.model,'sync', this.render);
        },
        goHome:function(){
            Backbone.history.navigate('#show-article/'+this.options.articleId, true);
        },
        saveNewComment : function() {

            var updateContent = $('#updateContent').val();

            this.model.set('content', updateContent);

            this.model.url = 'http://localhost:8081/blog-rest-service/article/' + this.options.articleId + '/comment/'
                + this.options.commentId;

            var self=this;
            this.model.save().always(function(){
                Backbone.history.navigate('#show-article/'+ self.options.articleId , true);
            });
        },
        deleteComment : function(){

            this.model.url = 'http://localhost:8081/blog-rest-service/article/' + this.options.articleId + '/comment/'
                + this.options.commentId;
            var self=this;
            this.model.destroy().always(function(){
                Backbone.history.navigate('#show-article/'+ self.options.articleId , true);
            });
        }
    });
});
