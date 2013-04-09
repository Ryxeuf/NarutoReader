Ext.define('NarutoReader.model.PageModel', {
    extend: 'Ext.data.Model',

    config: {
        
        fields: [
            // 'id',
            'numero',
            'url',
            'precedent',
            'suivant'
            // { name: 'id', type: 'string' },
            // { name: 'numero', type: 'string', mapping: '@numero' },
            // { name: 'url', type: 'string'},
            // { name: 'precedent', type: 'string' },
            // { name: 'suivant', type: 'string' },
            // { name: 'chapitreId', type: 'string' }
        ],

        belongsTo: 'NarutoReader.model.ChapitreModel'
        
        // proxy: {
        //     type: 'ajax',

        //     reader: {
        //         type: 'xml'
        //     }
        // }

        /*hasMany: [
            { model: 'TerraMobile.model.UserCacheModel', name: 'caches' },
            { model: 'TerraMobile.model.UserSuccessModel', name: 'successes' }
        ],*/
    }
});