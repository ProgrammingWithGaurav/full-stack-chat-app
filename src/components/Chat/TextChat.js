import React from 'react'

function TextChat({ senderMessage, message, username }) {
  return (
    <>
      {
        !senderMessage ? (
          <p className='w-auto my-3 relative self-start ml-2'>
            <span className='font-bold text-sm w-40 text-black absolute top-4'>{username.slice(0, 7)}...</span>
            <br />
            <br />
            <p className='text-gray-600 rounded-br-none bg-gray-100 rounded-lg inline p-2 py-3 '>{message}</p>
          </p>
        ) : (
          <p className='w-auto my-2 relative self-end mr-3'>
            <span className='font-bold text-sm w-40 text-black absolute top-4'>{username.slice(0, 7)}...</span>
            <br />
            <br />
            <p className='text-gray-50 rounded-bl-none bg-blue-300 rounded-lg inline p-2 py-3 '>{message}</p>
          </p>
        )
      }
    </>
  )
}

export default TextChat