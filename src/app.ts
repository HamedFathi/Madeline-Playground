import { SourceFileExtractor } from 'madeline';

export class App {
  public message: string = 'Hello World!';

  private resultElem: HTMLTextAreaElement;

  private convert() {
    //@ts-ignore
    let text = document.getElementById('editor').value;
    this.resultElem.textContent = "";
    let srcInfo = new SourceFileExtractor().extractFromText(text);
    let result = JSON.stringify(srcInfo, null, 2);
    this.resultElem.textContent = result;
  }



}
