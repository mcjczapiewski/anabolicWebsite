$(document).on("change keyup", ".required", function () {
    let Disabled = true;
    $(".required").each(function () {
        let value = this.value;
        if (value && value.trim() != "") {
            Disabled = false;
        } else {
            Disabled = true;
            return false;
        }
    });

    if (Disabled) {
        $(document.getElementsByName("send-button")).prop("disabled", true);
    } else {
        $(document.getElementsByName("send-button")).prop("disabled", false);
    }
});

$(document).on("submit", function () {
    let errorElems = document.getElementsByClassName("error-msg");
    for (i = 0; i < errorElems.length; i++) {
        errorElems[i].innerHTML = "";
    }
    // document.getElementById("mail-error").innerHTML = "";
    let inputFieldValid = true;
    let letterCheckRegex = /[a-zA-Z]| /;
    let userName = document.getElementById("first-name").value;
    let userEmail = document.getElementById("user-email").value;
    const userNameArr = userName.split("");
    const nameFieldWords = userName.split(" ");
    if (
        userName.trim() == "" ||
        !userNameArr.every((x) => letterCheckRegex.test(x)) ||
        !nameFieldWords.every((x) => /^[A-Z]/.test(x)) ||
        userName.length > 30
    ) {
        inputFieldValid = false;
        document.getElementById("name-error").innerHTML =
            "Please check if your name is correct.";
    }
    if (userEmail.trim() == "" || !/^.+@.+\..+$/.test(userEmail)) {
        inputFieldValid = false;
        document.getElementById("mail-error").innerHTML =
            "Please check if your mail is correct.";
    }

    if (!inputFieldValid) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        alert("The message has been sent.");
        document.getElementById("contact-form").reset();
        setTimeout(function(){window.location.reload();},10);
    }
});
