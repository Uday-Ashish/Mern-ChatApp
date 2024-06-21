import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-950" : "";
	const name = fromMe ? authUser.fullName : selectedConversation.fullName ;


	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		

			<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
				<img alt="Tailwind CSS chat bubble component" src={profilePic} />
				</div>
			</div>
			<div className="chat-header">
	  			{name}
			</div>
			<div className={`chat-bubble ${bubbleBgColor} ${shakeClass} text-gray-300 `}>{message.message}</div>
			<div className="text-xs opacity-50">{formattedTime}</div>
			</div>


		
	);
};
export default Message;

