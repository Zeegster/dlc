import imageUrl from '../../assets/img/step11-2.jpg';
import { im2, im3, im4, im5, im6, im7, im8 } from '../../assets/base64/stepper';

import { i1 } from '../../assets/base64/infogragic';
import { questions } from '../StoreStepper';
import {
  SelectInput,
  TextInput,
  QCheckBox,
  MyDragList,
} from '../../components/Inputs';

export const SimulatorPageContent = {
  items: [
    {
      id: 1,
      title: '1. Физические явления света',
      content: (

        <>

<QCheckBox index={0} />

          <p className='mb-2'>
            {' '}
            Поведение света в виде электромагнитной волны наблюдается в таких
            физических явлениях:{' '}
          </p>{' '}
          {/* <MyDragList QuestionStore={9} />{' '}
<SelectInput QuestionStore={0} QuestionIndex={0} /> */}
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
          <div className='flex mt-10  whitespace-wrap'>
            <div className='w-1/2'>
              <figure className='relative'>
                <img
                  width={600}
                  src={i1}
                />
                <span
                  className='p-1 rounded-[100%] w-10 h-10 text-center border bg-white absolute top-[45%] left-[24%]'
                  name='one'
                  id='one'
                >
                  1
                </span>
                <span
                  className='p-1 rounded-[100%] w-10 h-10 text-center border bg-white absolute top-[20%] left-[40%]'
                  name='two'
                  id='2'
                >
                  2
                </span>
                <span
                  className='p-1 rounded-[100%] w-10 h-10 text-center border bg-white absolute top-[60%] left-[65%]'
                  name='three'
                  id='3'
                >
                  3
                </span>
              </figure>
            </div>
            <ul className='list-inside list-decimal'>
              <p className='font-bold'>Определите явления</p>
              {/* <SelectInput QuestionStore={0} /> */}
            </ul>
          </div>
        </>
      ),
    },
    {
      id: 1,
      title: '2. Энергетические характеристики света',
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
                  <TextInput
                    QuestionStore={1}
                    index={0}
                  />
                </td>
              </tr>
              <tr>
                <td className=' border-2 border-black p-2'>
                  <TextInput
                    QuestionStore={1}
                    index={1}
                  />
                </td>
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
                  <TextInput
                    QuestionStore={1}
                    index={2}
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
      title: '3. Приборы измерений параметров света',
      content: (
        <>
          <div className='flex w-full justify-center'>
            <div className='p-4 flex flex-col gap-4 justify-center'>
              <h2 className='font-bold mb-2'>
                Какой прибор изображен на рисунке ?
              </h2>
              <TextInput
                QuestionStore={2}
                index={0}
              />
            </div>
            <img
              width={390}
              src={im2}
            />
          </div>
        </>
      ),
    },
    {
      id: 3,
      title: '4. Нормы освещенности',
      content: (
        <>
          <p className='mb-2'>
            {' '}
            В офисах общего назначения с использованием компьютеров освещённость
            должна быть от{' '}
            <TextInput
              QuestionStore={3}
              index={0}
            />
            до 500 лк,{' '}
          </p>{' '}
          <p className='mb-2'>
            {' '}
            В коридорах и холлах – от{' '}
            <TextInput
              QuestionStore={3}
              index={1}
            />
            до 100 лк.{' '}
          </p>{' '}
          <p className='mb-2'> Для чтения необходима освещённость 30–50 лк. </p>{' '}
          <p className='mb-2'>
            {' '}
            <TextInput
              QuestionStore={3}
              index={2}
            />
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
      id: 4,
      title: '5. Устройство источников света',
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
            <TextInput
              QuestionStore={4}
              index={0}
            />
          </p>{' '}
          <p>
            {' '}
            Поэтому такая лампа называется <b>галогенной</b>{' '}
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: '6. Газорязрядные лампы',
      content: (
        <>
          <p className='mb-2 flex'>
 {' '}
 Принцип действия газоразрядных ламп основан на свечении газов и
 паров <><SelectInput QuestionStore={5} QuestionIndex={0} /></> при электрическом разряде.{' '}
</p>{' '}

<p>
 {' '}
 В этих источниках света летучий металл (Hg) ртуть или <><SelectInput QuestionStore={5} QuestionIndex={1} /></> возбуждается
 электронами, которые ускоряются в пространстве между двумя
 <><SelectInput QuestionStore={5} QuestionIndex={2} /></> под действием приложенного к ним напряжения{' '}
</p>

        </>
      ),
    },
    {
      id: 6,
      title: '7. Виды люминесцентных ламп',
      content: (
        <>
          <img
            className='m-auto'
            width={600}
            src={im4}
          />
          <ul className='list-decimal list-outside'>
            <QCheckBox index={6} />
          </ul>
        </>
      ),
    },
    {
      id: 7,
      title: '8. Светодиодные лампы',
      content: (
        <>
          <p className='mb-2'>
            Светодиод является полупроводниковым источникам света, в котором
            излучение возникает на полупроводниковом переходе в результате
            рекомбинации электронов и дырок
          </p>
          <div className='flex w-1/2 justify-center items-center'>
            <img
              className=''
              width={400}
              src={im5}
            />
            <ol className='list-outside list-decimal'>
              <MyDragList QuestionStore={7} />
            </ol>
          </div>
        </>
      ),
    },
    {
      id: 8,
      title: '9. Типы современных ламп',
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
      id: 9,
      title: '10. Осветительная арматура',
      content: (
        <>
          <h2 className='text-xl font-bold mb-2'>
            Основные типы светильников:
          </h2>
          <div className='flex justify-between mb-10'>
            <div>
              <b>Рисунок 1</b>
              
                <MyDragList QuestionStore={8} />
              
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
              
                <MyDragList QuestionStore={9} />{' '}
             
            </div>
            <figure className=''>
              <figcaption>
                <b>Рисунок 2</b>
              </figcaption>
              <img
                width={500}
                src={im7}
              />
            </figure>
          </div>
        </>
      ),
    },
  ],
};
