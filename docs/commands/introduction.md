# Commands Reference

Complete reference for all bot commands.

## Command Prefix

All message commands use the prefix: `,` (comma)

## Command Categories

### Welcome Commands

Manage welcome messages that ping new members when they join the server.

- `,welcome` - Base command with multiple subcommands
- See [Welcome Commands](/docs/commands/welcome) for details

### Self-Roles Commands

Manage reaction-based self-role assignments.

- `,selfroles` - Base command with multiple subcommands
- See [Self-Roles Commands](/docs/commands/self-roles) for details

## Command Syntax

Commands follow this general syntax:

```
,command [subcommand] [arguments]
```

- `command` - The main command name
- `[subcommand]` - Optional subcommand
- `[arguments]` - Optional arguments

### Arguments

- `<required>` - Required argument
- `[optional]` - Optional argument
- `<channel>` - Channel mention or ID
- `<role>` - Role mention or ID
- `<emoji>` - Emoji (default or custom)

## Permissions

Most commands require specific permissions:

- **Manage Guild**: Required for configuration commands
- **Manage Roles**: Required for self-roles (bot permission)

## Examples

### Welcome Commands

```
,welcome add #welcome
,welcome delay #welcome 5
,welcome duration #welcome 30
,welcome view #welcome
```

### Self-Roles Commands

```
,selfroles add @Notifications 🔔
,selfroles panel
,selfroles remove @Notifications
```

## Getting Help

If a command doesn't work:

1. Check bot permissions
2. Verify command syntax
3. Check [Troubleshooting](/docs/reference/troubleshooting)
4. Review command-specific documentation

## Next Steps

- [Welcome Commands](/docs/commands/welcome) - Complete welcome command reference
- [Self-Roles Commands](/docs/commands/self-roles) - Complete self-roles command reference

