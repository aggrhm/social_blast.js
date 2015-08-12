window.SocialBlast = {
	options: {facebook: {}},

	/*
	 *	SHARE
	 *
	 *	@params opts
	 *		- platform: 'facebook', 'twitter', 'email', 'linkedin'
	 *		- title: Title of item to share
	 *		- image_url: URL of image
	 *		- description: Short text describing item
	 */
	share : function(opts) {
		var url;
		switch(opts.platform) {
			case 'facebook':
				url = SocialBlast.buildFacebookShareURL(opts);
				break;
			case 'twitter':
				url = SocialBlast.buildTwitterShareURL(opts);
				break;
			case 'linkedin':
				url = SocialBlast.buildLinkedInShareURL(opts);
				break;
			case 'mail':
				url = SocialBlast.buildMailShareURL(opts);
				break;
		};
		opts.popup_url = url;
		SocialBlast.showPopup(opts);
	},
		
	buildFacebookShareURL : function(opts) {
		var app_id = SocialBlast.options.facebook.app_id;
		var share_url = opts.share_url;
		var redirect_uri = opts.redirect_uri || "https://facebook.com";
		var url = "https://www.facebook.com/dialog/share?app_id=" + app_id + "&display=popup&href=" + share_url + "&redirect_uri=" + redirect_uri;
		return url;
	},

	buildTwitterShareURL : function(opts) {
		var share_url = opts.share_url;
		var body = opts.description + " " + share_url;
		var url = "https://twitter.com/home?status=" + body;
		return url;
	},

	buildLinkedInShareURL : function(opts) {
		var url = "https://www.linkedin.com/shareArticle?mini=true&url=" + opts.share_url + "&title=" + opts.title + "&summary=" + opts.description;
		return url;
	},

	buildMailShareURL : function(opts) {
		var body = opts.description + "%0D%0A%0D%0A" + opts.share_url;
		var url = "mailto:?subject=" + opts.title + "&body=" + body;
		return url;
	},

	showPopup : function(opts) {
		var p_h = opts.height || 350
		var p_w = opts.width || 520
		var p_top = (window.screen.height / 2) - (p_h / 2)
		var p_left = (window.screen.width / 2) - (p_w / 2)
		var params = "top=" + p_top + ", left=" + p_left + ", toolbar=0, status=0, width=" + p_w + ", height=" + p_h;
		window.open(opts.popup_url, 'sharer', params)
	}

};

