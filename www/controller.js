$(document).ready(function () {

    // Display Speak Message
    eel.expose(DisplayMessage)
    function DisplayMessage(message) {
        $(".siri-message .texts li").text(message);
        $('.siri-message').textillate('start');
    }

    // Display hood
    eel.expose(ShowHood)
    function ShowHood() {
        $("#Oval").attr("hidden", false);
        $("#SiriWave").attr("hidden", true);
    }

    eel.expose(senderText)
    function senderText(message) {
        var chatBox = document.getElementById("chat-canvas-body");
        if (message.trim() !== "") {
            chatBox.innerHTML += `<div class="row justify-content-end mb-4"><div class="width-size"><div class="sender_message">${message}</div></div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    eel.expose(receiverText)
    function receiverText(message) {
        var chatBox = document.getElementById("chat-canvas-body");
        if (message.trim() !== "") {
            chatBox.innerHTML += `<div class="row justify-content-start mb-4"><div class="width-size"><div class="receiver_message">${message}</div></div></div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    eel.expose(hideLoader)
    function hideLoader() {
        $("#Loader").attr("hidden", true);
        $("#FaceAuth").attr("hidden", false);
    }

    eel.expose(hideFaceAuth)
    function hideFaceAuth() {
        $("#FaceAuth").attr("hidden", true);
        $("#FaceAuthSuccess").attr("hidden", false);
    }

    eel.expose(hideFaceAuthSuccess)
    function hideFaceAuthSuccess() {
        $("#FaceAuthSuccess").attr("hidden", true);
        $("#HelloGreet").attr("hidden", false);
    }

    eel.expose(hideStart)
    function hideStart() {
        $("#Start").attr("hidden", true);
        setTimeout(function () {
            $("#Oval").addClass("animate__animated animate__zoomIn");
        }, 1000);
        setTimeout(function () {
            $("#Oval").attr("hidden", false);
        }, 1000);
    }

    // ─────────────────────────────────────────────
    // CLAP-TO-WAKE  — dramatic agent wake sequence
    // ─────────────────────────────────────────────
    eel.expose(clapWake)
    function clapWake() {

        // If still on the Start page, skip past it
        if (!$("#Start").attr("hidden")) {
            $("#Start").attr("hidden", true);
        }

        $("#SiriWave").attr("hidden", true);
        $("#Oval").removeClass("animate__zoomIn animate__zoomOut clap-pulse");
        $("#Oval").attr("hidden", false);

        // 1. Screen flash burst on clap
        $("body").addClass("clap-flash");
        setTimeout(function () { $("body").removeClass("clap-flash"); }, 180);

        // 2. Three expanding ripple rings
        _spawnRipple();
        setTimeout(_spawnRipple, 130);
        setTimeout(_spawnRipple, 280);

        // 3. Orb pulses in dramatically
        setTimeout(function () {
            $("#Oval").addClass("clap-pulse");
            setTimeout(function () { $("#Oval").removeClass("clap-pulse"); }, 750);
        }, 80);

        // 4. Status text flickers in
        setTimeout(function () {
            DisplayMessage("Online. Ready.");
        }, 420);
    }

    function _spawnRipple() {
        var ripple = $(`<div class="clap-ripple"></div>`);
        $("#JarvisHood").append(ripple);
        setTimeout(function () { ripple.remove(); }, 900);
    }

});
