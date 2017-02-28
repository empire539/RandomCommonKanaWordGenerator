$(document).ready(function() {
    // Load words
    var wordlist = [];
    
    $.ajax({
        contentType: 'text/plain; charset=utf-8',
        url:         "data/common.txt",
        type:        "GET",
        dataType:    "text",
        cache:       false,
        success:     function(data) {
            wordlist = data.split("\n");
        }
    });
    
    $('#generateBtn').click(function() {
        var n = $('#numWordsTxt').val();
        var errBox = $('#errBox');
        if (n < 0 || n > 1000) {
            errBox.html("Error: Value must be between 0 and 1000.");
            return;
        }
        else {
            errBox.html("");
        }
        
        var area = $('#genWordsArea');
        area.val(""); // clear textarea for next use
        
        for (var i = 0; i < n; i++) {
            var r = Math.floor(Math.random() * wordlist.length);
            area.val(area.val() + wordlist[r] + " ");
        }
    });
    
});