$(document).ready(function(){
    // reader's note
    $("#readersNote").hide();
    $('#rn_select').change(function() {
        if ($(this).is(':checked')) {
            $('#readersNote').show();
        } else {
            $('#readersNote').hide();
        }
    });

    $("#readersNoteSpan").hide();
    $('#rn_select').change(function() {
        if ($(this).is(':checked')) {
            $('#readersNoteSpan').show();
        } else {
            $('#readersNoteSpan').hide();
        }
    });

    // new recording
    $("#newRecordingSpan").hide();
    $('#nr_select').change(function() {
        if ($(this).is(':checked')) {
            $('#newRecordingSpan').show();
        } else {
            $('#newRecordingSpan').hide();
        }
    });

    // previous narrator
    $("#previousNarratorSpan").hide();
    $('#pn_select').change(function() {
        if ($(this).is(':checked')) {
            $('#previousNarratorSpan').show();
        } else {
            $('#previousNarratorSpan').hide();
        }
    });

});