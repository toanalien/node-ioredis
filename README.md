```bash
➜  node-redis git:(master) ✗ docker-compose up --build 
[+] Building 1.4s (10/10) FINISHED                                                                 
 => [internal] load build definition from Dockerfile                                          0.0s
 => => transferring dockerfile: 31B                                                           0.0s
 => [internal] load .dockerignore                                                             0.0s
 => => transferring context: 2B                                                               0.0s
 => [internal] load metadata for docker.io/library/node:14.17.3                               1.3s
 => [1/5] FROM docker.io/library/node:14.17.3@sha256:976c9107158a1c85ab0702aec5b1d56bbb85de4  0.0s
 => [internal] load build context                                                             0.0s
 => => transferring context: 10.68kB                                                          0.0s
 => CACHED [2/5] WORKDIR /usr/src/app                                                         0.0s
 => CACHED [3/5] COPY package.json .                                                          0.0s
 => CACHED [4/5] RUN yarn                                                                     0.0s
 => [5/5] COPY . .                                                                            0.0s
 => exporting to image                                                                        0.0s
 => => exporting layers                                                                       0.0s
 => => writing image sha256:9ac63c68d571467fb010de5ab20bdd23d598dfadd24863833066225539666901  0.0s
 => => naming to docker.io/library/node-redis_app                                             0.0s
[+] Running 2/2
 ⠿ Container redis  Created                                                                   0.0s
 ⠿ Container app    Recreated                                                                 0.1s
Attaching to app, redis
redis  | redis 04:26:02.43 
redis  | redis 04:26:02.46 Welcome to the Bitnami redis container
redis  | redis 04:26:02.47 Subscribe to project updates by watching https://github.com/bitnami/bitnami-docker-redis
redis  | redis 04:26:02.49 Submit issues and feature requests at https://github.com/bitnami/bitnami-docker-redis/issues
redis  | redis 04:26:02.51 
redis  | redis 04:26:02.53 INFO  ==> ** Starting Redis setup **
redis  | redis 04:26:02.67 WARN  ==> You set the environment variable ALLOW_EMPTY_PASSWORD=yes. For safety reasons, do not use this flag in a production environment.
redis  | redis 04:26:02.71 INFO  ==> Initializing Redis
redis  | redis 04:26:02.89 INFO  ==> Setting Redis config file
app    | [ioredis] Unhandled error event: Error: connect ECONNREFUSED 172.20.0.2:6379
app    |     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1148:16)
redis  | redis 04:26:03.09 INFO  ==> ** Redis setup finished! **
redis  | 
app    | [ioredis] Unhandled error event: Error: connect ECONNREFUSED 172.20.0.2:6379
app    |     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1148:16)
redis  | redis 04:26:03.22 INFO  ==> ** Starting Redis **
app    | [ioredis] Unhandled error event: Error: connect ECONNREFUSED 172.20.0.2:6379
app    |     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1148:16)
redis  | 1:C 02 Nov 2021 04:26:03.321 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis  | 1:C 02 Nov 2021 04:26:03.322 # Redis version=6.2.6, bits=64, commit=00000000, modified=0, pid=1, just started
redis  | 1:C 02 Nov 2021 04:26:03.322 # Configuration loaded
redis  | 1:M 02 Nov 2021 04:26:03.325 * monotonic clock: POSIX clock_gettime
redis  | 1:M 02 Nov 2021 04:26:03.335 * Running mode=standalone, port=6379.
redis  | 1:M 02 Nov 2021 04:26:03.335 # Server initialized
redis  | 1:M 02 Nov 2021 04:26:03.350 * DB loaded from append only file: 0.006 seconds
redis  | 1:M 02 Nov 2021 04:26:03.351 * Ready to accept connections
app    | bar
```