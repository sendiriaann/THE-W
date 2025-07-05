// Function to calculate time difference and update HTML
function updateLastStockTaken() {
    const lastStockTime = new Date("2023-07-30T06:10:00");
    const currentTime = new Date();
  
    const timeDifference = currentTime - lastStockTime;
  
    // Convert milliseconds to hours, minutes, and seconds
    const hours = Math.floor(timeDifference / 3600000);
    const minutes = Math.floor((timeDifference % 3600000) / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);
  
    const formattedTime = `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  
    // Update the HTML with the elapsed time
    const lastStockTakenElement = document.getElementById("lastStockTaken");
    lastStockTakenElement.textContent = `${formattedTime}`;
  }
  
  // Call the function to update the HTML
  updateLastStockTaken();
  
  // Update the time every second to keep it dynamic
  setInterval(updateLastStockTaken, 1000);
  