# Self-Roles System

The self-roles system allows members to assign themselves roles by reacting to a panel message.

## Overview

Members can react to a panel message to automatically get roles. When they remove the reaction, the role is removed. This system supports:

- Default Discord emojis
- Custom application emojis
- Multiple roles per guild
- Automatic role assignment/removal

## How It Works

1. **Admin Configures**: Admin adds self-roles with emojis
2. **Panel Created**: Admin creates a panel message
3. **User Reacts**: Member reacts to the panel with an emoji
4. **Role Assigned**: Bot automatically assigns the role
5. **Reaction Removed**: Member removes reaction, role is removed

## Features

### Emoji Support

**Default Emojis:**
- Use any default Discord emoji (🔔, 🎮, 💻, etc.)
- Cannot be duplicated within the same guild

**Custom Emojis:**
- Download and create as application emojis
- Global to the bot (works across all servers)
- Each role gets its own emoji copy

### Panel System

The panel displays all configured self-roles with their emojis. Members can:
- React to get a role
- Remove reaction to remove role
- See all available roles at a glance

### Automatic Cleanup

Unused application emojis are automatically cleaned up by a cron task running hourly.

## Setup

### Step 1: Add Self-Roles

```
,selfroles add @Notifications 🔔
,selfroles add @Gaming 🎮
,selfroles add @Developer 💻
```

**Requirements:**
- "Manage Guild" permission
- Role must exist and be manageable by bot

### Step 2: Create Panel

```
,selfroles panel
```

This creates a message with all self-roles and automatically adds reactions.

### Step 3: Members Use It

Members simply react to the panel message to get roles!

## Emoji Handling

### Default Emojis

Use default Discord emojis directly:

```
,selfroles add @Role 🔔
```

### Custom Emojis

Use custom emojis from any server the bot can access:

```
,selfroles add @Role <:custom:123456789>
```

The bot will:
1. Download the emoji image
2. Create it as an application emoji
3. Use it for the self-role

## Requirements

### Bot Permissions

- **Manage Roles**: Required to assign/remove roles
- **Add Reactions**: Required for panel reactions
- **Send Messages**: Required to create panel

### Role Hierarchy

The bot's role must be:
- Higher than the roles it's assigning
- Have "Manage Roles" permission

## Managing Self-Roles

### Remove Self-Role

```
,selfroles remove @Role
```

Removes the self-role configuration but keeps the role itself.

### Update Panel

If you add new self-roles after creating the panel, recreate it:

```
,selfroles panel
```

## Tips

1. **Dedicated Channel**: Create panel in a dedicated channel
2. **Pin Panel**: Pin the panel message for easy access
3. **Clear Emojis**: Use clear, recognizable emojis
4. **Test First**: Test role assignment before announcing
5. **Role Hierarchy**: Ensure bot role is high enough

## Related Commands

See the [Self-Roles Commands](/docs/commands/self-roles) reference for complete command documentation.

