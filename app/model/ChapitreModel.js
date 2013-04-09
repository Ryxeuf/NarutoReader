Ext.define('NarutoReader.model.ChapitreModel', {
    extend: 'Ext.data.Model',

    config: {
        // identifier: 'uuid', 
        
        fields: [
            // 'id',
            'titre',
            'numero'
            // { name: 'id', type: 'string' },
            // { name: 'numero', type: 'string'},
            // { name: 'titre' },
            // { name: 'pages', mapping: 'page' }
        ],
        
        hasMany: { 
            model: 'NarutoReader.model.PageModel', 
            name: 'pages',
            associationKey: 'pages',
            record: 'pages'
        }

        // proxy: {
        //     type: 'rest',
        //     url : "release.json",
        //     reader: {
        //         type: "json",
        //         rootProperty: "chapitres"
        //     }
        // }
        /*,
        proxy: {
            type: 'ajax',
            url : "http://ryxeuf.fr/liseuse/mangas/naruto/release2.php",
            reader: {
                type: "xml",
                record : 'chapitre',
                rootProperty: "release"
            }
        }*/

        

            //     reader: {
            //         type: 'xml',
            //         record : 'page'
            //     }
    }
});