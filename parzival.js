const parzi = require("aoi.js")
var fs = require('fs')
const bot = new parzi.Bot({
    token: process.config.token,
    prefix:"$getServerVar[prefix]"
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
}

////////// STATUS \\\\\\\\\\
bot.status({
text:"ParzivaL Button Kayıt Botu",
type:"PLAYING",
status:"dnd",
time: 12
})

////////// VARİABLES \\\\\\\\\\\
bot.variables({
 butonkayıtrol:"",
  butonkayıtsızrol:""
}) 

////////// COMMANDS \\\\\\\\\\
bot.onInteractionCreate()
bot.interactionCommand({
  name:"kayıt",
  code:`
  $giveRoles[$authorID;$getServerVar[butonkayıtrol]]
  $takeRoles[$authorID;$getServerVar[butonkayıtsızrol]]
  $interactionReply[✅ Başarıyla Kayıt Oldun.;;;64;4]
  `
  }) 


