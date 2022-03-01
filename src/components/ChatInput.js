import React, {useState, useRef} from "react";
import PlusIcon from "./PlusIcon";
import { PaperAirplaneIcon } from "@heroicons/react/solid";
import { addDoc, serverTimestamp, collection,updateDoc, doc } from '@firebase/firestore';
import {getDownloadURL, uploadString, ref} from '@firebase/storage';
import { db, storage } from '../firebase';

function ChatInput({ user, input, setInput }) {
    const filePickerRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const sendChat = async (e) => {
        e.preventDefault();
        if (input !== '') {
            const copyInput = input;
            setInput('');
            await addDoc(collection(db, 'all-type-chats'), {
                type: 'text',
                username: user.displayName,
                message: input,
                timestamp: serverTimestamp(),
                uid: user.uid
            });
        }
    }

    const sendFile = async () => {
        const docRef = await addDoc(collection(db, 'all-type-chats'), {
            type: 'text',
            username: user.displayName,
            
            timestamp: serverTimestamp()
        });

        const imageRef = ref(storage, `all_type_chats/${docRef.id}/image`);
        await uploadString(imageRef, selectedFile, 'data_url').then(async snapshot => {
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, 'all_type_chats', docRef.id), {
                image: downloadURL
            })
        })
        setSelectedFile(null);
    }

    
    const addFileToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };
    return (
        <div className="fixed bottom-0 flex items-center justify-between w-full px-5 py-2">
            {/* Plus Icon */}
            <PlusIcon filePickerRef={filePickerRef}/>

            {/* Input */}
            <form className='flex-1' onSubmit={sendChat}>
                <input type='file' hidden ref={filePickerRef} onChange={addFileToPost} />
                <input
                    value={input}
                    onChange={(text) => setInput(text.target.value)}
                    className="bottom-0 w-full p-2 text-gray-700 border-2 border-gray-200 focus:border-gray-300 outline-none rounded-3xl aboslute"
                    type="text"
                    placeholder="Send a message...."
                />
                <button type='submit' hidden>
                    submit
                </button>
            </form>
            {/* Send Button */}
            <div onClick={sendChat} className="ml-2 p-2 bg-gray-200 rounded-full">
                <PaperAirplaneIcon className="h-7 w-7 cursor-pointer hover:text-gray-600 text-gray-400 transform rotate-90 " />
            </div>
        </div>
    );
}

export default ChatInput;
