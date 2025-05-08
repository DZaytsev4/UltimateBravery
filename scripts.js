
const championMap = {
  "Аврора": "Aurora",
  "Азир": "Azir",
  "Акали": "Akali",
  "Акшан": "Akshan",
  "Алистар": "Alistar",
  "Амбесса": "Ambessa",
  "Амуму": "Amumu",
  "Анивия": "Anivia",
  "Ари": "Ahri",
  "Атрокс": "Aatrox",
  "Аурелион Сол": "AurelionSol",
  "Афелий": "Aphelios",
  "Бард": "Bard",
  "Бел'Вет": "BelVeth",
  "Блицкранк": "Blitzcrank",
  "Брайер": "Briar",
  "Браум": "Braum",
  "Брэнд": "Brand",
  "Вай": "Vi",
  "Варвик": "Warwick",
  "Варус": "Varus",
  "Вейгар": "Veigar",
  "Вейн": "Vayne",
  "Векс": "Vex",
  "Вел'Коз": "Velkoz",
  "Виего": "Viego",
  "Виктор": "Viktor",
  "Владимир": "Vladimir",
  "Волибир": "Volibear",
  "Вуконг": "Wukong",
  "Галио": "Galio",
  "Гангпланк": "Gangplank",
  "Гарен": "Garen",
  "Гвен": "Gwen",
  "Гекарим": "Hecarim",
  "Гнар": "Gnar",
  "Грагас": "Gragas",
  "Грейвз": "Graves",
  "Дариус": "Darius",
  "Джакс": "Jax",
  "Джарван IV": "JarvanIV",
  "Джейс": "Jayce",
  "Джин": "Jhin",
  "Джинкс": "Jinx",
  "Диана": "Diana",
  "Доктор Мундо": "DrMundo",
  "Дрейвен": "Draven",
  "Ёнэ": "Yone",
  "Жанна": "Janna",
  "Зайра": "Zyra",
  "Зак": "Zac",
  "Зед": "Zed",
  "Зерат": "Xerath",
  "Зери": "Zeri",
  "Зиггс": "Ziggs",
  "Зилеан": "Zilean",
  "Зои": "Zoe",
  "Иверн": "Ivern",
  "Иллаой": "Illaoi",
  "Ирелия": "Irelia",
  "Йорик": "Yorick",
  "К'Санте": "K`Sante",
  "Ка'Зикс": "Khazix",
  "Каин": "Kayn",
  "Кай'Са": "Kaisa",
  "Калиста": "Kalista",
  "Камилла": "Camille",
  "Карма": "Karma",
  "Картус": "Karthus",
  "Кассадин": "Kassadin",
  "Кассиопея": "Cassiopeia",
  "Катарина": "Katarina",
  "Квинн": "Quinn",
  "Кейл": "Kayle",
  "Кейтлин": "Caitlyn",
  "Кеннен": "Kennen",
  "Киана": "Qiyana",
  "Киндред": "Kindred",
  "Клед": "Kled",
  "Ког'Мао": "KogMaw",
  "Корки": "Corki",
  "Ксин Жао": "XinZhao",
  "Ле Блан": "LeBlanc",
  "Леона": "Leona",
  "Ли Син": "LeeSin",
  "Лиллия": "Lillia",
  "Лиссандра": "Lissandra",
  "Лулу": "Lulu",
  "Люкс": "Lux",
  "Люциан": "Lucian",
  "Мальзахар": "Malzahar",
  "Мальфит": "Malphite",
  "Маокай": "Maokai",
  "Мастер Йи": "MasterYi",
  "Милио": "Milio",
  "Мисс Фортуна": "MissFortune",
  "Моргана": "Morgana",
  "Мордекайзер": "Mordekaiser",
  "Мэл": "Mel",
  "Наафири": "Naafiri",
  "Нами": "Nami",
  "Насус": "Nasus",
  "Наутилус": "Nautilus",
  "Нидали": "Nidalee",
  "Нико": "Neeko",
  "Нила": "Nilah",
  "Ноктюрн": "Nocturne",
  "Нуну и Виллумп": "Nunu",
  "Олаф": "Olaf",
  "Орианна": "Orianna",
  "Орн": "Ornn",
  "Пайк": "Pyke",
  "Пантеон": "Pantheon",
  "Поппи": "Poppy",
  "Райз": "Ryze",
  "Рамбл": "Rumble",
  "Раммус": "Rammus",
  "Рек'Сай": "RekSai",
  "Релл": "Rell",
  "Рената Гласк": "Renata",
  "Ренгар": "Rengar",
  "Ренектон": "Renekton",
  "Ривен": "Riven",
  "Рэйкан": "Rakan",
  "Сайлас": "Sylas",
  "Самира": "Samira",
  "Свейн": "Swain",
  "Седжуани": "Sejuani",
  "Сенна": "Senna",
  "Серафина": "Seraphine",
  "Сетт": "Sett",
  "Сивир": "Sivir",
  "Синджед": "Singed",
  "Синдра": "Syndra",
  "Сион": "Sion",
  "Скарнер": "Skarner",
  "Смолдер": "Smolder",
  "Сона": "Sona",
  "Сорака": "Soraka",
  "Таам Кенч": "TahmKench",
  "Талия": "Taliyah",
  "Талон": "Talon",
  "Тарик": "Taric",
  "Твистед Фэйт": "TwistedFate",
  "Твич": "Twitch",
  "Тимо": "Teemo",
  "Трандл": "Trundle",
  "Треш": "Thresh",
  "Триндамир": "Tryndamere",
  "Тристана": "Tristana",
  "Удир": "Udyr",
  "Ургот": "Urgot",
  "Фиддлстикс": "Fiddlesticks",
  "Физз": "Fizz",
  "Фиора": "Fiora",
  "Хвэй": "Hwei",
  "Хеймердингер": "Heimerdinger",
  "Чо'Гат": "ChoGath",
  "Шако": "Shaco",
  "Шая": "Xayah",
  "Шен": "Shen",
  "Шивана": "Shyvana",
  "Эвелинн": "Evelynn",
  "Эзреаль": "Ezreal",
  "Экко": "Ekko",
  "Элиза": "Elise",
  "Энни": "Annie",
  "Эш": "Ashe",
  "Юми": "Yuumi",
  "Ясуо": "Yasuo"
};

