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

    // open the hamburger menu
    phantom.evaluate(function(){
      $('.ss-header-menu-button').click();
    })

    setTimeout(ready, 500);
}

