import app from "./src/middleware/appRouteMiddlewares.js";
import moment from "moment"


app.get('/', (req, res) => {

    const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    res.json(`Welcome To CI/CD......., Current Date snd Time is ${currentDateTime}`);
})


app.listen(4500, () => {
    console.log("info", `listening on port 4500`);
})
