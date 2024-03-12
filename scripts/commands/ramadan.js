module.exports.config = {
  name: "ramadan",
  version: "0.0.1",
  permission: 0,
  prefix: true,
  credits: "Nayan",//modified by Mohammad Rahad 
  description: "Ramadan",
  category: "user",
  usages: "",
    cooldowns: 5,
};


module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
const axios = require('axios')
const links = [
    "https://i.imgur.com/79BF1HP.jpeg",
    "https://i.imgur.com/AUNRmlL.jpeg",
    "https://i.imgur.com/nYVjoie.jpeg",
    "https://i.imgur.com/HIlJqH2.jpeg",
    "https://i.imgur.com/5iGTRgT.jpeg",
  ];
  const rahad = links[Math.floor(Math.random() * links.length)];
  const rahad2 = (await axios.get(rahad, { responseType: 'stream' })).data;
  
const rahad3 = "====「 🆁🅰🅼🅰🅳🅰🅽 」====\n━━━━━━━━━━━━━\n𝟙. 𝐒𝐞𝐡𝐫𝐢 𝐓𝐢𝐦𝐞\n𝟚. 𝐈𝐟𝐭𝐚𝐫 𝐓𝐢𝐦𝐞\n𝟛. 𝐈𝐟𝐭𝐚𝐫 𝐃𝐮𝐚\n𝟜. 𝐑𝐮𝐣𝐚𝐫 𝐍𝐢𝐲𝐨𝐭\n𝟝. 𝐑𝐮𝐣𝐚 𝐕𝐚𝐧𝐠𝐚𝐫 𝐊𝐚𝐫𝐨𝐧\n𝟞. 𝐉𝐞𝐠𝐮𝐥𝐚 𝐊𝐨𝐫𝐥𝐞 𝐑𝐮𝐣𝐚 𝐕𝐚𝐧𝐠𝐞 𝐧𝐚\n\n𝐑𝐞𝐩𝐥𝐲 𝐓𝐡𝐢𝐬 𝐌𝐬𝐠 𝐀𝐧𝐝 𝐒𝐞𝐥𝐞𝐜𝐭 𝐍𝐮𝐦𝐛𝐞𝐫"
  if (!n[0]) return a.sendMessage({body: rahad3, attachment: rahad2}, e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = linkanh();
  const request = require("request");
  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    const time = (await p.get(h)).data.times.time;
    const msg = (await p.get(h)).data.msg;


    return e.sendMessage({
      body: `${msg}: ${time}`

    }, a.threadID, a.messageID)
  }

    function linkanh() {
        const p = require("axios");
        const n = "http://game2.jagoanvps.cloud:5059";
        if ("1" == a.body)
            var h = `${n}/nayan/sehri`;
        else if ("2" == a.body)
         var   h = `${n}/nayan/iftar`;
      else if ("3" == a.body)
         var   h = `${n}/nayan/iftardua`;
      else if ("4" == a.body)
         var   h = `${n}/nayan/rujarniyot`;
      else if ("5" == a.body)
         var   h = `${n}/nayan/rujavk`;
      else if ("6" == a.body)
         var   h = `${n}/nayan/rujavkn`;
        return { p, h };
    }
};
