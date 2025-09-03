import rateLimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
    try{
        const {success}  = await rateLimit.limit("my-limit-key");
        if (!success){
            return res.status(429).json({
                "message" : "too many requests try again later"})
        }
        next()
    }
    catch(err){
        console.log(err);
        next(err);
    }
}

export default rateLimiter;