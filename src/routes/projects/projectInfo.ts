interface ProjectInfo {
    Title: string,
    Description: string,
    Badges: Array<string>,
    Link: string,
    GitHub: string
}

export const projects: Array<ProjectInfo> = [
    {
        Title: 'ToDo',
        Description: 'Implement and include web projects',
        Badges: ['Badge'],
        Link: '',
        GitHub: ''
    },
    {
        Title: 'Scantron Program',
        Description: 'The new piece of software for the new Scantron machine I deleveloped while working for K-State IT.',
        Badges: ['C#', 'WPF'],
        Link: '',
        GitHub: 'https://github.com/dean-blick/NewScantron'
    },
    {
        Title: 'Websocket Auction',
        Description: 'Live auction software that is comprised of a client and server side that communicate via a websocket. This was the final group project for CIS 501 at Kansas State.',
        Badges: ['C#', 'Websockets'],
        Link: 'https://www.youtube.com/watch?v=ohi5Bj-2WnQ',
        GitHub: ''
    },
    {
        Title: 'This Website',
        Description: 'You\'re lookin at it',
        Badges: ['Svelte/SvelteKit', 'TailwindCSS', 'SkeletonUI'],
        Link: '',
        GitHub: 'https://github.com/dean-blick/Website-2.0'
    },
    {
        Title: 'Point of Sale & Online Menu',
        Description: 'CIS 400 final project',
        Badges: ['C#', 'WPF'],
        Link: '',
        GitHub: 'https://github.com/dean-blick/PizzaParlor'
    },
    {
        Title: 'Booth Creek Programs',
        Description: 'While working for Booth Creek Wagyu, I worked on multiple programs designed to improve efficiency of operation, including using a web scraping package to retrieve data from a web-hosted database that did not offer any form of output.',
        Badges: ['Python', 'VBA', 'Pandas', 'Selenium'],
        Link: '',
        GitHub: ''
    },
    
]

// {
//     Title: 'ExampleTitle',
//     Description: 'Example description, asdasdasdasdasdsasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     Badges: ['Example Tech 1', 'Example Tech 2'],
//     Link: '/exampleroute',
//     GitHub: 'GitHub.com'
// },