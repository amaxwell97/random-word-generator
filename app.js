const dictionaryUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';
const dictionaryParam = '?key=';
const dictionaryApiKey = 'ac4c167d-3e4f-49e3-a1e0-2559685b5edd';
const thesaurusApiKey = 'c271b055-4fb7-4211-bec3-332030a68585';

const apiNinjaUrl = 'https://api.api-ninjas.com/v1/randomword';
const ninjaApiKey = 'OU3EgLPnojM0hixoYAg4BQ==7prR9bGUFIJStBV9';

const todaysDateTitle = document.querySelector('.container h1');
const todaysWordDisplay = document.querySelector('.container h2');
const todaysWordDfnDisplay = document.querySelector('#definition');
const todaysWordSentenceDisplay = document.querySelector('#sentence');

const today = new Date();
const dd = today.getDate();
const month = today.toLocaleString('default', {month: 'long'});
const yyyy = today.getFullYear();
const todaysDate = `${month} ${dd}, ${yyyy}`;

const updateDate = () => {
    return todaysDateTitle.innerHTML += todaysDate;
}

const randomWordOptions = {
    method: 'GET',
    headers: {
        'X-Api-Key': ninjaApiKey
    }
};

const getRandomWord = async () => {
    const ninjaResponse = await fetch(apiNinjaUrl, randomWordOptions);
    const ninjaData = await ninjaResponse.json();
    console.log(ninjaData.word);
    return String(ninjaData.word);
}

const getWordDfn = async () => {
    const randomWord = await getRandomWord();
    const websterResponse = await fetch(`${dictionaryUrl}${randomWord}${dictionaryParam}${dictionaryApiKey}`);
    const websterData = await websterResponse.json();
    console.log(websterData);
    const randomWordDfn = websterData['0']['shortdef']['0'];
    return [randomWord, randomWordDfn];
}

// Need to create getWordSentence async function to access an examplatory sentence
// Update updateHtml afterwards to set todaysWordSentenceDisplay

const updateHtml = async () => {
    const wordAndDefinition = await getWordDfnAndSentence();
    todaysWordDisplay.innerText = wordAndDefinition[0];
    todaysWordDfnDisplay.innerText = wordAndDefinition[1];
}

window.addEventListener('load', () => {
    updateDate();
    updateHtml();
    // getWordDfn();
})

