interface ProjectInfo {
    Title: string,
    Description: string,
    Badges: Array<string>,
    Link: string,
    GitHub: string
}

export const projects: Array<ProjectInfo> = [
    {
        Title: 'Online Collaborative Art Board - Hack KU',
        Description: '\"Hack Draw\" was an online collaborative art board made by me during the 36 hour hackathon \"Hack KU.\" You can click the \"go\" link below or visit the devpost page here: https://devpost.com/software/hack-draw',
        Badges: ['Svelte/SvelteKit', 'MongoDB Atlas', 'TailwindCSS', 'SkeletonUI'],
        Link: 'https://hack-draw.vercel.app',
        GitHub: 'https://github.com/dean-blick/HackDraw'
    },
    {
        Title: 'Online Game Lobby',
        Description: 'The idea behind the online game lobby was to create a \"lobby\" system where you can play some simple games online with friends via a link and browse system. Tic Tac Toe is the only game implemented currently but the lobby system is functional.',
        Badges: ['SvelteKit', 'MongoDB Atlas'],
        Link: '/projects/lobby',
        GitHub: ''
    },
    {
        Title: 'Wordle Clone',
        Description: 'A version of the popular game Wordle that includes a \"create your own word\" feature.',
        Badges: ['Svelte'],
        Link: '/projects/wordGame',
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
        Title: 'Sorting Algorithm Visualizer',
        Description: 'A sorting algorithm visualizer that has a few different sorting algorithms and options',
        Badges: ['Svelte', 'svelte-canvas'],
        Link: '/projects/sortingVisual',
        GitHub: ''
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
        Title: 'Beginner Web-Dev Projects',
        Description: 'Some simple projects to get the hang of Svelte & Tailwind',
        Badges: ['Svelte', 'TailwindCSS'],
        Link: '/projects/beginner',
        GitHub: ''
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