define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var CreateCommentModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'create-comment',
        template: '#create-comment-layout',

        events: {
            'click #saveButtonCom': 'saveNewComment'
        },
        initialize: function (options) {

            this.model = new CreateCommentModel();

            this.model.id = options.id;
        },

        saveNewComment: function () {

            var commentContent = $('#commentContent').val();
            this.model.url = 'http://localhost:8081/blog-rest-service/article/' + this.id + '/comment/';

            this.model.set('content', commentContent);

            var self = this;

            this.model.save().always(function(){
                Backbone.history.navigate('#show-article/' + self.id, true);
            });

        }
    });
})
;

