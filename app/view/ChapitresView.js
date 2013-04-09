Ext.define('NarutoReader.view.ChapitresView', {
    extend: 'Ext.dataview.List',
    xtype: 'chapitresview',

    require: [
        'Ext.data.reader.Xml'
    ],

    config: {
        title: 'Chapitres',

        store: 'MangaStore',
        itemTpl: [
            '<span>{titre}</span>'
        ].join('')
    }
});
