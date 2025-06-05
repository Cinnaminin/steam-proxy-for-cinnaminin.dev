const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const STEAM_API_KEY = process.env.STEAM_API_KEY;

app.get('/steam/summary/:steamid', async (req, res) => {
  const { steamid } = req.params;
  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${STEAM_API_KEY}&steamids=${steamid}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.get('/steam/level/:steamid', async (req, res) => {
  const { steamid } = req.params;
  const url = `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${STEAM_API_KEY}&steamid=${steamid}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.get('/steam/games/:steamid', async (req, res) => {
  const { steamid } = req.params;
  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${steamid}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
