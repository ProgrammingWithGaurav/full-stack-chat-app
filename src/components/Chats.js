import React, { useEffect, useState } from 'react';
import TextChat from './Chat/TextChat';
import { db } from '../firebase';
import { collection } from 'firebase/firestore';
import ImageChat from './Chat/ImageChat';
import AudioChat from './Chat/AudioChat';
import VideoChat from './Chat/VideoChat';

function Chats() {
    const [chats, setChats] = useState([
        {
            id: 1,
            type: 'text',
            username: 'John',
            message: 'Hello',
            senderMessage: true
        },
        {
            id: 2,
            type: 'text',
            username: 'John',
            message: 'Hello',
            senderMessage: false
        },
        {
            id: 3,
            type: 'image',
            username: 'Gaurav',
            senderMessage: true,
            imgUrl: 'https://images.unsplash.com/photo-1645974356103-8f8c44581d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 3,
            type: 'image',
            username: 'Gaurav',
            senderMessage: false,
            imgUrl: 'https://images.unsplash.com/photo-1645974356103-8f8c44581d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 4,
            type: 'audio',
            username: 'Gaurav',
            senderMessage: false,
            audioUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
        },
        {
            id: 5,
            type: 'audio',
            username: 'Gaurav',
            senderMessage: true,
            audioUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
        },
        {
            id: 5,
            type: 'video',
            username: 'Gaurav',
            senderMessage: true,
            videoUrl: 'https://firebasestorage.googleapis.com/v0/b/reactprojects-12bbe.appspot.com/o/all-type-chat-files%2Fbandicam%202022-02-08%2013-17-38-689.mp4?alt=media&token=fc04c565-285d-434e-9c76-ffacc5a95572'
        },
        {
            id: 5,
            type: 'video',
            username: 'Gaurav',
            senderMessage: false,
            videoUrl: 'https://firebasestorage.googleapis.com/v0/b/reactprojects-12bbe.appspot.com/o/all-type-chat-files%2Fbandicam%202022-02-08%2013-17-38-689.mp4?alt=media&token=fc04c565-285d-434e-9c76-ffacc5a95572'
        },


    ]);

    // useEffect(() => {
    //     collection(db, 'all-type-chats').onSnapshot(snapshot => {
    //         setChats(snapshot.docs.map(doc => doc.data()));
    //     });
    // }, [db]);
    return (
        <div className='flex flex-col px-3 py-12'>
            {
                chats.map(chat => {
                    if (chat.type === 'text') {
                        return <TextChat key={chat.id} {...chat} />
                    } if (chat.type === 'image') {
                        return <ImageChat key={chat.id} {...chat} />
                    } if (chat.type === 'audio') {
                        return <AudioChat key={chat.id} {...chat} />
                    }if (chat.type === 'video') {
                        return <VideoChat key={chat.id} {...chat} />
                    }
                })
            }
        </div>
    )
}

export default Chats