const Discord = require('discord.js');
const config = require('./config.json');
const blocked_allowed = require('./allowed_blocked_users.json');
const client = new Discord.Client();
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let channel_id = config.channel_id
let server_id = config.server_id
let public_servers = config.public_servers
let public_channels = config.public_channels
let blocked_users = blocked_allowed.blocked_users_id
let allowed_users = blocked_allowed.allowed_users_id
let use_allowed_list = blocked_allowed.use_allowed_list
let token = config.token

function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}

client.on('message', message => {
  if (use_allowed_list == true) {
    if (allowed_users.includes(parseFloat(message.author.id)) == true) {
      if (blocked_users.includes(parseFloat(message.author.id)) == false) {
        if (public_servers == true) {
          if (public_channels == true) {
            exec(message.content);
          }
        } else if (public_servers == false) {
          if (public_channels == true) {
            if (message.channel.id != channel_id) {
              exec(message.content); 
            }
          } else if (public_channels == false) {
            if (message.guild.id == server_id) {
              if (message.channel.id == channel_id) {
                exec(message.content);
              }
            }
          }
        }
      }
    }
  } else if (use_allowed_list == false) {
      if (blocked_users.includes(parseFloat(message.author.id)) == false) {
        if (public_servers == true) {
          if (public_channels == true) {
            exec(message.content);
          }
        } else if (public_servers == false) {
          if (public_channels == true) {
            if (message.channel.id != channel_id) {
              exec(message.content); 
            }
          } else if (public_channels == false) {
            if (message.guild.id == server_id) {
              if (message.channel.id == channel_id) {
                exec(message.content);
              }
            }
          }
        }
      }
    }
});


client.login(token);