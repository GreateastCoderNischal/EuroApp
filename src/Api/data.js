
export async function Data(category){
    const url = 'https://euro-20242.p.rapidapi.com/'+category;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '3fd43c4ea4mshe64f1cd59f838abp19c8ffjsn061d51044c89',
            'x-rapidapi-host': 'euro-20242.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
	const result = await response.text();
	let data=JSON.parse(result)
	return data
}

