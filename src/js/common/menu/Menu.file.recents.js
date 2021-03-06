window.MenuBarFileRecents = function() {
    var fs = require('fs');

    var path = require('path');
    var name, full, item, prop, res;

    var gui = require('nw.gui');
    var submenu = new gui.Menu();

    var recents = store.get('Recents') || {
        files: []
    };
    recents = recents && recents.files;
    recents.reverse();

    var mClear = new gui.MenuItem({
        label: i18n.t('file.clear-all'),
        click: function() {
            while (submenu.items.length - 2) {
                submenu.removeAt(0);
            }
            mClear.enabled = false;
            window.parent.ee.emit('menu.file.recents.clear');
        }
    });

    if (recents.length) {
        while (item = recents.shift()) {
            for (prop in item) {
                name = item[prop];
            }

            res = fs.existsSync(prop);

            if (res) {
                submenu.append(
                    new gui.MenuItem({
                        label: name,
                        tooltip: prop,
                        click: function() {
                            window.parent.ee.emit('menu.file.recents', this.tooltip);
                        }
                    }));
            }
        }

        submenu.append(
            new gui.MenuItem({
                type: 'separator'
            }));

    } else {
        mClear.enabled = false;
    }

    submenu.append(mClear);

    return submenu;
};