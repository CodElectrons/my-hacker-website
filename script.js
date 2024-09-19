document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("userInput");
    const outputDiv = document.querySelector(".output");

    // Function to handle the input
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const typedText = inputField.value;
            inputField.value = "";

            // Add the typed command to the output
            outputDiv.innerHTML += `<p><span class="prompt">root@hackerspace:~$</span> ${typedText}</p>`;
            
            // Mock a response for fun
            if (typedText.toLowerCase() === "help") {
                outputDiv.innerHTML += `<p>Available commands: help, exit, hack, clear</p>`;
            } else if (typedText.toLowerCase() === "hack") {
                outputDiv.innerHTML += `<p>Initiating hack...<br>Hack successful!</p>`;
            } else if (typedText.toLowerCase() === "exit") {
                outputDiv.innerHTML += `<p>Goodbye, hacker!</p>`;
            } else if (typedText.toLowerCase() === "clear") {
                outputDiv.innerHTML = `<p><span class="prompt">root@hackerspace:~$</span> ${typedText}</p>`;
            } else {
                outputDiv.innerHTML += `<p>Unknown command: ${typedText}</p>`;
            }
            
            // Scroll to the bottom of the terminal
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    });
});