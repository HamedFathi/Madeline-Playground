import { SourceFileExtractor } from 'madeline';

export class App {
  public message: string = 'Hello World!';

  public convert(text: string): string {
    let srcInfo = new SourceFileExtractor().extractFromText(text);
    let result = JSON.stringify(srcInfo);
    return result;
  }
}
