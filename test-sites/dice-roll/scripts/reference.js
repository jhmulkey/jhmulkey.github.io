var knowledgeTileArray = [
    "more than 1 of each building type allowed per city",
    "1 worker earned for each mine at end of each phase in addition to the silverling",
    "2 silverlings per goods sale, not just 1",
    "1 worker earned per goods sale in addition to the silverling(s)",
    "receive goods from 2 neighboring depots (not just 1) when ship placed",
    "silverlings may be used to buy tiles from any depot, not just the black depot",
    "if you place an animal tile when knowledge tile #7 is on estate, add 1 extra point for the animal tile itself that you place plus 1 extra point for any other animal tiles of the same animal type on the same pasture",
    "worker tiles can adjust dice roll by up to +2 or -2",
    "any dice result may be adjusted +1 or -1 to place a building",
    "any dice result may be adjusted +1 or -1 to place a ship or animal tile",
    "any dice result may be adjusted +1 or -1 to place a castle, knowledge tile, or mine",
    "any dice result may be adjusted +1 or -1 to acquire any new tile",
    "when a dice is traded for worker tiles, a silverling is also earned",
    "4 worker tiles traded for a dice, not just 2",
    "at end of game: 3 points for every goods type sold",
    "at end of game: 4 points for each corresponding building on the estate",
    "at end of game: 4 points for each animal type on estate",
    "at end of game: 1 point for every goods tile sold",
    "at end of game: 2 points for each bonus tile"
];

function knowledgeTile(x) {
    alert(knowledgeTileArray[x-1]);
};