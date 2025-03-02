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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_49_03_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJydWR2RkZ2NFBRekROVFZYOXNncFAwL1lvTVBzZnc5bVhxaERRVUFCWUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVmb2tuV29RVHFHY3JGZUs2MVlMcHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjNkMTBmMDktMGNhMy00ZDM3LTljMTgtM2E0YmRhYTA4YWRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDYyLFxuICAgICAgMTU1LFxuICAgICAgMjQ3LFxuICAgICAgMTgzLFxuICAgICAgMTQ1LFxuICAgICAgMTM5LFxuICAgICAgMjUzLFxuICAgICAgMTYsXG4gICAgICAyNDIsXG4gICAgICAxNzUsXG4gICAgICAxMTIsXG4gICAgICAyNDAsXG4gICAgICAyNTUsXG4gICAgICAxMDAsXG4gICAgICAyMzMsXG4gICAgICAxMTksXG4gICAgICAyMzIsXG4gICAgICAzMixcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICAyNTMsXG4gICAgICAxOTAsXG4gICAgICAxOTcsXG4gICAgICAxNzEsXG4gICAgICAyMjIsXG4gICAgICAyMDAsXG4gICAgICAxLFxuICAgICAgMjE1LFxuICAgICAgMTQ5LFxuICAgICAgMTMxLFxuICAgICAgNjIsXG4gICAgICAyNDIsXG4gICAgICAyNTEsXG4gICAgICAxMixcbiAgICAgIDI4LFxuICAgICAgNTQsXG4gICAgICAxMjUsXG4gICAgICAzMSxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBTjhBTUZDRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNjEwNzgyNDoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE4NDk0MDk2NDA0NjUwOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t6TzkvQUhFTXlua2I0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwick4vWG9NbW9TYjB2aUxobG9sMlpOaE5YNkVWQzBDQ3pweko1elg1dHRoYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0eThma2FRV0Q0R3VZdDNrUnE1REFJK2xEUFVKSzQ3dGZ1d2s4d2lsTWJYdUJTa2dPTDJYQ01pbTRrSDRlTDhYWjZJQ0dZT1pjSVhGdEhxWWFaM0lEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhbVZqa3I0eTRCVTRsYVFEUm9BL0l2WWl4aFFic3BObW5ZVHA1aHdyam1TM0YwM2ZJNjBSM2hQYlE0SWx4WGlrd1dINDlzdmttSGRwZGhQam9NSjNqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE2MTA3ODI0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDkxOTc2MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail",
  ownername:process.env.OWNER_NAME|| "Kiara",


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
