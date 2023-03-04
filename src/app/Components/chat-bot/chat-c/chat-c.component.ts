import { Component } from '@angular/core';
import {
  Message,
  User,
  SendMessageEvent,
} from "@progress/kendo-angular-conversational-ui";
import { from, merge, Observable, Subject } from 'rxjs';
import { map, scan } from "rxjs/operators";
import { ChatService } from 'src/app/Models/chat.service';

@Component({
  selector: 'app-chat-c',
  templateUrl: './chat-c.component.html',
  styleUrls: ['./chat-c.component.scss']
})
export class ChatCComponent {
  public feed: Observable<Message[]>;

  public readonly user: User = {
    id: 1,
  };

  public readonly bot: User = {
    id: 0,
  };

  private local: Subject<Message> = new Subject<Message>();

  constructor(private svc: ChatService) {
    const hello: Message = {
      author: this.bot,
      suggestedActions: [
        {
          type: "cevapla",
          value: "düzenli",
        },
        {
          type: "cevapla",
          value: "teşekürler, ama bu sıkıcı",
        },
      ],
      timestamp: new Date(),
      text: "merhaba, bu bir deneme buto. çok iyi değilim, ama mesajlardaki sembolleri sayabilirim!",
    };

    // Merge local and remote messages into a single stream
    this.feed = merge(
      from([hello]),
      this.local,
      this.svc.responses.pipe(
        map(
          (response): Message => ({
            author: this.bot,
            text: response,
          })
        )
      )
    ).pipe(
      // ... and emit an array of all messages
      scan((acc: Message[], x: Message) => [...acc, x], [])
    );
  }

  public sendMessage(e: SendMessageEvent): void {
    this.local.next(e.message);

    this.local.next({
      author: this.bot,
      typing: true,
    });

    this.svc.submit(e.message.text);
  }
}
