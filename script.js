document.addEventListener('DOMContentLoaded', function() {
    // Create a custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');  // Apply the cursor class
    document.body.appendChild(cursor);  // Add it to the body of the page

    // Move the cursor element with the mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;  // Position it at the mouse X
        cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;  // Position it at the mouse Y
    });

    // Add background audio
    const audio = document.createElement('audio');
    audio.autoplay = true;
    audio.loop = true;  // Loop the audio
    audio.innerHTML = `
        <source src="sm64_title_theme_march_95.mp3" type="audio/mp3">
        Your browser does not support the audio element.
    `;
    document.body.appendChild(audio);  // Append audio to the body

    // Add event listener for key press (DEBUGGING PURPOSES)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Q' || event.key === 'q') {
            // Prevent any default behavior associated with the "Q" key
            event.preventDefault();
            
            // Log to the console when "Q" is pressed
            console.log("Debug pressed on");
            
            // Redirect to the index page when "Q" is pressed
            window.location.href = 'index.html';  // Or '/' for the root
        }
    });
});
