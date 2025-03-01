const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_53_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg0LFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MixcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTMndiMUgvWmI3bDJ0RnM1TnYwblY1NWVuakVpSUg5OG42OWUxTGU3OXNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpSUg1RGFuV1RXdVhDWHFfcDAtNXNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg4MzA5YWM2LWQ3OWMtNGJiYi1hNTA0LWM2YjVlMzY5ZjEyMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDc5LFxuICAgICAgNzIsXG4gICAgICAyMixcbiAgICAgIDgwLFxuICAgICAgMjQyLFxuICAgICAgMTA3LFxuICAgICAgMTQwLFxuICAgICAgMjIzLFxuICAgICAgODQsXG4gICAgICAxNTgsXG4gICAgICAxODIsXG4gICAgICAxODksXG4gICAgICAxMjgsXG4gICAgICA4NixcbiAgICAgIDI0NyxcbiAgICAgIDI1NCxcbiAgICAgIDE2NyxcbiAgICAgIDE2LFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTE3LFxuICAgICAgMTA5LFxuICAgICAgMTI4LFxuICAgICAgMjI5LFxuICAgICAgNDMsXG4gICAgICAxMzQsXG4gICAgICAyMzYsXG4gICAgICAxNjcsXG4gICAgICAzNyxcbiAgICAgIDIxMCxcbiAgICAgIDE1NSxcbiAgICAgIDEzMCxcbiAgICAgIDM1LFxuICAgICAgMTMwLFxuICAgICAgMjM2LFxuICAgICAgNDIsXG4gICAgICAxNyxcbiAgICAgIDE1NixcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzOFBaOUM4RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyOTU2NTY1MzozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEwMDI5MDU5NDAzODc5OjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovMXArVURFTmI1aXI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaHFtZE5tb3ptUzlyNDRrTDZJWFNXRGNVMndXdzNYVi9DVlJVUkdEWnBoVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5cGViTEIraVpHa2s2aW4ySEdvdFQwS0xIWDUwOW1xa3podGxsMWZ1K2lHOXllS2tLV2tDY01aa0UyaVgvbmtFaDVZSmIzd21GTVdyZVl3VzhwK2hEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxOTRwanExMEwybkF2VWZ1SmJlRkd2dnRaTmFmcVdYUTVaOXRqVXp3c2U4YTlhZyt1clpTRU1HRmh5ckV4bTd1YnhYNlVUeE84VzlXQkdzZ3VjcEpnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI5NTY1NjUzOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDA4MTU1Nzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "John Bot",
  ownername:process.env.OWNER_NAME|| "Chrizzy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
