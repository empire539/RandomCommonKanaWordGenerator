$(document).ready(function() {
    // Load words
    var wordlist = [];
    var wordlist2 = [];
    
    $.ajax({
        type: "GET",
        url: "https://thepiotug.github.io/Kana_Word_Gen_Check/data/hiragana_words.txt",
        contentType: 'text/plain; charset=utf-8',
        dataType: "text",
        cache: false, 
        success: function(data) {
            wordlist = data.split("\r\n");
        }
    });
    $.ajax({
        type: "GET",
        url: "https://thepiotug.github.io/Kana_Word_Gen_Check/data/katakana_words.txt",
        contentType: 'text/plain; charset=utf-8',
        dataType: "text",
        cache: false, 
        success: function(data) {
            wordlist2 = data.split("\r\n");
        }
    });
    $('#generateBtn').click(function() {
        var n = $('#numWordsTxt').val();
        var hira = document.getElementById('hiragana').checked;
        var kata = document.getElementById('katakana').checked;
        var errBox = $('#errBox');
        if (n < 0 || n > 1000) {
            errBox.html("Error: Value must be between 0 and 1000.");
            return;
        }
        if (hira == false && kata == false ) {
            errBox.html("Error: None of the checkboxes were checked.")
            return;
        }
        else {
            errBox.html("");
        }
        var wlength;
        var kana = 0;
        if (hira == true) kana = kana + 1;
        if (kata == true) kana = kana + 2;
        var area = $('#genWordsArea');
        area.val(""); // clear textarea for next use
        for (var i = 0; i < n; i++) {
            if (kana == 3) wlength = wordlist.length + wordlist2.length;
            else if (kana == 2) wlength = wordlist2.length;
            else if (kana == 1) wlength = wordlist.length;
            var r = Math.floor(Math.random() * (wlength));
            if (kana == 3) {
                if(r > wordlist.length) {
                    area.val(area.val() + wordlist2[(r - wordlist.length)] + " ");
                }
                else if (r < wordlist.length){ 
                    area.val(area.val() + wordlist[r] + " ");
                }
            } else if (kana == 2) {
                area.val(area.val() + wordlist2[r] + " ");
            } else if (kana == 1) {
                area.val(area.val() + wordlist[r] + " ");
            }
        }
    });
});
