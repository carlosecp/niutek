const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

const SITE_URL = 'https://niutek.dev'

;(async () => {
	const prettierConfig = await prettier.resolveConfig('./.prettierc')
	const pages = await globby(['pages/*.tsx', '!pages/_*.tsx'])

	const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
							.map((page) => {
								const path = page.replace('pages', '').replace('.tsx', '')
								const route = path === '/index' ? '' : path

								return `
                        <url>
                            <loc>${`${SITE_URL}${route}`}</loc>
                        </url>
                    `
							})
							.join('')}
        </urlset>
    `

	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html'
	})

	// eslint-disable-next-line no-sync
	fs.writeFileSync('public/sitemap.xml', formatted)
})()
