(function () {
    var root = document.documentElement;
    var meta = document.getElementById('themeColor');
    var stored = null;

    try {
        stored = localStorage.getItem('theme');
    } catch (error) {}

    root.setAttribute('data-theme', stored === 'dark' ? 'dark' : 'light');

    var syncMeta = function (theme) {
        if (meta) meta.setAttribute('content', theme === 'light' ? '#f5f8fc' : '#050d15');
    };

    syncMeta(root.getAttribute('data-theme'));

    document.addEventListener('DOMContentLoaded', function () {
        var toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        toggle.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            root.setAttribute('data-theme', next);
            syncMeta(next);
            try {
                localStorage.setItem('theme', next);
            } catch (error) {}
        });
    });
})();
