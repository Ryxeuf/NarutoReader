Ext.define('NarutoReader.store.MangaStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    config: {
        model: 'NarutoReader.model.ChapitreModel',

        proxy: {
            type: 'rest',
            url : "http://ryxeuf.fr/liseuse/mangas/naruto/release2.php",
            // url : "release.json",
            reader: {
                type: "json",
                rootProperty: "chapitres"
            }
        }
    }
    
});