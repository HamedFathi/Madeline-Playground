import { SourceFileExtractor } from 'madeline';
import * as ace from 'ace-builds';
export class App {
  public message: string = 'Hello World!';

  private resultElem: HTMLTextAreaElement;
  /**
   *
   */
  constructor() {
    // ------------------------ RESULT
    var resultElement = document.getElementById('resultEditor');
    var resultAceEditor = ace.edit(resultElement);
    resultAceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      showPrintMargin: false,
      maxLines: Infinity,
      fontSize: "100%"
    });
    resultAceEditor.setReadOnly(true);
    resultAceEditor.setTheme("ace/theme/textmate");
    resultAceEditor.renderer.setOption("showLineNumbers", false);
    resultAceEditor.getSession().setMode("ace/mode/json");
    // ------------------------ HTML
    var htmlElement = document.getElementById('htmlEditor');
    var htmlAceEditor = ace.edit(htmlElement);
    htmlAceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      showPrintMargin: false,
      maxLines: Infinity,
      fontSize: "100%"
    });
    htmlAceEditor.setTheme("ace/theme/textmate");
    htmlAceEditor.renderer.setOption("showLineNumbers", false);
    htmlAceEditor.getSession().setMode("ace/mode/html");
    htmlAceEditor.setValue('<div>aaa</div>');
    htmlAceEditor.clearSelection();
    // ------------------------ JS/TS
    var jsTsElement = document.getElementById('jsTsEditor');
    var jsTsAceEditor = ace.edit(jsTsElement);
    jsTsAceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      showPrintMargin: false,
      maxLines: Infinity,
      fontSize: "100%"
    });
    jsTsAceEditor.setTheme("ace/theme/textmate");
    jsTsAceEditor.renderer.setOption("showLineNumbers", false);
    jsTsAceEditor.getSession().setMode("ace/mode/typescript");
    // ------------------------ AURELIA
    var aureliaEditor = document.getElementById('aureliaEditor');
    var auAceEditor = ace.edit(aureliaEditor);
    auAceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      showPrintMargin: false,
      maxLines: Infinity,
      fontSize: "100%"
    });
    auAceEditor.setTheme("ace/theme/textmate");
    auAceEditor.renderer.setOption("showLineNumbers", false);
    auAceEditor.getSession().setMode("ace/mode/typescript");
  }
  private convert() {
    //@ts-ignore
    let text = document.getElementById('editor').value;
    this.resultElem.textContent = "";
    let srcInfo = new SourceFileExtractor().extractFromText(text);
    let result = JSON.stringify(srcInfo, null, 2);
    this.resultElem.textContent = result;
  }



}
