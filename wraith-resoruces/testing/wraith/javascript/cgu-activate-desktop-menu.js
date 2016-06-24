// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
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

    // open the menu to the specified tab
    // e.g. "/personal#wraithmenu=0" will open the first menu tab on the personal page
    phantom.evaluate(function(){
        tabNumber = parseInt(window.location.hash.match(/wraithmenu=(\d+)/)[1]);
        console.log("Activating tab number " + tabNumber);
        $('li.has-megamenu').eq(tabNumber).mouseenter();
    })

    setTimeout(ready, 500);
}

