define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        template: '#showArticle-no-comment'

        , initialize: function(options) {
            this.articleId = options.articleId;
            this.model.set('articleId', options.articleId);
        }

    });
});
