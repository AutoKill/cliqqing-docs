# Welcome Commands

Manage welcome messages that ping new members when they join the server.

## Base Command

```
,welcome [subcommand] [arguments]
```

**Aliases**: `,w`, `,wm`, `,welc`

## Subcommands

### Add Welcome Configuration

```
,welcome add <channel>
```

Adds a welcome message configuration for the specified channel.

**Arguments:**
- `<channel>`: Channel mention (`#channel`) or channel ID

**Example:**
```
,welcome add #welcome
```

**Behavior:**
- Creates a welcome configuration for the channel
- Default delay: 0 seconds
- Default duration: 1 second (message deletes after 1 second)
- Default message: Just the member mention

### Remove Welcome Configuration

```
,welcome remove <channel>
```

Removes the welcome message configuration for the specified channel.

**Arguments:**
- `<channel>`: Channel mention (`#channel`) or channel ID

**Example:**
```
,welcome remove #welcome
```

### View Welcome Configuration

```
,welcome view <channel>
```

Displays the current welcome message configuration for a channel.

**Arguments:**
- `<channel>`: Channel mention (`#channel`) or channel ID

**Example:**
```
,welcome view #welcome
```

**Shows:**
- Channel ID
- Custom message (if set)
- Delay (seconds)
- Duration (seconds)
- Paused status

### List All Welcome Configurations

```
,welcome list
```

Lists all welcome message configurations for the current guild.

**Example:**
```
,welcome list
```

**Shows:**
- All configured channels
- Their current settings
- Paused status

### Pause Welcome Messages

```
,welcome pause <channel>
```

Temporarily pauses welcome messages for a channel without removing the configuration.

**Arguments:**
- `<channel>`: Channel mention (`#channel`) or channel ID

**Example:**
```
,welcome pause #welcome
```

**Use Cases:**
- Temporarily disable welcome messages
- Keep configuration for later use

### Resume Welcome Messages

```
,welcome resume <channel>
```

Resumes paused welcome messages for a channel.

**Arguments:**
- `<channel>`: Channel mention (`#channel`) or channel ID

**Example:**
```
,welcome resume #welcome
```

### Set Delay

```
,welcome delay <channel> <seconds>
```

Sets the delay (in seconds) before sending the welcome message after a member joins.

**Arguments:**
- `<channel>`: Channel mention (`#channel`) or channel ID
- `<seconds>`: Delay in seconds (integer, 0 or positive)

**Example:**
```
,welcome delay #welcome 5
```

**Behavior:**
- Message is sent after the specified delay
- Useful for avoiding spam if many members join quickly
- Default: 0 seconds (immediate)

### Set Duration

```
,welcome duration <channel> <seconds>
```

Sets how long (in seconds) the welcome message stays before being automatically deleted.

**Arguments:**
- `<channel>`: Channel mention (`#channel`) or channel ID
- `<seconds>`: Duration in seconds (integer, 1 or greater)

**Example:**
```
,welcome duration #welcome 30
```

**Behavior:**
- Message is automatically deleted after the specified duration
- Minimum: 1 second
- Default: 1 second

## Complete Example

Set up a welcome channel with delay and duration:

```
,welcome add #welcome
,welcome delay #welcome 3
,welcome duration #welcome 60
,welcome view #welcome
```

## Error Messages

### "Channel not found"
- Channel doesn't exist or bot can't access it
- Check channel permissions

### "Missing permissions"
- Bot lacks required permissions
- Check bot's role and permissions

## Tips

1. Use delay to prevent spam during raids
2. Set appropriate duration to keep channels clean
3. Test with a test account before going live
4. Use pause/resume for temporary disabling

## Related Documentation

- [Welcome System Feature](/docs/features/welcome-system) - Feature overview
- [Getting Started](/docs/getting-started/first-steps) - First-time setup

