module.exports = function (phantom, ready) {

    page.onConsoleMessage = function(msg, lineNum, sourceId) {
      console.log('CONSOLE: ' + msg );
    };

    page.onError = function(msg, trace) {
      var msgStack = ['ERROR: ' + msg];
      if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function(t) {
          msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
        });
      }
      console.error(msgStack.join('\n'));
    };

    // standardise the 'popular blogs' widget to pass wraith tests
    phantom.evaluate(function(){
      // Removed search and RSS icon since the Icon is different from Kentico
      $('.site-header nav.site-nav>ul>li.search a').html('');
      $('.blog-sidebar .blog-social-widget header ul li a .icon-feed:last-child').hide();
      // Removes contact us button since, currently it's not present in the dev site
      $('a.k_float.k_right.cgu_k_right_center_contact').hide();
      $('div.blog-popular-widget .article-meta a').html('');
      $('div.blog-popular-widget div time, section.blog-related div time')
      	.html('timestamp removed for wraith');
      $('div.blog-popular-widget div > h5 > a, section.blog-related h3 a')
      	.html('content removed for wraith');
      $('div.blog-popular-widget figure img, section.blog-related figure img')
      	.attr("src","https://assets.cgu.com.au/cgu.com.au/img/logo-header.svg");
    })
    setTimeout(ready, 500);
}