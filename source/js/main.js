import {humanizeDate, humanizeDateForNigth, showAlert} from './utils.js';

const pageBody = document.querySelector('body');
const outputContainer = pageBody.querySelector('.output');
const pingPongContainer = pageBody.querySelector('.output__ping-pong');
const volleyContainer = pageBody.querySelector('.output__volley');
const btkContainer = pageBody.querySelector('.output__bt');
const footbal3x3Container = pageBody.querySelector('.output__football3x3');
const hockeyContainer = pageBody.querySelector('.output__hockey');
const basketContainer = pageBody.querySelector('.output__basket');
const cyberballContainer = pageBody.querySelector('.output__cyberball');
const timetableButton = pageBody.querySelector('.input__button');

const dateFormatTypes = {
    PINGPONG: 'DD MMMM YYYY',
    PINGPONGBLIND: 'DD.MM.YYYY',
    VOLLEY: 'DD MMMM YYYY',
    BT: 'DD.MM.YYYY',
    HOCKEY: 'DD.MM.YYYY',
    BASKET: 'DD MMMM YYYY',
    CYBERBALL: 'DD MMMM YYYY',
    FOOTBALL3X3: 'DD MMMM YYYY'
}

const challenge = 'Челлендж';
const stage = 'Стейдж';

const alertMessage = 'Ну дату хотяб выбери))';

const createCyberballTitles = (date) => {
    const cyberballDate = humanizeDate(date, dateFormatTypes.CYBERBALL);

    return (
    `<h2>Киберболл</h2>
    <li><span class="ready-title">Футбол 7х7. Турнир Лига Про Кипербол. ${cyberballDate} г.</span></li>`
    )
};

