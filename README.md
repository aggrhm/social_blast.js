# SocialBlast.js

SocialBlast.js is a javascript library that provides a single uniform API for sharing a URL across several social media platforms. As of now the following platforms are supported:

- Facebook
- Twitter
- LinkedIn
- E-mail

## Usage

		SocialBlast.share({
			platform		: 'facebook' | 'twitter' | 'linkedin' | 'mail',
			share_url		: URL to share,
			title				: Title for the post,
			description	: Short description for post,
			image_url		: URL of image to show,
			redirect_uri: Where to redirect after share (Facebook only)
			width				: Width of popup,
			height			: Height of popup
		});

Calling the `share` function will display a popup in the center of the browser that will attempt to authenticate the user and then post to their account.

The accepted options vary depending on the platform. For example, the Facebook sharing API relies on Open Graph meta tags to determine the title, description, and image URL rather than passed in parameters. See the documentation for each platform's sharing protocol for more information.

## More Information

- Facebook OG Tags: https://developers.facebook.com/docs/sharing/best-practices#tags
- Twitter Cards: https://dev.twitter.com/cards/overview