const items = [
  { name: "Маска Бездны", image: "images_item/abyssalmask.png" },
  { name: "Оковы Анафемы", image: "images_item/anathemaschains.png" },
  { name: "Посох Ангела", image: "images_item/archangelstaff.png" },
  { name: "Кадильник Пламени", image: "images_item/ardentcenser.png" },
  { name: "Гидра Авона", image: "images_item/avenoushydra.png" },
  { name: "Аксиоматическая Дуга", image: "images_item/axiomarc.png" },
  { name: "Вуаль Банши", image: "images_item/bansheesveil.png" },
  { name: "Убийца Исполинов", image: "images_item/behemothslayer.png" },
  { name: "Черный Рассекатель", image: "images_item/blackcleaver.png" },
  { name: "Черный Огненный Факел", image: "images_item/blackfiretorch.png" },
  { name: "Клинок Разрушенного Короля", image: "images_item/bladeoftheruinedking.png" },
  { name: "Вуаль Кровопийцы", image: "images_item/bloodlettersveil.png" },
  { name: "Кровопийца", image: "images_item/bloodthirster.png" },
  { name: "Спутник Заклинателя", image: "images_item/casterscompanion.png" },
  { name: "Меч-Цепь Химпанка", image: "images_item/chempunkchainsword.png" },
  { name: "Дезинфектор Химтеха", image: "images_item/chemtechfumigator.png" },
  { name: "Космический Привод", image: "images_item/cosmicdrive.png" },
  { name: "Алый Лук-Щит", image: "images_item/crimsonshieldbow.png" },
  { name: "Цветущая Крипта", image: "images_item/cryptbloom.png" },
  { name: "Ядро Зари", image: "images_item/dawncore.png" },
  { name: "Доспех Мертвеца", image: "images_item/deadmansplate.png" },
  { name: "Шляпа Рабадона", image: "images_item/deathcap.png" },
  { name: "Танец Смерти", image: "images_item/deathsdance.png" },
  { name: "Демоническое Объятие", image: "images_item/demonicembrace.png" },
  { name: "Последний Шепот Лорда Доминика", image: "images_item/dominikregards.png" },
  { name: "Создатель Грёз", image: "images_item/dreammaker.png" },
  { name: "Эхо Хелии", image: "images_item/echoes_of_helia.png" },
  { name: "Затмение", image: "images_item/eclipse.png" },
  { name: "Грань Ночи", image: "images_item/edgeofnight.png" },
  { name: "Расхититель Сущности", image: "images_item/essencereaver.png" },
  { name: "Экспериментальная Гексопластина", image: "images_item/experimentalhexplate.png" },
  { name: "Фимбулвинтер", image: "images_item/fimbulwinter.png" },
  { name: "Сила Природы", image: "images_item/forceofnature.png" },
  { name: "Ледяное Сердце", image: "images_item/frozenheart.png" },
  { name: "Ангел-Хранитель", image: "images_item/guardianangel.png" },
  { name: "Клинок Ярости Гинсо", image: "images_item/guinsoosrageblade.png" },
  { name: "Стальное Сердце", image: "images_item/heartsteel.png" },
  { name: "Ракетный Пояс Хекстек", image: "images_item/hextechrocketbelt.png" },
  { name: "Полое Сияние", image: "images_item/hollowradiance.png" },
  { name: "Фокус Горизонта", image: "images_item/horizonfocus.png" },
  { name: "Губительная Гордыня", image: "images_item/hubris.png" },
  { name: "Разрушитель Укреплений", image: "images_item/hullbreaker.png" },
  { name: "Ледорождённые Рукавицы", image: "images_item/iceborngauntlet.png" },
  { name: "Императивный Мандат", image: "images_item/imperialmandate.png" },
  { name: "Джак'Шо, Многообразный", image: "images_item/jakshotheprotean.png" },
  { name: "Кайеник Рукерн", image: "images_item/kaenicrookern.png" },
  { name: "Обет Рыцаря", image: "images_item/knightsvow.png" },
  { name: "Мучения Лиандри", image: "images_item/liandrysanguish.png" },
  { name: "Погибель Лича", image: "images_item/lichbane.png" },
  { name: "Медальон Железных Соляри", image: "images_item/locketoftheironsolari.png" },
  { name: "Злоба", image: "images_item/malignance.png" },
  { name: "Манумуне", image: "images_item/manamune.png" },
  { name: "Пасть Малмортиуса", image: "images_item/mawofmalmortius.png" },
  { name: "Похититель Душ Меджайна", image: "images_item/mejaissoulstealer.png" },
  { name: "Ртутный Клинок", image: "images_item/mercurialscimitar.png" },
  { name: "Благословение Микаэля", image: "images_item/mikaelsblessing.png" },
  { name: "Обновляемый Лунный Камень", image: "images_item/moonstonerenewer.png" },
  { name: "Мореллономикон", image: "images_item/morellonomicon.png" },
  { name: "Смертельное Напоминание", image: "images_item/mortalreminder.png" },
  { name: "Зуб Нашора", image: "images_item/nashorstooth.png" },
  { name: "Клинок Навори", image: "images_item/navoriflickerblade.png" },
  { name: "Возможность", image: "images_item/opportunity.png" },
  { name: "Плащ Повелителя", image: "images_item/overlordsbloodmail.png" },
  { name: "Призрачный Танец", image: "images_item/phantomdancer.png" },
  { name: "Нечестивая Гидра", image: "images_item/profanehydra.png" },
  { name: "Коготь Охотника", image: "images_item/prowlersclaw.png" },
  { name: "Омен Рандуина", image: "images_item/randuinsomen.png" },
  { name: "Скорострельная Пушка", image: "images_item/rapidfirehandcannon.png" },
  { name: "Искупление", image: "images_item/redemption.png" },
  { name: "Создатель Разломов", image: "images_item/riftmaker.png" },
  { name: "Жезл Веков", image: "images_item/rodofages.png" },
  { name: "Ураган Рунана", image: "images_item/runaans.png" },
  { name: "Скипетр Рилай", image: "images_item/rylajscrystalscepter.png" },
  { name: "Змеиный Клык", image: "images_item/serpentsfang.png" },
  { name: "Злоба Серильды", image: "images_item/seryldasgrudge.png" },
  { name: "Теневое Пламя", image: "images_item/shadowflame.png" },
  { name: "Боевая Песня Шурелии", image: "images_item/shurelyasbattlesong.png" },
  { name: "Копье Шоджина", image: "images_item/spearofshojin.png" },
  { name: "Призрачный Доспех", image: "images_item/spiritvisage.png" },
  { name: "Посох Текущей Воды", image: "images_item/staffofflowingwater.png" },
  { name: "Статик Шив", image: "images_item/statikk_shiv.png" },
  { name: "Щит Стерака", image: "images_item/steraksgage.png" },
  { name: "Штормовой Натиск", image: "images_item/stormsurge.png" },
  { name: "Разрушитель Шага", image: "images_item/stridebreaker.png" },
  { name: "Расколотое Небо", image: "images_item/sunderedsky.png" },
  { name: "Эгида Солнечного Пламени", image: "images_item/sunfireaegis.png" },
  { name: "Терминус", image: "images_item/terminus.png" },
  { name: "Коллекционер", image: "images_item/thecollector.png" },
  { name: "Терновый Доспех", image: "images_item/thornmail.png" },
  { name: "Титаническая Гидра", image: "images_item/titanichydra.png" },
  { name: "Прокладыватель Троп", image: "images_item/trailblazer.png" },
  { name: "Тройственная Сила", image: "images_item/trinityforce.png" },
  { name: "Теневой Клинок", image: "images_item/umbralglaive.png" },
  { name: "Бесконечное Отчаяние", image: "images_item/unendingdespair.png" },
  { name: "Бдительный Камень Зрения", image: "images_item/vigilantsightstone.png" },
  { name: "Посох Пустоты", image: "images_item/voidstaff.png" },
  { name: "Вольтовый Цикломеч", image: "images_item/voltaiccyclosword.png" },
  { name: "Вармог", image: "images_item/warmogs.png" },
  { name: "Приближение Зимы", image: "images_item/wintersapproach.png" },
  { name: "Острота Витса", image: "images_item/witsend.png" },
  { name: "Призрачный Клинок Йомуу", image: "images_item/youmuusghostblade.png" },
  { name: "Дикие Стрелы Юнтала", image: "images_item/yuntalwildarrows.png" },
  { name: "Схождение Зика", image: "images_item/zekesconvergence.png" },
  { name: "Песочные Часы Жони", image: "images_item/zhonyashourglass.png" }
];

