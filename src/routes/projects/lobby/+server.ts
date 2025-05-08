import { testData } from "$lib/server/testData";
import { ObjectId } from 'mongodb';



async function createLobbyRecord(lobbyName: string, maxPlayers: string, isPublic: string, host: string, playerName: string): Promise<string> {

    //get all records with this host and delete them

    try {
        let response = await testData.insertOne(
            {
                "public": isPublic,
                 "name": lobbyName,
                 "playerCount": 1,
                 "maxPlayers": Number(maxPlayers),
                 "players": [{"playerName": playerName, "playerID": host}],
                 "host": host,
                 "gameIsRunning": false,
                 "gameState": {game: "InLobby", state: {}}
            }
        )
        return response.insertedId.toString()
    } catch {
        return "Error: Document could not be added"
    }
    
}

export async function POST({ request, cookies, params }) {
    const { isCreateLobby: isCreateLobby, info: info } = await request.json();
    if(isCreateLobby) {
        if(!info.createLobbyName || !info.maxPlayers) {
            return new Response(JSON.stringify({success: false}));
        }
    
        let newId = await createLobbyRecord(info.createLobbyName, info.maxPlayers, info.isPublic, info.playerID, info.playerName)
        return new Response(JSON.stringify({success: true, id: newId}));
    } else {
        const id = info.lobbyID
        const playerID = info.playerID
        //console.log(playerID)
        const lobby = (await testData.find({"_id": ObjectId.createFromHexString(id) }).toArray()).map(testData => ({
            ...testData
        }))
        const playerName = info.playerName

        //Check to make sure there is a slot open for the player
        if (lobby[0].playerCount >= lobby[0].maxPlayers) {
            console.log("false")
            return new Response(JSON.stringify({success: false}));
        }

        //Update the lobby to add the player
        let playerList = lobby[0].players
        playerList.push({"playerName": playerName, "playerID": playerID})

        let isPublic = lobby[0].public
        if(playerList.length == lobby[0].maxPlayers) {
            isPublic = "off"
        }

        testData.updateOne(
            {"_id": ObjectId.createFromHexString(id)},
            { $set: { "playerCount": lobby[0].playerCount + 1, "players": playerList, "public": isPublic}}
        )
        return new Response(JSON.stringify({success: true}));
        //either delete and reinsert the lobby document or find a method to update the existing document
    }
}