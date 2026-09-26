const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.json({
        message: "Node.js application is running on Amazon EKS final steps ha final example information and details",
        version: "1.0.0",
        environment: process.env.NODE_ENV || "development"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

app.get("/version", (req, res) => {
    res.json({
        version: process.env.APP_VERSION || "local"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});