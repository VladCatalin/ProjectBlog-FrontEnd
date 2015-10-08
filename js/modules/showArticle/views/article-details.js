/**
 * Created by CataVlad on 30-Sep-15.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        idName: 'article-details',
        template: '#showArticle-article-details',

    });
});
