import { DotsThreeVertical } from "phosphor-react";
import AvatarWithoutStatus from "../../components/custom/AvatarWithoutStatus";

function MessageItem({ message }) {
  switch (message.type) {
    case "text":
      return <TextMessage message={message} />;
    default:
      return <></>;
  }
}

const TextMessage = ({ message }) => {
  return (
    <li
      className={`text-message flex gap-3 h-fit w-fit max-h-[900px] max-w-[95%] shrink-0  ${
        message.sender && "self-end"
      }`}
    >
      <div
        className={`sender-avatar shrink-0 h-5 w-5  ${
          message.sender && "order-2"
        }`}
      >
        <AvatarWithoutStatus />
      </div>
      <div className="flex flex-col  gap-1">
        <div className="flex items-start gap-1">
          <p
            className={`message  p-2 inline-block text-sm  w-fit lg:max-w-[700px] max-w-[400px]  rounded-[8px]   ${
              message.sender
                ? "bg-[#3582ff] text-white  order-2"
                : "bg-white text-black"
            }`}
          >
            {message.message}
          </p>
          <div className="lg:inline-block shrink-0 hidden cursor-pointer">
            <DotsThreeVertical size={20} />
          </div>
        </div>
        <span
          className={`time-stamp  text-[10px] leading-none  ${
            message.sender && "self-end"
          }`}
        >
          10:10 AM
        </span>
      </div>
    </li>
  );
};

export default MessageItem;
