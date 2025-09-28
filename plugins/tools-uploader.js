import { createHash} from 'crypto'
import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import { FormData, Blob} from "formdata-node"
import { fileTypeFromBuffer} from "file-type"
import crypto from "crypto"

const handler = async (m, { conn, command, usedPrefix, text}) => {
  try {
    let q = m.quoted? m.quoted: m
    let mime = (q.msg || q).mimetype || ''
    switch (command) {
      case 'tourl': {
        if (!mime) return conn.reply(m.chat, `❀ Por favor, responde a una *Imagen* o *Vídeo.*`, m)
        await m.react('🕒')
        const media = await q.download()
        const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)

        // Subida a fedexyz-api.vercel.app
        const { ext, mime: fileMime} = (await fileTypeFromBuffer(media)) || {}
        const blob = new Blob([media.toArrayBuffer()], { type: fileMime})
        const formData = new FormData()
        formData.append("image", blob, `upload.${ext}`)

        const response = await fetch("https://fedexyz-api.vercel.app/api/upload", {
          method: "POST",
          body: formData
})

        const result = await response.json()
        if (!result.url) throw new Error("No se pudo subir la imagen")

        const link = result.url
        const txt = `乂  *L I N K - E N L A C E* 乂\n\n*» Enlace*: ${link}\n*» Tamaño*: ${formatBytes(media.length)}\n*» Expiración*: ${isTele? 'No expira': 'Desconocido'}\n\n> *${dev}*`
        await conn.sendFile(m.chat, media, 'thumbnail.jpg', txt, fkontak)
        await m.react('✔️')
        break
}

      case 'catbox': {
        if (!mime) return conn.reply(m.chat, `❀ Por favor, responde a una *Imagen* o *Vídeo.*`, m)
        await m.react('🕒')
        const media = await q.download()
        const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
        const link = await catbox(media)
        const txt = `*乂 C A T B O X - U P L O A D E R 乂*\n\n*» Enlace*: ${link}\n*» Tamaño*: ${formatBytes(media.length)}\n*» Expiración*: ${isTele? 'No expira': 'Desconocido'}\n\n> *${dev}*`
        await conn.sendFile(m.chat, media, 'thumbnail.jpg', txt, fkontak)
        await m.react('✔️')
        break
}
}
} catch (error) {
    await m.react('✖️')
    await conn.reply(m.chat, `⚠︎ Se ha producido un problema.\n> Usa *${usedPrefix}report* para informarlo.\n\n${error.message}`, m)
}
}

handler.help = ['tourl', 'catbox']
handler.tags = ['tools']
handler.command = ['tourl', 'catbox']

export default handler

function formatBytes(bytes) {
  if (bytes === 0) return '0 B'
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`
}

async function catbox(content) {
  const { ext, mime} = (await fileTypeFromBuffer(content)) || {}
  const blob = new Blob([content.toArrayBuffer()], { type: mime})
  const formData = new FormData()
  const randomBytes = crypto.randomBytes(5).toString("hex")
  formData.append("reqtype", "fileupload")
  formData.append("fileToUpload", blob, randomBytes + "." + ext)
  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64)"
}
})
  return await response.text()
}
