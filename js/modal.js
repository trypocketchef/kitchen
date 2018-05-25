window.onload = function(){
    var modal = document.getElementById('myModal'); // Get the modal
    var btn = document.getElementById("myBtn"); // Get the button that opens the modal
    var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

    // When the user clicks the button, open the modal 
    btn.onclick = function() { 
        modal.style.display = "block";
    }

    // When the user clicks on "Sorry, I'm not interested, close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

