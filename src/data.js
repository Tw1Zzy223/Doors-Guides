const c = (name, cue, action, avoid, tip) => ({ name, cue, action, avoid, tip });

export const sections = {
  'Отель': [
    c('Rush', 'Мигает свет и слышен быстрый шум.', 'Сразу прячься в шкаф, под кровать или другое укрытие.', 'Не ищи золото после мигания.', 'Сначала замечай укрытие, затем открывай дверь.'),
    c('Ambush', 'Похож на Rush, но возвращается несколько раз.', 'Прячься, выходи после пролёта и повторяй при возвращении.', 'Не сиди слишком долго — Hide выгонит.', 'Слушай звук: он подсказывает новый круг.'),
    c('Eyes', 'На стенах появляются светящиеся глаза.', 'Смотри в сторону, в пол или стену и двигайся.', 'Не держи взгляд на Eyes.', 'Камерой можно смотреть вбок, продолжая идти.'),
    c('Screech', 'В темноте слышно «пссст».', 'Повернись и посмотри на Screech.', 'Не игнорируй звук.', 'Наушники дают большое преимущество.'),
    c('Dupe', 'Есть дверь с неправильным номером и странным звуком.', 'Сверь номер с предыдущей дверью.', 'Не открывай первую дверь без проверки.', 'Один игрок может называть номер всей команде.'),
    c('Seek', 'Глаза на стенах и начало погони.', 'Беги по подсказкам, поворачивай правильно, обходи преграды.', 'Не останавливайся ради предметов.', 'Перед погоней лучше иметь полное здоровье.'),
    c('Figure', 'Тяжёлые шаги, рычание.', 'Присядь, ходи тихо, собирай книги и решай код.', 'Не беги рядом с ним.', 'Figure слепой, но отлично слышит.'),
    c('Halt', 'Синий коридор и надписи TURN AROUND.', 'Иди в сторону, которую велит надпись.', 'Не пытайся постоянно идти вперёд.', 'Смотри на текст в центре экрана.'),
    c('Hide', 'В укрытии появляется сердцебиение.', 'Выйди и возвращайся только при опасности.', 'Не занимай шкаф заранее.', 'Hide — наказание за долгое укрытие.'),
    c('Dread', 'Появляется, если долго ждать.', 'Продолжай проходить комнаты.', 'Не оставляй игру в одной комнате.', 'После Archives ждать особенно опасно.'),
    c('Timothy', 'Паук выпрыгивает из ящика.', 'Продолжай путь: урон небольшой.', 'Не трать лечение без необходимости.', 'Это внезапность, а не серьёзный бой.'),
    c('Jack', 'Редкий скример из двери или шкафа.', 'Осмотрись и продолжай.', 'Не путай скример с немедленной смертью.', 'Опасность обычно приходит не от Jack.'),
    c('Snare', 'Ловушка на полу в Greenhouse.', 'Свети под ноги и обходи шипы.', 'Не беги в темноте вслепую.', 'Свеча или фонарь очень полезны.'),
    c('Void', 'Игрок сильно отстал от группы.', 'Держитесь вместе; он вернёт отставшего.', 'Не используй это как телепорт по желанию.', 'После сложной комнаты подожди друзей.'),
  ],
  'Шахты': [
    c('Giggle', 'Смех и существо на потолке.', 'Смотри вверх и обходи место под ним.', 'Не беги под потолком без проверки.', 'Свет помогает заметить его заранее.'),
    c('Gloombats', 'Стая в тёмной зоне.', 'Используй источник света и не тревожь стаю.', 'Не уходи в полную темноту без света.', 'Держи хотя бы зажигалку.'),
    c('Grumble', 'Громкие шаги в Nest.', 'Слушай направление и планируй путь к якорям.', 'Не беги прямо на звук.', 'В команде разделите поиск якорей.'),
    c('Queen Grumble', 'Сюжетная крупная Grumble.', 'Следуй маршруту погони.', 'Не пытайся сражаться.', 'Здесь скорость важнее предметов.'),
    c('Louie', 'Опасность на маршрутах Mines.', 'Следи за окружением и подсказками.', 'Не отвлекайся в скоростной секции.', 'Перед вагонеткой восстанови здоровье.'),
  ],
  'Бэкдор': [
    c('Blitz', 'Мигание света и быстрый шум.', 'Найди укрытие.', 'Не путай его с таймером Haste.', 'Сначала найди шкаф, потом открывай дверь.'),
    c('Haste', 'Истекает таймер.', 'Ищи рычаги для добавления времени.', 'Не обыскивай каждую комнату полностью.', 'В команде разделяйте поиск рычага.'),
    c('Lookman', 'Появляется наблюдающее лицо.', 'Не смотри на него и иди дальше.', 'Не поворачивай камеру к лицу.', 'Держи взгляд на двери или полу.'),
  ],
  'Outdoors': [
    c('Bramble', 'Колючие заросли на пути.', 'Ищи безопасный обход.', 'Не срезай путь через кусты.', 'В темноте двигайся медленнее.'),
    c('Caws', 'Предупреждающие птичьи звуки.', 'Слушай звук и ищи безопасный путь.', 'Не игнорируй окружение.', 'Наушники помогают.'),
    c('Eyestalk', 'Глазастое растение.', 'Обойди и не задерживай взгляд.', 'Не подходи «просто посмотреть».', 'Сначала запомни путь отхода.'),
    c('Grampy', 'Большая угроза на маршруте.', 'Держи дистанцию и следуй механике сцены.', 'Не пробегай вплотную.', 'Предупреждай команду.'),
    c('Groundskeeper', 'Патрулирует зону.', 'Наблюдай и обходи его маршрут.', 'Не беги у него перед глазами.', 'Несколько секунд наблюдения спасут попытку.'),
    c('Mandrake', 'Опасное растение.', 'Следуй подсказке игры при взаимодействии.', 'Не нажимай предметы наугад.', 'Оставь лечение на неизвестную зону.'),
    c('Monument', 'Странный объект-загадка.', 'Ищи подсказки вокруг.', 'Не трать предметы до понимания задачи.', 'Разделите поиск деталей в команде.'),
    c('Surge', 'Внезапная скоростная угроза.', 'Сразу выполняй подсказку и ищи безопасность.', 'Не продолжай обыск.', 'Заходи в область с полным здоровьем.'),
    c('World Lotus', 'Особая маршрутная находка.', 'Сохрани и используй по назначению пути.', 'Не трать, не зная эффекта.', 'Связан с особыми переходами.'),
  ],
  'Archives': [
    c('Honcho', 'Секторная встреча с боссом и задачей.', 'Решай загадку, постоянно прерывая линию взгляда.', 'Не стой перед ним на виду.', 'Работай короткими шагами: задача — укрытие — задача.'),
    c('Drone', 'Существо со стикерами рядом.', 'Не подходи и обходи.', 'Не проверяй его вплотную.', 'Планируй путь по комнате.'),
    c('Forget-Me-Not', 'Синие цветы с глазом закрыли дверь.', 'Пройди загадку на отличия: без изменений — вперёд, с отличием — назад.', 'Не выбирай направление наугад.', 'Внимательно запоминай комнату.'),
    c('Teller', 'Закрытая дверь требует билет.', 'Найди и отдай Waiting Ticket.', 'Не выбрасывай билет.', 'Держи билет в быстром доступе.'),
    c('Alma', 'Появляется в тёмной комнате.', 'Используй свет и не смотри долго.', 'Не удерживай на ней камеру.', 'Перед тёмным сектором проверь свет.'),
    c('Portrait', 'Зеркальный двойник повторяет тебя.', 'Контролируй предмет в руке и действия.', 'Не делай лишних взаимодействий рядом.', 'Карманное зеркало связано с этой встречей.'),
    c('Fih', 'Особая встреча с существом-рыбой.', 'Используй Fih Food, когда требуется.', 'Не трать Fih Food раньше времени.', 'Спецеду береги именно для Fih.'),
    c('Bash', 'Новая версия A-60, огненная атака.', 'Уйди с траектории и ищи безопасность.', 'Не оставайся в длинном коридоре.', 'Не заходи с низким здоровьем.'),
    c('Ransom', 'После ошибки требует 500 золота.', 'Сохраняй 500 золота и выполни требование за время.', 'Не трать всё на пропуски секторов.', '500 — неприкосновенный запас.'),
    c('Scribbles', 'Новая версия A-120.', 'Слушай предупреждение и выполни механику.', 'Не применяй к нему старый гайд A-120.', 'После встречи смотри Journal.'),
  ],
  'Stairwell': [
    c('Creak', 'Угроза в длинных лестничных переходах.', 'Следи за окружением и осматривайся.', 'Не смотри только вперёд.', 'Периодически проверяй пространство за спиной.'),
    c('Noise', 'Телевизор и статический шум.', 'Учитывай телевизоры как часть механики.', 'Не считай их декорацией.', 'Его можно использовать для особых достижений.'),
    c('Stem', 'Выпрыгивает из шкафчиков.', 'Не наступай и смотри под ноги.', 'Не беги по узкому участку вслепую.', 'Малый урон накапливается.'),
    c('Meld', 'Опасность, связанная с огнём.', 'Используй Fire Alarm, если ситуация требует.', 'Не активируй предметы наугад.', 'С ним связано достижение Fried Mushrooms.'),
    c('Cobbler', 'Особая лестничная угроза.', 'Следуй визуальным и звуковым подсказкам.', 'Не торопись в новой комнате.', 'После встречи проверь Journal.'),
    c('Hijack', 'Телевизионная/заражённая механика.', 'Выполняй подсказки комнаты.', 'Не игнорируй новые объекты.', 'Некоторые ачивки связаны с Noise и Hijack.'),
  ],
};

