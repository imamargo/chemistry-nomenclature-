const button2= document.getElementById("button2");
const button3= document.getElementById("button3");
const ans= document.getElementById("ans");
const res= document.getElementById("res");
const quest = document.getElementById("quest");
const elements = {
    "Поваренная соль": "NaCl",
    "Глауберова соль": "Na2SO4 * 10H2O",
    "Негашеная известь": "CaO",
    "Гашеная известь": "Ca(OH)2",
    "Веселящий газ": "N2O",
    "Нашатырь": "NH4Cl",
    "Медный купорос": "CuSO4 * 5H2O",
    "Железный купорос": "FeSO4 * 7H2O",
    "Бертолетова соль": "KClO3",
    "Карбонат кальция": "CaCO3",
    "Оксид цинка": "ZnO",
    "Оксид титана(IV)": "TiO2",
    "Хлорид аммония": "NH4Cl",
    "Фосфорная кислота": "H3PO4",
    "Оксид углерода(IV)": "CO2",
    "Оксид углерода(II)": "CO",
    "Сероводород": "H2S",
    "Хлороводород": "HCl",
    "Аммиак": "NH3",
    "Силикат натрия": "Na2SiO3",
    "Нитрат калия": "KNO3",
    "Сульфат магния": "MgSO4",
    "Фосфат кальция": "Ca3(PO4)2",
    "Гидроксид натрия": "NaOH",
    "Гидроксид калия": "KOH",
    "Хлорид железа(III)": "FeCl3",
    "Сульфид свинца(II)": "PbS",
    "Оксид алюминия": "Al2O3",
    "Перманганат калия": "KMnO4",
    "Гипс": "CaSO4*2H2O",
    "Глауберова соль": "Na2SO4*10H2O",
    "Едкий натр": "NaOH",
    "Едкое кали": "KOH",
    "Медный купорос": "CuSO4*5H2O",
    "Мел": "CaCO3",
    "Мрамор": "CaCO3",
    "Перекись водорода": "H2O2",
    "Пирит": "FeS2",
    "Плавиковая кислота": "HF",
    "Поташ": "K2CO3",
    "Кальцинированная сода": "Na2CO3",
    "Питьевая сода": "NaHCO3",
    "Каустическая сода": "NaOH",
    "Угарный газ": "CO",
    "Бертолетова соль": "KClO3",
    "Железная окалина": "Fe3O4",
    "Карборунд": "SiC",
    "Кремнезем": "SiO2",
    "Гашеная известь": "Ca(OH)2",
    "Негашеная известь": "CaO",
}
const keys = Object.keys(elements);
let randomKey = keys[Math.floor(Math.random() * keys.length)];
quest.textContent = randomKey
let randomValue = elements[randomKey];

const k= document.getElementById("k");
let y = 10;
let v = 0;
let n = 0;
button2.addEventListener("click", function() {
    const x = ans.value;
    if (x.toLowerCase() === randomValue.toLowerCase()) {
        res.textContent = "Молодец! Ты верно назвал вещество.";
        y -= 1;
        v += 1;
        k.textContent = "У тебя осталось " + y.toString() + " вопросов."
    } else {
        res.textContent = "К сожалению, это неверный ответ("
        y -= 1;
        n += 1;
        k.textContent = "У тебя осталось " + y.toString() + " вопросов."
    }
    if (y < 0) {
        res.textContent = "Вопросы закончились! Начни заново"
        k.textContent = "Ты ответил правильно на " + v.toString() + " вопросов!"
    }
    if (y === 1) {
        y -= 1
    }
});

button3.addEventListener("click", function() {
    randomKey = keys[Math.floor(Math.random() * keys.length)];
    quest.textContent = randomKey;
    randomValue = elements[randomKey];
    ans.value = "";
    res.textContent = "";
});