function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function blogquote() {
  var title = document.title;
  var url = document.location;
  var host = location.hostname;
  var quote = getSelectionText();
  var mdfile = "["+title+"]("+url+")"+"\n\n>"+quote;
  prompt("copy",mdfile);
}

blogquote()