export const items = [
  ['Зажигалка', 'Короткий источник света.'], ['Фонарик', 'Долгое яркое освещение.'], ['Свеча', 'Свет и раннее предупреждение.'],
  ['Витамины', 'Скорость и восстановление здоровья.'], ['Отмычка', 'Открывает обычный замок.'], ['Skeleton Key', 'Открывает особые замки; нужен для Stairwell.'],
  ['Crucifix', 'Изгоняет многие сущности, но не всех.'], ['Bandage Pack', 'Восстанавливает здоровье.'], ['Vial of Starlight', 'Лечение и усиление.'],
  ['Компас', 'Помогает ориентироваться.'], ['NVCS-3000', 'Прибор ночного видения.'], ['Rift', 'Хранит предмет между забегами.'],
  ['Waiting Ticket', 'Требуется Teller в Archives.'], ['Pizza', 'Еда и лечение.'], ['Lunch Box', 'Хранит еду.'], ['Paper Cup', 'Стакан с водой; эффект зависит от варианта.'],
  ['Paper Plane', 'Бросаемый предмет.'], ['Mug', 'Предмет Archives.'], ['Pack Of Gween Soda', 'Предмет Archives.'], ['Fih Food', 'Еда для Fih.'], ['Portrait’s Pocket Mirror', 'Связан с Portrait.'],
];

export const visions = {
  'Battle Mode': 'Соревновательный режим: быстро собирай нужные предметы, береги лечение и не рискуй ради золота, если лидируешь.',
  'Daily Runs': 'Ежедневный забег с особым набором правил. Сначала прочитай модификаторы, потом распределите роли в команде.',
  'Chaos Mode': 'Случайные события меняют привычные правила. Держитесь вместе и сохраняйте предметы для неожиданностей.',
  'Endless Mode': 'Конца нет: береги здоровье и лечение, не рискуй ради каждой монеты.',
  'Rush Mode': 'Всегда сначала замечай укрытие, затем открывай дверь. Не сиди в шкафу заранее.',
  'Hotel-': 'Необычная версия Hotel: сначала прочитай условия режима и не полагайся на обычные привычки.',
  'SUPER HARD MODE': 'Сложный шуточный режим с меняющимися угрозами. Лучше проходить после освоения Hotel.',
  'Retro Mode': 'Ретро-визуал: слушай звук, а не только ищи знакомые современные детали.',
  'Trick Or Treat': 'Сезонный Vision: проверяй эффект конфеты перед использованием.',
  'Cringle’s Workshop': 'Зимний Vision: изучи цель комнаты и распределяй предметы в команде.',
};

export const routes = [
  ['Отель', '1–100', 'Ищи ключи, переживи Library с Figure, купи предметы у Джеффа и реши электрощитовую.'],
  ['Archives', 'A–Z', 'Секторы по 50 дверей: держи 500 золота для Ransom, береги Waiting Ticket для Teller.'],
  ['Outdoors', 'Маршрут из Hotel', 'Свети под ноги, изучай растения и не теряй команду на открытых участках.'],
  ['Mines', '101–200', 'Возьми свет, не спеши в Nest и планируй путь к якорям.'],
  ['Stairwell', 'Секрет у 152', 'Нужен Skeleton Key; смотри под ноги и обращай внимание на телевизоры.'],
  ['Backdoor', 'Короткий забег', 'Приоритет — рычаги времени, а не золото.'],
];

