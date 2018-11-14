import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class ToastService {
 
  sendMessage(content, style) {
    //const message = new Message(content, style)
  }
  dismissMessage(messageKey) {

  }
}

// export class Message {
//   content: string;
//   style: string;
//   dismissed: boolean = false;
//     constructor(content, style) { 
//       this.content = content;
//       this.style = style || 'info';
//     }

//   }