const express = require('express');
const fetch = require('node-fetch');
const app = express();

const STEAM_API_KEY = process.env.STEAM_API_KEY;

app.get('/steam/summary/:steamid', async (req, res) => {
  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${STEAM_API_KEY}&steamids=${req.params.steamid}`;
  const data = await fetch(url).then(r => r.json());
  res.json(data);
});

app.get('/steam/level/:steamid', async (req, res) => {
  const url = `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${STEAM_API_KEY}&steamid=${req.params.steamid}`;
  const data = await fetch(url).then(r => r.json());
  res.json(data);
});

app.get('/steam/games/:steamid', async (req, res) => {
  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${req.params.steamid}`;
  const data = await fetch(url).then(r => r.json());
  res.json(data);
});

app.listen(process.env.PORT || 3000);
