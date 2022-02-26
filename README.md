# Thirukkural API

![build-test](https://github.com/mskian/thirukkural-api/workflows/build-test/badge.svg)  

Thirukkural JSON API Build using Express API Server.

> Better self Host this API Service for 100% Uptime

```sh
http://localhost:4001/ - # Get Random Kural
http://localhost:4001/<0 to 1329> # http://localhost:4001/25 - Get Kural by No
```

## API Data 🍘

Tirukkuṛaḷ Data From - [@tk120404/thirukkural](https://github.com/tk120404/thirukkural)

## Features ✨

- Express for API server
- CORS Headers for API Restriction
- API Cache Module for Caching the API data `app.get('/:id', cache('1 hour')`
- Hosted at [railway.app](https://railway.app?referralCode=CyugQn)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Fmskian%2Fthirukkural-api.git)

## usage 📝

- Clone or Download this Repo
- install dependencies

```sh
yarn
```

- Development

```sh
yarn dev
```

- Production

```sh
yarn start
```

## LICENSE ✅

MIT
