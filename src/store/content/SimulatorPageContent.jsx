import imageUrl from '../../assets/img/step11-2.jpg';
import {
  im2,
  im3,
  im4,
  im5,
  im6,
  im7,
  im8,
} from '../../assets/base64/stepper';

import { i1 } from '../../assets/base64/infogragic';
import { questions } from '../StoreStepper';

export const SimulatorPageContent = {
  items: [
    {
      questions: [
        {
          id: 1,
          text: <>явление дисперсии</>,
        },
        {
          id: 2,
          text: <>явление дифракции</>,
        },
        {
          id: 3,
          text: <>интерференцию</>,
        },
      ],
      answers: [
        {
          id: 1,
          text: 'явление дисперсии',
        },
        {
          id: 3,
          text: 'явление дифракции',
        },
        {
          id: 2,
          text: 'интерференцию',
        },
      ],

      id: 0,
      title: '1. Физические явления света',
      content: (
        <>
          <p className='mb-2'>
            {' '}
            Поведение света в виде электромагнитной волны наблюдается в таких
            физических явлениях:{' '}
          </p>{' '}
          <ul className='list-disc ml-8 mb-2'>
            {' '}
            <li>- Дисперсия</li> <li>- Дифракция</li>{' '}
            <li>- Интерференция света</li>{' '}
          </ul>{' '}
          <p className='mb-2'> Скорость света С= 300 000км/с </p>{' '}
          <p className='mb-2 font-bold'>
            {' '}
            <u>Диспе́рсия све́та</u> - это совокупность явлений обусловленных
            зависимостью абсолютного показателя вещества от частоты (или длины
            волны) света.{' '}
          </p>{' '}
          <p className='mb-2 font-bold'>
            {' '}
            <u>Дифракцией света</u> называется явление отклонения света от
            прямолинейного направления распространения при прохождении вблизи
            препятствия.{' '}
          </p>{' '}
          <p className='font-bold'>
            {' '}
            <u>Интерфере́нция све́та</u> - это перераспределение интенсивности
            света в результате наложения (суперпозиции) нескольких световых
            волн.{' '}
          </p>
          <div className='flex mt-10'>
          <figure className='relative'>
            <img
              width={600}
              src={i1}
            />
            <select
              className='p-1 border-2 absolute top-36 left-36'
              name='one'
              id='one'
            >
              <option></option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <select
              className='p-1 border-2 absolute top-40 left-60'
              name='two'
              id='two'
            >
              <option></option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <select
              className='p-1 border-2 absolute top-24 left-96'
              name='three'
              id='three'
            >
              <option></option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </figure>
          <div>
            <p className='font-bold'>Распределите явления на схеме:</p>
            <ul>
              {questions.list.map((q) => {
                return (
                  <li key={q.id}>
                    <b>{q.id}</b> {q.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        </>
      ),
    },
    {
      id: 1,
      title: '2. Энергетические характеристики света',
      content: (
        <>
          <table className='table table-fixed border-collapse border-2 border-black text-center'>
            <thead>
              <tr>
                <th
                  className='border-2 border-black p-2'
                  rowSpan='2'
                >
                  Величина
                </th>
                <th
                  className='border-2 border-black p-2'
                  rowSpan='2'
                >
                  Обозначение
                </th>
                <th
                  colSpan='2'
                  className='border-2 border-black p-2'
                >
                  Формула
                </th>

                <th
                  className='border-2 border-black p-2'
                  rowSpan='2'
                >
                  Единицы измерения
                </th>
              </tr>
              <tr>
                <th className='border-2 border-black p-2'>Упрощенная</th>
                <th className='border-2 border-black p-2'>Точная</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-2 border-black p-2'>Поток излучения</td>
                <td className='border-2 border-black p-2 text-center'>
                  Φ<sub>e</sub>
                </td>
                <td className='border-2 border-black p-2'>
                  Φ<sub>e</sub> = <i>W</i>
                  <sub>e</sub> / t
                </td>
                <td className='border-2 border-black p-2'>
                  Φ<sub>e</sub> = d<i>W</i>
                  <sub>e</sub> / dt
                </td>
                <td className='border-2 border-black p-2'>
                  <input
                    type='text'
                    name='forVt'
                    id='Vt'
                    placeholder='Заполните пропуск'
                  />
                </td>
              </tr>
              <tr>
                <td className=' border-2 border-black p-2'>Сила излучения</td>
                <td className='border-2 border-black p-2'>
                  <i>
                    I<sub>e</sub>
                  </i>
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    I<sub>e</sub>
                  </i>{' '}
                  = Φ<sub>e</sub> / Ω
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    I<sub>e</sub>
                  </i>{' '}
                  = dΦ<sub>e</sub> / dΩ
                </td>
                <td className='border-2 border-black p-2'>Вт / ср</td>
              </tr>
              <tr>
                <td className='border-2 border-black p-2'>
                  Энергетическая светимость
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    M<sub>e</sub>
                  </i>
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    M<sub>e</sub>
                  </i>{' '}
                  = Φ<sub>e</sub> /{' '}
                  <i>
                    A<sub>1</sub>
                  </i>
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    M<sub>e</sub>
                  </i>{' '}
                  = dΦ<sub>e</sub> / d<i>A</i>
                </td>
                <td className='border-2 border-black p-2'>
                  Вт / м<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className='border-2 border-black p-2'>
                  Энергетическая яркость
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    L<sub>e</sub>
                  </i>
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    L<sub>e</sub>
                  </i>{' '}
                  = Φ<sub>e</sub> / Ω •{' '}
                  <i>
                    A<sub>1</sub>
                  </i>{' '}
                  cos α
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    L<sub>e</sub>
                  </i>{' '}
                  = d<sup>2</sup>Φ<sub>e</sub> / dΩ • d<i>A</i>cos α
                </td>
                <td className='border-2 border-black p-2'>
                  Вт / ср•м<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className='border-2 border-black p-2'>Облученность</td>
                <td className='border-2 border-black p-2'>
                  <i>
                    E<sub>e</sub>
                  </i>
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    E<sub>e</sub>
                  </i>{' '}
                  = Φ<sub>e</sub> /{' '}
                  <i>
                    A<sub>2</sub>
                  </i>
                </td>
                <td className='border-2 border-black p-2'>
                  <i>
                    E<sub>e</sub>
                  </i>{' '}
                  = dΦ<sub>e</sub> / d<i>A</i>
                </td>
                <td className='border-2 border-black p-2'>
                  <input
                    type='text'
                    name='forVt/m2'
                    id='Vt/m2'
                    placeholder='Заполните пропуск'
                  />
                </td>
              </tr>
              <tr>
                <td className='border-2 border-black p-2'>
                  Спектральная плотность потока излучения
                </td>
                <td className='border-2 border-black p-2'>
                  Φ<sub>eλ</sub>
                </td>
                <td className='border-2 border-black p-2'>
                  Φ<sub>eλ</sub> = ∆Φ<sub>e</sub> / ∆λ
                </td>
                <td className='border-2 border-black p-2'>
                  Φ<sub>eλ</sub> = dΦ<sub>e</sub> / dλ
                </td>
                <td className='border-2 border-black p-2'>Вт / нм</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 2,
      title: '3. Единицы измерения',
      content: (
        <>
          <ol className='list-decimal list-inside mb-2'>
            {' '}
            <li>
              {' '}
              <b>Люмен (лм)</b> – единица измерения светового потока (лат. lumen
              – «свет»),{' '}
            </li>{' '}
            <li>
              {' '}
              <b>Cила света Iv</b>, - равна световому потоку Fv,
              распространяющемся в единичном телесном угле Iv = Fv /Ω.{' '}
            </li>{' '}
          </ol>{' '}
          <p className='mb-2'>
            {' '}
            Для измерения силы света введена особая единица –{' '}
            <b>кандела (кд)</b> (лат. candela — свеча).{' '}
          </p>{' '}
          <p className='mb-2'>
            {' '}
            Одна кандела определена как «сила света в заданном направлении
            источника, испускающего монохроматическое излучение частотой 540·10
            <sup>12</sup> Гц{' '}
          </p>{' '}
          <p className='mb-2'>
            {' '}
            <b>Светимость Mv</b> – это физическая величина, определяемая
            отношением светового потока, исходящего из малого участка
            поверхности, содержащего рассматриваемую точку, к площади этого
            участка,{' '}
          </p>{' '}
          <p className='mb-2'>
            {' '}
            <b>Яркость Lv</b> имеет физический смысл светового потока,
            распространяющегося в единичном телесном угле с площадки единичной
            площади, нормально расположенной к направлению распространения
            света.{' '}
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: '4. Приборы измерений параметров света',
      content: (
        <>
          <div className='flex m-auto items-center justify-center'>
            <div className='p-4 flex flex-col gap-4 justify-center'>
              <h2 className='font-bold mb-2'>
                Какой прибор изображен на рисунке ?
              </h2>
              <input
                className='border-2 p-1'
                type='text'
                name='forLuks'
                id='Luks'
                placeholder='Впишите правильный ответ'
              />
            </div>
            <img
              className='m-auto'
              width={390}
              src={im2}
            />
          </div>
        </>
      ),
    },
    {
      id: 4,
      title: '5. Нормы освещенности',
      content: (
        <>
          <p className='mb-2'>
            {' '}
            В офисах общего назначения с использованием компьютеров освещённость
            должна быть от{' '}
            <input
              className='border-b-2 w-10'
              type='text'
              name='for200'
              id='200'
            />{' '}
            до 500 лк,{' '}
          </p>{' '}
          <p className='mb-2'>
            {' '}
            В коридорах и холлах – от{' '}
            <input
              className='border-b-2 w-10'
              type='text'
              name='for50'
              id='50'
            />{' '}
            до 100 лк.{' '}
          </p>{' '}
          <p className='mb-2'> Для чтения необходима освещённость 30–50 лк. </p>{' '}
          <p className='mb-2'>
            {' '}
            <input
              className='border-b-2 w-64'
              type='text'
              name='forSun'
              id='sun'
              placeholder='Прямые солнечные лучи'
            />{' '}
            дают освещённость 100 тыс. лк, а в пасмурный день – 1000 лк.{' '}
          </p>{' '}
          <p>
            {' '}
            Измерить освещённость можно с помощью специального прибора –{' '}
            <b>люксметра</b>{' '}
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: '6. Устройство источников света',
      content: (
        <>
          <h2 className='font-bold mb-2'>Лампы галогенные</h2>{' '}
          <img
            width={300}
            src={im3}
          />
          <p className='mb-2'>
            {' '}
            В некоторых типах ламп накаливания применяют галогеновый
            наполнитель, как правило,{' '}
            <input
              className='border-b-2 w-10'
              type='text'
              name='forYod'
              id='yod'
              placeholder='Йод'
            />{' '}
          </p>{' '}
          <p>
            {' '}
            Поэтому такая лампа называется <b>галогенной</b>{' '}
          </p>
        </>
      ),
    },
    {
      id: 6,
      title: '7. Газорязрядные лампы',
      content: (
        <>
          <p className='mb-2'>
            {' '}
            Принцип действия газоразрядных ламп основан на свечении газов и
            паров металла при электрическом разряде.{' '}
          </p>{' '}
          <p>
            {' '}
            В этих источниках света летучий металл ртуть или натрий возбуждается
            электронами, которые ускоряются в пространстве между двумя
            электродами под действием приложенного к ним напряжения{' '}
          </p>
        </>
      ),
    },
    {
      id: 7,
      title: '8. Виды люминесцентных ламп',
      content: (
        <>
          <img
            className='m-auto'
            width={600}
            src={im4}
          />
        </>
      ),
    },
    {
      id: 8,
      title: '9. Светодиодные лампы',
      content: (
        <>
          <p className='mb-2'>
            Светодиод является полупроводниковым источникам света, в котором
            излучение возникает на полупроводниковом переходе в результате
            рекомбинации электронов и дырок
          </p>
          <img
            className='m-auto'
            width={400}
            src={im5}
          />
        </>
      ),
    },
    {
      id: 9,
      title: '10. Типы современных ламп',
      content: (
        <>
          <img
            className='m-auto'
            width={450}
            src={im6}
          />
        </>
      ),
    },
    {
      id: 10,
      title: '11. Осветительная арматура',
      content: (
        <>
          <h2 className='text-xl font-bold mb-2'>
            Основные типы светильников:
          </h2>
          <div className='flex mb-10'>
            <div>
              <b>Рисунок 1</b>
              <ol
                id='list1'
                className='mb-2 list-decimal list-inside'
              >
                {questions.list1.map((listItem) => (
                  <li key={listItem.id}>{listItem.text}</li>
                ))}
              </ol>
            </div>
            <figure className='ml-10'>
              <figcaption>
                <b>Рисунок 1</b>
              </figcaption>
              <img
                width={500}
                src={im8}
              />
            </figure>
          </div>
          <div className='flex'>
            <div>
              <b>Рисунок 2</b>
              <ol className='mb-2 list-decimal list-inside'>
                {' '}
                <li>Корпус светильника</li>
                <li>Отражатель</li>
                <li>Лампа</li>
                <li>Рассеивающее или защитное стекло</li>
                <li>Экранирующая решетка</li>
                <li>Уплотнение по горлу колбы лампы</li>
                <li>Неуплотненное соединение корпуса светильника со стеклом</li>
                <li>Уплотненное соединение корпуса светильника со стеклом</li>
                <li>Уплотнение колбы люминесцентной лампы в патроне</li>
              </ol>{' '}
            </div>
            <figure className=''>
              <figcaption>
                <b>Рисунок 2</b>
              </figcaption>
              <img
                width={400}
                src={imageUrl}
              />
            </figure>
          </div>
        </>
      ),
    },
  ],
};
