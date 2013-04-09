Ext.define('NarutoReader.utils.DataManager', {
	singleton: true,

	requires: [
        'Ext.device.Notification'
    ],

    serverUrl: "http://ryxeuf.fr/liseuse/mangas/naruto/request.php",
    callerClass: '',
    config: '',
    ready: false,

    // Initialise la connexion RPC
    init: function() {
        var json = null;
        var serverUrl = this.serverUrl;
        var me = this;

    	Ext.Ajax.request({
            url : serverUrl,
            // params: {
            //     id: 1
            // },
            success: function(response){
                // console.log(response);
                json = Ext.JSON.decode(response.responseText);
                // console.log(json);
                me.config = json;
                // var text = response.responseText;
                // process server response here
                me.ready = true;
            }
        });

    },
    
    getConfig: function() {
        reday = this.ready;
        while(!reday){
            reday = this.ready;
        }

        return this.config;
    }

});