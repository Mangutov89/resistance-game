import {ChatMessage} from "./chat-message.model"

export class Room {
  constructor(
    public messages: ChatMessage[] = [];
  ){}
}
