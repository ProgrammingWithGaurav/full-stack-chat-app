import React from 'react';
import PlusIcon from './PlusIcon';
import {PaperAirplaneIcon} from '@heroicons/react/solid';


function ChatInput() {
    return (
        <div className='absolute bottom-0 flex items-center justify-between w-full px-5 py-2'>
            {/* Plus Icon */}
            <PlusIcon />

            {/* Input */}
            <input className='bottom-0 flex-1 p-2 text-gray-700 border-2 border-gray-200 focus:border-gray-300 outline-none rounded-3xl aboslute' type='text' placeholder='Send a message....' />

            {/* Send Button */}
            <div className='ml-2 p-2 bg-gray-200 rounded-full'>
                <PaperAirplaneIcon className='h-7 w-7 cursor-pointer hover:text-gray-600 text-gray-400 transform rotate-90 ' />
            </div>
        </div >
    )
}

export default ChatInput