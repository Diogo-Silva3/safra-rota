import { defineConfig } from '@tanstack/router-plugin/core'

export default defineConfig({
  routesDir: './src/routes',
  generatedRouteTree: './src/routeTree.gen.ts',
})
