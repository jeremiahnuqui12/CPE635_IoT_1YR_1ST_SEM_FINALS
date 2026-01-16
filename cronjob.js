const cron = require('node-cron');
const indexController = require('./controller/index');


// Runs every day at 8:00 AM
cron.schedule('* * * * *', async () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const time_now = `${hours}:${minutes}`;
    // console.log(time_now); // "14:32"
    console.log("Cronjob running ", time_now);
    indexController.checkIfFeedingTime();
});
