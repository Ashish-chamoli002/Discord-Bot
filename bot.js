const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });


const TOKEN = 'MTMwMTEwNDUzMTAxODM1MDYyMw.GltjQj.HDR4FBiaBGQueACmTIegY8c3hH0bl-p6__31wg';  


const WELCOME_CHANNEL_ID = '1301112104157319232'; 


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


client.on('guildMemberAdd', member => {
    const welcomeChannel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);

    if (welcomeChannel) {
        welcomeChannel.send(`Welcome to the server, ${member.user.username}! 🎉 Please check out our [onboarding document](https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf) to get started.`);
    } else {
        console.error("Channel not found!");
    }
});


client.login(TOKEN);
