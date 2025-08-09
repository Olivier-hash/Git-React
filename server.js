const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");


client.on("error", (err) => console.error("Redis Client Error", err));
client.connect();

// Middleware: Check cache
async function checkCache(req, res, next) {
    const { username } = req.params;

    try {
        const data = await client.get(username);
        if (data) {
            console.log("Cache hit");
            return res.json(JSON.parse(data));
        } else {
            console.log("Cache miss");
            next();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
}

// Route: Fetch GitHub user profile (example)
app.get("/user/:username", checkCache, async (req, res) => {
    const { username } = req.params;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        // Store in Redis with TTL = 1 hour
        await client.setEx(username, 3600, JSON.stringify(data));

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch user data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

const app = express();
const PORT = 5000;


client.on("error", (err) => console.error("Redis Client Error", err));
client.connect();

// Middleware: Check cache
async function checkCache(req, res, next) {
    const { username } = req.params;

    try {
        const data = await client.get(username);
        if (data) {
            console.log("Cache hit");
            return res.json(JSON.parse(data));
        } else {
            console.log("Cache miss");
            next();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
}

// Route: Fetch GitHub user profile (example)
app.get("/user/:username", checkCache, async (req, res) => {
    const { username } = req.params;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        // Store in Redis with TTL = 1 hour
        await client.setEx(username, 3600, JSON.stringify(data));

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch user data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
