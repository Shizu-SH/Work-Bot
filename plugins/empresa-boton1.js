import fetch from 'node-fetch'
import fs, { promises } from 'fs'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let datcov = await fetch('https://latam-api.vercel.app/api/covid19?apikey=nekosmic&q=world');
	let CovidApi = await datcov.json();
	var cotext = `┏「 work-bot 」┓
┃➲ Texto editable
┗─━─━「 🌎 」━─━─┛\n\n`
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║    ◉— *Work - BOT* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *Owner:* Shizu-Hub
║➤ *Numero:* wa.me/34623442554
║➤ *Bot ofc:* wa.me/5492615130362
║➤ *PayPal:* https://www.paypal.me/NeKosmicOFC
║➤ *Fecha:* ${date}
║➤ *Tiempo activo:* ${uptime}
║➤ *Usuarios:* ${rtotalreg}
╰══╡✯✯✯✯✯✯✯✯╞══╯
el texto de arriba es editable.
los botones de abajo tambien son editables.
┗━━━━━━━━━━━━━┛
`.trim()
let buttons = [
{ buttonId: '#boton1', buttonText: { displayText: 'BOTON 1' }, type: 1 },
{ buttonId: '#boton 2', buttonText: { displayText: 'BOTON 2' }, type: 1 }]
//{ buttonId: '#botgrande', buttonText: { displayText: 'VER BOT ACABADO' }, type: 1 }]
let buttonMessage = {
image: imagen1,
caption: str.trim(),
mentions: [m.sender],
footer: `*${cotext}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝗦𝗛𝗜𝗭𝗨 » 𝗕𝗢𝗧 👑',
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/LwPNmhUV8P76isIyFgEK8E`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(boton1)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}