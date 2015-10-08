define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var moment = require('moment');
    var updateCommentModel = require('modules/updateComment/models/updateModel');

    module.exports = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'ListComment',
        template: '#showArticle-article-comment',

        events: {
            'click #ButtonDelComment': 'deleteComment'
        },
        templateHelpers: {
            createDate: function () {
                var date = moment(new Date(this.model.date)).format("MMM Do YY");
                return date;
            }
        },

        deleteComment: function () {
            this.model = new updateCommentModel();
            this.model.url = 'http://localhost:8081/blog-rest-service/article/' + this.options.model.get('articleId') + '/comment/' + this.options.model.get('id');
            var url = '#show-article/' + this.options.model.get('articleId');
            this.model.destroy().always(function () {
                Backbone.history.navigate(url, true);
            });


        }
    });
});
