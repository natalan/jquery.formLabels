SyntaxHighlighter.config.clipboardSwf = 'http://o2v.net/wp-content/plugins/syntax-highlighter-and-code-prettifier/scripts/clipboard.swf';
SyntaxHighlighter.all();

jQuery(function ($) {
    "use strict";
    var activeForm = null,
        handleTabSwitch = function (active) {
            // destroy instance of formLabel if it's not null
            if (activeForm !== null) {
                activeForm.destroy();
            }

            if (active === 0) {
                activeForm = $("#form1").formLabels();
            } else if (active === 1) {
                activeForm = $("#form2").formLabels({
                    excludeElts: 'input[name=secretWord]'
                });
            } else if (active === 2) {
                activeForm = $("#form3").formLabels({
                    labelParent: 'body',
                    refreshOnResize: true
                });
            } else if (active === 3) {
                activeForm = $("#form4").formLabels({
                    safemode: true
                });
            } else if (active === 4) {
                activeForm = $("#form5").formLabels({
                    labelParent: '#labels'
                });
            } else if (active === 5) {
                activeForm = $("#form6").formLabels({
                    semantic : false
                });
            } else if (active === 6) {
                activeForm = $("#form7").formLabels({
                    labelParent : 'body'
                });
            }
        };

    $("#tabs").tabs({
        activate: function (event, ui) {
            handleTabSwitch(ui.newTab.index());
        }
    });

    $("#refreshB").on("click", function () {
        activeForm.refreshLabels();
        $("#status-message").html("Labels  refreshed...");
    });

    $("form").submit(function (e) {
        var formVal = $(this).serialize();
        $(".group:visible div.results").html(formVal);
        e.preventDefault();
    });

    // mark first tab as active
    handleTabSwitch(0);
});