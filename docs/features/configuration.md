# Configuration System

The bot uses a flexible configuration system with JSON/YAML support and automatic validation.

## Overview

The configuration system provides:
- **Auto-creation**: Creates default config if missing
- **Validation**: Validates against Zod schemas
- **Merge**: Merges user config with defaults
- **Formats**: Supports JSON and YAML

## Configuration File

The main configuration file is located at `config/config.json`.

### Default Configuration

```json
{
  "colors": {
    "primary": "#0AC878",
    "success": "#a4eb78",
    "error": "#faa81a"
  }
}
```

## Configuration Features

### Auto-Creation

If the configuration file doesn't exist, it's automatically created with default values.

### Validation

All configuration is validated against Zod schemas. Invalid configurations are rejected with clear error messages.

### Auto-Merge

User configuration is automatically merged with defaults. You only need to specify values you want to change.

### Format Support

The system supports both JSON and YAML formats:

**JSON:**
```json
{
  "colors": {
    "primary": "#0AC878"
  }
}
```

**YAML:**
```yaml
colors:
  primary: "#0AC878"
```

## Color Configuration

Colors are used in embeds and messages throughout the bot.

### Available Colors

- **primary**: Primary brand color
- **success**: Success messages
- **error**: Error messages

### Color Format

Colors can be specified as:
- Hex codes: `#0AC878`
- RGB values: `rgb(10, 200, 120)`
- Color names: `green` (limited support)

## Environment Variables

Configuration can also be done via environment variables. See [Installation Guide](/docs/getting-started/installation) for details.

## Best Practices

1. **Use Defaults**: Only override what you need
2. **Validate**: Check configuration after changes
3. **Backup**: Keep backups of your configuration
4. **Version Control**: Don't commit sensitive data

## Related Documentation

- [Installation Guide](/docs/getting-started/installation) - Environment setup
- [Configuration Guide](/docs/getting-started/configuration) - Detailed configuration

