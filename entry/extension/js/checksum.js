window.onload = function() {

     console.log(JSON.stringify(window.document))
      sha256(JSON.stringify(window.document)).then(function(hash) {
          chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
          if (msg.greeting == "hello") {
              sendResponse({hash});
          } else{
            sendResponse({hash: false});
          }
      });
    });

};

/*            
Yes, I know this a lazy implementation. I either want to replace with library or 
look at using WebAssembly for smaller chances of manipulation by Javascript.

*/

function sha256(str) {
  // We transform the string into an arraybuffer.
  var buffer = new TextEncoder("utf-8").encode(str);
  return crypto.subtle.digest("SHA-256", buffer).then(function (hash) {
    return hex(hash);
  });
}

function hex(buffer) {
  var hexCodes = [];
  var view = new DataView(buffer);
  for (var i = 0; i < view.byteLength; i += 4) {
    var value = view.getUint32(i)
    var stringValue = value.toString(16)
    var padding = '00000000'
    var paddedValue = (padding + stringValue).slice(-padding.length)
    hexCodes.push(paddedValue);
  }

  // Join all the hex strings into one
  return hexCodes.join("");
}
