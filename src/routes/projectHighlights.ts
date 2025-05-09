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
]