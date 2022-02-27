/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { PhotographIcon, VideoCameraIcon,VolumeUpIcon } from '@heroicons/react/solid';
import {PlusCircleIcon} from '@heroicons/react/outline';



export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className='mr-2'>
        <Menu.Button className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm p-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <PlusCircleIcon className='h-7 w-7 text-gray-400 focus:text-gray-600' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute left-0 -mt-28 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex">
            <Menu.Item>
                <PhotographIcon
                className="h-10 w-10 mx-2 p-1 cursor-pointer hover:text-gray-600 text-gray-400"
                  />
            </Menu.Item>
            <Menu.Item>
                <VideoCameraIcon
                className="h-10 w-10 mx-2 p-1 cursor-pointer hover:text-gray-600 text-gray-400"
                
                />
            </Menu.Item>
            <Menu.Item>
                <VolumeUpIcon
                className="h-10 w-10 mx-2 p-1 cursor-pointer hover:text-gray-600 text-gray-400"                
                />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