const createPingPongTitles = (date) => {
    const pingPongDate = humanizeDate(date, dateFormatTypes.PINGPONG);
    const pingPongNigthDate = humanizeDateForNigth(date, dateFormatTypes.PINGPONG);
    const pingPongBlindDate = humanizeDate(date, dateFormatTypes.PINGPONGBLIND);

    return (
        `<h2>Настольный теннис</h2>
        <li><span class="ready-title">Настольный теннис. А4. Турнир ${pingPongDate}г. 07:45</span></li>
        <li><span class="ready-title">Настольный теннис. А4. Турнир ${pingPongDate}г. 11:45</span></li>
        <li><span class="ready-title">Настольный теннис. А4. Турнир ${pingPongDate}г. 15:45</span></li>
        <li><span class="ready-title">Настольный теннис. А4. Турнир ${pingPongDate}г. 19:45</span></li>
        <li><span class="ready-title">Настольный теннис. А4. Турнир ${pingPongDate}г. 23:45</span></li>
        <li><span class="ready-title">Настольный теннис. А5. Турнир ${pingPongDate}г. 07:30</span></li>
        <li><span class="ready-title">Настольный теннис. А5. Турнир ${pingPongDate}г. 11:30</span></li>
        <li><span class="ready-title">Настольный теннис. А5. Турнир ${pingPongDate}г. 15:30</span></li>
        <li><span class="ready-title">Настольный теннис. А5. Турнир ${pingPongDate}г. 19:30</span></li>
        <li><span class="ready-title">Настольный теннис. А5. Турнир ${pingPongDate}г. 23:30</span></li>
        <li><span class="ready-title">Настольный теннис. А6. Турнир ${pingPongDate}г. 07:45</span></li>
        <li><span class="ready-title">Настольный теннис. А6. Турнир ${pingPongDate}г. 11:45</span></li>
        <li><span class="ready-title">Настольный теннис. А6. Турнир ${pingPongDate}г. 15:45</span></li>
        <li><span class="ready-title">Настольный теннис. А6. Турнир ${pingPongDate}г. 19:45</span></li>
        <li><span class="ready-title">Настольный теннис. А6. Турнир ${pingPongDate}г. 23:45</span></li>
        <li><span class="ready-title">Настольный теннис. А6 AI. Турнир ${pingPongDate}г. 07:45</span></li>
        <li><span class="ready-title">Настольный теннис. А6 AI. Турнир ${pingPongDate}г. 11:45</span></li>
        <li><span class="ready-title">Настольный теннис. А6 AI. Турнир ${pingPongDate}г. 15:45</span></li>
        <li><span class="ready-title">Настольный теннис. А6 AI. Турнир ${pingPongDate}г. 19:45</span></li>
        <li><span class="ready-title">Настольный теннис. А6 AI. Турнир ${pingPongDate}г. 23:45</span></li>
        <li><span class="ready-title">Настольный теннис. А3. Турнир ${pingPongDate}г. 08:00</span></li>
        <li><span class="ready-title">Настольный теннис. А3. Турнир ${pingPongDate}г. 12:00</span></li>
        <li><span class="ready-title">Настольный теннис. А3. Турнир ${pingPongDate}г. 16:00</span></li>
        <li><span class="ready-title">Настольный теннис. А3. Турнир ${pingPongDate}г. 20:00</span></li>
        <li><span class="ready-title">Настольный теннис. А15. Турнир ${pingPongDate}г. 08:00</span></li>
        <li><span class="ready-title">Настольный теннис. А15. Турнир ${pingPongDate}г. 12:00</span></li>
        <li><span class="ready-title">Настольный теннис. А15. Турнир ${pingPongDate}г. 16:00</span></li>
        <li><span class="ready-title">Настольный теннис. А15. Турнир ${pingPongDate}г. 20:00</span></li>
        <li><span class="ready-title">Настольный теннис. А12. Чехия. Турнир ${pingPongDate}г. 10:00</span></li>
        <li><span class="ready-title">Настольный теннис. А12. Чехия. Турнир ${pingPongDate}г. 14:00</span></li>
        <li><span class="ready-title">Настольный теннис. А12. Чехия. Турнир ${pingPongDate}г. 18:00</span></li>
        <li><span class="ready-title">Настольный теннис. А12. Чехия. Турнир ${pingPongDate}г. 22:00</span></li>
        <li><span class="ready-title">Настольный теннис. А12. Чехия. Турнир ${pingPongNigthDate}г. 02:00</span></li>
        <li><span class="ready-title">Настольный теннис. А14. Чехия. Турнир ${pingPongDate}г. 10:00</span></li>
        <li><span class="ready-title">Настольный теннис. А14. Чехия. Турнир ${pingPongDate}г. 14:00</span></li>
        <li><span class="ready-title">Настольный теннис. А14. Чехия. Турнир ${pingPongDate}г. 18:00</span></li>
        <li><span class="ready-title">Настольный теннис. А14. Чехия. Турнир ${pingPongDate}г. 22:00</span></li>
        <li><span class="ready-title">Настольный теннис. А14. Чехия. Турнир ${pingPongNigthDate}г. 02:00</span></li>
        <li><span class="ready-title">Настольный теннис. А16. Чехия. Турнир ${pingPongDate}г. 10:00</span></li>
        <li><span class="ready-title">Настольный теннис. А16. Чехия. Турнир ${pingPongDate}г. 14:00</span></li>
        <li><span class="ready-title">Настольный теннис. А16. Чехия. Турнир ${pingPongDate}г. 18:00</span></li>
        <li><span class="ready-title">Настольный теннис. А16. Чехия. Турнир ${pingPongDate}г. 22:00</span></li>
        <li><span class="ready-title">Настольный теннис. А18. Чехия. Турнир ${pingPongDate}г. 10:00</span></li>
        <li><span class="ready-title">Настольный теннис. А18. Чехия. Турнир ${pingPongDate}г. 14:00</span></li>
        <li><span class="ready-title">Настольный теннис. А18. Чехия. Турнир ${pingPongDate}г. 18:00</span></li>
        <li><span class="ready-title">Настольный теннис. А18. Чехия. Турнир ${pingPongDate}г. 22:00</span></li>
        <li><span class="ready-title">Настольный теннис. А9. Турнир ${pingPongDate}г. 12:00</span></li>
        <li><span class="ready-title">Настольный теннис. А9. Турнир ${pingPongDate}г. 16:00</span></li>
        <li><span class="ready-title">Настольный теннис. А9. Турнир ${pingPongDate}г. 20:00</span></li>
        <li><span class="ready-title">Настольный теннис (спорт слепых). Лига Про. Хабаровск. Турнир ${pingPongBlindDate}г.</span></li>
        `
    )
};

const createHockeyTitles = (date) => {
    const hockeyDate = humanizeDate(date, dateFormatTypes.HOCKEY);

    return (
    `<h2>Хоккей</h2>
    <li><span class="ready-title">Хоккей. Открытый Чемпионат Лига Про. Магнитогорск. Утренний турнир. ${hockeyDate}г.</span></li>
    <li><span class="ready-title">Хоккей. Открытый Чемпионат Лига Про. Магнитогорск. Вечерний турнир. ${hockeyDate}г.</span></li>`
    )
};

const createBasketTitles = (date) => {
    const basketDate = humanizeDate(date, dateFormatTypes.BASKET);

    return (
    `<h2>Баскетбол 3х3</h2>
    <li><span class="ready-title">Баскетбол 3х3. Состязание бросков. Турнир А. ${basketDate}г.</span></li>
    <li><span class="ready-title">Баскетбол 3х3. Состязание бросков. Турнир Б. ${basketDate}г.</span></li>
    <li><span class="ready-title">Баскетбол 3х3. Турнир А. ${basketDate}г.</span></li>
    <li><span class="ready-title">Баскетбол 3х3. Турнир Б. ${basketDate}г.</span></li>`
    )
};

