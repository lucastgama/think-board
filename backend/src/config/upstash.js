import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '20 s'),
});


export const redis = Redis.fromEnv({
    maxRetriesPerRequest: 1,
    retryStrategy: (times) => {
        if (times > 3) {
      return null;
    }
    return Math.min(times * 100, 3000);
  },
});

export default ratelimit;