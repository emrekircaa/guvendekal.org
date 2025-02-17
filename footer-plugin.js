window.$docsify.plugins = [].concat(
  function(hook) {
    hook.afterEach(function(html, next) {
      var footer = '<footer style="text-align: center; margin-top: 50px; padding: 10px;">' +
                    // Footer içeriği
                   '<p>guvendekal.org içinde bulunan tüm içerikler ' +
                   '<a href="https://raw.githubusercontent.com/GuvendeKal/guvendekal.org/refs/heads/main/LICENSE" target="_blank">' +
                   'CC0 lisansı</a> altında kamu yararı gözetilerek topluluk tarafından yazılmıştır. ❤️ ' +
                   '</p>' +
                   // GitHub fork ve star widget'ları
                   '<p>' +
                   '<a href="https://github.com/GuvendeKal/guvendekal.org/fork" title="Forks on GitHub" target="_blank">' +
                   '<img src="https://img.shields.io/github/forks/GuvendeKal/guvendekal.org?style=social" alt="Forks">' +
                   '</a> ' +
                   '<a href="https://github.com/GuvendeKal/guvendekal.org/stargazers" title="Stars on GitHub" target="_blank">' +
                   '<img src="https://img.shields.io/github/stars/GuvendeKal/guvendekal.org?style=social" alt="Stars">' +
                   '</a>' +
                   '</p>' +
                   '</footer>';
      html = html + footer;
      next(html);
    });
  },
  window.$docsify.plugins
);

