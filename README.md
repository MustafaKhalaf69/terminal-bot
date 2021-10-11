# terminal-bot
A bot that sends commands from discord to termux, linux terminal and probably any os that supports NodeJS

Steps:

1. get nodejs 1.12+ (termux command: pkg install nodejs)

2. git clone https://github.com/ITZProGamerDieYT/terminal-bot

3. cd terminal-bot

4. npm install discord.js@v12

5. modify `allowed_blocked_users.json` for your needs (put allowed users id's in "allowed_users_id", blocked users id's in "blocked_users_id", and enable allowed users list by changing "use_allowed_list" to true

6. put your bot token in the "token" variable in `config.json`

7. modify `config.json` to your needs (server_id's for bot in "server_id", channel_id's for bot in "channel_id", make bot limited to some servers by changing "public_servers" to false, and limited to some channels by changing "public_channels" to false

8. node bot.js
