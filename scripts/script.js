$(document).ready(function() {
    // Load words into array
    var wordlist = [];
    
    $.ajax({
        contentType: 'text/plain; charset=utf-8',
        url:         "data/common.txt",
        type:        "GET",
        dataType:    "text",
        cache:       false,
        success:     function(data) {
            wordlist = data.split("\r\n");
        }
    });
    
    $('#generateBtn').click(function() {
        console.log("click");
        var n = $('#numWordsTxt').val();
        var area = $('#genWordsArea');
        area.val(""); // clear textarea for next use
        
        for (var i = 0; i < n; i++) {
            var r = Math.floor(Math.random() * wordlist.length);
            area.val(area.val() + wordlist[r] + " ");
        }
    });
    
});