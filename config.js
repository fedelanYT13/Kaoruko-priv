import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
   '5491156178758', '5491137612743'
]

global.creadorbot = [
   '5491156178758', '5491137612743'
]

global.mods = []
global.prems = []

global.libreria = 'Baileys'
global.baileys = 'V 7.0.0-rc.3' 
global.vs = '2.2.0'
global.nameqr = 'Kaoruko bot'
global.namebot = 'Kaoruko Wa-Bot'
global.sessions = 'auth/authv2'
global.jadi = 'jadibots' 
global.yukiJadibts = true // Activado

//*──────────────────────────────*

global.packname = '✧𝐀𝐥𝐲𝐚 𝐖𝐚-𝐁𝐨𝐭❖'
global.botname = '𝐀𝐥𝐲𝐚 𝐖𝐚-𝐁𝐨𝐭'
global.wm = '★𝐀𝐥𝐲𝐚 𝐖𝐚-𝐁𝐨𝐭 '
global.author = '𝐌𝐚𝐝𝐞 𝐖𝐢𝐭𝐡 𝐁𝐲 𝐑𝐲𝐮𝐬𝐞𝐢 𝐂𝐥𝐮𝐛 𝐈𝐧𝐟𝐢𝐧𝐢𝐭𝐲'
global.dev = '𝐌𝐚𝐝𝐞 𝐖𝐢𝐭𝐡 𝐁𝐲 𝐑𝐲𝐮𝐬𝐞𝐢 𝐂𝐥𝐮𝐛 𝐈𝐧𝐟𝐢𝐧𝐢𝐭𝐲'
global.espera = '✰ 𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐄𝐬𝐭𝐚𝐦𝐨𝐬 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 ✦'
global.namebot = '𝐀𝐥𝐲𝐚 𝐒𝐚𝐧 𝐖𝐚-𝐁𝐨𝐭'
global.textbot = `𝐀𝐥𝐲𝐚, 𝐌𝐚𝐝𝐞 𝐖𝐢𝐭𝐡 𝐁𝐲 𝐑𝐲𝐮𝐬𝐞𝐢 𝐂𝐥𝐮𝐛`
global.vs = '2.2.0'
global.publi = '✰𝐒𝐢𝐠𝐮𝐞 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥 ♥︎'
global.currency = "AlyaCoins"
global.banner = "https://cdn.stellarwa.xyz/files/1758889351528.jpeg"
global.icono = "https://cdn.stellarwa.xyz/files/1758889351528.jpeg"
global.catalogo = fs.readFileSync('./media/catalogo.jpg')

//*──────────────────────────────*

global.imagen1 = fs.readFileSync('./media/menus/Menu.jpg')
global.imagen2 = fs.readFileSync('./media/menus/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menus/Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./media/catalogo.jpg')

//*──────────────────────────────*

global.repobot = 'https://github.com/Angelithoxz/Nino-Nakano'
global.grupo = 'https://chat.whatsapp.com/LYLiORNWzHkIsiecvCCdgK?mode=ems_copy_t'
global.gsupport = 'https://chat.whatsapp.com/Hk7LRLL4uJP5pHYAaxusLn?mode=ems_copy_t'
global.channel2 = 'https://whatsapp.com/channel/0029VbBC3hX3mFY5MseNZS2a'
global.channel = 'https://whatsapp.com/channel/0029Vaz6RTR0LKZIKwudX32x'
global.insta = 'https://www.instagram.com/dev_fedexyz13'

global.ch = {
  ch1: "120363374826926142@newsletter"
} // ← CERRADO CORRECTAMENTE ✅

//*──────────────────────────────*

global.estilo = { 
  key: {  
    fromMe: false, 
    participant: `0@s.whatsapp.net`, 
    ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) 
  }, 
  message: { 
    orderMessage: { 
      itemCount : -999999, 
      status: 1, 
      surface : 1, 
      message: '👑【✫𝐑𝐲𝐮𝐬𝐞𝐢  乂 𝐂𝐥𝐮𝐛✫】☆', 
      orderTitle: 'Bang', 
      thumbnail: global.catalogo, 
      sellerJid: '0@s.whatsapp.net'
    }
  }
}

//*──────────────────────────────*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*──────────────────────────────*

global.multiplier = 69 

//*──────────────────────────────*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
