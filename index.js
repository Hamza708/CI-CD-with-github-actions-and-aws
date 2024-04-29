import app from "./src/middleware/appRouteMiddlewares.js";
// import moment from "moment"


app.get('/', (req, res) => {
    res.send("Hello World.......")
})


app.listen(4500, () => {
    console.log("info", `listening on port 4500`);
})
