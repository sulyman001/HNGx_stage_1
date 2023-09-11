// Function to get current day of the week
function getCurrentDayOfTheWeek(){
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

// Function to get the current UTC time
function getCurrentUTCTime() {
    const date = new Date();
    const currentTime = date.getTime();

    // Display the time
    document.getElementById('time').innerHTML = `Current UTC Time: ${currentTime} milliseconds`;
};
setInterval(getCurrentUTCTime, 1000);

// Display the day
document.getElementById('day').innerHTML = `Current Day of the Week:  ${getCurrentDayOfTheWeek()}`;