var context = require.context('./app', true,  /_tests.ts$/);
context.keys().forEach(context);
