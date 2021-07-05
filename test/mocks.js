const objectLinks = [
    {
        file: './randomPath.md',
        text: 'youtube',
        href: 'https://www.youtube.com'
    },
    {
        file: './randomPath.md',
        text: 'Enlace Roto',
        href: 'https://www.sensacine.com/404'
    },
    {
        file: './randomPath.md',
        text: 'Markdown',
        href: 'https://es.wikipedia.org/wiki/Markdown'
    },
    {
        file: './randomPath.md',
        text: 'Enlace Roto',
        href: 'https://www.sensacine.com/404'
    }
];

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