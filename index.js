const Discord = require('discord.js');
const client = new Discord.Client();

function date() {
  var now     = new Date();
  var annee   = now.getFullYear();
  var mois    = now.getMonth() + 1;
  var jour    = now.getDate();
  var heure   = now.getHours() + 2;
  var minute  = now.getMinutes();
  var seconde = now.getSeconds();
  return "Nous somme le "+jour+"/"+mois+"/"+annee+" et il est "+heure+"h"+minute+":"+seconde;
}

client.on("ready", () => {
  console.log(`Connecter en tant que ${client.user.tag}`);
  client.user.setActivity(`${client.user.tag} est sur ${client.guilds.size} serveurs`);
  var msg = `Le bot est pret ! \n ${client.users.size} utilisateurs \n ${client.channels.size} salons \n ${client.guilds.size} serveurs \n ${date()}`;
  var type = client.channels.get('486907940930846721');
  type.send(msg);
});

client.login(process.env.TOKEN);