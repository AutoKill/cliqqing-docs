# Contributing

Thank you for your interest in contributing to Cliqqing Bot!

## Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cliqqing
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment**
   - Copy `.env.example` to `.env`
   - Fill in required environment variables

4. **Generate Prisma client**
   ```bash
   bun prisma generate
   ```

5. **Run in development mode**
   ```bash
   bun dev
   ```

## Code Standards

### Variables and Constants
- Prefer `const` over `let`
- Use meaningful variable names
- Prefer camelCase for variables and functions
- Prefer PascalCase for classes, interfaces, and types

### Comments
- Code should be self-documenting
- Avoid unnecessary comments
- If code is complex, refactor instead of adding comments

### Type Annotations
- Do not add explicit return types (let TypeScript infer)
- Trust TypeScript's inference for return types

### Functions
- Use arrow functions for inline functions and callbacks
- Use function declarations or class methods for named functions
- Prefer async/await over Promise chains
- Always handle errors appropriately

### Code Formatting
- Use Biome formatter (already configured)
- Use single quotes for strings
- Use semicolons
- Use 2 spaces for indentation
- Line width: 100 characters
- Always use trailing commas when valid

## Project Structure

```
src/
├── commands/           # Bot commands
├── listeners/          # Event listeners
├── preconditions/      # Command preconditions
├── lib/
│   ├── config/         # Configuration system
│   ├── extensions/      # Framework extensions
│   └── utils/          # Utility functions
└── index.ts            # Main entry point
```

## Adding Features

1. Create appropriate piece (command, listener, precondition)
2. Follow naming conventions
3. Export from appropriate directories
4. Test thoroughly
5. Run Biome formatter

## Testing

- Test commands in a development server
- Use Discord's test guild feature
- Verify error handling
- Check edge cases

## Submitting Changes

1. Create a feature branch
2. Make your changes
3. Run `bun biome` to format code
4. Test your changes
5. Submit a pull request

## Questions?

If you have questions about contributing, please open an issue on GitHub.

