Ext.define('NarutoReader.view.PageView', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'pageview',

    require: [
    	'Ext.Img'
    ],

    config: {
        tpl: '{url}'
    }
});
