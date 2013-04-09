Ext.define('NarutoReader.controller.Application', {
	extend: 'Ext.app.Controller',

	require: [
		'Ext.Img'
	],

	config: {
		refs: {
			chapitresView: 'chapitresview',
			pageView: 'pageview',
			mainView: 'mainview'
		},

		control: {
			chapitresView: {
				itemtap: 'goToChapitre'
			}
		}
	},

	goToChapitre: function(view, index, target, record, e) {
		// console.log("goToChapitre");
		// console.log(record.pages());
		// console.log(record.pages().data.items);
		var pages = [];
		record.pages().data.items.forEach(function(record){
			// console.log(record.data.url);
			var image = Ext.create('NarutoReader.view.ImageView');
			image.setSrc(record.data.url);
			pages.push({xtype: 'pinchzoomimage', html: '<img src="'+record.data.url+'" style="max-width: 100%;"/>', scrollable: 'vertical'});
			// pages.push( image );
			// pages.push( { xtype: 'imageview', src: record.data.url});
		});
		var page = (!this.getPageView())? Ext.create('NarutoReader.view.PageView') : this.getPageView();
		this.getMainView().push(page);

		console.log(pages);
		this.getPageView().setItems(pages);
		this.getMainView().getNavigationBar().setTitle(record.data.titre);
	}
});