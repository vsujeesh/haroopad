window.MenuBarFile = function () {
	var gui = require('nw.gui'),
			win = gui.Window.get();

	var File = new gui.Menu();	

	function menuItem(options) {
    File.append( new gui.MenuItem(options) );
  }

  function sepItem() {
    File.append( new gui.MenuItem({
      type: 'separator'
    }));
  }

	menuItem({
            label: 'New',
            click: function() {
                window.parent.ee.emit('menu.file.new');
            }
        });
	menuItem({
            label: 'Open',
            click: function() {
                window.parent.ee.emit('menu.file.open');
            }
        });
	menuItem({
            label: 'Open Recent',
            submenu: MenuBarFileRecents()
        });
	sepItem();
	
  menuItem({
          label: 'Save',
          click: function() {
              window.parent.ee.emit('menu.file.save');
          }
      });
  menuItem({
          label: 'Save As',
          click: function() {
              window.parent.ee.emit('menu.file.save.as');
          }
      });

  menuItem({
          label: 'Close',
          click: function() {
              window.parent.ee.emit('menu.file.close');
          }
      });
  sepItem();
  
  menuItem({
          label: 'Export',
          // enabled: false,
          submenu: MenuBarFileExports()
      });
  
  menuItem({
            label: 'Print...',
            click: function() {
                window.parent.ee.emit('menu.print.html');
            }
        });
	// menuItem({
 //            label: 'Activity stream',
 //            enabled: false,
 //            submenu: MenuBarFileActivities()
 //        });
    // File.append(
    //     new gui.MenuItem({
    //         label: 'Print Markdown',
    //         click: function() {
    //             win.emit('menu.print.markdown');
    //         }
    //     })
    // );

  sepItem();
  menuItem({
          label: 'Preferences',
          click: function() {
              window.parent.ee.emit('menu.preferences.show');
          }
      });
  sepItem();
  menuItem({
          label: 'Quit',
          click: function() {
            gui.App.closeAllWindows()();
          }
      });
    /*
	File.append(
        new gui.MenuItem({
            label: 'Page Setup'
        })
	);
	File.append(
        new gui.MenuItem({
            label: 'Print Source'
        })
	);
	File.append(
        new gui.MenuItem({
            label: 'Print Result'
        })
	);
     */

	return new gui.MenuItem({ label: 'File', submenu: File });
};