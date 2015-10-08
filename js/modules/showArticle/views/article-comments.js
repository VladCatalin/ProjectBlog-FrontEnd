define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ArticleComment = require('./article-comment');
    var NoComment = require('./no-comment');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul',
        className:'.show-list-comments',
        itemView: ArticleComment
        , emptyView: NoComment
        , itemViewOptions: function() {
            return {
                articleId: this.options.articleId
            };
        }
    });
});
