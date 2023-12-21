import { useState } from 'react';

import MenuItem from './MenuItem';
import MyModal from '../MyModal';

import { Dialog } from '@headlessui/react';

import { InfographicPageContent } from '../../store/content/InfographicPageContent';

const MenuList = () => {
  const [modal, setModal] = useState(new Map());

  return (
    <>
      <div className='w-full text-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex m-auto justify-center flex-wrap gap-4'>
            {InfographicPageContent.items.map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  setModal={setModal}
                  title={item.title}
                  index={item.id}
                  image={item.titleImage}
                />
              );
            })}
          </div>
        </div>
      </div>

      {InfographicPageContent.items.map((item) => {
        return (
          <MyModal
            key={item.id}
            index={item.id}
            visible={modal.has(item.id)}
            setModal={setModal}
          >
            <Dialog.Panel className='relative transform w-full h-3/4 overflow-auto rounded-lg bg-white text-left shadow-xl transition-all'>
              <div className='bg-white h-full'>
                <div className='h-full flex'>
                  <div className='w-11/12 text-left space-y-6 h-full'>
                    <div className='container '>
                      <div
                        className='p-8 w-full'
                        style={{
                          fontSize: '18px',
                          lineHeight: '1.5',
                        }}
                      >
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </MyModal>
        );
      })}
    </>
  );
};

export default MenuList;
