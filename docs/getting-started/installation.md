# Installation

This guide will walk you through installing and setting up the Cliqqing Discord bot.

## Prerequisites

Before you begin, ensure you have:

1. **Bun Runtime**: Install from [bun.sh](https://bun.sh)
   ```bash
   # Verify installation
   bun --version
   ```

2. **Discord Application**: Create a bot at [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new application
   - Go to "Bot" section
   - Create a bot user
   - Copy the bot token
   - Enable required intents (see below)

3. **PostgreSQL Database**: Set up a PostgreSQL database
   - Recommended: [Neon](https://neon.tech) for serverless hosting
   - Alternative: Local PostgreSQL installation
   - Copy the connection string

## Step-by-Step Installation

### Step 1: Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd cliqqing

# Install dependencies
bun install
```

### Step 2: Configure Environment

Create a `.env` file in the root directory:

```env
DISCORD_TOKEN=your_bot_token_here
GUILD_ID=your_guild_id_here
DATABASE_URL=postgresql://user:password@host:port/database
```

**Getting your Guild ID:**
1. Enable Developer Mode in Discord (User Settings → Advanced → Developer Mode)
2. Right-click your server → Copy Server ID

**Getting your Database URL:**
- **Neon**: Copy the connection string from your Neon dashboard
- **Local**: Format: `postgresql://username:password@localhost:5432/database_name`

### Step 3: Set Up Database

```bash
# Generate Prisma client
bun prisma generate
```

**Note**: The project uses manual migration management. After generating the client, you may need to run migrations manually if the database is empty.

### Step 4: Configure Discord Bot

In the Discord Developer Portal, ensure your bot has:

**Required Intents:**
- ✅ Server Members Intent
- ✅ Message Content Intent

**Bot Permissions:**
- Manage Roles (for self-roles)
- Send Messages
- Read Message History
- Add Reactions
- Manage Messages (for welcome message deletion)

**Invite URL:**
Create an invite URL with the required permissions:
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=268435456&scope=bot
```

Replace `YOUR_BOT_ID` with your application's client ID.

### Step 5: Run the Bot

**Development Mode** (recommended for testing):
```bash
bun dev
```

This runs the bot with watch mode, automatically restarting on file changes.

**Production Mode**:
```bash
bun start
```

### Step 6: Verify Installation

1. Check that the bot appears online in your Discord server
2. Test a command: `,welcome list` (should show help or empty list)
3. Check console logs for any errors

## Next Steps

Now that you have the bot installed, continue to the [Configuration Guide](configuration) to set up your bot's settings.

