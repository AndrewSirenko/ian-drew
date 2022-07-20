import DiscordJs, {Intents} from 'discord.js'
import dotenv from 'dotenv'
import fs from 'fs'
dotenv.config()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const client = new DiscordJs.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

let amount_of_messages = 0;



client.on('ready', () => {
    console.log("The bot is ready")
    fs.writeFileSync('CREEPY.txt', "");
})

client.on('messageCreate', (message) => {
    amount_of_messages += 1;
    let creepy = amount_of_messages + ": " + message.content+'\n'
    console.log(creepy);

    fs.writeFile('CREEPY.txt', creepy, { flag: 'a+' }, err => {});

    if (message.content === 'pong'){
        message.reply({
            content: 'orange is better',
        })
    }
    if (message.content === 'banana is better'){
        message.reply({
            content: 'orange is wayyyyy better',
        })
    }
    if (message.content === 'banana is wayyyyy better'){
        for (let i = 1; i <= 4; i++){
            message.reply({
                content: `orange is ${i}x better`,
            })
        }
    }
})


client.login(process.env.TOKEN)