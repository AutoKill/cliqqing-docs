# API Reference

Technical API reference for developers.

## Command API

### Command Structure

```typescript
import { ApplyOptions } from '@sapphire/decorators';
import { ExtendedCommand } from '#lib/extensions/ExtendedCommand';

@ApplyOptions<ExtendedCommand.Options>({
  name: 'mycommand',
  description: 'Command description'
})
export class MyCommand extends ExtendedCommand {
  override async messageRun(message: Message, args: Args) {
    // Implementation
  }
}
```

### Listener Structure

```typescript
import { ApplyOptions } from '@sapphire/decorators';
import { Listener } from '@sapphire/framework';

@ApplyOptions<Listener.Options>({})
export class MyListener extends Listener<typeof Events.EventName> {
  override async run(...args) {
    // Implementation
  }
}
```

## Database API

### Prisma Client Access

```typescript
// In commands/listeners
const data = await this.container.prisma.modelName.findMany({
  where: { /* conditions */ }
});
```

### Available Models

- `Cooldown` - Rate limiting
- `PingOnJoinData` - Welcome configurations
- `SelfRole` - Self-role configurations

## Configuration API

```typescript
// Config is registered in container
const config = container.config; // Access config data
```

## Utility Functions

Utilities are organized by category:

- **discord/**: Discord-specific utilities (embeds, resolvers, emoji)
- **formatting/**: Formatting utilities (arrays, numbers, strings, time)
- **database/**: Database helpers (cooldown management)
- **concurrency/**: Concurrency utilities (mutex)

## Path Aliases

```typescript
#*          // ./src/*
#lib/*      // ./src/lib/*
#utils/*    // ./src/lib/utils/*
```

## Related Documentation

For more detailed information, see the main project repository.

