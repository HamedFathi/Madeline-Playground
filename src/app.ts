import { SourceFileExtractor } from 'madeline';
import { inject, TaskQueue } from 'aurelia-framework';

@inject(TaskQueue)
export class App {

  private myTsJsSource: string = `/**
* This is a class.
* Just for test!
*
* @class Greeter - A class with ctor and a method.
*/
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  // Just says hello :)
  greet() {
    return "Hello, " + this.greeting;
  }
}`;

  constructor(private taskQueue: TaskQueue) { }

  private convertedResult = '';

  public convert() {
    let srcInfo = new SourceFileExtractor().extractFromText(this.myTsJsSource);
    let result = JSON.stringify(srcInfo, null, 2);
    this.convertedResult = result;
  }

  attached() {
    this.taskQueue.queueTask(() => this.afterAttached());
  }
  afterAttached() {
    this.convert();
  }
}
