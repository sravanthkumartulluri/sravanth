function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
  
    // Format the date and time
    const options = { weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedTime = now.toLocaleString('en-US', options);
  
    // Update the element's text content
    currentTimeElement.textContent = formattedTime;
  }
  
  // Call the function initially and set up an interval to update every second
  updateTime();
  setInterval(updateTime, 1000);