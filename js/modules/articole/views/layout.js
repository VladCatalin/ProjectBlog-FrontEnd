define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    var ItemCollection = require('../models/ItemCollection');

    var ItemCollectionView = require('./itemCollectionView');


    module.exports = Marionette.ItemView.extend({
        id: 'articole',
        template: '#articole-layout'

        , initialize: function(){
            Marionette.ItemView.prototype.initialize.apply(this,arguments);
            var self = this;
            this.collection = new ItemCollection();

            var collectionView = new ItemCollectionView({collection:this.collection});

            this.collection.fetch().then(function(){
                self.$el.find('.left-contain').html(collectionView.render().$el);
            })
        },

    });


});