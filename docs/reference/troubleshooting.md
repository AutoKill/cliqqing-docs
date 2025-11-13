# Troubleshooting

Common issues and their solutions.

## Bot Doesn't Start

### Check Environment Variables

```bash
# Verify .env file exists and has all required variables
cat .env
```

Ensure all required variables are set:
- `DISCORD_TOKEN`
- `GUILD_ID`
- `DATABASE_URL`

### Check Database Connection

- Verify `DATABASE_URL` is correct
- Test connection: `bun prisma studio` (if database is accessible)
- For Neon: Ensure IP allowlist is configured (if required)

### Check Discord Token

- Verify token is correct in `.env`
- Ensure bot is not already running elsewhere
- Check token hasn't been regenerated

## Commands Not Working

### Check Bot Permissions

- Bot needs appropriate permissions in the server
- Bot needs to be in the server
- Verify bot role has required permissions

### Check Command Registration

- Commands are registered to the guild specified in `GUILD_ID`
- Message commands work immediately
- Verify command prefix is correct (`,`)

### Check Console Logs

- Look for error messages in the console
- Check for permission errors
- Verify bot is online

## Database Errors

### Prisma Client Not Generated

```bash
bun prisma generate
```

### Schema Out of Sync

- Ensure `prisma/schema.prisma` matches your database
- Run migrations if needed (manually)

### Connection Errors

- Verify `DATABASE_URL` is correct
- Check database is accessible
- For Neon: Ensure IP allowlist is configured (if required)

## Welcome Messages Not Sending

### Check Configuration

```
,welcome list
```

### Check If Paused

```
,welcome view #channel
```

### Check Bot Permissions

- Bot needs "Send Messages" permission in the channel
- Bot needs "Mention Everyone" if using @everyone

## Self-Roles Not Working

### Check Permissions

- Bot needs "Manage Roles" permission
- Bot's role must be above the roles it's assigning

### Check Emoji

- Custom emojis must be accessible to the bot
- Default emojis should work without issues

### Check Panel

- Ensure panel message exists and is accessible
- Reactions may need to be re-added if bot was offline
- Recreate panel if needed: `,selfroles panel`

## Still Having Issues?

1. Check the console logs for error messages
2. Review the troubleshooting section above
3. Check the documentation in the main repository
4. Verify all prerequisites are met
5. Ensure environment variables are correctly set
6. Open an issue on GitHub with details

## Related Documentation

- [Getting Started](/docs/getting-started/installation)
- [Commands Reference](/docs/commands/introduction)
- [Quick Reference](/docs/reference/quick-reference)

