import { app, port } from "./app";



app.listen(3001, () => {
    console.log("HTTP server running on port "+port)
})