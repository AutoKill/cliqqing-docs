# Configuration

Learn how to configure the Cliqqing bot for your server.

## Environment Variables

The bot requires the following environment variables in a `.env` file:

```env
DISCORD_TOKEN=your_discord_bot_token
GUILD_ID=your_discord_guild_id
DATABASE_URL=postgresql://user:password@host:port/database
```

### DISCORD_TOKEN

Your Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications).

### GUILD_ID

The Discord server (guild) ID where you want to register commands. Enable Developer Mode in Discord to copy server IDs.

### DATABASE_URL

Your PostgreSQL connection string. Recommended format:
```
postgresql://username:password@host:port/database
```

## Bot Configuration File

The bot uses a configuration file located in `config/config.json`. The configuration is automatically validated and merged with defaults.

### Default Configuration

```json
{
  "colors": {
    "primary": "#0AC878",
    "success": "#a4eb78",
    "error": "#faa81a"
  }
}
```

### Configuration Features

- **Auto-creation**: Creates default config if missing
- **Validation**: Validates against Zod schemas
- **Merge**: Merges with defaults on load
- **Formats**: Supports JSON and YAML

## Discord Bot Settings

### Required Intents

Enable these intents in the Discord Developer Portal:

- **Server Members Intent**: Required for welcome messages
- **Message Content Intent**: Required for message commands

### Required Permissions

The bot needs the following permissions:

- **Manage Roles**: For self-roles system
- **Send Messages**: To send welcome messages
- **Read Message History**: To read commands
- **Add Reactions**: For self-roles panel
- **Manage Messages**: To delete welcome messages

### Bot Role Hierarchy

For self-roles to work, the bot's role must be:
- Higher than the roles it's assigning
- Have "Manage Roles" permission

## Next Steps

Once configured, check out [First Steps](first-steps) to start using the bot!

