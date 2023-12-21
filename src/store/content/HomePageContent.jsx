export const HomePageContent = {
  title: 'Монтаж и техническое обслуживание осветительных установок',
  fgos: 'Электромонтер по ремонту и обслуживанию электрооборудования',
  fgosNum: 'ФГОС СПО 13.01.10',
  mdk: 'Организация работ по сборке, монтажу и ремонту электрооборудования промышленных организаций',
  mdkNum: 'МДК 01.02',
  theme: 'Монтаж и техническое обслуживание осветительных установок',

  infoContent: {
    info: (
      <>
        <h2 className='text-2xl  text-black font-bold mb-2'>
          ФГОС СПО:
        </h2>
        <p className='text-lg text-black mb-2'>
          Федеральный государственный образовательный стандарт среднего
          профессионального образования по профессии 13.01.10 Электромонтер по
          ремонту и обслуживанию электрооборудования (по отраслям), утвержден
          Приказом Минпросвещения России от 28.04.2023 г. №316, зарегистрирован
          МЮ РФ 05.06.2023 № 73728.
        </p>

        <h2 className='text-2xl text-black font-bold mb-2'>
          ПООП Профессионалитета:
        </h2>
        <p className='text-lg text-black mb-2'>
          13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования.
        </p>
        <p className='text-lg text-black mb-2'>
          Зарегистрировано в государственном реестре примерных основных
          образовательных программ.
        </p>

        <h2 className='text-2xl text-black font-bold mb-2'>
          Профессиональный модуль:
        </h2>
        <p className='text-lg text-black mb-2'>
          ПМ. 01 Выполнение монтажа и наладки устройств электроснабжения и
          электрооборудования (по отраслям)
        </p>

        <h2 className='text-2xl text-black font-bold mb-2'>
          МДК 01.02:
        </h2>
        <p className='text-lg text-black mb-2'>
          Организация работ по сборке, монтажу и ремонту электрооборудования
          промышленных организаций.
        </p>

        <h2 className='text-2xl text-black font-bold mb-2'>
          Наименование раздела:
        </h2>
        <p className='text-lg text-black mb-2'>
          Сборка, монтаж и ремонт промышленного электрооборудования.
        </p>

        <h2 className='text-2xl text-black font-bold mb-2'>
          Наименование темы:
        </h2>
        <p className='text-lg text-black mb-2'>
          Монтаж и техническое обслуживание осветительных электроустановок
          техники.
        </p>
      </>
    ),
    keyWords: (
      <><h2 className='text-2xl  text-black mb-4'><b>Виды освещения.</b></h2>
      <h2 className='text-xl  text-black  mb-2'><b>В зависимости от назначения источника света различают:</b></h2>
      
        <h2 className='text-xl  text-black  mb-2'>
          {' '}
          <b>Общee </b> - называется освещение всего или части помещения.
        </h2>

        <h2 className='text-xl text-black mb-2'>
          <b>Местное </b> - является освещение рабочих мест, предметов или
          поверхностей, например специальное освещение обрабатываемой детали или
          инструмента на токарном станке.
        </h2>

        <h2 className='text-xl text-black  mb-2'>
          <b>Комбинированное </b> - сочетает в себе общее и местное освещения.
        </h2>

        <h2 className='text-xl text-black mb-2'>
          <b>Рабочее </b>- называют освещение, служащее для обеспечения
          нормальной деятельности производственных и вспомогательных
          подразделений предприятия.
        </h2>

        <h2 className='text-xl text-black  mb-2'>
          <b>Аварийное </b> - называется освещение, которое при нарушении
          рабочего освещения временно обеспечивает возможность продолжения
          работы или эвакуации людей.
        </h2>
        <h2 className='text-xl text-black  mb-2'>
          <b>Аварийное освещение </b>- располагается в производственных
          помещениях, коридорах, лестничных клетках. Светильники аварийного
          освещения должны отличаться от прочих светильников окраской и
          конструкцией и присоединяться к электросети, не связанной с сетью
          рабочего освещения.
        </h2>

        <h2 className='text-xl text-black  mb-2'>
          <b>Электропитание светильников </b> - общего, местного, рабочего и
          аварийного освещений в нормальных помещениях осуществляется с
          напряжением 127 и 220 В, а в помещениях с повышенной опасностью и в
          особо опасных — с напряжением 12, 24, 36 В.
        </h2>

        <h2 className='text-xl text-black font-bold mb-2'>
          Различают также освещение:
        </h2>
        <ul className='list-disc list-inside text-lg text-black  mb-2'>
          <li> переносное;</li>
          <li> охранное;</li>
          <li> светооградительное;</li>
        </ul>

        <h2 className='text-xl text-black mb-2'>
          <b>Основные характеристики различных источников света: </b>
        </h2>
        <div className='overflow-x-auto'>
          <table className='table-auto border-collapse border border-slate-500'>
            <thead>
              <tr>
                <th className='border border-slate-600 p-2'>
                  Источники света
                </th>
                <th className='border border-slate-600 p-2'>
                  Диапазон мощности, Вт
                </th>
                <th className='border border-slate-600 p-2'>
                  Световая отдача, лм/Вт
                </th>
                <th className='border border-slate-600 p-2'>
                  Срок службы, ч
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-700 p-2'>
                  Лампа накаливания общего назначения
                </td>
                <td className='border border-slate-700 p-2'>15-1500</td>
                <td className='border border-slate-700 p-2'>10-20</td>
                <td className='border border-slate-700 p-2'>1000</td>
              </tr>
              <tr>
                <td className='border border-slate-700 p-2'>
                  Кварцевые галогенные лампы (КГ)
                </td>
                <td className='border border-slate-700 p-2'>
                  100-20 000
                </td>
                <td className='border border-slate-700 p-2'>20-26</td>
                <td className='border border-slate-700 p-2'>
                  2000-3000
                </td>
              </tr>
              <tr>
                <td className='border border-slate-700 p-2'>
                  Люминесцентные лампы (лл)
                </td>
                <td className='border border-slate-700 p-2'>
                  20(18)-80(65)
                </td>
                <td className='border border-slate-700 p-2'>65-80</td>
                <td className='border border-slate-700 p-2'>
                  6000-15 000
                </td>
              </tr>
              <tr>
                <td className='border border-slate-700 p-2'>
                  Дуговые ртутные лампы типа ДРЛ
                </td>
                <td className='border border-slate-700 p-2'>50-1000</td>
                <td className='border border-slate-700 p-2'>45-50</td>
                <td className='border border-slate-700 p-2'>
                  10 000-15 000
                </td>
              </tr>
              <tr>
                <td className='border border-slate-700 p-2'>
                  Металлогалогенные лампы типа ДРИ
                </td>
                <td className='border border-slate-700 p-2'>
                  125-3500
                </td>
                <td className='border border-slate-700 p-2'>60-80</td>
                <td className='border border-slate-700 p-2'>
                  300-10 000
                </td>
              </tr>
              <tr>
                <td className='border border-slate-700 p-2'>
                  Натриевые лампы типа Днат
                </td>
                <td className='border border-slate-700 p-2'>50-400</td>
                <td className='border border-slate-700 p-2'>
                  Более 100
                </td>
                <td className='border border-slate-700 p-2'>
                  6000-12 000
                </td>
              </tr>
              <tr>
                <td className='border border-slate-700 p-2'>
                  Ксеноновые лампы типа ДКст
                </td>
                <td className='border border-slate-700 p-2'>
                  10 000-55 000
                </td>
                <td className='border border-slate-700 p-2'>30-50</td>
                <td className='border border-slate-700 p-2'>300-800</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className='text-xl text-black mb-2'>
          <b>Основные световые величины.</b>
        </h2>
        <p className='text-lg text-black mb-2'>
          Основными световыми величинами являются:
        </p>
        <ul className='list-disc list-inside text-lg text-black  mb-2'>
          <li> световой поток;</li>
          <li> освещенность;</li>
          <li> сила света.</li>
        </ul>
        <p className='text-lg text-black mb-2'>
          Окружающие нас предметы излучают в пространство лучистую энергию,
          представляющую собой распространяющиеся в пространстве
          электромагнитные колебания.
        </p>

        <h2 className='text-xl text-black font-bold mb-2'>
          <b>Виды светильников: </b>
        </h2>
        <p className='text-lg text-black  mb-2'>
          Разнообразные источники света по способу преобразования электроэнергии
          в световое излучение разделяются на две основные группы
        </p>
        <ul className='list-disc list-inside text-lg text-black  mb-2'>
          <li> тепловые (лампы накаливания);</li>
          <li> газоразрядные (люминесцентные, ртутные).</li>
        </ul>
      </>
    ),
  },
  
};
