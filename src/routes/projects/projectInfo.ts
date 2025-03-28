interface ProjectItem {
    Title: string,
    Description: string,
    Badges: Array<string>,
    Link: string,
    GitHub: string
}

export const projects: Array<ProjectItem> = [
    {
        Title: 'ExampleTitle',
        Description: 'Example description, asdasdasdasdasdsasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        Badges: ['Example Tech 1', 'Example Tech 2'],
        Link: '/exampleroute',
        GitHub: 'GitHub.com'
    },
]

// {
//     Title: 'ExampleTitle',
//     Description: 'Example description, asdasdasdasdasdsasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     Badges: ['Example Tech 1', 'Example Tech 2'],
//     Link: '/exampleroute',
//     GitHub: 'GitHub.com'
// },