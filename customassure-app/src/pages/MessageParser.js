class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      // if (lowerCaseMessage.includes("hello")) {
      //   this.actionProvider.greet()
      //   counter++;
      // }

   if (lowerCaseMessage.includes("sorry")) {

        this.actionProvider.want()
      }
      else if (lowerCaseMessage.includes("name")){

        this.actionProvider.nameAndNum();
        
      }
      else if (lowerCaseMessage.includes("email")){
        this.actionProvider.email();
        
      }
      else{}
    }
  }
  
  export default MessageParser;