export const achievements = [
  ['Rock Bottom', 'Пройти Hotel.'], ['A Hard Place', 'Пройти Mines.'], ['Back On Track', 'Пройти The Backdoor.'],
  ['Perfect Memory', 'Пройти Forget-Me-Not без ошибки.'], ['Now Served', 'Пройти Teller с нужным билетом.'],
  ['Carpet Burn', 'Пережить Bash.'], ['Firewall', 'Избежать или обезвредить Ransom.'], ['Going Up', 'Выйти из Stairwell.'],
  ['Fried Mushrooms', 'Использовать Fire Alarm против Meld.'], ['Rage Room', 'Обезвредить Noise.'],
];

export const updates = [
  ['28 августа 2026', 'The Archives', 'The Rooms заменён на Archives, добавлены новые сущности, предметы, Journal и Stairwell.'],
  ['Сейчас', 'Версия 1.0 приложения', 'Справочник обновлён под Archives; удалённые Rooms не показываются.'],
];

export const signals = [
  ['Мигает свет', 'Rush или Ambush: немедленно найди укрытие.'],
  ['Шёпот «псст»', 'Screech: повернись и посмотри на него.'],
  ['Глаза на стенах', 'Eyes: смотри в сторону или в пол.'],
  ['Таймер уменьшается', 'Haste в Backdoor: ищи рычаг, который добавит время.'],
  ['Смех сверху', 'Giggle: посмотри на потолок и не иди под ним.'],
];

export const quizQuestions = [
  ['Свет мигает. Что делать?', 'Найти укрытие', 'Искать золото'],
  ['Слышно «псст». Что делать?', 'Повернуться и найти Screech', 'Закрыть глаза'],
  ['На стенах появились Eyes. Что делать?', 'Смотреть в сторону', 'Смотреть прямо на них'],
  ['В Backdoor заканчивается время. Что делать?', 'Искать рычаг', 'Стоять в шкафу'],
  ['Смех раздался сверху в Mines. Что делать?', 'Посмотреть на потолок', 'Бежать под ним'],
];

export const secrets = [
  ['Stairwell', 'В Mines около двери 152 нужен Skeleton Key.'],
  ['The Archives', 'Вход доступен из лобби; старый The Rooms удалён.'],
  ['Rift', 'Позволяет сохранить один важный предмет между забегами.'],
  ['Редкие комнаты', 'Не спеши: проверяй боковые проходы и слушай Guiding Light.'],
];

export const bosses = [
  ['Figure', 'Hotel: Library и дверь 100', 'Слепой, но слышит. Присядь, собирай книги тихо и решай код.'],
  ['Seek', 'Hotel и Mines', 'Во время погони выбирай путь по подсказкам, не останавливайся ради предметов.'],
  ['Grumble', 'Mines: The Nest', 'Слушай шаги, планируй путь к якорям и не беги на звук.'],
  ['Honcho', 'Archives', 'Решай задание короткими шагами и постоянно разрывай линию взгляда.'],
];

