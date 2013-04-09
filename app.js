/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'NarutoReader': 'app',
    'Ext.ux': 'libs/ux' 
});
//</debug>

Ext.application({
    name: 'NarutoReader',

    requires: [
        'Ext.MessageBox',
        'NarutoReader.utils.DataManager',
        'Ext.util.DelayedTask'
    ],

    views: [
        'Main',
        'ChapitresView',
        'PageView',
        'ImageView'
    ],

    controllers: [
        'Application'
    ],

    stores: [
        // 'ChapitresStore',
        'MangaStore'
    ],

    models: [
        'ChapitreModel',
        'PageModel'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var mangaStore = Ext.getStore('MangaStore');
        mangaStore.load();

        NarutoReader.utils.DataManager.init();

        var startup = Ext.create('Ext.util.DelayedTask', function () {
            console.log(NarutoReader.utils.DataManager.getConfig());
            // Ext.Viewport.removeAll();

            // Initialize the first view
            // Ext.Viewport.add([gameInformationsView, loginView, mainView]);

        });
        startup.delay(2000); //5000
        // console.log(mangaStore);

        // var applicationStore = Ext.getStore('ChapitresStore');
        // applicationStore.load({
        //     callback: function(records, operation, success) {
        //         // the operation object contains all of the details of the load operation
        //         //console.log(records);
        //         records.forEach(function(record){
        //             //console.log(record.pages().load());
        //         });
        //     },
        //     scope: this
        // });

        // console.log(applicationStore);

        // Initialize the main view
        Ext.Viewport.add(Ext.create('NarutoReader.view.Main'));

        // Ext.getDom('ext-viewport').addEventListener('orientationchange', function() {
        //     var pinchzooms = Ext.ComponentQuery.query('pinchzoomimage');
        //     for (var i=0;i<pinchzooms.length;i++) {
        //         pinchzooms[i].redraw();
        //     }
        // });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
