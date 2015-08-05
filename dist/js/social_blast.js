window.SocialBlast =
	options:
		facebook: {}
	##
	#	SHARE
	#
	#	@params opts
	#		- platform: 'facebook', 'twitter', 'email', 'linkedin'
	#		- title: Title of item to share
	#		- image_url: URL of image
	#		- description: Short text describing item
	share : (opts)->
		switch opts.platform
			when 'facebook'
				url = SocialBlast.buildFacebookShareURL(opts)
			when 'twitter'
				url = SocialBlast.buildTwitterShareURL(opts)
			when 'linkedin'
				url = SocialBlast.buildLinkedInShareURL(opts)
			when 'mail'
				url = SocialBlast.buildMailShareURL(opts)
		opts.popup_url = url
		SocialBlast.showPopup(opts)
		
	buildFacebookShareURL : (opts)->
		app_id = SocialBlast.options.facebook.app_id
		share_url = opts.share_url
		redirect_uri = opts.redirect_uri || "https://facebook.com"
		url = "https://www.facebook.com/dialog/share?app_id=#{app_id}&display=popup&href=#{share_url}&redirect_uri=#{redirect_uri}"

	buildTwitterShareURL : (opts)->
		share_url = opts.share_url
		body = opts.description + " " + share_url
		url = "https://twitter.com/home?status=#{body}"

	buildLinkedInShareURL : (opts)->
		url = "https://www.linkedin.com/shareArticle?mini=true&url=#{opts.share_url}&title=#{opts.title}&summary=#{opts.description}"

	buildMailShareURL : (opts)->
		body = "#{opts.title}%0D%0A%0D%0A#{opts.description} Join today!%0D%0A%0D%0A#{opts.share_url}"
		url = "mailto:?subject=#{opts.title}&body=#{body}"

	showPopup : (opts)->
		p_h = opts.height || 350
		p_w = opts.width || 520
		p_top = (window.screen.height / 2) - (p_h / 2)
		p_left = (window.screen.width / 2) - (p_w / 2)
		window.open(opts.popup_url, 'sharer', "top=#{p_top}, left=#{p_left}, toolbar=0, status=0, width=#{p_w}, height=#{p_h}")


