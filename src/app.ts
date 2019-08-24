import { SourceFileExtractor } from 'madeline';
import { inject, TaskQueue } from 'aurelia-framework';

@inject(TaskQueue)
export class App {

  private myTsJsSource: string = `export class WhoIsABetterDeveloper {
    /**
    * @type {string} - This is to joke with Hamed :smirk: :smile:
    */
    name: string = 'Shahab';

    /**
    * @type {boolean} - But, it's true :wink:.
    */
    fact: boolean = true;
}`
    ;

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
