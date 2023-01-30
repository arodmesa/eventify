async function getDataFromAPI(apiURL){
    try{
        const retrievedData = await fetch(apiURL);
        return retrievedData.json();
    }catch{
        return {errorInFetch: 'Some error has occurred. Check your internet connection or try again later...'}
    }    
}
export default getDataFromAPI;