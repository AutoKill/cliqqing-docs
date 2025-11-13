# Architecture

High-level architecture documentation for the Cliqqing Discord bot.

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Discord API (WebSocket)                │
└───────────────────────┬───────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│              Sapphire Framework Client                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Commands   │  │  Listeners   │  │ Preconditions│ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│  ┌──────────────┐  ┌──────────────┐                   │
│  │ Cron Tasks   │  │   Utils      │                   │
│  └──────────────┘  └──────────────┘                   │
└───────────────────────┬───────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   Prisma     │ │    Config    │ │   Plugins    │
│   Client     │ │    System    │ │ (Logger/Cron)│
└──────┬───────┘ └──────────────┘ └──────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│      PostgreSQL (Neon Serverless)      │
└─────────────────────────────────────────┘
```

## Core Components

### Sapphire Framework Client

The bot is built on the Sapphire Framework, which provides:

- **Command System**: Automatic command loading and routing
- **Event Listeners**: Event-driven architecture for Discord events
- **Dependency Injection**: Container-based service management
- **Preconditions**: Command access control and validation
- **Plugin System**: Extensible architecture via plugins

### Commands Module

Commands handle user interactions and bot functionality.

**Structure:**
- Commands extend `ExtendedCommand` from `#lib/extensions/ExtendedCommand`
- Use `@ApplyOptions` decorator for configuration
- Auto-loaded from `src/commands/` directory

**Current Commands:**
- `welcome`: Welcome message management
- `selfroles`: Self-role system management

### Listeners Module

Listeners handle Discord events and bot lifecycle events.

**Current Listeners:**
- `clientReady`: Bot startup initialization
- `guildMemberAdd`: Welcome message handling
- `messageReactionAdd`: Self-role assignment
- `messageReactionRemove`: Self-role removal
- `messageCommandDenied`: Command denial handling
- `messageCommandError`: Error handling

### Database Layer

Prisma ORM provides type-safe database access.

**Models:**
- `Cooldown`: Rate limiting and cooldown management
- `PingOnJoinData`: Welcome message configurations
- `SelfRole`: Self-role configurations

### Configuration System

Custom configuration system with JSON/YAML support.

**Features:**
- Auto-creation of default config files
- Zod schema validation
- Auto-merge with defaults
- Support for JSON and YAML formats

## Data Flow

### Welcome Message Flow

```
User Joins Server
    │
    ▼
guildMemberAdd Listener
    │
    ▼
Query PingOnJoinData (filter: guildId, paused=false)
    │
    ▼
For each configuration:
    │
    ├─► Wait for delay
    │
    ├─► Fetch channel
    │
    ├─► Send message (member mention + custom message)
    │
    └─► Schedule deletion (after duration)
```

### Self-Role Flow

```
User Reacts to Panel
    │
    ▼
messageReactionAdd Listener
    │
    ▼
Query SelfRole (filter: guildId, panelMessageId, emojiId)
    │
    ▼
If found:
    │
    ├─► Check bot permissions
    │
    ├─► Assign role to user
    │
    └─► Log action
```

## Technology Stack

- **Runtime**: Bun
- **Language**: TypeScript 5.7.3
- **Framework**: Sapphire Framework 5.3.7
- **Discord API**: discord.js 14.24.1
- **Database**: PostgreSQL (via Prisma 6.18.0)
- **Validation**: Zod 3.25.76

## Extension Points

### Adding New Commands

1. Create file in `src/commands/`
2. Extend `ExtendedCommand`
3. Use `@ApplyOptions` for configuration
4. Implement command logic

### Adding New Listeners

1. Create file in `src/listeners/`
2. Extend `Listener<typeof Events.EventName>`
3. Use `@ApplyOptions` for configuration
4. Implement event handler

## Related Documentation

For more detailed technical information, see the main project repository documentation.

