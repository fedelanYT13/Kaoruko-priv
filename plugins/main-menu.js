import { promises as fs } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'crow': '👑「 *`MENU ALYA`* 」👑',
  'main': '✦♥︎「INFO」☆',
  'buscador': '✦♥︎「BUSQUEDAS」☆',
  'fun': '✦♥︎「JUEGOS」☆',
  'socket': '✦♥︎「SUB BOTS」☆',
  'rpg': '✦♥︎「RPG」☆',
  'gacha': '✦♥︎「GACHA」☆',
  'sticker': '✦♥︎「STICKERS」☆',
  'anime': '✦♥︎「ANIMES」☆',
  'database': '✦♥︎「DATABASE」☆',
  'group': '✦♥︎「GRUPOS」☆',
  'nable': '✦♥︎「ON / OFF」☆', 
  'descargas': '✦♥︎「DESCARGAS」☆',
  'tools': '✦♥︎「HERRAMIENTAS」☆',
  'info': '✦♥︎「INFORMACIÓN」☆',
  'fun': '✦♥︎「FUN」☆',
}

const defaultMenu = {
  before: `☆✦♥︎☆✦♥︎☆✦♥︎☆✦♥︎☆
Hola *%name* %greeting, Para Ver Tu Perfil Usa *#perfil*
✦♥︎⊱ INFORMACIÓN DEL BOT ⊰♥︎✦
✦ Nombre: %name
✦ Nivel: %level
✦ Rol: %role
✦ Experiencia: %exp/%maxexp
✦ Usuarios Registrados: %totalreg
☆✦♥︎☆✦♥︎☆✦♥︎☆✦♥︎☆`,
  header: '✦♥︎☆ %category ☆♥︎✦\n',
  body: '✦ %cmd',
  footer: '☆♥︎✦\n',
  after: '✦♥︎☆ Powered by %me ☆♥︎✦',
}

let handler = async (m, { conn, usedPrefix: _p, text, __dirname }) => {
  try {
    let _package = JSON.parse(await fs.readFile(join(__dirname, '../package.json')).catch(_ => '{}')) || {}
    let { exp = 0, level = 0, role = 'Aldeano' } = global.db.data.users[m.sender] || {}
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let hour = new Date().getHours()
    let greeting = hour < 6 ? 'Buenas Noches 🌙' :
                   hour < 12 ? 'Buenos Días ☀️' :
                   hour < 18 ? 'Buenas Tardes 🌇' : 'Buenas Noches 🌃'
    let mediaPath = join(__dirname, '../media/menus')
    let files = await fs.readdir(mediaPath)
    let images = files.filter(f => f.match(/\.(jpe?g|png)$/i))
    let randomImage = images[Math.floor(Math.random() * images.length)]
    let imageFullPath = join(mediaPath, randomImage)
    let help = Object.values(global.plugins || {}).filter(p => !p.disabled).map(p => ({
      help: Array.isArray(p.help) ? p.help : (p.help ? [p.help] : []),
      tags: Array.isArray(p.tags) ? p.tags : (p.tags ? [p.tags] : []),
      prefix: 'customPrefix' in p,
      premium: p.premium,
    }))
    let selectedTag = text?.toLowerCase()
    let filteredTags = selectedTag && tags[selectedTag] ? { [selectedTag]: tags[selectedTag] } : tags
    let menuText = Object.keys(filteredTags).map(tag => {
      let header = defaultMenu.header.replace(/%category/g, filteredTags[tag])
      let body = help.filter(p => p.tags.includes(tag)).map(p =>
        p.help.length ? p.help.map(h => defaultMenu.body.replace(/%cmd/g, p.prefix ? h : _p + h)).join('\n') : ''
      ).join('\n')
      return `${header}\n${body}\n${defaultMenu.footer}`
    }).join('\n')
    menuText = defaultMenu.before.replace(/%name/g, name)
                                 .replace(/%greeting/g, greeting)
                 + '\n' + menuText + '\n' + defaultMenu.after.replace(/%me/g, name)
    await conn.sendMessage(m.chat, {
      image: { url: imageFullPath },
      caption: menuText.trim()
    }, { quoted: m })
  } catch (e) {
    conn.reply(m.chat, `❌ Error en el menú: ${e.message}`, m)
    throw e
  }
}

handler.help = ['menu [tag]']
handler.tags = ['main']
handler.command = ['menu', 'help', 'allmenu']
export default handler