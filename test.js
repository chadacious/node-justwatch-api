
const JustWatch = require('./');

function print_result(name, result)
{
	console.log(name+":");
	console.log(JSON.stringify(result, null, 4));
	console.log("\n\n\n\n");
}

(async function(){
	var justwatch = new JustWatch('en_US');

	var searchResult = await justwatch.search({query: 'always sunny'});
	print_result("search", searchResult);

	var episodes = await justwatch.getNewestEpisodes(searchResult.items[0].id);
	print_result("episodes", episodes);
})();
