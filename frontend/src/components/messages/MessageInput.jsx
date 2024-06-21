import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return ( 
        <form className='px-2 my-3'  onSubmit={handleSubmit}>
            <div className='w-full flex '>
           <div className='w-full  flex px-2'> <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs " value={message} onChange={(e) => setMessage(e.target.value)}/> </div>
            <button className='btn'>
               {loading ? <div className='loading loading-spinner'></div> : <> Send <BsSend />  </> } 
            </button>
            </div>
        </form>
     );
};
export default MessageInput;
