$(document).ready(function () {

    let isFriendPhoto = true;

    // 🔤 Typing Effect Function
    function typeText(element, text) {
        let i = 0;
        $(element).text("");

        let typing = setInterval(() => {
            if (i < text.length) {
                $(element).append(text.charAt(i));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 40);
    }

    // Initial typing
    typeText("#wish", "Wishing you happiness, success & lots of smiles ✨");

    // 🔵 Image Hover Effect
    $("#birthdayImage").hover(
        function () {
            $(this).css({
                "transform": "scale(1.1)",
                "box-shadow": "0 0 25px rgba(77, 208, 225, 0.9)"
            });
        },
        function () {
            $(this).css({
                "transform": "scale(1)",
                "box-shadow": "none"
            });
        }
    );

    // 🖱️ Image Click – Photo Change
    $("#birthdayImage").click(function () {

        $(".photo-hint").fadeOut();

        if (isFriendPhoto) {
            $(this).fadeOut(300, function () {
                $(this)
                    .attr("src", "together.jpg")
                    .fadeIn(300);
            });

            typeText("#wish", "Bhai ho toh tu jaisa ho 💙🤝");

        } else {
            $(this).fadeOut(300, function () {
                $(this)
                    .attr("src", "friend.jpg")
                    .fadeIn(300);
            });

            typeText("#wish", "Wishing you success, strength & good health 💪🔥");
        }

        isFriendPhoto = !isFriendPhoto;
    });

    // 🎁 SURPRISE BUTTON – FINAL
    $("#surpriseBtn").click(function () {

        // Change background
        $("body").css(
            "background",
            "linear-gradient(135deg, #000428, #004e92)"
        );

        // Change heading + typing text
        typeText("#name", "Brother From Another Mother 😎");
        typeText("#wish", "Stay strong, stay winning. Best wishes always 💙🔥");

        // Button effect
        $(this)
            .text("🎉 Surprise Unlocked")
            .prop("disabled", true)
            .css({
                "opacity": "0.7",
                "cursor": "not-allowed"
            });

        // Confetti
        $("#confetti").fadeIn();
        setTimeout(() => {
            $("#confetti").fadeOut();
        }, 3000);

        // Music
        let music = document.getElementById("bgMusic");
        music.volume = 0.3;
        music.play();

        // Mobile vibration
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }
    });

    // 🌈 THEME BUTTONS FIX
    $(".theme-btn.light").click(function () {
        $("body").css("background", "linear-gradient(135deg, #74ebd5, #ACB6E5)");
        $(".birthday-card").css({
            "background": "rgba(255,255,255,0.35)",
            "border": "2px solid rgba(0,150,199,0.4)"
        });
    });

    $(".theme-btn.dark").click(function () {
        $("body").css("background", "linear-gradient(135deg, #0f2027, #203a43, #2c5364)");
        $(".birthday-card").css({
            "background": "rgba(0,0,0,0.45)",
            "border": "2px solid rgba(77,208,225,0.4)"
        });

        $("h1, h2, #wish, .photo-hint").css("color", "#e0f7fa");
    });

    $(".theme-btn.party").click(function () {
        $("body").css("background", "linear-gradient(135deg, #ff9a9e, #fad0c4)");
        $("#confetti").fadeIn();

        setTimeout(() => {
            $("#confetti").fadeOut();
        }, 3000);
    });



});

// 🔁 Double click shake
$("#birthdayImage").dblclick(function () {
    $(this).addClass("shake");
    setTimeout(() => $(this).removeClass("shake"), 400);
});

// ✨ Glow pulse
setInterval(() => {
    $("#birthdayImage").css("box-shadow", "0 0 30px rgba(77,208,225,0.9)");
    setTimeout(() => {
        $("#birthdayImage").css("box-shadow", "none");
    }, 500);
}, 3000);
