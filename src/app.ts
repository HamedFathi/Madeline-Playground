import { SourceFileExtractor } from 'madeline';

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

  private convertedResult = '';

  public convert() {
    let srcInfo = new SourceFileExtractor().extractFromText(this.myTsJsSource);
    let result = JSON.stringify(srcInfo, null, 2);
    this.convertedResult = result;
  }

  attached() {
    this.convert();
  }
}
