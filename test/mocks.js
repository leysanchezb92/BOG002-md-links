const objectLinks = {
    link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    text: 'Uso de flexbox en CSS.',
    file: '/Users/leidysanchez/Documentos/MD-links/BOG002-md-links/carpeta/carpeta2/mock.md'
}
const objectLinksValidate = [
    {
        file: './randomPath.md',
        href: 'https://www.youtube.com',
        text: 'youtube',
        status: 'ok',
        code: '200'
    },
    {
        file: './randomPath.md',
        href: 'https://www.sensacine.com/404',
        text: 'Enlace Roto',
        status: 'fail',
        code: '404'
    },
    {
        file: './randomPath.md',
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        status: 'ok',
        code: '200'
    },
    {
        file: './randomPath.md',
        href: 'https://www.sensacine.com/404',
        text: 'Enlace Roto',
        status: 'fail',
        code: '404'
    }
];


module.exports = {
    objectLinks,
    objectLinksValidate
}