let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
Hola, Gracias por contactar con Work Bot🤠
Te ayudare a comprar las mejores Zapatillas
Para empezar dinos que marca te gusta mas
escribe .nike o .adidas`  
m.reply(text)   
}
handler.command = /^(start)/i
export default handler
