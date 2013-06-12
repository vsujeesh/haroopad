define([], function() {
	var gui = require('nw.gui'),
		win = gui.Window.get();

	var prefWin;

	prefWin = gui.Window.open('preferences.html', {
        toolbar: false,
        show: false,
        position: 'center',
        width: 500,
        height: 350,
        resizable: true,
        'always-on-top': true
      });

	prefWin.on('close', function() {
		prefWin.hide();
	});

	prefWin.on('loaded', function() {
	});

	return {
		show: function() {
			prefWin.show();
		},

		hide: function() {
			prefWin.hide();
		}
	}
});