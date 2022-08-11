# Thirukkural API

![build-test](https://github.com/mskian/thirukkural-api/workflows/build-test/badge.svg)  

Thirukkural JSON API Build using Express API Server.

> Better self Host this API Service for 100% Uptime

```sh
http://localhost:4001/ - # Get Random Kural
http://localhost:4001/<1 to 1330> # http://localhost:4001/25 - Get Kural by No
```

## API Data 🍘

Tirukkuṛaḷ Data From - [@tk120404/thirukkural](https://github.com/tk120404/thirukkural)

## Features ✨

- Express for API server
- CORS Headers for API Restriction
- API Cache Module for Caching the API data `app.get('/:id', cache('1 hour')`

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
