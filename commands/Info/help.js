const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "help",
   aliases: ["h"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setFooter("Page Home\n"+ client.user.username + " | Made by: Devansh", client.user.displayAvatarURL())
        .setImage(`https://media.discordapp.net/attachments/902432061229506630/903218667209257020/standard.gif`)
        .addField("📕 **__My Features__**",
`>>> One of the best <:bughunter:866155261017063424> **all-in-one** Discord Bot! Moderation, Info, Utility, **Ticket**, and also a new awesome ⏲ __**Uptimer+**__ System!
<:up1:866155257583501342> Many **Nsfw** and :partying_face: **Fun** Commands (50+)
:crown: **Admin** and **Auto-Moderation** and way much more!
<:stats:866155255603265556> **\`${Math.floor(client.ws.ping)}ms\` Ping**`)
        .addField("⏲ **__Uptimer+__**",">>> Uptimer Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online __24/7__ Just By Using A **Single** Command.\n__Uptimer+ Commands__ <:__:866155255644291083>\n`add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`",)
        .addField("⏲ __How to use:__",">>> __Add the bot__ to your discord server\n Type `!howtouse` and get information <:setting:874348670382911578>")
        .setColor(colors.uptime);

        const embed1 = new Discord.MessageEmbed()
        .setTitle(':police_officer: Admin  & Moderation :nerd: ')
        .addField("ㅤ⠀⠀⠀ \n :police_officer: **Admin** | :white_check_mark: **ENABLED**",
          "`addrole` `auditlog` `ban` `dm` `embed` `hackban` `kick` `lock` `nuke` `removerole` `addemoji` `unban` `unlock` \n\n:nerd:  **Moderation** | :white_check_mark: **ENABLED** \n `purge` `resetwarns` `Userid` `lockchannel` `mute` `purge` `say` `setchat` `slowmode` `unlockchannel` `unmute` `warn` `warnings` `Userinfo` \n\n:nerd:  **AutoModeration** | :white_check_mark: **ENABLED** \n `anti-alt` `antilink` `autonick` `autoofficial` `autoofficiald` `autorole` `roleall`"
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        const embed2 = new Discord.MessageEmbed()
      .setTitle(':superhero: Info , Aura & General :robot:')
      .addField("⠀⠀⠀ \n :superhero: **Info** | :white_check_mark: **ENABLED**",
        "`botinfo` `botinvite` `report-bug` `commandscount` `developer` `djs` `feedback` `github` `help` `info` `roleinfo` `serverinfo` `userinfo`\n\n:shield: **Aura** | :white_check_mark: **ENABLED**\n `addword` `blacklist-server` `blacklist-user` `delword` `whitelist-add` `whitelist-delete` `whitelist` `wordlist`\n\n:robot: **General** | :white_check_mark: **ENABLED** \n `servericon` `akinator` `ascii` `avatar` `base64` `battleship` `calculator` `calc` `choose` `color` `country` `emojify` `firstmsg` `invite` `reverse` `rps` `support` `trivia` `weather`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        const embed3 = new Discord.MessageEmbed()
      .setTitle(':partying_face: Fun , Images & Nsfw  :smiling_imp:')
      .addField("ㅤ⠀⠀⠀ \n :partying_face: **Fun** | :white_check_mark: **ENABLED**","`deepfry` `coinflip` `corona` `drake` `eightball` `flipcoin` `google` `hack` `hangman` `hug` `joke` `meme` `ship` `slap` `snake` `snipe` `sudo` `tictactoe` `triggered` `trivia` `tictactoe` `youtube`\n\n :boy: **Image** | :white_check_mark: **ENABLED** \n`affect` `beautiful` `dog` `facepalm` `fire` `fox` `gay` `glass` `jail` `kangaroo` `shit` `tweet` \n\n :smiling_imp: **Nsfw** | :white_check_mark: **ENABLED** \n `4k` `anal` `ass` `boobs` `pussy` `erokemo` `gonewild` `hentai` `hentai-ass` `hentai-midriff` `kitsune` `lewd` `pussy` `solo` `Thigh`",)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

       const embed4 = new Discord.MessageEmbed()
      .setTitle(':crown: Owner , ChatBot & Ultility :moneybag:')
      .addField("ㅤ⠀⠀⠀ \n :crown: **Owner** | :white_check_mark: **ENABLED**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`\n\n :man_mechanic: ChatBot | :white_check_mark: **ENABLED** \n`chatbot-disable` `chatbot-set` \n\n:moneybag: **Ultility** | :white_check_mark: **ENABLED** \n`advice` `announce` `binary` `members` `membercount` `minecraft` `poll` `prefix` `rank` `serverinfo` `shortener` `whatsapp` `worldclock` `yt`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);


       const embed5 = new Discord.MessageEmbed()
      .setTitle(`🎫 Ticket , Giveaways & Uptimer ⏲`)
      .addField("ㅤ⠀⠀⠀ \n 🎫 **Ticket** | :white_check_mark: **ENABLED**",
        "`tadd`, `tclose`,`tdelete`, `tnew`,`topen`, `tremove`\n\n🎉 **Giveaways** | :white_check_mark: **ENABLED** \n`start [channel] [time] [winner] [prize]`, `end [giveaway id]` , `recoll [giveaway id]` \n\n⏲ **Uptimer ** | :white_check_mark: **ENABLED** \n `add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`")
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Admin , Auto/Moderation')
        .setEmoji('880786952205529169')
        .setValue('option1')
        .setDescription('Admin , Auto/Moderation')

        let option2 = new MessageMenuOption()
        .setLabel('Info , General & Aura')
        .setEmoji('880786952205529169')
        .setValue('option2')
        .setDescription('Info , General & Aura')

        let option3 = new MessageMenuOption()
        .setLabel('Fun , Image & Nsfw')
        .setEmoji('880786952205529169')
        .setValue('option3')
        .setDescription('Fun , Image & Nsfw')

        let option4 = new MessageMenuOption()
        .setLabel('Owner , ChatBot & Ultility')
        .setEmoji('880786952205529169')
        .setValue('option4')
        .setDescription('Owner , ChatBot & Ultility')

        let option5 = new MessageMenuOption()
        .setLabel('Ticket , Giveaways  & Uptimer')
        .setEmoji('880786952205529169')
        .setValue('option5')
        .setDescription('Ticket , Giveaways  & Uptimer')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4, option5)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit(":x: This help menu is expired! Please retype the command to view again.")
    })

    }
  };


/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */