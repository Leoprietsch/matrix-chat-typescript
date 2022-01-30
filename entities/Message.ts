interface Message {
  id?: number,
  from: string,
  text: string,
  isSticker?: boolean,
  date?: Date,
}

export default Message;
