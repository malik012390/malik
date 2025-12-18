const fs = require('fs')

//===[ SETTING BOT ]===\\
global.token = "7866881377:AAGB-nsAXDy1audQYCNBneM__I7rsC9bb84"
global.teleId = "7045639623"
global.botname = "Duskblade Invicitus"// nama bot
global.version = "1.0.0"// versi bot
global.owner = "6285609468012"// nomor owner
global.footer = "XioNotDev"// footer doank bebas ganti
global.idch = "120363419085046817@newsletter" // id ch
global.packname = "Mi Ayam"// nama stiker pack
global.session = "sessions"// nama session

//Global Thumb
global.thumb = "https://pornhub"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
