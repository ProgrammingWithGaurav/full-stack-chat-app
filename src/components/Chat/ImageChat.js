import React from 'react';

function ImageChat({ senderMessage, url, username }) {
    return (
        <>
            {
                !senderMessage ? (
                    <div className='w-auto my-3 relative self-start' >
                        <span className='font-bold text-sm l-0 text-black absolute top-4'>{username}</span>
                        <br />
                        <br />
                        <img src={url} className='w-80 h-80 border-2 rounded-2xl object-cover rounded-br-none bg-gray-100 p-2'/>
                    </div>
                ) : (
                    <div className='w-auto my-2 relative self-end' >
                        <span className='font-bold text-sm l-0 text-black absolute top-4'>{username}</span>
                        <br />
                        <br />
                        <img src={url} className='w-80 h-80 border-2  p-2 rounded-2xl object-cover rounded-bl-none bg-blue-50'/>
                    </div>
                )
            }
        </>
    )
}

export default ImageChat