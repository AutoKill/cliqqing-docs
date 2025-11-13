# Self-Roles Commands

Manage reaction-based self-role assignments.

## Base Command

```
,selfroles [subcommand] [arguments]
```

**Aliases**: `,sr`

**Required Permission**: `Manage Guild`

## Subcommands

### Add Self-Role

```
,selfroles add <role> <emoji>
```

Adds or updates a self-role configuration. Users can react with the specified emoji to get the role.

**Arguments:**
- `<role>`: Role mention (`@Role`) or role ID
- `<emoji>`: Emoji (default Discord emoji or custom emoji)

**Examples:**
```
,selfroles add @Notifications 🔔
,selfroles add @Gaming 🎮
,selfroles add @Developer <:custom:123456789>
```

**Behavior:**
- Creates a self-role configuration
- For custom emojis: Downloads and creates as application emoji (global to bot)
- For default emojis: Validates no duplicate within the same guild
- Updates existing configuration if role already configured

**Emoji Handling:**
- **Default Emojis**: Can be used directly (e.g., `🔔`, `🎮`)
- **Custom Emojis**: Must be from a server the bot can access
  - Format: `<:name:id>` or `:name:id:`
  - Bot will download and create as application emoji
  - Application emojis are global to the bot

**Duplicate Prevention:**
- Default emojis: Cannot be duplicated within the same guild
- Custom emojis: Each role gets its own application emoji copy

### Remove Self-Role

```
,selfroles remove <role>
```

Removes a self-role configuration.

**Arguments:**
- `<role>`: Role mention (`@Role`) or role ID

**Example:**
```
,selfroles remove @Notifications
```

**Behavior:**
- Removes the self-role configuration
- Does not remove the role itself
- Does not remove reactions from panel messages
- Application emojis may be cleaned up by cron task if unused

### Create Panel

```
,selfroles panel
```

Creates a panel message with all configured self-roles. Users can react to get roles.

**Example:**
```
,selfroles panel
```

**Behavior:**
- Sends a message listing all self-roles
- Adds reactions for each self-role
- Stores panel message and channel IDs
- Users react to get/remove roles

**Panel Format:**
- Lists all self-roles with their emojis
- Each self-role gets a reaction button
- Users click reactions to toggle roles

**Important:**
- Panel must be created after adding self-roles
- If self-roles are added after panel creation, recreate the panel
- Panel message must remain accessible to the bot

## Complete Example

Set up self-roles and create a panel:

```
,selfroles add @Notifications 🔔
,selfroles add @Gaming 🎮
,selfroles add @Developer 💻
,selfroles panel
```

## How Self-Roles Work

1. **Admin adds self-role**: `,selfroles add @Role 🔔`
2. **Admin creates panel**: `,selfroles panel`
3. **User reacts**: User clicks the 🔔 reaction on the panel
4. **Bot assigns role**: Bot automatically assigns the role
5. **User removes reaction**: Bot removes the role

**Requirements:**
- Bot must have "Manage Roles" permission
- Bot's role must be above the roles it's assigning
- Panel message must be accessible
- Reactions must be on the panel message

## Error Messages

### "Role not found"
- Role doesn't exist or bot can't access it
- Check role hierarchy

### "Missing permissions"
- Bot lacks required permissions
- Check bot's role and permissions

### "Invalid emoji"
- Emoji format is incorrect
- For custom emojis, ensure bot can access the source server

### "Duplicate emoji"
- Default emoji already used for another role in the same guild
- Use a different emoji

## Tips

1. Create panel in a dedicated channel
2. Pin the panel message for easy access
3. Use clear, recognizable emojis
4. Test role assignment before announcing
5. Ensure bot role is high enough in hierarchy

## Related Documentation

- [Self-Roles Feature](/docs/features/self-roles) - Feature overview
- [Getting Started](/docs/getting-started/first-steps) - First-time setup

