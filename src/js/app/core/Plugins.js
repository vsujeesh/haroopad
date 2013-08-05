define([
		'core/plugins/Youtube',
		'core/plugins/Vimeo',
		'core/plugins/Twitter',
		'core/plugins/SlideShare',
		'core/plugins/SpeakerDeck',
		'core/plugins/Gist',
		'core/plugins/SoundCloud',
		'core/plugins/Map.Google'
	], function(Youtube, Vimeo, Twitter, SlideShare, SpeakerDeck, Gist, SoundCloud, Gmap) {

	return {
		youtube: Youtube,
		vimeo: Vimeo,
		tweet: Twitter,
		twitter: Twitter,
		slideshare: SlideShare,
		speakerdeck: SpeakerDeck,
		gist: Gist,
		soundcloud: SoundCloud,
		gmap: Gmap 
	};
});