const boots =[
  {name: "Ионийские сапоги просветления", image: "images_boots/ionian.png"},
  {name: "Наголенники берсерка", image: "images_boots/berserker.png"},
  {name: "Ботинки стремительности", image: "images_boots/swiftness.png"},
  {name: "Живые сапоги", image: "images_boots/symbiotic.png"},
  {name: "Бронированные сапоги", image: "images_boots/taby.png"},
  {name: "Поступь меркурия", image: "images_boots/mercury.png"},
  {name: "Сапоги чародея", image: "images_boots/sorcerer.png"}

];

const runePaths = [
  {
    id: 1,
    name: "Точность",
    runes: [
      {
        slot: "Ключевая руна",
        options: ["Смертельный темп", "Ритм атак", "Флотская поступь", "Завоеватель"]
      },
      {
        slot: "Слот 1",
        options: ["Присутствие духа", "Триумф", "Поглощение жизни"]
      },
      {
        slot: "Слот 2",
        options: ["Легенда: рвение", "Легенда: кровожадность", "Легенда: стремительность"]
      },
      {
        slot: "Слот 3",
        options: ["Последний рубеж", "Подрезать", "Последний шанс"]
      }
    ]
  },
  {
    id: 2,
    name: "Доминирование",
    runes: [
      {
        slot: "Ключевая руна",
        options: ["Электрошок", "Темная жатва", "Град клинков"]
      },
      {
        slot: "Слот 1",
        options: ["Грязный прием", "Вкус крови", "Внезапный удар"]
      },
      {
        slot: "Слот 2",
        options: ["Шестое чувство", "Ужасные сувениры", "Глубинный тотем"]
      },
      {
        slot: "Слот 3",
        options: ["Охотник за сокровищами", "Беспощадный охотник", "Абсолютный охотник"]
      }
    ]
  },
  {
    id: 3,
    name: "Колдовство",
    runes: [
      {
        slot: "Ключевая руна",
        options: ["Призыв Пушинки", "Магическая комета", "Фазовый рывок"]
      },
      {
        slot: "Слот 1",
        options: ["Мастер Аксиом", "Поток маны", "Сияющий плащ"]
      },
      {
        slot: "Слот 2",
        options: ["Превосходство", "Быстрота", "Полная сосредоточенность"]
      },
      {
        slot: "Слот 3",
        options: ["Ожог", "Хождение по воде", "Надвигающаяся буря"]
      }
    ]
  },
  {
    id: 4,
    name: "Вдохновение",
    runes: [
      {
        slot: "Ключевая руна",
        options: ["Ледяной нарост", "Раскрытая книга заклинаний", "Удар на опережение"]
      },
      {
        slot: "Слот 1",
        options: ["Хекстековый скачок", "Магическая обувь", "Кешбэк"]
      },
      {
        slot: "Слот 2",
        options: ["Тройной тоник", "Тоник искривления времени", "Доставка печенья"]
      },
      {
        slot: "Слот 3",
        options: ["Космическое знание", "Скорость сближения", "Мастер на все руки"]
      }
    ]
  },
  {
    id: 5,
    name: "Храбрость",
    runes: [
      {
        slot: "Ключевая руна",
        options: ["Хватка нежити", "Дрожь земли", "Страж"]
      },
      {
        slot: "Слот 1",
        options: ["Снос", "Живой источник", "Удар щитом"]
      },
      {
        slot: "Слот 2",
        options: ["Накопление", "Второе дыхание", "Костяная пластина"]
      },
      {
        slot: "Слот 3",
        options: ["Разрастание", "Оживление", "Неустрашимость"]
      }
    ]
  }
];

