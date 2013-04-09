Ext.define('NarutoReader.store.ChapitresStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax'
    ],

    config: {
        model: 'NarutoReader.model.ChapitreModel',

        proxy: {
            type: 'ajax',
            url : "release.xml",
            // url : "http://ryxeuf.fr/liseuse/mangas/naruto/release2.php",
            reader: {
                type: "xml",
                record : 'chapitre',
                rootProperty: "release"
            }
        },
        autoLoad: true
    }
    
});