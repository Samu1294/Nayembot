    allimage.push(fs.createReadStream(__dirname + "/cache/video.mp4"));
	
    {
        msg += `${cp}\n\n𝐓𝐨𝐭𝐚𝐥 𝐕𝐢𝐝𝐞𝐨𝐬: [${ln}]\n𝐀𝐝𝐝𝐞𝐝 𝐓𝐡𝐢𝐬 𝐕𝐢𝐝𝐞𝐨 𝐓𝐨 𝐓𝐡𝐞 𝐀𝐩𝐢 𝐁𝐲 [𝐅𝐚𝐫𝐡𝐚𝐧-𝐈𝐬𝐥𝐚𝐦]`
    }
    
    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}     {
        msg += `${cp}\n\n𝐓𝐨𝐭𝐚𝐥 𝐕𝐢𝐝𝐞𝐨𝐬: [${ln}]\n𝐀𝐝𝐝𝐞𝐝 𝐓𝐡𝐢𝐬 𝐕𝐢𝐝𝐞𝐨 𝐓𝐨 𝐓𝐡𝐞 𝐀𝐩𝐢 𝐁𝐲 [𝐅𝐚𝐫𝐡𝐚𝐧-𝐈𝐬𝐥𝐚𝐦]`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}
