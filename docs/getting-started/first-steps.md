# First Steps

Now that your bot is installed and configured, let's set up your first features!

## Set Up Welcome Messages

Welcome messages automatically ping new members when they join your server.

### 1. Add a Welcome Channel

```
,welcome add #welcome-channel
```

This creates a welcome configuration for the channel with default settings:
- **Delay**: 0 seconds (immediate)
- **Duration**: 1 second (message deletes quickly)
- **Message**: Just the member mention

### 2. Configure Delay (Optional)

Set a delay before sending the welcome message:

```
,welcome delay #welcome-channel 5
```

This waits 5 seconds before sending the message. Useful for preventing spam during raids.

### 3. Configure Duration (Optional)

Set how long the message stays before being deleted:

```
,welcome duration #welcome-channel 30
```

The message will be automatically deleted after 30 seconds.

### 4. View Configuration

Check your welcome message settings:

```
,welcome view #welcome-channel
```

This shows:
- Channel ID
- Custom message (if set)
- Delay (seconds)
- Duration (seconds)
- Paused status

## Set Up Self-Roles

Self-roles allow members to assign themselves roles by reacting to a panel message.

### 1. Add Self-Roles

Add roles that members can assign to themselves:

```
,selfroles add @Notifications 🔔
,selfroles add @Gaming 🎮
,selfroles add @Developer 💻
```

**Note**: Requires "Manage Guild" permission.

### 2. Create Panel

Create a panel message with all self-roles:

```
,selfroles panel
```

This creates a message listing all self-roles with reaction buttons. Members can react to get roles automatically.

### 3. Test It!

1. React to the panel message with an emoji
2. The bot should assign you the corresponding role
3. Remove the reaction to remove the role

## Managing Features

### Pause/Resume Welcome Messages

Temporarily pause welcome messages without removing configuration:

```
,welcome pause #welcome-channel
```

Resume when ready:

```
,welcome resume #welcome-channel
```

### List All Configurations

View all welcome message configurations:

```
,welcome list
```

### Remove Configurations

Remove a welcome message configuration:

```
,welcome remove #welcome-channel
```

Remove a self-role:

```
,selfroles remove @RoleName
```

## Tips

1. **Welcome Messages**:
   - Use delay to prevent spam during raids
   - Set appropriate duration to keep channels clean
   - Test with a test account before going live

2. **Self-Roles**:
   - Create panel in a dedicated channel
   - Pin the panel message for easy access
   - Use clear, recognizable emojis
   - Test role assignment before announcing

3. **Permissions**:
   - Ensure bot role is high enough in hierarchy
   - Grant only necessary permissions
   - Test commands in a test server first

## Next Steps

- Explore the [Commands Reference](/docs/commands/introduction) for complete command documentation
- Check out [Features](/docs/features/welcome-system) for detailed feature guides
- Review [Troubleshooting](/docs/reference/troubleshooting) if you encounter issues

