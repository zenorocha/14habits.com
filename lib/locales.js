const supportedLocales = ['en-US', 'pt-BR', 'es-ES']

function isSupportedLocale(locale) {
    return supportedLocales.includes(locale)
}

export default isSupportedLocale;