function handler(m) {
let name = conn.getName('595981991035@s.whatsapp.net')
let ownerN = '595981991035'
conn.sendContact(m.chat, [[`${ownerN}@s.whatsapp.net`, `${name}`]], m, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: `¡Hi! This is my developer's number, just shoot me a message if you have any questions or want to chat about a potential collab.`, 
 body: botName, 
 sourceUrl: 'https://whatsapp.com/channel/0029Vas84d48PgsGgLnVvl0y',
 thumbnail: imagen,
 thumbnailUrl: 'https://i.ibb.co/c2T9mF6/Sylph.jpg', 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }
   }
     },
       {
         quoted: fkontak
           }
             );

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 

export default handler