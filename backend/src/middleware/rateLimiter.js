import ratelimit from '../config/upstash.js';

const rateLimiter = async (req, res, next) => {
    try {
        //'my-limit-key' normaly is user identifier or IP address
        // In this case, we use a static key for demonstration purposes.
        const {success} = await ratelimit.limit('my-limit-key');
        if (!success) {
            return res.status(429).send("Too many requests, please try again later.");
        }
        next();

    } catch (error) {
        console.error("Rate limiter error:", error);
        next(error);
    }
}
export default rateLimiter;