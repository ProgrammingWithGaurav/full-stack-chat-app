import React from 'react'

function VideoChat({ senderMessage, url, username }) {
  return (
    <>
      {
        !senderMessage ? (
          <div className='w-auto my-3 relative self-start bg-gray-100 rouned-lg rouned-br-none p-2' >
            <span className='font-bold text-sm l-0 text-black absolute top-4'>{username}</span>
            <video src={url} controls  className='w-80 h-60'/>
          </div>
        ) : (
          <div className='w-auto my-2 relative self-end bg-blue-50 p-2 rounded-lg rounded-bl-none' >
            <span className='font-bold text-sm l-0 text-black absolute top-4'>{username}</span>
            <video src={url} controls  className='w-80 h-60'/>
          </div>
        )
      }
    </>
  )
}

export default VideoChat