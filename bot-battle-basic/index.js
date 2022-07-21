import DiscordJs, {Intents} from 'discord.js'
import dotenv from 'dotenv'
import fs from 'fs'
dotenv.config()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function number_grabber(input_string, multiplier) {
    
    let number = parseInt(input_string.match(/\d+/)) * multiplier

    console.log(number)

    return `banana is ${number} x better`
}

function splitter_art(input_string, splitter_art) {
    let list_of_characters = input_string.split("")
    console.log(list_of_characters)
    let art = list_of_characters.join(splitter_art)
    console.log(art)

    return art
} 

let allowed_filenames = ["meme.txt", "whoa.txt"]

function find_image(filename) {
    let txt = " "
    try {
        txt = fs.readFileSync(filename).toString('utf-8')
    } catch (error) {
        txt = `'${filename}' is not an allowed file. Try a file from: ${allowed_filenames}`
    }
    
    return txt
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
    } if (message.content.includes("x better")) {
        let multiplier = 1.01
        message.reply({
            content: number_grabber(message.content, multiplier),
        })
    } if (message.content.includes("split")) {
        message.reply({
            content: splitter_art(message.content, "-|-"),
        })
    } if (message.content.includes(".txt") && !message.content.includes("allowed file")) {
        message.reply({
            content: find_image(message.content),
        })
    }
})


client.login(process.env.TOKEN)