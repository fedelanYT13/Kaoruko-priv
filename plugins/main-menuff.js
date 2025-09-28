let handler = async (m, { conn}) => {

let img = 'https://qu.ax/WyNMq.jpg' 

let texto = `>> 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 👑

👑 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 👑
✨ ➤ 🎟️.donarsala
✨ ➤ 🗺️.mapa (mapa aleatorio)

👑 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 👑
📌 ➤ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
📌 ➤ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2

▸▸ 👑 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 👑 ◂◂
⚔️ ➤.4𝘷𝘴4
⚔️ ➤.6𝘷𝘴6
⚔️ ➤.8𝘷𝘴8
⚔️ ➤.𝘴𝘤𝘳𝘪𝘮
⚔️ ➤.12𝘷𝘴12
⚔️ ➤.16𝘷𝘴16
⚔️ ➤.20𝘷𝘴20
⚔️ ➤.24𝘷𝘴24

> 𝐌𝐚𝐝𝐞 𝐁𝐲 𝑴𝒐𝒐𝒏𝒇𝒓𝒂𝒓𝒆 𝑻𝒆𝒂𝒎 ☽
`

const fkontak = {
  "key": {
    "participants": "0@s.whatsapp.net",
    "remoteJid": "status@broadcast",
    "fromMe": false,
    "id": "Halo"
},
  "message": {
    "contactMessage": {
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}
},
  "participant": "0@s.whatsapp.net"
}

await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}

handler.help = ['menuff']
handler.tags = ['crow']
handler.command = ['menuff', 'menufreefire']
handler.register = true

export default handler