// Английская версия хранится отдельно: так перевод не меняет русские гайды и его легко проверять.
export const english = {
  locations: { 'Отель': 'Hotel', 'Шахты': 'Mines', 'Бэкдор': 'Backdoor', 'Outdoors': 'Outdoors', 'Archives': 'Archives', 'Stairwell': 'Stairwell' },
  sections: {
    'Отель': [
      c('Rush', 'The lights flicker and a fast rushing sound begins.', 'Hide immediately in a wardrobe, under a bed, or another shelter.', 'Do not search for gold after the lights flicker.', 'Spot a hiding place before opening the next door.'),
      c('Ambush', 'Like Rush, but it returns several times.', 'Hide, leave after it passes, and hide again if it returns.', 'Do not stay hidden too long — Hide will force you out.', 'Listen closely: the sound tells you about another pass.'),
      c('Eyes', 'Glowing eyes appear on the walls.', 'Look aside, at the floor, or at a wall while moving.', 'Do not keep looking at Eyes.', 'You can point the camera sideways and keep walking.'),
      c('Screech', 'You hear “psst” in the dark.', 'Turn around and look at Screech.', 'Do not ignore the sound.', 'Headphones are a major advantage.'),
      c('Dupe', 'A door has the wrong number and an unusual sound.', 'Compare its number with the previous door.', 'Do not open the first door without checking.', 'One player can call out the number to the team.'),
      c('Seek', 'Eyes on the walls and the chase begins.', 'Run along the prompts, turn correctly, and avoid obstacles.', 'Do not stop for items.', 'Enter the chase with full health when possible.'),
      c('Figure', 'Heavy footsteps and growling.', 'Crouch, move quietly, collect books, and solve the code.', 'Do not run near it.', 'Figure is blind, but hears very well.'),
      c('Halt', 'A blue corridor and TURN AROUND messages.', 'Move in the direction the message tells you.', 'Do not try to walk forward all the time.', 'Watch the text in the center of the screen.'),
      c('Hide', 'A heartbeat starts while you are hiding.', 'Leave and return only when danger is near.', 'Do not occupy a wardrobe in advance.', 'Hide punishes staying hidden too long.'),
      c('Dread', 'It appears if you wait too long.', 'Keep progressing through rooms.', 'Do not leave the game in one room.', 'Waiting after Archives is especially dangerous.'),
      c('Timothy', 'A spider jumps from a drawer.', 'Keep going: the damage is small.', 'Do not spend healing unless you need it.', 'It is a surprise, not a serious fight.'),
      c('Jack', 'A rare jumpscare from a door or wardrobe.', 'Look around and continue.', 'Do not mistake the jumpscare for an instant death.', 'Jack itself is usually not the danger.'),
      c('Snare', 'A floor trap in the Greenhouse.', 'Light the floor and walk around the spikes.', 'Do not run blindly through darkness.', 'A candle or flashlight is very useful.'),
      c('Void', 'A player falls far behind the group.', 'Stay together; it brings the late player back.', 'Do not use it as a teleport whenever you want.', 'Wait for friends after a difficult room.')
    ],
    'Шахты': [
      c('Giggle', 'Laughter and a creature on the ceiling.', 'Look up and avoid walking underneath it.', 'Do not run beneath ceilings without checking.', 'Light helps you notice it early.'),
      c('Gloombats', 'A swarm in a dark zone.', 'Use a light source and do not disturb the swarm.', 'Do not enter complete darkness without light.', 'Keep at least a lighter.'),
      c('Grumble', 'Loud footsteps in the Nest.', 'Listen for its direction and plan a route to the anchors.', 'Do not run straight toward the sound.', 'Split up anchor searching in a team.'),
      c('Queen Grumble', 'A large story Grumble encounter.', 'Follow the chase route.', 'Do not try to fight it.', 'Speed matters more than items here.'),
      c('Louie', 'A danger on Mines routes.', 'Watch the environment and prompts.', 'Do not get distracted during a fast section.', 'Restore health before the minecart section.')
    ],
    'Бэкдор': [
      c('Blitz', 'Flickering lights and a fast rushing sound.', 'Find shelter.', 'Do not confuse it with the Haste timer.', 'Find a wardrobe before opening the next door.'),
      c('Haste', 'The timer is running out.', 'Find levers to add time.', 'Do not search every room completely.', 'Split up lever searching in a team.'),
      c('Lookman', 'A watching face appears.', 'Do not look at it; keep moving.', 'Do not turn the camera toward its face.', 'Keep your view on the door or floor.')
    ],
    'Outdoors': [
      c('Bramble', 'Thorny bushes block the path.', 'Find a safe way around.', 'Do not cut through bushes.', 'Move more slowly in the dark.'),
      c('Caws', 'Warning bird sounds.', 'Listen and find a safe path.', 'Do not ignore the environment.', 'Headphones help.'),
      c('Eyestalk', 'An eye-covered plant.', 'Walk around it and do not stare.', 'Do not approach just to look.', 'Memorize an escape route first.'),
      c('Grampy', 'A large threat on the route.', 'Keep distance and follow the scene mechanic.', 'Do not run right next to it.', 'Warn your team.'),
      c('Groundskeeper', 'It patrols an area.', 'Watch and go around its route.', 'Do not run in front of it.', 'A few seconds of observation can save the run.'),
      c('Mandrake', 'A dangerous plant.', 'Follow the game prompt when interacting.', 'Do not press items at random.', 'Save healing for unknown areas.'),
      c('Monument', 'A strange puzzle object.', 'Look for clues nearby.', 'Do not spend items before understanding the task.', 'Split up clue searching in a team.'),
      c('Surge', 'A sudden fast threat.', 'Follow the prompt immediately and find safety.', 'Do not continue searching.', 'Enter the area with full health.'),
      c('World Lotus', 'A special route find.', 'Keep it and use it for its route purpose.', 'Do not use it without knowing the effect.', 'It is linked to special transitions.')
    ],
    'Archives': [
      c('Honcho', 'A boss sector with a task.', 'Solve the puzzle while constantly breaking line of sight.', 'Do not stand in front of it.', 'Work in short steps: task, shelter, task.'),
      c('Drone', 'A sticker-covered creature nearby.', 'Do not approach; go around it.', 'Do not inspect it up close.', 'Plan your route through the room.'),
      c('Forget-Me-Not', 'Blue flowers with an eye close the door.', 'Solve the difference puzzle: no change means forward; a change means back.', 'Do not choose directions randomly.', 'Memorize the room carefully.'),
      c('Teller', 'A locked door asks for a ticket.', 'Find and hand over the Waiting Ticket.', 'Do not throw the ticket away.', 'Keep the ticket easy to reach.'),
      c('Alma', 'It appears in a dark room.', 'Use light and do not stare for long.', 'Do not keep the camera on it.', 'Check your light before a dark sector.'),
      c('Portrait', 'A mirror double copies you.', 'Control the item in your hand and your actions.', 'Do not make extra interactions nearby.', 'The pocket mirror is linked to this encounter.'),
      c('Fih', 'A special fish-creature encounter.', 'Use Fih Food when required.', 'Do not use Fih Food too early.', 'Save the special food specifically for Fih.'),
      c('Bash', 'A new A-60 version with a fire attack.', 'Leave its path and find safety.', 'Do not remain in a long corridor.', 'Do not enter with low health.'),
      c('Ransom', 'After a mistake, it asks for 500 gold.', 'Keep 500 gold and meet the requirement in time.', 'Do not spend everything on sector skips.', 'Keep 500 as an emergency reserve.'),
      c('Scribbles', 'A new A-120 version.', 'Listen for the warning and do the mechanic.', 'Do not use the old A-120 guide for it.', 'Check the Journal after the encounter.')
    ],
    'Stairwell': [
      c('Creak', 'A threat in long stair transitions.', 'Watch your surroundings and look around.', 'Do not look only forward.', 'Check the space behind you from time to time.'),
      c('Noise', 'A television and static noise.', 'Treat televisions as part of the mechanic.', 'Do not think they are only decoration.', 'It can be used for special achievements.'),
      c('Stem', 'It jumps from lockers.', 'Do not step on it; watch the floor.', 'Do not run blindly through narrow passages.', 'Small damage adds up.'),
      c('Meld', 'A danger connected with fire.', 'Use the Fire Alarm if the situation calls for it.', 'Do not activate items at random.', 'The Fried Mushrooms achievement is linked to it.'),
      c('Cobbler', 'A special stairwell threat.', 'Follow visual and sound prompts.', 'Do not rush in a new room.', 'Check the Journal after the encounter.'),
      c('Hijack', 'A TV/infected mechanic.', 'Follow the room prompts.', 'Do not ignore new objects.', 'Some achievements are linked to Noise and Hijack.')
    ]
  },
  items: [
    ['Lighter', 'A short-lasting light source.'], ['Flashlight', 'Long, bright lighting.'], ['Candle', 'Light and an early warning.'], ['Vitamins', 'Speed and health recovery.'], ['Lockpick', 'Opens a normal lock.'], ['Skeleton Key', 'Opens special locks; needed for Stairwell.'], ['Crucifix', 'Banishes many entities, but not all.'], ['Bandage Pack', 'Restores health.'], ['Vial of Starlight', 'Healing and a boost.'], ['Compass', 'Helps you navigate.'], ['NVCS-3000', 'Night-vision device.'], ['Rift', 'Stores an item between runs.'], ['Waiting Ticket', 'Required by Teller in Archives.'], ['Pizza', 'Food and healing.'], ['Lunch Box', 'Stores food.'], ['Paper Cup', 'A cup of water; its effect depends on the variant.'], ['Paper Plane', 'A throwable item.'], ['Mug', 'An Archives item.'], ['Pack Of Gween Soda', 'An Archives item.'], ['Fih Food', 'Food for Fih.'], ["Portrait’s Pocket Mirror", 'Linked to Portrait.']
  ],
  visions: {
    'Battle Mode': 'Competitive mode: collect needed items quickly, save healing, and do not risk your lead for gold.',
    'Daily Runs': 'A daily run with special rules. Read modifiers first, then split roles in the team.',
    'Chaos Mode': 'Random events change familiar rules. Stay together and save items for surprises.',
    'Endless Mode': 'There is no end: protect health and healing, and do not risk every coin.',
    'Rush Mode': 'Spot shelter before opening the next door. Do not sit in a wardrobe early.',
    'Hotel-': 'An unusual Hotel version: read its conditions first and do not rely on normal habits.',
    'SUPER HARD MODE': 'A difficult joke mode with changing threats. Learn Hotel first.',
    'Retro Mode': 'Retro visuals: listen to sounds, not only familiar modern details.',
    'Trick Or Treat': 'Seasonal Vision: check a candy effect before using it.',
    'Cringle’s Workshop': 'Winter Vision: learn the room goal and divide items in the team.'
  },
  routes: [['Hotel', '1–100', 'Find keys, survive Figure in the Library, buy items from Jeff, and solve the electrical room.'], ['Archives', 'A–Z', 'Fifty-door sectors: keep 500 gold for Ransom and a Waiting Ticket for Teller.'], ['Outdoors', 'Route from Hotel', 'Light the floor, learn the plants, and do not lose your team in open areas.'], ['Mines', '101–200', 'Bring light, do not rush into the Nest, and plan routes to anchors.'], ['Stairwell', 'Secret at 152', 'Requires the Skeleton Key; watch the floor and pay attention to TVs.'], ['Backdoor', 'Short run', 'Levers for time are the priority, not gold.']],
  achievements: [['Rock Bottom', 'Complete Hotel.'], ['A Hard Place', 'Complete Mines.'], ['Back On Track', 'Complete The Backdoor.'], ['Perfect Memory', 'Complete Forget-Me-Not without a mistake.'], ['Now Served', 'Complete Teller with the correct ticket.'], ['Carpet Burn', 'Survive Bash.'], ['Firewall', 'Avoid or disarm Ransom.'], ['Going Up', 'Leave Stairwell.'], ['Fried Mushrooms', 'Use Fire Alarm against Meld.'], ['Rage Room', 'Disarm Noise.']],
  updates: [['August 28, 2026', 'The Archives', 'The Rooms was replaced by Archives; new entities, items, Journal, and Stairwell were added.'], ['Now', 'App version 0.1.0', 'The guide is updated for Archives; removed Rooms content is not shown.']],
  signals: [['Lights flicker', 'Rush or Ambush: find shelter immediately.'], ['A “psst” whisper', 'Screech: turn around and look at it.'], ['Eyes on the walls', 'Eyes: look aside or at the floor.'], ['Timer shrinking', 'Haste in Backdoor: find a lever that adds time.'], ['Laughter above', 'Giggle: look at the ceiling and do not walk underneath.']],
  quizQuestions: [['Lights flicker. What do you do?', 'Find shelter', 'Look for gold'], ['You hear “psst.” What do you do?', 'Turn and find Screech', 'Close your eyes'], ['Eyes appear on the walls. What do you do?', 'Look aside', 'Look straight at them'], ['Time is ending in Backdoor. What do you do?', 'Find a lever', 'Stand in a wardrobe'], ['Laughter comes from above in Mines. What do you do?', 'Look at the ceiling', 'Run underneath']],
  secrets: [['Stairwell', 'Near door 152 in Mines, you need a Skeleton Key.'], ['The Archives', 'The entrance is available from the lobby; the old The Rooms was removed.'], ['Rift', 'Lets you keep one important item between runs.'], ['Rare rooms', 'Do not rush: check side passages and listen to Guiding Light.']],
  bosses: [['Figure', 'Hotel: Library and door 100', 'Blind but hears well. Crouch, collect books quietly, and solve the code.'], ['Seek', 'Hotel and Mines', 'During a chase, follow route prompts and do not stop for items.'], ['Grumble', 'Mines: The Nest', 'Listen to footsteps, plan routes to anchors, and do not run toward the sound.'], ['Honcho', 'Archives', 'Solve the task in short steps and keep breaking line of sight.']]
};
