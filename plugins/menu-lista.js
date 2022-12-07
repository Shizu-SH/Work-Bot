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
	var cotext = `┏「 Work Bot 」┓
┃➲ Work-Bot
┃➲ Las Palmas GC
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
      {title: "CREADOR", description: 'CONTACTAR CON EL CREADOR DEL BOT', rowId: `${usedPrefix}creador`},
      {title: "INFORMACION", description: 'INFORMACION DEL BOT', rowId: `${usedPrefix}informacionbot`},
      {title: "EJEMPLO DE UTILIZACION", description: 'AQUI PODRAS VER COMO SE USA UN BOT', rowId: `${usedPrefix}empresa`},
      {title: "BOT PARA GRUPOS", description: 'AQUI VERAS COMO UN BOT PUEDE AYUDARTE EN UN GRUPO', rowId: `${usedPrefix}gruposinfo`},
 	]
    },
    {
        title: "COMPRAR BOT",
	rows: [
                {title: "PRECIOS", description: 'AQUI PODRAS VER LOS PRECIOS DEL BOT', rowId: `${usedPrefix}precios`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `Este texto es editable!
*╭─────────────────────❊*
*│* *╭────────────────❊*
*│* *│* *Bienvenido a mi chat*
*│* *│* *Aqui te dejare unas funciones* 
*│* *│* *simples que puedes usar en un bot*
*│* *│* *Si quieres mas funciones puedes*
*│* *│* *contactar con mi creador*
*│* *│* *wa.me/34623442554*
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
