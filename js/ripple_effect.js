document.onclick = (event) => {
    // Create the ripple element
    const ripple = document.createElement("div");
    ripple.className = "ripple";
  
    // Set initial position based on click event
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;
  
    // Add animation and cleanup
    ripple.style.animation = `ripple-effect .4s linear`;
    ripple.onanimationend = () => {
      document.body.removeChild(ripple);
    };
  
    // Append the ripple to the body
    document.body.appendChild(ripple);
  };
  
  // Optional: Prevent clicks on the ripple element from triggering another ripple
  const ripple = document.querySelector('.ripple');
  if (ripple) {
    ripple.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
  
