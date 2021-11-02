const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_URL);
redis.set("foo", "bar");

redis.get("foo").then(function (result) {
    console.log(result); // Prints "bar"
})