const champions = Object.keys(championMap);

function randomChampion(){
 const randomIndex = Math.floor(Math.random() * champions.length);
  const russianName = champions[randomIndex];
  const englishName = championMap[russianName];

  document.getElementById("name_character").textContent = russianName;
  document.getElementById("img_character").src = `images_champion/${englishName}.png`;
}

function randomBuild() {
  const availableItems = [...items];
  const selectedItems = [];
  
  for (let i = 0; i < 5 && availableItems.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * availableItems.length);
    selectedItems.push(availableItems.splice(randomIndex, 1)[0]);
  }
  
  selectedItems.forEach((item, index) => {
    const itemNumber = index + 1;
    document.getElementById(`img_item_${itemNumber}`).src = item.image;
    document.getElementById(`name_item_${itemNumber}`).textContent = item.name;
  });
  
  if (document.getElementById('img_item_6')) {
    const randomBoots = boots[Math.floor(Math.random() * boots.length)];
    document.getElementById("img_item_6").src = randomBoots.image;
    document.getElementById("name_item_6").textContent = randomBoots.name;
  }
}


function randomRunes() {
  const paths = [...runePaths];

  const mainIndex = Math.floor(Math.random() * paths.length);
  const mainPath = paths.splice(mainIndex, 1)[0];

  const chosenMain = mainPath.runes.map(slot => {
    const opts = slot.options;
    return opts[Math.floor(Math.random() * opts.length)];
  });

  const runeImagesMap = {
    "Смертельный темп": "lethaltempotemp.png",
    "Ритм атак": "conqueror.png",
    "Флотская поступь": "fleetfootwork.png",
    "Завоеватель": "conqueror.png",
    "Присутствие духа": "presenceofmind.png",
    "Триумф": "triumph.png",
    "Поглощение жизни": "absorblife.png",
    "Легенда: рвение": "legendalacrity.png",
    "Легенда: кровожадность": "legendbloodline.png",
    "Легенда: стремительность": "legendhaste.png",
    "Последний рубеж": "laststand.png",
    "Подрезать": "cutdown.png",
    "Последний шанс": "laststand.png",
    "Электрошок": "electrocute.png",
    "Темная жатва": "darkharvest.png",
    "Град клинков": "hailofblades.png",
    "Грязный прием": "cheapshot.png",
    "Вкус крови": "greenterror_tasteofblood.png",
    "Внезапный удар": "suddenimpact.png",
    "Шестое чувство": "sixthsense.png",
    "Ужасные сувениры": "grislymementos.png",
    "Глубинный тотем": "deepward.png",
    "Охотник за сокровищами": "treasurehunter.png",
    "Беспощадный охотник": "relentlesshunter.png",
    "Абсолютный охотник": "ultimatehunter.png",
    "Призыв Пушинки": "summonaery.png",
    "Магическая комета": "arcanecomet.png",
    "Фазовый рывок": "phaserush.png",
    "Мастер Аксиом": "axiom_arcanist.png",
    "Поток маны": "manaflowband.png",
    "Сияющий плащ": "nimbuscloak.png",
    "Превосходство": "transcendence.png",
    "Быстрота": "celeritytemp.png",
    "Полная сосредоточенность": "absolutefocus.png",
    "Ожог": "scorch.png",
    "Хождение по воде": "waterwalking.png",
    "Надвигающаяся буря": "gatheringstorm.png",
    "Ледяной нарост": "glacialaugment.png",
    "Раскрытая книга заклинаний": "unsealedspellbook.png",
    "Удар на опережение": "firststrike.png",
    "Хекстековый скачок": "hextechflashtraption.png",
    "Магическая обувь": "magicalfootwear.png",
    "Кешбэк": "cashback2.png",
    "Тройной тоник": "timewarptonic.png",
    "Тоник искривления времени": "timewarptonic.png",
    "Доставка печенья": "biscuitdelivery.png",
    "Космическое знание": "cosmicinsight.png",
    "Скорость сближения": "approachvelocity.png",
    "Мастер на все руки": "jackofalltrades2.png",
    "Хватка нежити": "graspoftheundying.png",
    "Дрожь земли": "veteranaftershock.png",
    "Страж": "guardian.png",
    "Снос": "demolish.png",
    "Живой источник": "fontoflife.png",
    "Удар щитом": "mirrorshell.png",
    "Накопление": "conditioning.png",
    "Второе дыхание": "secondwind.png",
    "Костяная пластина": "boneplating.png",
    "Разрастание": "overgrowth.png",
    "Оживление": "revitalize.png",
    "Неустрашимость": "unflinching.png"
  };

  chosenMain.forEach((runeName, idx) => {
    const num = idx + 1;
    document.getElementById(`name_rune_first_${num}`).textContent = runeName;
    const imageName = runeImagesMap[runeName] || "6361.png"; 
    document.getElementById(`img_rune_first_${num}`).src = `images_runes/${imageName}`;
  });

  const secIndex = Math.floor(Math.random() * paths.length);
  const secPath = paths[secIndex];

  const minorSlots = [1, 2, 3];
  const chosenSlots = [];
  for (let i = 0; i < 2; i++) {
    const j = Math.floor(Math.random() * minorSlots.length);
    chosenSlots.push(minorSlots.splice(j, 1)[0]);
  }

  chosenSlots.forEach((slotIdx, i) => {
    const slot = secPath.runes[slotIdx];
    const runeName = slot.options[Math.floor(Math.random() * slot.options.length)];
    const num = i + 1;
    document.getElementById(`name_rune_second_${num}`).textContent = runeName;
    const imageName = runeImagesMap[runeName] || "6361.png";
    document.getElementById(`img_rune_second_${num}`).src = `images_runes/${imageName}`;
  });
}

document.querySelector(".btn").addEventListener("click", () => {
  randomChampion();
  randomBuild();
  randomRunes();
});
