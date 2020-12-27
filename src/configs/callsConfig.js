const urgent = {
  name: 'Срочно',
  emoji: '128545',
};

const notUrgent = {
  name: 'Несрочно',
  emoji: '128555',
};

const outdoors = {
  name: 'Двор',
  emoji: '127960',
};

const house = {
  name: 'Подъезд',
  emoji: '127969',
};

const flat = {
  name: 'Квартира',
  emoji: '128682',
};

const locations = [flat, house, outdoors];

const urgencies = [urgent, notUrgent];

const problems = [
  {
  // Двор
    name: 'Надписи на стенах',
    emoji: '127912',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Александр Пушкин',
        text: `Гуляя, он на деревах
        Повсюду надписи встречает.
        Он с изумленьем в сих чертах
        Знакомый почерк замечает`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Проникновенье наше по планете 
        Особенно заметно вдалеке: 
        В общественном парижском туалете 
        Есть надписи на русском языке!`,
      },
    ],
  },
  {
    name: 'Объявления на стенах',
    emoji: '128195',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Ярослава Смелякова',
        text: `Купив на попутном вокзале
        все краски, что были, подряд,
        два друга всю ночь рисовали,
        пристроясь на полке, плакат.
        
        И сами потом восхищенно,
        как знамя пути своего,
        снаружи на стенке вагона
        приладили молча его.`,
      },
      {
        urgency: notUrgent,
        author: 'Агния Барто',
        text: `Висит объявленье
        У наших ворот:
        Собака нужна
        Сторожить огород.`,
      },
    ],
  },
  {
    name: 'Неубранный снег',
    emoji: '10052',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Александр Блок',
        text: `Суетились, поспешно крестясь...
        Выносили серебряный гроб...
        И старуха, за ручку держась,
        Спотыкалась о снежный сугроб.`,
      },
      {
        urgency: notUrgent,
        author: 'Дмитрий Кедрин',
        text: `Говорят, что есть в глухой Сибири 
        Маленькая станция Зима. 
        Там сугробы метра в три-четыре 
        Заметают низкие дома. `,
      },
    ],
  },
  {
    name: 'Наледь на крыше',
    emoji: '129482',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Алексей Апухтин',
        text: `Давно, когда, в цветах синея и блистая, 
        Неслася над землей счастливая весна, 
        Я помню, видел раз, как глыба снеговая 
        На солнце таяла одна.`,
      },
      {
        urgency: notUrgent,
        author: 'Борис Пастернак',
        text: `Эти ночи, эти дни и ночи! 
        Дробь капелей к середине дня, 
        Кровельных сосулек худосочье, 
        Ручейков бессонных болтовня!`,
      },
    ],
  },
  {
    name: 'Озеленение двора',
    emoji: '127795',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Федор Сологуб',
        text: `Узкие мглистые дали.
        Камни везде, и дома.
        Как мне уйти от печали?
        Город мне — точно тюрьма.
        
        Кто же заклятью неволи
        Скучные стены обрек?
        Снова ль метаться от боли?
        Славить ли скудный порок?`,
      },
      {
        urgency: notUrgent,
        author: 'Константин Батюшков',
        text: `Взгляни: сей кипарис, как наша степь, бесплоден - 
        Но свеж и зелен он всегда. 
        Не можешь, гражданин, как пальма, дать плода? 
        Так буди с кипарисом сходен: 
        Как он, уединен, осанист и свободен.`,
      },
    ],
  },
  {
    name: 'Засор канализации',
    emoji: '129696',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Кондратий Рылеев',
        text: `Весь мир как смрадная могила!
        Душа из тела рвется вон.
        Творец! Ты мне прибежище и сила,
        Вонми мой вопль, услышь мой стон...`,
      },
      {
        urgency: notUrgent,
        author: 'Михаил Зенкевич',
        text: `И бесстыдней скрытые от взоров
        Нечистоты дня в подземный мрак
        Пожирает чавкающий боров
        Сточных очистительных клоак.`,
      },
    ],
  },
  {
    name: 'Плохая уборка',
    emoji: '129529',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Эдуард Багрицкий',
        text: `Все хозяйство брошено,
        Не поправишь враз,
        Грязь не по-хорошему
        В горницах у нас.`,
      },
      {
        urgency: notUrgent,
        author: 'Евгений Долматовский',
        text: `И Флоренция
        Грязью затоплена до подбородка,
        И на улицах Аккры
        Темнокожие люди стреляют друг в друга,
        И в Уэллсе
        Гора наползла на шахтерский поселок.
        Я отнюдь не хотел
        Заниматься обзором текущих событий,
        Просто вспомнилось мне
        То, что было,
        И что происходит
        В год спокойного солнца.`,
      },
    ],
  },
  {
    name: 'Не убрана площадка для мусора',
    emoji: '128465',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Борис Пастернак',
        text: `Настежь всё, конюшня и коровник. 
        Голуби в снегу клюют овес, 
        И всего живитель и виновник - 
        Пахнет свежим воздухом навоз.`,
      },
      {
        urgency: notUrgent,
        author: 'Мария Петровых',
        text: `Пейзажи и впрямь были бедны и жалки,
        Но вспомни, что даже на мусорной свалке
        Жестянки и склянки сверканьем алмазным,
        Казалось, мечтали о чем-то прекрасном.`,
      },
    ],
  },
  {
    name: 'Перегорела лампочка',
    emoji: '128161',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Яков Полонский',
        text: `В безлунном мраке мы дорогу потеряли,
        Разбитым фонарём не освещён компас.
        Неси огня! звони, свисти, чтоб мы не спали! —
        Ещё вчерашняя гроза не унялась…`,
      },
      {
        urgency: notUrgent,
        author: 'Федор Сологуб',
        text: `И дверь заскрипела протяжно,- 
        В нее не входили давно. 
        За дверью и темно, и влажно, 
        Высоко и узко окно. 
        
        Глаза привыкают во мраке,- 
        И вот выступают сквозь мглу 
        Какие-то странные знаки 
        На сводах, стенах и полу.`,
      },
    ],
  },
  {
    name: 'Прочее',
    emoji: '10071',
    location: outdoors,
    poem: [
      {
        urgency: urgent,
        author: 'Владимир Маяковский',
        text: `Ну, это совершенно невыносимо!
        Весь как есть искусан злобой.
        Злюсь не так, как могли бы вы:
        как собака лицо луны гололобой —
        взял бы
        и все обвыл.`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Тут на милость не надейся -
        Стиснуть зубы, да терпеть!
        Сколь веревочка ни вейся -
        Все равно совьешься в плеть!`,
      },
    ],
  },


  // Подъезд
  {
    name: 'Надписи на стенах',
    emoji: '127912',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'А.С. Пушкин',
        text: `Гуляя, он на деревах
        Повсюду надписи встречает.
        Он с изумленьем в сих чертах
        Знакомый почерк замечает`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Проникновенье наше по планете 
        Особенно заметно вдалеке: 
        В общественном парижском туалете 
        Есть надписи на русском языке!`,
      },
    ],
  },
  {
    name: 'Протечка трубы',
    emoji: '127754',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Сергей Городецкий',
        text: `Сырой коридор. С облупившихся стен 
        Холодные, грязные капли текут. 
        За что же рабочие замкнуты тут, 
        В бессовестный этот, безвыходный плен?`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Когда вода всемирного потопа
        Вернулась вновь в границы берегов,
        Из пены уходящего потока
        На берег тихо выбралась любовь`,
      },
    ],
  },
  {
    name: 'Плохая уборка',
    emoji: '129529',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Эдуард Багрицкий',
        text: `Все хозяйство брошено,
        Не поправишь враз,
        Грязь не по-хорошему
        В горницах у нас.`,
      },
      {
        urgency: notUrgent,
        author: 'Евгений Долматовский',
        text: `И Флоренция
        Грязью затоплена до подбородка,
        И на улицах Аккры
        Темнокожие люди стреляют друг в друга,
        И в Уэллсе
        Гора наползла на шахтерский поселок.
        Я отнюдь не хотел
        Заниматься обзором текущих событий,
        Просто вспомнилось мне
        То, что было,
        И что происходит
        В год спокойного солнца.`,
      },
    ],
  },
  {
    name: 'Требуется дезинсекция',
    emoji: '129431',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Николай Олейников',
        text: `Трудно думать обезьяне,
        Мыслей нет — она поет.
        Таракан сидит в стакане,
        Ножку рыжую сосет.
        
        Таракан к стеклу прижался
        И глядит едва дыша…
        Он бы смерти не боялся,
        Если б знал, что есть душа.`,
      },
      {
        urgency: notUrgent,
        author: 'Николай Олейников',
        text: `Любовь пройдет. Обманет страсть. Но лишена обмана
        Волшебная структура таракана.
        
        О, тараканьи растопыренные ножки, которых шесть!
        Они о чем-то говорят, они по воздуху каракулями пишут,
        Их очертания полны значенья тайного...
        Да, в таракане что-то есть,
        Когда он лапкой двигает и усиком колышет.`,
      },
    ],
  },
  {
    name: 'Постороние запахи',
    emoji: '129314',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Александр Пушкин',
        text: `Тогда услышал я (о диво!) запах скверный, 
        Как будто тухлое разбилось яицо, 
        Иль карантинный страж курил жаровней серной. 
        Я, нос себе зажав, отворотил лицо.`,
      },
      {
        urgency: notUrgent,
        author: 'Федор Сологуб',
        text: `Порой повеет запах странный,-
        Его причины не понять,-
        Давно померкший, день туманный
        Переживается опять.`,
      },
    ],
  },
  {
    name: 'Не убрана площадка для мусора',
    emoji: '128465',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Борис Пастернак',
        text: `Настежь всё, конюшня и коровник. 
        Голуби в снегу клюют овес, 
        И всего живитель и виновник - 
        Пахнет свежим воздухом навоз.`,
      },
      {
        urgency: notUrgent,
        author: 'Мария Петровых',
        text: `Пейзажи и впрямь были бедны и жалки,
        Но вспомни, что даже на мусорной свалке
        Жестянки и склянки сверканьем алмазным,
        Казалось, мечтали о чем-то прекрасном.`,
      },
    ],
  },
  {
    name: 'Перегорела лампочка',
    emoji: '128161',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Яков Полонский',
        text: `В безлунном мраке мы дорогу потеряли,
        Разбитым фонарём не освещён компас.
        Неси огня! звони, свисти, чтоб мы не спали! —
        Ещё вчерашняя гроза не унялась…`,
      },
      {
        urgency: notUrgent,
        author: 'Федор Сологуб',
        text: `И дверь заскрипела протяжно,- 
        В нее не входили давно. 
        За дверью и темно, и влажно, 
        Высоко и узко окно. 
        
        Глаза привыкают во мраке,- 
        И вот выступают сквозь мглу 
        Какие-то странные знаки 
        На сводах, стенах и полу.`,
      },
    ],
  },
  {
    name: 'Низкая температура ',
    emoji: '129398',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Иосиф Бродский',
        text: `Кровь моя холодна.
        Холод ее лютей
        реки, промерзшей до дна.
        Я не люблю людей.`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Ну вот - я зубами зацокала 
        От холода и от страха,-   
        Я здесь, как мышь, промокла, 
        Продрогла, как собака.`,
      },
    ],
  },

  {
    name: 'Неисправный домофон',
    emoji: '128223',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Илья Эренбург',
        text: `Умру — вы вспомните газеты шорох, 
        Ужасный год, который всем нам дорог. 
        А я хочу, чтоб голос мой замолкший 
        Напомнил вам не только гром у Волги, 
        Но и деревьев еле слышный шелест, 
        Зеленую таинственную прелесть.`,
      },
      {
        urgency: notUrgent,
        author: 'Алексей Апухтин',
        text: `Волшебные слова любви и упоенья 
        Я слышал наконец из милых уст твоих, 
        Но в странной робости последнего сомненья 
        Твой голос ласковый затих.`,
      },
    ],
  },
  {
    name: 'Неисправный лифт',
    emoji: '128727',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Эдуард Асадов',
        text: `А лифта-то в доме как раз и не было. 
        Вот в этом и пряталась вся беда. 
        Лишь "бодрая юность" по лестницам бегала, 
        Легко, "как по нотам", туда-сюда...`,
      },
      {
        urgency: notUrgent,
        author: 'Федор Сологуб',
        text: `Поднимается на лифте.
        И не рай, квартира тут.
        Ах, мечтанья, осчастливьте
        Хоть на двадцать пять минут.`,
      },
    ],
  },

  {
    name: 'Прочее',
    emoji: '10071',
    location: house,
    poem: [
      {
        urgency: urgent,
        author: 'Владимир Маяковский',
        text: `Ну, это совершенно невыносимо!
        Весь как есть искусан злобой.
        Злюсь не так, как могли бы вы:
        как собака лицо луны гололобой —
        взял бы
        и все обвыл.`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Тут на милость не надейся -
        Стиснуть зубы, да терпеть!
        Сколь веревочка ни вейся -
        Все равно совьешься в плеть!`,
      },
    ],
  },

  // Квартира
  {
    name: 'Засор канализации',
    emoji: '129696',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Кондратий Рылеев',
        text: `Весь мир как смрадная могила!
        Душа из тела рвется вон.
        Творец! Ты мне прибежище и сила,
        Вонми мой вопль, услышь мой стон...`,
      },
      {
        urgency: notUrgent,
        author: 'Алексей Жемчужников',
        text: `Для творческих идей дух времени - препона;
        От лучших замыслов получится урод.
        Из мрамора резцом ваяют Аполлона,
        Но разве вылепишь его из нечистот?`,
      },
    ],
  },
  {
    name: 'Протечка трубы',
    emoji: '127754',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Сергей Городецкий',
        text: `Сырой коридор. С облупившихся стен 
        Холодные, грязные капли текут. 
        За что же рабочие замкнуты тут, 
        В бессовестный этот, безвыходный плен?`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Когда вода всемирного потопа
        Вернулась вновь в границы берегов,
        Из пены уходящего потока
        На берег тихо выбралась любовь`,
      },
    ],
  },
  {
    name: 'Плохое качество воды',
    emoji: '128689',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Анна Ахматова',
        text: `Зачем вы отравили воду 
        И с грязью мой смешали хлеб? 
        Зачем последнюю свободу 
        Вы превращаете в вертеп? `,
      },
      {
        urgency: notUrgent,
        author: 'Анна Ахматова',
        text: `У тебя светло и просто.
        Не гони меня туда,
        Где под душным сводом моста
        Стынет грязная вода.`,
      },
    ],
  },
  {
    name: 'Отсутствует вода',
    emoji: '128688',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Николай Асеев',
        text: `Мне кажется, что власть и почести — 
        вода соленая морская: 
        чем дольше пить, 
        тем больше хочется, 
        а жажда всё не отпускает.`,
      },
      {
        urgency: notUrgent,
        author: 'Александр Пушкин',
        text: `Теперь не кстати воздержанье:
        Как дикий скиф хочу я пить.
        Я с другом праздную свиданье,
        Я рад рассудок утопить.`,
      },
    ],
  },
  {
    name: 'Требуется дезинсекция',
    emoji: '129431',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Николай Олейников',
        text: `Трудно думать обезьяне,
        Мыслей нет — она поет.
        Таракан сидит в стакане,
        Ножку рыжую сосет.
        
        Таракан к стеклу прижался
        И глядит едва дыша…
        Он бы смерти не боялся,
        Если б знал, что есть душа.`,
      },
      {
        urgency: notUrgent,
        author: 'Николай Олейников',
        text: `Любовь пройдет. Обманет страсть. Но лишена обмана
        Волшебная структура таракана.
        
        О, тараканьи растопыренные ножки, которых шесть!
        Они о чем-то говорят, они по воздуху каракулями пишут,
        Их очертания полны значенья тайного...
        Да, в таракане что-то есть,
        Когда он лапкой двигает и усиком колышет.`,
      },
    ],
  },
  {
    name: 'Постороние запахи',
    emoji: '129314',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Александр Пушкин',
        text: `Тогда услышал я (о диво!) запах скверный, 
        Как будто тухлое разбилось яицо, 
        Иль карантинный страж курил жаровней серной. 
        Я, нос себе зажав, отворотил лицо.`,
      },
      {
        urgency: notUrgent,
        author: 'Федор Сологуб',
        text: `Порой повеет запах странный,-
        Его причины не понять,-
        Давно померкший, день туманный
        Переживается опять.`,
      },
    ],
  },
  {
    name: 'Перегорела лампочка',
    emoji: '128161',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Яков Полонский',
        text: `В безлунном мраке мы дорогу потеряли,
        Разбитым фонарём не освещён компас.
        Неси огня! звони, свисти, чтоб мы не спали! —
        Ещё вчерашняя гроза не унялась…`,
      },
      {
        urgency: notUrgent,
        author: 'Федор Сологуб',
        text: `И дверь заскрипела протяжно,- 
        В нее не входили давно. 
        За дверью и темно, и влажно, 
        Высоко и узко окно. 
        
        Глаза привыкают во мраке,- 
        И вот выступают сквозь мглу 
        Какие-то странные знаки 
        На сводах, стенах и полу.`,
      },
    ],
  },
  {
    name: 'Нет эл.питания',
    emoji: '9889',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Зинаида Гиппиус',
        text: `Две нити вместе свиты, 
        Концы обнажены. 
        То «да» и «нет» — не слиты, 
        Не слиты — сплетены. 
        Их темное сплетенье 
        И тесно, и мертво. 
        Но ждет их воскресенье, 
        И ждут они его. 
        Концов концы коснутся — 
        Другие «да» и «нет», 
        И «да» и «нет» проснутся, 
        Сплетенные сольются, 
        И смерть их будет — Свет.`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Нам внушают про проводку,
        А нам слышится - про водку;
        Нам толкуют про тройник,
        А мы слышим: "на троих".
  
        Клиент, тряхни своим загашником
        И что нас трое - не забудь,-
        Даешь отъявленным шабашникам
        Чинить электро-что-нибудь!`,
      },
    ],
  },
  {
    name: 'Высокая температура',
    emoji: '129397',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Роберт Рождественский',
        text: `Об испытаньях прежних
        не вспоминай пока что…
        Ты — в сауне.
        Ты — грешник.
        И потому —
        покайся!
        Вживайся оробело
        в блаженство и мученье…
        Но если это — пекло,
        куда девались черти?..
        Жара, жарынь, жарища,
        не утихая, стелется.
        Она теперь царица!
        Она всему владелица!`,
      },
      {
        urgency: notUrgent,
        author: 'Константин Симонов',
        text: `И в жару, подняв глаза сухие, 
        Мать свою я трепетно просил, 
        Чтоб меня, спася от летаргии, 
        Двадцать дней никто не хоронил.`,
      },
    ],
  },
  {
    name: 'Низкая температура ',
    emoji: '129398',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Иосиф Бродский',
        text: `Кровь моя холодна.
        Холод ее лютей
        реки, промерзшей до дна.
        Я не люблю людей.`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Ну вот - я зубами зацокала 
        От холода и от страха,-   
        Я здесь, как мышь, промокла, 
        Продрогла, как собака.`,
      },
    ],
  },
  {
    name: 'Неисправный домофон',
    emoji: '128223',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Илья Эренбург',
        text: `Умру — вы вспомните газеты шорох, 
        Ужасный год, который всем нам дорог. 
        А я хочу, чтоб голос мой замолкший 
        Напомнил вам не только гром у Волги, 
        Но и деревьев еле слышный шелест, 
        Зеленую таинственную прелесть.`,
      },
      {
        urgency: notUrgent,
        author: 'Алексей Апухтин',
        text: `Волшебные слова любви и упоенья 
        Я слышал наконец из милых уст твоих, 
        Но в странной робости последнего сомненья 
        Твой голос ласковый затих.`,
      },
    ],
  },
  {
    name: 'Прочее',
    emoji: '10071',
    location: flat,
    poem: [
      {
        urgency: urgent,
        author: 'Владимир Маяковский',
        text: `Ну, это совершенно невыносимо!
        Весь как есть искусан злобой.
        Злюсь не так, как могли бы вы:
        как собака лицо луны гололобой —
        взял бы
        и все обвыл.`,
      },
      {
        urgency: notUrgent,
        author: 'Владимир Высоцкий',
        text: `Тут на милость не надейся -
        Стиснуть зубы, да терпеть!
        Сколь веревочка ни вейся -
        Все равно совьешься в плеть!`,
      },
    ],
  },
];

export {
  locations,
  urgencies,
  problems,
};
