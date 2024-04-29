import app from "./src/middleware/appRouteMiddlewares.js";


app.get('/', (req, res) => {
    res.json('Welcome To CI/CD..asdasdasdasds')
})


app.get('/abc', (req, res) => {
    res.json('Welcome To CI/CD..gooi')
})


app.listen(4500, () => {
    console.log("info", `listening on port 4500`);
})
