Ext.define('NarutoReader.view.ProfileView', {
    extend: 'Ext.navigation.View',
    xtype: 'profileview',
    requires: [
        'Ext.navigation.View'
    ],
    config: {
        title: 'Mon profile',
        html: 'test de mon profile',
        layout: 'fit'
    }
});
