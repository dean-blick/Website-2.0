interface TranscriptInfo {
    Title: string,
    Description: string,
    Badges: Array<string>
}

export const transcript: Array<TranscriptInfo> = [
    {
        Title: 'Computer Science Courses',
        Description: "",
        Badges: []
    },
    {
        Title: 'Example Class',
        Description: 'Example description, asdasdasdasdasdsasdaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa',
        Badges: ['Example Tech 1', 'Example Tech 2']
    },
    {
        Title: 'General Education Courses',
        Description: "",
        Badges: []
    },
]

// {
//     Title: 'ExampleTitle',
//     Description: 'Example description, asdasdasdasdasdsasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     Badges: ['Example Tech 1', 'Example Tech 2'],
//     Link: '/exampleroute',
//     GitHub: 'GitHub.com'
// },