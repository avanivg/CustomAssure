class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.")
      this.updateChatbotState(greetingMessage)
    }
    
    want(){
      const wantMessage = this.createChatBotMessage("I want to buy your new iPad.")
      this.updateChatbotState(wantMessage)
    }

    nameAndNum(){
      const nameMessage = this.createChatBotMessage("My name is Shagun Dalal, my phone number is 123-456-7890.")
      this.updateChatbotState(nameMessage)
    }

    email(){
      const emailMessage = this.createChatBotMessage("Okay, thank you for your help!! I just got the email.")
      this.updateChatbotState(emailMessage)
    }

    updateChatbotState(message) {
   
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider