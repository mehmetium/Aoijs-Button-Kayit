module.exports = {
  name:"buton-kayıt",
  code:`
  $apiMessage[$channelID;;{color:776ec5}{description: 🌀 • Kayıt Olmak İçin Butona Basın};{actionRow:Kayıt Ol,2,1,kayıt}]
  $setServerVar[butonkayıtrol;$mentionedRoles[1]]
  $setServerVar[butonkayıtsızrol;$mentionedRoles[2]]
  $onlyIf[$mentionedRoles[2]!=;{color:ff40ff}{thumbnail:$userAvatar}{description: ❌ Lütfen Kayıtsız Rolünü Etiketleyin ; Doğru Kullanım : .buton-kayıt @üyerol @kayıtsızrol}]
  $onlyIf[$mentionedRoles[1]!=;{color:ff40ff}{thumbnail:$userAvatar}{description: ❌ Lütfen Üye Rolünü Etiketleyin ; Doğru Kullanım : .buton-kayıt @üyerol @kayıtsızrol}]
  $onlyPerms[admin;{color:ff40ff}{thumbnail:$userAvatar}{description: ❌ Bu Komutu Kullanamzsın}]
 `
} 
