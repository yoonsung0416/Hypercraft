const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
fs.mkdirSync(DATA_DIR, { recursive: true });
function readDb(){ try{return JSON.parse(fs.readFileSync(USERS_FILE,"utf8"));}catch{return {};}}
function writeDb(db){fs.writeFileSync(USERS_FILE,JSON.stringify(db,null,2),{mode:0o600});}
app.use(express.json({limit:"256kb"}));
app.use(express.static(path.join(__dirname, "public")));
// Persistent game profile API. Passwords are never accepted by these save/load endpoints.
app.get("/api/profile/:user", (req,res)=>{
  const user=String(req.params.user||"").trim();
  if(!/^[\w가-힣-]{3,24}$/.test(user)) return res.status(400).json({error:"invalid_user"});
  const db=readDb(); res.json({profile:db[user]?.profile || null});
});
app.put("/api/profile/:user", (req,res)=>{
  const user=String(req.params.user||"").trim();
  if(!/^[\w가-힣-]{3,24}$/.test(user)) return res.status(400).json({error:"invalid_user"});
  if(!req.body || typeof req.body.profile!=="object" || JSON.stringify(req.body.profile).length>200000) return res.status(400).json({error:"invalid_profile"});
  const db=readDb(); db[user]=db[user]||{}; db[user].profile=req.body.profile; db[user].updatedAt=new Date().toISOString(); writeDb(db);
  res.json({ok:true,updatedAt:db[user].updatedAt});
});
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(PORT, "0.0.0.0", () => console.log(`Hypercraft running on port ${PORT}`));
