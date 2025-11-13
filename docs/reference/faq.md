# Frequently Asked Questions

Common questions and answers about Cliqqing Bot.

## General

### What is Cliqqing Bot?

Cliqqing is a feature-rich Discord bot built with the Sapphire Framework that helps server administrators manage their communities with welcome messages, self-roles, and more.

### What permissions does the bot need?

The bot needs:
- Manage Roles (for self-roles)
- Send Messages
- Read Message History
- Add Reactions
- Manage Messages (for welcome message deletion)

### What intents are required?

- Server Members Intent
- Message Content Intent

## Welcome System

### How do welcome messages work?

When a new member joins, the bot automatically sends a welcome message in configured channels after a delay, and deletes it after a duration.

### Can I have multiple welcome channels?

Yes! You can configure welcome messages for multiple channels, each with different settings.

### How do I pause welcome messages?

Use `,welcome pause #channel` to temporarily pause without removing configuration.

## Self-Roles

### How do self-roles work?

Members react to a panel message to get roles. Removing the reaction removes the role.

### Can I use custom emojis?

Yes! The bot will download and create custom emojis as application emojis.

### What happens if I add a self-role after creating the panel?

You need to recreate the panel: `,selfroles panel`

### Can I use the same emoji for different roles?

Default emojis cannot be duplicated within the same guild. Custom emojis can be used for different roles (each gets its own copy).

## Configuration

### Where is the configuration stored?

Configuration is stored in `config/config.json` and in the database.

### Can I use YAML instead of JSON?

Yes! The configuration system supports both JSON and YAML formats.

## Technical

### What database does the bot use?

The bot uses PostgreSQL. Neon serverless is recommended for hosting.

### Can I use SQLite instead?

The bot is configured for PostgreSQL. You would need to modify the Prisma schema to use SQLite.

### How do I update the bot?

1. Pull latest changes
2. Run `bun install`
3. Run `bun prisma generate`
4. Restart the bot

## Troubleshooting

### Bot doesn't start

Check your `.env` file and ensure all required variables are set. See [Troubleshooting Guide](/docs/reference/troubleshooting).

### Commands not working

Check bot permissions and ensure the bot is online. See [Troubleshooting Guide](/docs/reference/troubleshooting).

## Still Have Questions?

- Check the [Troubleshooting Guide](/docs/reference/troubleshooting)
- Review the [Commands Reference](/docs/commands/introduction)
- Open an issue on GitHub

