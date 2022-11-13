import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "Baron Tran",
  initialMessages: [createChatBotMessage("I’m really unhappy with your app. It doesn’t let me make a purchase. This is so annoying!")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#004266",
    },
    chatButton: {
      backgroundColor: "#004266",
    },
  },
}

export default config