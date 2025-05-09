import { testData } from "$lib/server/testData";
import type { PageServerLoad } from "./$types";

interface dataObject {
    players: Array<{playerName: string}>,
    _id: string,
    name: string
}

export const load: PageServerLoad = async function({cookies}) : Promise<{ playerID: string | undefined, testData: Array<dataObject> }> {
    if (cookies.get('playerID') == undefined) {
        cookies.set('playerID', Math.random().toString(16), {path: '/'})
    }
    const data = (await testData.find({"public": true }).toArray()).map(testData => ({
        ...testData,
        _id: testData._id.toString(),
        players: testData.players,
        name: testData.name
    }))
    return {
        playerID: cookies.get('playerID'),
        testData: data
    }
}
