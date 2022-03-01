import React, { useEffect, useState } from 'react';
import TextChat from './Chat/TextChat';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import ImageChat from './Chat/ImageChat';
import AudioChat from './Chat/AudioChat';
import VideoChat from './Chat/VideoChat';

function Chats({ user }) {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        onSnapshot(
            query(
                collection(db, "all-type-chats"),
                orderBy("timestamp", "asc")
            ),
            (snapshot) => {
                setChats(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })));
            }
        )
    }
    // eslint-disable-next-line 
        , [db])

    return (
        <div className='flex flex-col px-3 py-12'>
            {// eslint-disable-next-line 
                chats.map(chat => {
                    if (chat.type === 'text') {
                        return <TextChat key={chat.id} senderMessage={chat.uid === user.uid} {...chat} />
                    } if (chat.type === 'image') {
                        return <ImageChat key={chat.id} senderMessage={chat.uid === user.uid} {...chat} />
                    } if (chat.type === 'audio') {
                        return <AudioChat key={chat.id} senderMessage={chat.uid === user.uid} {...chat} />
                    } if (chat.type === 'video') {
                        return <VideoChat key={chat.id} senderMessage={chat.uid === user.uid} {...chat} />
                    }
                })
            }
        </div>
    )
}

export default Chats