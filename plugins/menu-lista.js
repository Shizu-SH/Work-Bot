import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let datcov = await fetch('https://latam-api.vercel.app/api/covid19?apikey=nekosmic&q=world');
	let CovidApi = await datcov.json();
	var cotext = `┏「 texto en otro color 」┓
┃➲ aqui puedes poner la marca de la empresa
┗─━─━「 🌎 」━─━─┛\n\n`
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = cotext
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦`,
rows: [
      {title: "𝗖𝗥𝗘𝗔𝗗𝗢𝗥", description: '𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗢 𝗗𝗘𝗟 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', rowId: `${usedPrefix}creador`},
      {title: "Boton 1", description: 'Aqui agregas un boton', rowId: `${usedPrefix}boton1`},
      {title: "Boton 2", description: 'Aqui agregas un boton', rowId: `${usedPrefix}boton2`},
      {title: "agrega mas botones", description: 'puedes agregar todos los botones que quieras', rowId: `${usedPrefix}boton1`},
 	]
    },
    {
        title: "𝗢𝗪𝗡𝗘𝗥",
	rows: [
                {title: "𝗨𝗣𝗗𝗔𝗧𝗘", description: '𝗔𝗖𝗧𝗨𝗔𝗟𝗜𝗭𝗔𝗥 𝗕𝗢𝗧', rowId: `${usedPrefix}update`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `Este texto es editable!
*╭─────────────────────❊*
*│* *╭────────────────❊*
*│* *│* *Bᴏᴛ Nᴀᴍᴇ :  Shizu - Bot*
*│* *│* *Creador del Bot: 𝗦𝗵𝗶𝘇𝘂* 
*│* *│* *N° del creador:* wa.me/34623442554*
*│* *│* *Apoyame registrandote en esta web*
*│* *│* *https://tinyurl.com/2jzuzsef*
*│* *│* *Mis redes: atom.bio/shizu-hub*
*│* *│* ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
*│* *╰────────────────❊*
*│*    *㊏───ɪɴғᴏ───㊏*
*│* *╭─────────────────❊*
*│* *│* *ɴᴀᴍᴇ :* ${name}
*│* *│* *ʙᴀʟᴀɴᴄᴇ:* ${limit}
*│* *│* *ʀᴜɴɴɪɴɢ ᴏɴ: AcidicNodes*
*│* *│* *ᴍᴏᴅᴇ: Publico✅*
*│* *│* *Dᴀᴛᴇ:* ↘️
*│* *│* *${week}, ${date}*
*│* *│* *ᴛɪᴍᴇ: ${uptime}*
*│* *│* *ᴛᴏᴛᴀʟ ᴜsᴇʀ: ${rtotalreg}*
*│* *╰─────────────────❊*
*╰─────────────────────❊*`, footer: `${wm}`, pp,
title: null,
buttonText: "⍟𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦⍟", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|2help|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
