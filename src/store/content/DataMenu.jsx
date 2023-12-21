// import i1 from "../../assets/home/1.svg";
// import i2 from "../../assets/home/2.svg";
// import i3 from "../../assets/home/3.svg";

const i1 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAACXBIWXMAAAsSAAALEgHS3X78AAAE9klEQVR4nO2c3W3bQAzHyTboa50JmkwQL1BUee9DOkGcCeIN6m7gbuBM0BQdoM4GygbOY98ioI8FrmBABYoinXj6sGgdf8AhgOOTTvcX74M8Gp1zYOjijemhDxNFISaKQkwUhZgoCjFRFGKiKMREUYiJohATRSFH1CREPAGAk9g7Y98457ZVtzzivwsA+DrZp9cLVrXMhi+FmCgKMVEUYqIoxERRSL762gHAXeydMRCfQi9r4eCBQcTaDnbO2ZL4UDBRFGKiKEQsCvnHEHGJiLeI+EhjZans+H8LRJzF1Il90zjRs7NyBQCXAffOAOAWAJbOuUdND7xv2kz0XlEQcQ0A1x2eI2NhNuN1y7j0JgoPP+RWPuvpiW6ccwsNnbRv2ohyVP5gAEGIS0SErsIg4qqHtuwklouICQAkvu845/poT+WFXxQASOnjgcq6fL+Q0lObtpJ78jzqvZbwOsH1X6y++E3s00LKXPMbaHh4FoVXWZLoI/nIvgDAMY2JPC6eAsAVADwI6kc76YspmNmmwVxpaXvRh9lT+NmGr/r6ecWZQJB5QOctGq6XmijNc8pFg2XRm50GWB9Z3XfPV854uDQqyJfEvsn3zjl326LzVmwx72v+Ty/COvCa31q0o8xO+L3K4z97QbAMbjX+C+apTsvjQyldhi/fMrjLG+OrOx/jJTwEGr3EzjmpuVfRpW60WDxFIbkoWV3TOu7AfXWjdun7yEXxLXeblss+fHXFS+zYkIjSKpLIFuZbQJgoNTzFUxCR3ugfnu/9dM6JLUbo/j8OjUpqc2bWpTIUaRNPKe4pdg1uhY1wbzITuP9F1xrIzdJbGdT3xZWXEr8RJRd5GpAIxKWSmCj19V+Eg+lECgB8EFjuPR+MSNkyTnhSl8RigobCIr6hYAxqhx9hm0Uxeh6zfw/4fBlbWqvlcCyivCl9acvBqqFIYj9yJOHVjl7gdm/LVYj7P2ZenWZhYegkZMqu9TrXu5SMLaQPQaJI12g6jDdnYYJzLJib2E9J9p4KQW+3c44m/3NaNQnbkbEYp3TOy+aQcIKShninnnAsZFaIieQ7261klxsTvZ8lNrpjmVwTwURRiImiEBNFIZWiIOKmIn2ua0kt7U7GK1FIkMBUOinkQf6DiB/393iHSTkVYihBct6RFxoRP0+zO/uhmAqxHliQnLcA8IuyiLtchIZCyqeZ5JnkQoRsO0L0btUyArnkI0qubWh5X6VrOHgMUYI6lQ+MV4Wba0PUJkr7QveeeR6sKfav1lqGFCX4oAN3ZIhQaVkYvob0ZWl1GEOjKJo2j7Rkpp8SmfNPjmz5vIA0ljNM+vQIVEYeR4SinNuW0U4ScjaF+I1GN0uoIBlneM2nElAby1L+9XDvjEPV66lFN8eylHtf+oWAG7aM1RTDzWOJ8pdXVveB9Yqx/8lmiY02p/CRI6kwdLTofOpi5Iw60fPQk7AFVJGLkcR0IGP0JTELQ4lJUHCIPrBfLMrfcVGzT6GhiTeMEPMv6YG2zWPsYuRYjF4hJopCTBSFmCgK0eYlztMvojiKVJGC/kibanWidMyHOTTK+aW0WU5s+FJI0VKWnmGjTWpcyslGVVgikYdnUfpOEmX3iSUQtcCGL4WYKArRuPqKOdf+6dkt51EhNnwpxERRiImiEBNFISaKQkwUhZgoCjFRFGKiKMREUYiJog0A+A9PMWtJ7Xm+IwAAAABJRU5ErkJggg==';

const i2 =
  'data:image/png;base64,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';

