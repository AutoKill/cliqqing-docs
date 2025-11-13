# Welcome System

The welcome system automatically sends messages to new members when they join your server.

## Overview

When a new member joins your server, the bot can automatically:
- Send a welcome message in a configured channel
- Wait for a configurable delay before sending
- Automatically delete the message after a set duration
- Support multiple channels with different configurations

## Features

### Configurable Channels

Set up welcome messages for multiple channels. Each channel can have:
- Custom message text
- Custom delay (seconds before sending)
- Custom duration (seconds before deletion)
- Pause/resume functionality

### Delay Configuration

Prevent spam during raids by setting a delay before sending welcome messages:

```
,welcome delay #welcome 5
```

This waits 5 seconds before sending the message.

### Duration Configuration

Keep channels clean by automatically deleting welcome messages:

```
,welcome duration #welcome 30
```

The message will be deleted after 30 seconds.

### Pause/Resume

Temporarily disable welcome messages without removing configuration:

```
,welcome pause #welcome
,welcome resume #welcome
```

## How It Works

1. **Member Joins**: A new member joins your server
2. **Listener Triggers**: The `guildMemberAdd` listener detects the join
3. **Query Configurations**: Bot queries all active welcome configurations for the guild
4. **Wait for Delay**: Bot waits for the configured delay (if any)
5. **Send Message**: Bot sends welcome message with member mention
6. **Schedule Deletion**: Bot schedules message deletion after duration

## Configuration

### Add Welcome Configuration

```
,welcome add #welcome-channel
```

**Default Settings:**
- Delay: 0 seconds (immediate)
- Duration: 1 second
- Message: Just the member mention

### View Configuration

```
,welcome view #welcome-channel
```

Shows all settings for a channel.

### List All Configurations

```
,welcome list
```

Lists all welcome configurations for the guild.

## Use Cases

### Standard Welcome

Simple welcome message that deletes quickly:

```
,welcome add #welcome
,welcome duration #welcome 10
```

### Delayed Welcome

Prevent spam during raids:

```
,welcome add #welcome
,welcome delay #welcome 10
,welcome duration #welcome 60
```

### Custom Message

Add custom text to welcome messages (coming soon).

## Tips

1. **Use Delay**: Set a delay to prevent spam during raids
2. **Set Duration**: Keep channels clean with auto-deletion
3. **Test First**: Test with a test account before going live
4. **Multiple Channels**: Configure different channels for different purposes

## Related Commands

See the [Welcome Commands](/docs/commands/welcome) reference for complete command documentation.