const createVolleyTverTitles = (date) => {
    const volleyDate = humanizeDate(date, dateFormatTypes.VOLLEY);

    return (
    `<h2>Волейбол Тверь</h2>
    <li><span class="ready-title">Волейбол.  Лига Про. Тверь. Турнир А. ${volleyDate}г.</span></li>
    <li><span class="ready-title">Волейбол.  Лига Про. Тверь. Турнир Б. ${volleyDate}г.</span></li>`
    )
};

const createFootbal3x3Titles = (date) => {
    const footbal3x3Date = humanizeDate(date, dateFormatTypes.FOOTBALL3X3);

    return (
    `<h2>Футбол 3х3</h2>
    <li><span class="ready-title">Футбол 3х3. Открытый турнир Лига Про по микрофутзалу. Дивизион А. Утренний турнир ${footbal3x3Date}г.</span></li>
    <li><span class="ready-title">Футбол 3х3. Открытый турнир Лига Про по микрофутзалу. Дивизион А. Дневной турнир ${footbal3x3Date}г.</span></li>
    <li><span class="ready-title">Футбол 3х3. Открытый турнир Лига Про по микрофутзалу. Дивизион А. Вечерний турнир ${footbal3x3Date}г.</span></li>
    <li><span class="ready-title">Футбол 3х3. Открытый турнир Лига Про по микрофутзалу. Дивизион Б. Утренний турнир ${footbal3x3Date}г.</span></li>
    <li><span class="ready-title">Футбол 3х3. Открытый турнир Лига Про по микрофутзалу. Дивизион Б. Дневной турнир ${footbal3x3Date}г.</span></li>`
    )
};

const createVolleyTitles = (values, tournament, date) => `<h2>Волейбол ${tournament}</h2>` + values.map((item) => (
    `<li><span class="ready-title">Волейбол. Лига Про. ${tournament}. Минский район. Трансляция ${item}. ${humanizeDate(date, dateFormatTypes.VOLLEY)}г.</span><li>`))
    .join('');



const createBtTitles = (values, date) => '<h2>Большой теннис</h2>' + values.map((item) => (
`<li><span class="ready-title">Теннис. Открытый турнир Лига Про. Балашиха. Турнир ${item}. ${humanizeDate(date, dateFormatTypes.BT)}г.</span><li>`)).
join('');

const getValuesCollection = (inputs) => {
    const inputValues = [];
    inputs.forEach((item) => inputValues.push(item.value));

    return inputValues;
}

const renderTitles = (container, titles) => container.insertAdjacentHTML('beforeend', titles);

const copyTitle = (evt) => {
    const target = evt.target;
    const copiedLable = '<span class ="copied">Скопировано</span>';

    if (target.matches('.ready-title')) {
        navigator.clipboard.writeText(target.textContent);
        if (!target.closest('li').querySelector('.copied'))
        target.closest('li').insertAdjacentHTML('beforeend', copiedLable)
    }
};

const inputNoChecked = (inputs) => {
    inputs.forEach((item) => item.checked = false);
}

const createTimeTable = () => {
    const date =  document.querySelector('input[type="date"]');
    const checkedChallenge = document.querySelectorAll('.input__minsk-challenge:checked');
    const checkedStage = document.querySelectorAll('.input__minsk-stage:checked');
    const checkedBT = document.querySelectorAll('.input__bt-tournament:checked');

    if (!date.value) {
        showAlert(alertMessage);
        return;
    }

    const challengeTitles = createVolleyTitles(getValuesCollection(checkedChallenge), challenge, date.value);
    const stageTitles = createVolleyTitles(getValuesCollection(checkedStage), stage, date.value);
    const btTitles = createBtTitles(getValuesCollection(checkedBT), date.value);

    outputContainer.querySelectorAll('ul').forEach((item) => item.textContent = '');

    renderTitles(hockeyContainer, createHockeyTitles(date.value));
    renderTitles(pingPongContainer, createPingPongTitles(date.value));
    renderTitles(cyberballContainer, createCyberballTitles(date.value));
    renderTitles(footbal3x3Container, createFootbal3x3Titles(date.value));

    if (checkedChallenge.length > 0) {
        renderTitles(volleyContainer, challengeTitles);
    }

    if (checkedStage.length > 0) {
        renderTitles(volleyContainer, stageTitles);
    }

    renderTitles(volleyContainer, createVolleyTverTitles(date.value));

    if (checkedBT.length > 0) {
        renderTitles(btkContainer, btTitles);
    }

    renderTitles(basketContainer, createBasketTitles(date.value));

    outputContainer.addEventListener('click', copyTitle);

    date.value = false;
    inputNoChecked(checkedChallenge);
    inputNoChecked(checkedStage);
    inputNoChecked(checkedBT);
};

timetableButton.addEventListener('click', createTimeTable);