const i3 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAACXBIWXMAAAsSAAALEgHS3X78AAAFZklEQVR4nO1d63ETMRCWGP7jDuIO4g64EkIFhAoIFeBUQDrA6cBUQNyB04HTgVPBMmI2mWB8u6uXbyXvN6M/uYuk0yftQ7uSPQC4MXjvh9GHBgp7ANimjhBHyvhDA4UNACRP6Hc2tPpgpCiEkaIQRopCGCkK8T6jS5tuR0WGmXPuskbFyaTkmHw9AH243zU+xcSXQhgpCmGkKISRohBGikIYKQphpCiEkaIQRopCGCkKYaQoRFVSvPfLEFJusEy6r2crRSGMFIUwUhTCSFEII0UhjBSFyInRswCApXNu2ePA1YStFIUwUhTCSFEII0UhjBSFMFIUwkhRCCNFIao6j977a+fcdaXqVwCwqlT3pKhKinNu7pz7WKnuh0r1Tg4TXwphpCiEkaIQRopCGCkKUdv6WlW0knaV6p0ctYNcu54HrxZqr5SeESbb7cj3ZU3E5AtzAMD3P+7TwBS9QhgpCnH2OgWTucPtEYsjj/fOuXCZ2g6NlpPg7Ejx3ofBv3LODTGbpd77JzTvQ1kDwL5aH89F0WMY4abQfSrPgZiQ01ZlBQVSxkp4PFao/9NUMJ6zo74lswQHeV7ym7slBXXEtiIZh2VZqu9dii/vfRBTPyZo+jHoq1yR1h0p3vsgTj5P2IWgb4ZJrsDVRor3foaWUYoi36DeOZzhA4a0LxLq/JKcQ9CLTkFCpPJ/jwr6Slj3HC23WB01JH1LD6TgAEvJCEczZhltDRETILS3ODtScAZLBmhd0nRFU3svaHcXOwmaJgXNXsnA3FRqfy4UaatzIkUiRq4r92EmJEasX5olBcXHpIREErM7B1K4rZNiHnYEMZwoFU2SJkkRrJKHCm2yRgJaZtmrpdUgF5c0XjSpHLf7t+ECIOo9AAg67p545UJ0GU9rKwUtnmKWjqC9qwOxRIqgEv1rkRTOLynti0TrBsaZ3fdIypro1/oEhLDEoP9E/S/p5bdICmXhFDGBheY2UHtnjHVIOrNNKXrcCf5AvJKdIoth45+CVx+Z9tbEszlVcWvW17GMkxc8ZQeX4ggZmOQJKp5CfUdXeV9iQvBuy8XB30oSEtWf/9CSTmEsL5GSf2MZvW6rR+iQrXTHl1H2pAXW2kqZEc/Y8OtBqDjopgd0CEuukL9gwsGUXuxKfJHKcyR2Hwbnu6DuKEKwPbI/FFojhbJ2RgchM5niVywhXH+4H5nrKW31qGjDGXuVWOc9AKTuo1GilkRrK4WyaC7Rj/kHaCYPmPoTgxxCHLaZ8h1tkSLwQ44OBCrdGGJyCRntC6IfUhCUPB4VUxHEZBOCIpPKP6N3HlryUwS+yp7zI5hkiyLb/pjGlDx2LZLC7cCyYeCR5O9ShHBhYdbJbY4U4Hdg2dXyZvC2JQkBwSqR7GS3SgoX6LqLmNXFEizQN6FWCRvgapkUSeaIKE+4cL+4NCPRBGhymwW96zvmtdXhTnBN4K4BZXE9C/r8+oHNrZQ3q4XL/UpKsE7oiyTBXJw62ywpIMuzqk6MkJCoPLTkQ0PEvSSlsaMO33jvg0j4KmjzFn+loghQNHIiy6HYWkRFRVNXygkLO8siDvNsUw/yvGlrJjB7swyOXkiRZr6/1onRRvG5EXQ474RHL15KUnZNjvg6FTYAwKZ6ojh54KJ6R7DB/6POPA4J5x7T99B6WCkZK6ZWyco/6+oWI/RfBowWToGg1D/l3ize3dVSgRgACFv43xICWznYoJVFJeGJwOkUDT9yRprEFDCusax82cETbp+Uu3c/R/a1UlBZS491S8uu1vE9cqX0BozhX2OEMuWHEV7u/FrhAaEqOCtSDoGnqhZotR0zu1/M5GDRbU91O95Zk6ISzrk/VJzj9k9i37UAAAAASUVORK5CYII=';

