Ext.define('NarutoReader.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.data.reader.Xml',
        'Ext.navigation.View',
        'NarutoReader.view.PageView',
        'NarutoReader.store.ChapitresStore',
        'Ext.Img'
    ],
    config: {
        items: [
            { xtype: 'chapitresview' }
        ]
    }
});
