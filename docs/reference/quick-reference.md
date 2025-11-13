# Quick Reference

Quick reference for common tasks and information.

## Environment Variables

```env
DISCORD_TOKEN=your_bot_token
GUILD_ID=your_guild_id
DATABASE_URL=postgresql://user:pass@host:port/db
```

## Common Commands

### Welcome Commands

```
,welcome add #channel              # Add welcome config
,welcome remove #channel           # Remove welcome config
,welcome view #channel             # View config
,welcome list                      # List all configs
,welcome pause #channel            # Pause messages
,welcome resume #channel           # Resume messages
,welcome delay #channel 5          # Set delay (seconds)
,welcome duration #channel 30       # Set duration (seconds)
```

### Self-Roles Commands

```
,selfroles add @Role 🔔            # Add self-role
,selfroles remove @Role            # Remove self-role
,selfroles panel                   # Create panel
```

## Bot Permissions

Required permissions:
- Manage Roles
- Send Messages
- Read Message History
- Add Reactions
- Manage Messages

## Gateway Intents

Required intents:
- Guilds
- Guild Messages
- Guild Members
- Message Content
- Guild Message Reactions

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot doesn't start | Check `.env` file and variables |
| Commands not working | Check bot permissions and `GUILD_ID` |
| Database errors | Run `bun prisma generate` |

## Related Documentation

- [Getting Started](/docs/getting-started/introduction)
- [Commands Reference](/docs/commands/introduction)
- [Troubleshooting](/docs/reference/troubleshooting)