export const data = [
  {
    id: 1,
    title: 'Освоение нового материала',
    desk: 'Классификация и общее устройство системы освещения',
    supdesk: 'Динамическая инфографика',
    img: i1,
    link: '/infographic',
    collapse_t: (
      <ul className='list-disc list-inside text-lg text-black mb-2'>
        <li>
          {' '}
          организовать просмотр видеолекции/ анимации/ динамической инфографики/
          обучающих видеороликов и последующую беседу по уточнению и
          конкретизации первичных знаний;
        </li>
        <li>
          {' '}
          создать условия для освоения обучающимися знаний в форме интерактивной
          деятельности;
        </li>
        <li>
          {' '}
          визуализировать подачу учебного материала с помощью иллюстраций
          элементной базы источников света, фотографий, интерактивного коллажа,
          интерактивной схемы, ленты времени;
        </li>
        <li>
          {' '}
          формировать у обучающихся мотивацию к усвоению нового материала,
          образованию как основному инструменту достижения личного и
          профессионального успеха;
        </li>
        <li>
          {' '}
          осуществить постановку учебной проблемы: Выбор источников света в
          жилом помещении;
        </li>
        <li>
          {' '}
          организовать анализ изложенной учебной задачи по определению видов
          источников света, выявлению положительных качеств элементной базы
          электроосвещения;
        </li>
        <li>
          {' '}
          познакомить обучающихся с методами определения параметров освещения
          жилых помещений;
        </li>
        <li>
          {' '}
          показать взаимосвязь законов, роль, значение, преимущества, недостатки
          систем освещения;
        </li>
        <li> раскрыть роль, значение источников света;</li>
        <li> охарактеризовать состояние, структуру, видов источников света;</li>
        <li> ознакомить с основами системы освещения, с правилами монтажа;</li>
        <li>
          {' '}
          обратить внимание обучающихся на важные положения ранее пройденной
          темы: Основные физические законы электроосвещения;
        </li>
        <li>
          {' '}
          продемонстрировать технологию процесса монтажа ламп накаливания;
        </li>
        <li>
          {' '}
          проиллюстрировать связь между теми или иными элементами учебного
          материала;
        </li>
        <li>
          {' '}
          содействовать установлению в сознании обучающихся устойчивых связей
          между накопленным и новым опытом познавательной деятельности;
        </li>
        <li>
          {' '}
          фиксировать предложенные обучающимися гипотезы, курировать их
          обсуждение.
        </li>
      </ul>
    ),
    collapse_s: (
      <>
        <p className='text-lg text-black  mb-2'>
          Ознакомьтесь с теоретическим материалом по теме «Монтаж и техническое
          обслуживание осветительных установок»
        </p>
        <p className='text-lg text-black  mb-2'>
          Если в процессе изучения материала возникнут вопросы, запишите их для
          дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
        </p>
        <p className='text-lg text-black  mb-2'>
          Обратите внимание на основные вопросы, подтверждающие взаимосвязь
          знаний и умений при изучении модуля:
        </p>
        <ul className='list-disc list-inside text-lg text-black  mb-2'>
          <li>Основные сведения об электроосвещении</li>
          <li> Виды освещения</li>
          <li> Виды светильников</li>
          <li> Осветительная арматура</li>
          <li> Лампы накаливания, люминисцентные лампы</li>
          <li> Газорязрядные лампы</li>
          <li> Утилизация осветительных ламп</li>
        </ul>
        <p className='text-lg text-black  mb-2'>
          При необходимости прослушайте/просмотрите материал еще раз.
        </p>
        <p className='text-lg text-black  mb-2'>
          Возвращайтесь к наиболее сложным аспектам темы.
        </p>
        <p className='text-lg text-black  mb-2'>
          Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными
          носителями с отдыхом и гимнастикой для глаз.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Применение изученного материала',
    desk: 'Основные сведения об электрическом освещении',
    supdesk: 'Виртуальный тренажер',
    img: i2,
    link: '/simulator',
    collapse_t: (
      <ul className='list-disc list-inside text-black mb-2'>
        <li>
          {' '}
          организовать практическую, в т.ч. самостоятельную, деятельность
          обучающихся для отработки навыков решения определенных учебных заданий{' '}
        </li>
        <li>
          {' '}
          обеспечить усвоение обучающимися знаний и способов действий на уровне
          применения их в разнообразных ситуациях
        </li>
        <li> объяснить обучающимся порядок выполнения заданий</li>
        <li> консультировать обучающихся по мере необходимости</li>
        <li>
          {' '}
          обеспечить в ходе выполнения тренировочных заданий повышение уровня
          осмысления изученного материала, глубины его понимания
        </li>
        <li>
          {' '}
          обеспечить усвоение методики решения задач, экспериментального
          исследования в области
        </li>
        <li> анализировать работу обучающихся в новых учебных ситуациях</li>
        <li>
          {' '}
          выявить недостатки в знаниях и способах действий обучающихся,
          установить причины выявленных недостатков
        </li>
        <li>
          {' '}
          использовать вопросы, требующие интеллектуальной активности,
          самостоятельной мыслительной деятельности
        </li>
        <li>
          {' '}
          привлекать обучающихся к дополнению и корректировке ответов, создавать
          условия для фронтальной и групповой работы
        </li>
        <li>
          {' '}
          активизировать познавательную инициативу обучающихся и формирование их
          профессиональной компетентности
        </li>
        <li>
          {' '}
          способствовать развитию логического мышления, памяти, внимательности,
          наблюдательности
        </li>
        <li>
          {' '}
          способствовать развитию умения правильно составлять план и
          пользоваться им, сопоставлять факты и события, сравнивать,
          анализировать, систематизировать материал и формулировать выводы,
          находить нужную информацию и использовать ее на практике
        </li>
      </ul>
    ),
    collapse_s: (
      <>
        <p className='text-lg text-black  mb-2'>
          Повторите ранее пройденный материал МДК. 01.02. по теме 2.2. Монтаж и техническое обслуживание  осветительных электроустановок техники.{' '}
        </p>
        <p className='text-lg text-black  mb-2'>
          Запустите виртуальный тренажер по теме «Сборка, монтаж и ремонт промышленного электрооборудования» (указать тему раздела – название ЦОК).
        </p>
        <p className='text-lg text-black  mb-2'>
          В ходе практической работы выполните тренировочные задания, которые
          помогут освоить новый материал.{' '}
        </p>
        <p className='text-lg text-black  mb-2'>
          В процессе интерактивного взаимодействия с тренажером познакомьтесь с
          названиями, назначением, внешним видом инструментов, оборудования,
          деталей, изделий, а также с правилами безопасной работы с ними.
        </p>
        <p className='text-lg text-black  mb-2'>
          Уделите особое внимание правильной организации рабочего места.
        </p>
        <p className='text-lg text-black  mb-2'>
          Детально изучите конкретный технологический процесс, последовательно
          выполняя трудовые действия и используя для этого соответствующие
          инструменты и материалы.{' '}
        </p>
        <p className='text-lg text-black  mb-2'>
          Проведите лабораторную /практическую работу с виртуальным
          оборудованием и фиксацией ее результатов в ЭОМ.{' '}
        </p>
        <p className='text-lg text-black  mb-2'>
          Совместите объекты…, укажите (выбор) на объект…, измените
          характеристики объектов…
        </p>
        <p className='text-lg text-black  mb-2'>
          Выполните тренировочные задания на проверку первичного освоения
          материала.{' '}
        </p>
        <p className='text-lg text-black  mb-2'>
          При выполнении заданий обратите внимание на рекомендации
          преподавателя.{' '}
        </p>
        <p className='text-lg text-black  mb-2'>
          При возникновении ошибок возвращайтесь к повторному изучению
          теоретического материала.{' '}
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Диагностика приобретённых знаний, умений, навыков',
    desk: 'Диагностика',
    supdesk: 'Интерактивная мини-игра',
    img: i3,
    link: '/question',
    collapse_t: (
      <>
      <ul className="text-lg list-disc list-inside mb-2">
      <li>Обеспечить формирование у обучающихся умений самостоятельно применять знания в разнообразных ситуациях, в т.ч. при выполнении заданий разного уровня сложности</li>
      <li>Контролировать выполнение заданий</li>
      <li>Проверить степень усвоения знаний, умений при выполнении заданий разного уровня сложности</li>
      <li>Мотивировать обучающихся для получения максимального количества баллов и подтверждения профессиональной компетентности</li>
      <li>Отмечать степень вовлеченности обучающихся в работу</li>
      <li>Акцентировать внимание на итоговых результатах прохождения всей мини-игры</li>
      <li>Подготовить обучающихся к самооценке и рефлексии</li>
    </ul>
    </>
    ),
    collapse_s: (
      <>
        <p className='text-lg text-black  mb-2'>
          Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите
          видеолекцию / анимацию/ динамическую инфографику/ обучающие
          видеоролики по теме «…» (указать тему раздела – название ЦОК).
        </p>
        <p className='text-lg text-black  mb-2'>
          Если в процессе изучения материала возникнут вопросы, запишите их для
          дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
        </p>
        <p className='text-lg text-black  mb-2'>
          Обратите внимание на основные вопросы, подтверждающие взаимосвязь
          знаний и умений при изучении модуля:
        </p>
        <ul className='list-disc list-inside text-lg text-black  mb-2'>
          <li>Основные сведения об электроосвещении</li>
          <li> Виды освещения</li>
          <li> Виды светильников</li>
          <li> Осветительная арматура</li>
          <li> Лампы накаливания, люминисцентные лампы</li>
          <li> Газорязрядные лампы</li>
          <li> Утилизация осветительных ламп</li>
        </ul>
        <p className='text-lg text-black  mb-2'>
          При необходимости прослушайте/просмотрите материал еще раз.
        </p>
        <p className='text-lg text-black  mb-2'>
          Возвращайтесь к наиболее сложным аспектам темы.
        </p>
        <p className='text-lg text-black  mb-2'>
          Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными
          носителями с отдыхом и гимнастикой для глаз.
        </p>
      </>
    ),
  },
];
