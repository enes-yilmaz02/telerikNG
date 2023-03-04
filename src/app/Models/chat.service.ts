import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

// Mock remote service

@Injectable()
export class ChatService {
  public readonly responses: Subject<string> = new Subject<string>();

  public submit(question: string): void {
    const length = question.length;
    const answer = `"${question}" tam olarak  ${length} sembol içerir`;

    setTimeout(() => this.responses.next(answer), 1000);
  }
}
