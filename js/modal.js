window.onload = function () {
    var modal = document.getElementById('myModal'); // Get the modal
    var desktopNavBtn = document.getElementById("desktop-nav-btn");
    var mobileNavBtn = document.getElementById("mobile-nav-btn"); // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn2");
    var btn3 = document.getElementById("myBtn3");
    var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

    // When the user clicks the button, open the modal
    const openModal = function () {
        modal.style.display = "block";
    }

    desktopNavBtn.onclick = openModal;
    mobileNavBtn.onclick = openModal;

    btn2.onclick = function () {
        modal.style.display = "block";
    }

    btn3.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on "Sorry, I'm not interested, close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}

