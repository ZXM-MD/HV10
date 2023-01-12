const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
   return` Selamat ${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

˖ ࣪ ꜝꜞ ͜🦦̷̵̈ ִִֶָ ̵֩٠˟ *INFO BOT & USER*
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Name Bot : Khoiyrul Botz
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Creator : Pak Zainal Dev's
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Date : ${tanggal(new Date())}
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Time : ${jam}
 ⊹𖡻⃟𖡻⃟🌿 ֢ ֹ User : ${pushname !== undefined ? pushname : '-'}
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Status : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Limit : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Limit Game : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Balance : ${toCommas(getBalance(sender, balance))}
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Role : ${role}
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ Runtime : ${runtime(process.uptime())}

 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ

 ⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *STATISTICS*
   〲𝆭 ໋ׅ𝆺𝅥ׄ Upload : ${upload}
   〲𝆭 ໋ׅ𝆺𝅥ׄ Downloads : ${download}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *MAIN MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .menu
 〲𝆭 ໋ׅ𝆺𝅥ׄ .infobot
 〲𝆭 ໋ׅ𝆺𝅥ׄ .donate
 〲𝆭 ໋ׅ𝆺𝅥ׄ .dashboard
 〲𝆭 ໋ׅ𝆺𝅥ׄ .owner
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cekdrive
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cekbandwidth
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cekpremium
 〲𝆭 ໋ׅ𝆺𝅥ׄ .listpremium
 〲𝆭 ໋ׅ𝆺𝅥ׄ .listsewa
 〲𝆭 ໋ׅ𝆺𝅥ׄ .speed
 〲𝆭 ໋ׅ𝆺𝅥ׄ .runtime
 〲𝆭 ໋ׅ𝆺𝅥ׄ .listbahasa${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *CONVERTER/TOOLS*${petik} 
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sticker
 〲𝆭 ໋ׅ𝆺𝅥ׄ .stickerwm
 〲𝆭 ໋ׅ𝆺𝅥ׄ .smeme
 〲𝆭 ໋ׅ𝆺𝅥ׄ .toimg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .tovideo
 〲𝆭 ໋ׅ𝆺𝅥ׄ .tomp3
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ttp
 〲𝆭 ໋ׅ𝆺𝅥ׄ .attp
 〲𝆭 ໋ׅ𝆺𝅥ׄ .emojimix
 〲𝆭 ໋ׅ𝆺𝅥ׄ .nuliskiri
 〲𝆭 ໋ׅ𝆺𝅥ׄ .nuliskanan
 〲𝆭 ໋ׅ𝆺𝅥ׄ .foliokiri
 〲𝆭 ໋ׅ𝆺𝅥ׄ .foliokanan
 〲𝆭 ໋ׅ𝆺𝅥ׄ .say
 〲𝆭 ໋ׅ𝆺𝅥ׄ .translate${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *ANONYMOUS CHATS*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .menfess nama|62xxx|pesan
 〲𝆭 ໋ׅ𝆺𝅥ׄ .anonymous
 〲𝆭 ໋ׅ𝆺𝅥ׄ .start
 〲𝆭 ໋ׅ𝆺𝅥ׄ .next
 〲𝆭 ໋ׅ𝆺𝅥ׄ .stop
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sendprofile${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *STORE MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .list
 〲𝆭 ໋ׅ𝆺𝅥ׄ .addlist
 〲𝆭 ໋ׅ𝆺𝅥ׄ .dellist
 〲𝆭 ໋ׅ𝆺𝅥ׄ .update
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jeda
 〲𝆭 ໋ׅ𝆺𝅥ׄ .tambah
 〲𝆭 ໋ׅ𝆺𝅥ׄ .kurang
 〲𝆭 ໋ׅ𝆺𝅥ׄ .kali
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bagi
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delsetdone
 〲𝆭 ໋ׅ𝆺𝅥ׄ .changedone
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setdone
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delsetproses
 〲𝆭 ໋ׅ𝆺𝅥ׄ .changeproses
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setproses
 〲𝆭 ໋ׅ𝆺𝅥ׄ .proses < reply chat >
 〲𝆭 ໋ׅ𝆺𝅥ׄ .done < reply chat >${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *RPG GAMES*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .inventory
 〲𝆭 ໋ׅ𝆺𝅥ׄ .mining
 〲𝆭 ໋ׅ𝆺𝅥ׄ .buy 
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sell
 〲𝆭 ໋ׅ𝆺𝅥ׄ .heal
 〲𝆭 ໋ׅ𝆺𝅥ׄ .hunt
 〲𝆭 ໋ׅ𝆺𝅥ׄ .adventure
 〲𝆭 ໋ׅ𝆺𝅥ׄ .luckyday
 〲𝆭 ໋ׅ𝆺𝅥ׄ .killslime
 〲𝆭 ໋ׅ𝆺𝅥ׄ .killgoblin
 〲𝆭 ໋ׅ𝆺𝅥ׄ .killdevil
 〲𝆭 ໋ׅ𝆺𝅥ׄ .killbehemoth
 〲𝆭 ໋ׅ𝆺𝅥ׄ .killdemon
 〲𝆭 ໋ׅ𝆺𝅥ׄ .killdemonking
 〲𝆭 ໋ׅ𝆺𝅥ׄ .joinrpg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sellikan
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sellbesi
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sellemas
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jelajah
 〲𝆭 ໋ׅ𝆺𝅥ׄ .mancing
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jualikan
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jualcoal
 〲𝆭 ໋ׅ𝆺𝅥ׄ .lebur
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jualstone
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jualingot
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jualkayu
 〲𝆭 ໋ׅ𝆺𝅥ׄ .nebang
 〲𝆭 ໋ׅ𝆺𝅥ׄ .goplanet
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jualbahankimia${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *DOWNLOADS MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .play
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ytmp3
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ytmp4
 〲𝆭 ໋ׅ𝆺𝅥ׄ .instagram
 〲𝆭 ໋ׅ𝆺𝅥ׄ .igphoto
 〲𝆭 ໋ׅ𝆺𝅥ׄ .igvideo
 〲𝆭 ໋ׅ𝆺𝅥ׄ .igreels
 〲𝆭 ໋ׅ𝆺𝅥ׄ .tiktok
 〲𝆭 ໋ׅ𝆺𝅥ׄ .tiktoknowm
 〲𝆭 ໋ׅ𝆺𝅥ׄ .tiktokaudio
 〲𝆭 ໋ׅ𝆺𝅥ׄ .mediafire
 〲𝆭 ໋ׅ𝆺𝅥ׄ .gitclone${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *GROUP MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .afk
 〲𝆭 ໋ׅ𝆺𝅥ׄ .welcome
 〲𝆭 ໋ׅ𝆺𝅥ׄ .left
 〲𝆭 ໋ׅ𝆺𝅥ׄ .pppanjanggc
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setopen
 〲𝆭 ໋ׅ𝆺𝅥ׄ .changesetopen
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delsetopen
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setclose
 〲𝆭 ໋ׅ𝆺𝅥ׄ .changesetclose
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delsetclose
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setwelcome
 〲𝆭 ໋ׅ𝆺𝅥ׄ .changewelcome
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delsetwelcome
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setleft
 〲𝆭 ໋ׅ𝆺𝅥ׄ .changeleft
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delsetleft
 〲𝆭 ໋ׅ𝆺𝅥ׄ .linkgc
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setppgc
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setppgc2 
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setnamegc
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setdesc
 〲𝆭 ໋ׅ𝆺𝅥ׄ .antilink
 〲𝆭 ໋ׅ𝆺𝅥ׄ .antiwame
 〲𝆭 ໋ׅ𝆺𝅥ׄ .open
 〲𝆭 ໋ׅ𝆺𝅥ׄ .close
 〲𝆭 ໋ׅ𝆺𝅥ׄ .add
 〲𝆭 ໋ׅ𝆺𝅥ׄ .kick
 〲𝆭 ໋ׅ𝆺𝅥ׄ .promote
 〲𝆭 ໋ׅ𝆺𝅥ׄ .demote
 〲𝆭 ໋ׅ𝆺𝅥ׄ .revoke
 〲𝆭 ໋ׅ𝆺𝅥ׄ .hidetag
 〲𝆭 ໋ׅ𝆺𝅥ׄ .checksewa${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *GAME MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .tictactoe
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delttt
 〲𝆭 ໋ׅ𝆺𝅥ׄ .casino
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delcasino${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *SEARCH MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .lirik
 〲𝆭 ໋ׅ𝆺𝅥ׄ .grupwa
 〲𝆭 ໋ׅ𝆺𝅥ׄ .pinterest
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ytsearch${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *RANDOM MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cecan
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cogan
 〲𝆭 ໋ׅ𝆺𝅥ׄ .waifu${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *BALANCE MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .topglobal
 〲𝆭 ໋ׅ𝆺𝅥ׄ .toplocal
 〲𝆭 ໋ׅ𝆺𝅥ׄ .buylimit
 〲𝆭 ໋ׅ𝆺𝅥ׄ .buyglimit
 〲𝆭 ໋ׅ𝆺𝅥ׄ .transfer
 〲𝆭 ໋ׅ𝆺𝅥ׄ .limit
 〲𝆭 ໋ׅ𝆺𝅥ׄ .balance${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *STORAGE*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .addstik
 〲𝆭 ໋ׅ𝆺𝅥ׄ .addvn
 〲𝆭 ໋ׅ𝆺𝅥ׄ .addimg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .addvid
 〲𝆭 ໋ׅ𝆺𝅥ׄ .liststik
 〲𝆭 ໋ׅ𝆺𝅥ׄ .listvn
 〲𝆭 ໋ׅ𝆺𝅥ׄ .listimg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .listvid${petik}
  
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *BAILEYS*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .fitnah
 〲𝆭 ໋ׅ𝆺𝅥ׄ .nowa
 〲𝆭 ໋ׅ𝆺𝅥ׄ .getquoted
 〲𝆭 ໋ׅ𝆺𝅥ׄ .fakehidetag
 〲𝆭 ໋ׅ𝆺𝅥ׄ .react
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setcmd
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delcmd${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *OWNERS MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .autoread
 〲𝆭 ໋ׅ𝆺𝅥ׄ .autobio
 〲𝆭 ໋ׅ𝆺𝅥ׄ .antidelete
 〲𝆭 ໋ׅ𝆺𝅥ׄ .antiviewonce
 〲𝆭 ໋ׅ𝆺𝅥ׄ .autorespond
 〲𝆭 ໋ׅ𝆺𝅥ׄ .anticall
 〲𝆭 ໋ׅ𝆺𝅥ׄ .autoblok212
 〲𝆭 ໋ׅ𝆺𝅥ׄ .join
 〲𝆭 ໋ׅ𝆺𝅥ׄ .left
 〲𝆭 ໋ׅ𝆺𝅥ׄ .self
 〲𝆭 ໋ׅ𝆺𝅥ׄ .public
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setppbot2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .setppbot
 〲𝆭 ໋ׅ𝆺𝅥ׄ .broadcast
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bcimg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bcstik
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bcvn
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bcvideo
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bcsewa
 〲𝆭 ໋ׅ𝆺𝅥ׄ .addpremium
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delpremium
 〲𝆭 ໋ׅ𝆺𝅥ׄ .addsewa
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delsewa${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *ASUPAN MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .chika
 〲𝆭 ໋ׅ𝆺𝅥ׄ .delvira
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ayu
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bunga
 〲𝆭 ໋ׅ𝆺𝅥ׄ .aura
 〲𝆭 ໋ׅ𝆺𝅥ׄ .nisa
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ziva
 〲𝆭 ໋ׅ𝆺𝅥ׄ .yana
 〲𝆭 ໋ׅ𝆺𝅥ׄ .viona
 〲𝆭 ໋ׅ𝆺𝅥ׄ .syania
 〲𝆭 ໋ׅ𝆺𝅥ׄ .riri
 〲𝆭 ໋ׅ𝆺𝅥ׄ .syifa
 〲𝆭 ໋ׅ𝆺𝅥ׄ .mama_gina
 〲𝆭 ໋ׅ𝆺𝅥ׄ .alcakenya
 〲𝆭 ໋ׅ𝆺𝅥ׄ .mangayutri
 〲𝆭 ໋ׅ𝆺𝅥ׄ .rikagusriani
 〲𝆭 ໋ׅ𝆺𝅥ׄ .asupan
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bocil
 〲𝆭 ໋ׅ𝆺𝅥ׄ .geayubi
 〲𝆭 ໋ׅ𝆺𝅥ׄ .santuy
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ukhty
 〲𝆭 ໋ׅ𝆺𝅥ׄ .syifa${petik}
 
 ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ ᐧ . ᐧ . ᐧ . ᐧ
 
 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *NSFW MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .baka
 〲𝆭 ໋ׅ𝆺𝅥ׄ .smug
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neko_sfw
 〲𝆭 ໋ׅ𝆺𝅥ׄ .hentai_gif
 〲𝆭 ໋ׅ𝆺𝅥ׄ .spank
 〲𝆭 ໋ׅ𝆺𝅥ׄ .blowjob
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cumarts
 〲𝆭 ໋ׅ𝆺𝅥ׄ .eroyuri
 〲𝆭 ໋ׅ𝆺𝅥ׄ .eroneko
 〲𝆭 ໋ׅ𝆺𝅥ׄ .erokemonomimi
 〲𝆭 ໋ׅ𝆺𝅥ׄ .erokitsune
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ero
 〲𝆭 ໋ׅ𝆺𝅥ׄ .feet
 〲𝆭 ໋ׅ𝆺𝅥ׄ .erofeet
 〲𝆭 ໋ׅ𝆺𝅥ׄ .feetgif
 〲𝆭 ໋ׅ𝆺𝅥ׄ .femdom
 〲𝆭 ໋ׅ𝆺𝅥ׄ .futanari
 〲𝆭 ໋ׅ𝆺𝅥ׄ .hentai
 〲𝆭 ໋ׅ𝆺𝅥ׄ .holoero
 〲𝆭 ໋ׅ𝆺𝅥ׄ .holo
 〲𝆭 ໋ׅ𝆺𝅥ׄ .keta
 〲𝆭 ໋ׅ𝆺𝅥ׄ .kitsune
 〲𝆭 ໋ׅ𝆺𝅥ׄ .kemonomimi
 〲𝆭 ໋ׅ𝆺𝅥ׄ .pussyart
 〲𝆭 ໋ׅ𝆺𝅥ׄ .pussywankgif
 〲𝆭 ໋ׅ𝆺𝅥ׄ .girl_solo
 〲𝆭 ໋ׅ𝆺𝅥ׄ .girl_solo_gif
 〲𝆭 ໋ׅ𝆺𝅥ׄ .tits
 〲𝆭 ໋ׅ𝆺𝅥ׄ .trap
 〲𝆭 ໋ׅ𝆺𝅥ׄ .yuri
 〲𝆭 ໋ׅ𝆺𝅥ׄ .avatar2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .anal
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bj
 〲𝆭 ໋ׅ𝆺𝅥ׄ .boobs
 〲𝆭 ໋ׅ𝆺𝅥ׄ .classic
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cumsluts
 〲𝆭 ໋ׅ𝆺𝅥ׄ .kuni
 〲𝆭 ໋ׅ𝆺𝅥ׄ .lesbian
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neko
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neko_gif
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ahegao
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bdsm
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cuckold
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cum
 〲𝆭 ໋ׅ𝆺𝅥ׄ .foot
 〲𝆭 ໋ׅ𝆺𝅥ׄ .gangbang
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glasses
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jahy
 〲𝆭 ໋ׅ𝆺𝅥ׄ .masturbation
 〲𝆭 ໋ׅ𝆺𝅥ׄ .nsfw_neko
 〲𝆭 ໋ׅ𝆺𝅥ׄ .orgy
 〲𝆭 ໋ׅ𝆺𝅥ׄ .panties
 〲𝆭 ໋ׅ𝆺𝅥ׄ .tentacles
 〲𝆭 ໋ׅ𝆺𝅥ׄ .thighs
 〲𝆭 ໋ׅ𝆺𝅥ׄ .zettai${petik}


 ࣪⊹𖡻⃟𖡻⃟🌿 ֢ ֹ *TEXTPRO MENU*${petik}
 〲𝆭 ໋ׅ𝆺𝅥ׄ .halloween2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .horror
 〲𝆭 ໋ׅ𝆺𝅥ׄ .game8bit
 〲𝆭 ໋ׅ𝆺𝅥ׄ .layered
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glitch2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .coolg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .coolwg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .realistic
 〲𝆭 ໋ׅ𝆺𝅥ׄ .space3d
 〲𝆭 ໋ׅ𝆺𝅥ׄ .gtiktok
 〲𝆭 ໋ׅ𝆺𝅥ׄ .stone
 〲𝆭 ໋ׅ𝆺𝅥ׄ .marvel
 〲𝆭 ໋ׅ𝆺𝅥ׄ .marvel2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .pornhub
 〲𝆭 ໋ׅ𝆺𝅥ׄ .avengers
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metalr
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metalg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metalg2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .halloween2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .lion
 〲𝆭 ໋ׅ𝆺𝅥ׄ .wolf_bw
 〲𝆭 ໋ׅ𝆺𝅥ׄ .wolf_g
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ninja
 〲𝆭 ໋ׅ𝆺𝅥ׄ .3dsteel
 〲𝆭 ໋ׅ𝆺𝅥ׄ .horror2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .lava
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bagel
 〲𝆭 ໋ׅ𝆺𝅥ׄ .blackpink
 〲𝆭 ໋ׅ𝆺𝅥ׄ .rainbow2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .water_pipe
 〲𝆭 ໋ׅ𝆺𝅥ׄ .halloween
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sketch
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sircuit
 〲𝆭 ໋ׅ𝆺𝅥ׄ .discovery
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metallic2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .fiction
 〲𝆭 ໋ׅ𝆺𝅥ׄ .demon
 〲𝆭 ໋ׅ𝆺𝅥ׄ .transformer
 〲𝆭 ໋ׅ𝆺𝅥ׄ .berry
 〲𝆭 ໋ׅ𝆺𝅥ׄ .thunder
 〲𝆭 ໋ׅ𝆺𝅥ׄ .magma
 〲𝆭 ໋ׅ𝆺𝅥ׄ .3dstone
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neon
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glitch
 〲𝆭 ໋ׅ𝆺𝅥ׄ .harry_potter
 〲𝆭 ໋ׅ𝆺𝅥ׄ .embossed
 〲𝆭 ໋ׅ𝆺𝅥ׄ .broken
 〲𝆭 ໋ׅ𝆺𝅥ׄ .papercut
 〲𝆭 ໋ׅ𝆺𝅥ׄ .gradient
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glossy
 〲𝆭 ໋ׅ𝆺𝅥ׄ .watercolor
 〲𝆭 ໋ׅ𝆺𝅥ׄ .multicolor
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neon_devil
 〲𝆭 ໋ׅ𝆺𝅥ׄ .underwater
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bear
 〲𝆭 ໋ׅ𝆺𝅥ׄ .wonderfulg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .christmas
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neon_light
 〲𝆭 ໋ׅ𝆺𝅥ׄ .snow
 〲𝆭 ໋ׅ𝆺𝅥ׄ .cloudsky
 〲𝆭 ໋ׅ𝆺𝅥ׄ .luxury2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .gradient2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .summer
 〲𝆭 ໋ׅ𝆺𝅥ׄ .writing
 〲𝆭 ໋ׅ𝆺𝅥ׄ .engraved
 〲𝆭 ໋ׅ𝆺𝅥ׄ .summery
 〲𝆭 ໋ׅ𝆺𝅥ׄ .3dglue
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metaldark
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neonlight
 〲𝆭 ໋ׅ𝆺𝅥ׄ .oscar
 〲𝆭 ໋ׅ𝆺𝅥ׄ .minion
 〲𝆭 ໋ׅ𝆺𝅥ׄ .holographic
 〲𝆭 ໋ׅ𝆺𝅥ׄ .purple
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glossyb
 〲𝆭 ໋ׅ𝆺𝅥ׄ .deluxe2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glossyc
 〲𝆭 ໋ׅ𝆺𝅥ׄ .fabric
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neonc
 〲𝆭 ໋ׅ𝆺𝅥ׄ .newyear
 〲𝆭 ໋ׅ𝆺𝅥ׄ .newyear2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metals
 〲𝆭 ໋ׅ𝆺𝅥ׄ .xmas
 〲𝆭 ໋ׅ𝆺𝅥ׄ .blood
 〲𝆭 ໋ׅ𝆺𝅥ׄ .darkg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .joker
 〲𝆭 ໋ׅ𝆺𝅥ׄ .wicker
 〲𝆭 ໋ׅ𝆺𝅥ׄ .natural
 〲𝆭 ໋ׅ𝆺𝅥ׄ .firework
 〲𝆭 ໋ׅ𝆺𝅥ׄ .skeleton
 〲𝆭 ໋ׅ𝆺𝅥ׄ .balloon
 〲𝆭 ໋ׅ𝆺𝅥ׄ .balloon2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .balloon3
 〲𝆭 ໋ׅ𝆺𝅥ׄ .balloon4
 〲𝆭 ໋ׅ𝆺𝅥ׄ .balloon5
 〲𝆭 ໋ׅ𝆺𝅥ׄ .balloon6
 〲𝆭 ໋ׅ𝆺𝅥ׄ .balloon7
 〲𝆭 ໋ׅ𝆺𝅥ׄ .steel
 〲𝆭 ໋ׅ𝆺𝅥ׄ .gloss
 〲𝆭 ໋ׅ𝆺𝅥ׄ .denim
 〲𝆭 ໋ׅ𝆺𝅥ׄ .decorate
 〲𝆭 ໋ׅ𝆺𝅥ׄ .decorate2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .peridot
 〲𝆭 ໋ׅ𝆺𝅥ׄ .rock
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glass
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glass2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glass3
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glass4
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glass5
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glass6
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glass7
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glass8
 〲𝆭 ໋ׅ𝆺𝅥ׄ .captain_as2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .robot
 〲𝆭 ໋ׅ𝆺𝅥ׄ .equalizer
 〲𝆭 ໋ׅ𝆺𝅥ׄ .toxic
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sparkling
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sparkling2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sparkling3
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sparkling4
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sparkling5
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sparkling6
 〲𝆭 ໋ׅ𝆺𝅥ׄ .sparkling7
 〲𝆭 ໋ׅ𝆺𝅥ׄ .decorative
 〲𝆭 ໋ׅ𝆺𝅥ׄ .chocolate
 〲𝆭 ໋ׅ𝆺𝅥ׄ .strawberry
 〲𝆭 ໋ׅ𝆺𝅥ׄ .koifish
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bread
 〲𝆭 ໋ׅ𝆺𝅥ׄ .matrix
 〲𝆭 ໋ׅ𝆺𝅥ׄ .blood2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neonligth2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .thunder2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .3dbox
 〲𝆭 ໋ׅ𝆺𝅥ׄ .neon2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .roadw
 〲𝆭 ໋ׅ𝆺𝅥ׄ .bokeh
 〲𝆭 ໋ׅ𝆺𝅥ׄ .gneon
 〲𝆭 ໋ׅ𝆺𝅥ׄ .advanced
 〲𝆭 ໋ׅ𝆺𝅥ׄ .dropwater
 〲𝆭 ໋ׅ𝆺𝅥ׄ .wall
 〲𝆭 ໋ׅ𝆺𝅥ׄ .chrismast
 〲𝆭 ໋ׅ𝆺𝅥ׄ .honey
 〲𝆭 ໋ׅ𝆺𝅥ׄ .drug
 〲𝆭 ໋ׅ𝆺𝅥ׄ .marble
 〲𝆭 ໋ׅ𝆺𝅥ׄ .marble2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .ice
 〲𝆭 ໋ׅ𝆺𝅥ׄ .juice
 〲𝆭 ໋ׅ𝆺𝅥ׄ .rusty
 〲𝆭 ໋ׅ𝆺𝅥ׄ .abstra
 〲𝆭 ໋ׅ𝆺𝅥ׄ .biscuit
 〲𝆭 ໋ׅ𝆺𝅥ׄ .wood
 〲𝆭 ໋ׅ𝆺𝅥ׄ .scifi
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metalr
 〲𝆭 ໋ׅ𝆺𝅥ׄ .purpleg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .shiny 
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jewelry
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jewelry2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jewelry3
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jewelry4
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jewelry5
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jewelry6
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jewelry7
 〲𝆭 ໋ׅ𝆺𝅥ׄ .jewelry8
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metalh
 〲𝆭 ໋ׅ𝆺𝅥ׄ .golden
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glitter
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glitter2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glitter3
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glitter4
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glitter5
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glitter6
 〲𝆭 ໋ׅ𝆺𝅥ׄ .glitter7
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metale
 〲𝆭 ໋ׅ𝆺𝅥ׄ .carbon
 〲𝆭 ໋ׅ𝆺𝅥ׄ .candy
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metalb
 〲𝆭 ໋ׅ𝆺𝅥ׄ .gemb
 〲𝆭 ໋ׅ𝆺𝅥ׄ .3dchrome
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metalb2
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metalg
 〲𝆭 ໋ׅ𝆺𝅥ׄ .metalg${petik}
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `List Sewa ubah sendiri di folder command, file help.js 👌`