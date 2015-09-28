define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    var ItemView = require('./itemItemView');

    module.exports = Marionette.CollectionView.extend({
        tagName:'ul'
        , itemView: ItemView
    });
});