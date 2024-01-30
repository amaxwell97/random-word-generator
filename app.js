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

window.addEventListener('load', () => {
    updateDate();
})



async function getWordOfDay() {

    const endpoint = `${url}${randomWord}${param}${dictionaryApiKey}`;

}
