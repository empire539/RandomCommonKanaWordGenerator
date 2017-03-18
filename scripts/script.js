$(document).ready(function() {
    // Load words
    var wordlist = [];
    var wordlist2 = [];
    
    $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/empire539/RandomCommonKanaWordGenerator/master/data/common.txt",
        contentType: 'text/plain; charset=utf-8',
        dataType: "text",
        cache: false, 
        success: function(data) {
            wordlist = data.split("\r\n");
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
