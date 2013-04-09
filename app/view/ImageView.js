Ext.define('NarutoReader.view.ImageView', {
    extend: 'Ext.ux.PinchZoomImage',
    xtype: 'imageview',

    config: {
        // cls: 'my-carousel-item-img',
        // html: '', 
        // styleHtmlContent: true, 
        // flex: 1, 
        // maxWidth: "100%", 
        // width: '100%'
        // scrollable: 'vertical', 
        // height: 'auto'

        listeners: [
            {
                element: 'element',
                delegate: 'pinch',
                fn: : function(e , node, options, eOpts) {
                    var transformDetails = {
                        scale: 2,
                        angle: 0
                    };
                    var ScaleCmp =  Ext.getCmp('logger');
                    ScaleCmp.element.setStyle('-webkit-transform', 'scaleX(' + e.scale + ') scaleY(' + e.scale + ')');
                }
            }
        ]
    }
});
