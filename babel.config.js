module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            pages: './src/pages',
            contexts: './src/contexts',
            services: './src/services',
            api: './src/api',
            storage: './src/storage',
            hooks: './src/hooks'
          }
        }
      ]
    ]
  }
}
