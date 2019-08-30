import { bindable, inject, TaskQueue, bindingMode } from "aurelia-framework";

@inject(Element, TaskQueue)
export class AceEditorCustomElement {

  @bindable({ defaultBindingMode: bindingMode.twoWay }) source: string = '';
  @bindable type: string = 'ts';

  private editorElement: HTMLDivElement;
  private editor: any;

  private manualUpdate: boolean = false;

  constructor(private element: Element, private taskQueue: TaskQueue) { }

  attached() {
    this.taskQueue.queueTask(() => this.editorJsTs());
  }

  sourceChanged(newValue: string) {
    if (newValue && this.editor && !this.manualUpdate) {
      this.editor.setValue(newValue);
      this.editor.clearSelection();
    }
    this.manualUpdate = false;
  }

  private editorJsTs() {
    this.initEditor();

    this.setEditorType();

    if (this.source) {
      this.editor.setValue(this.source);
      this.editor.clearSelection();
    }
  }

  private initEditor() {
    // @ts-ignore
    this.editor = window.ace.edit(this.editorElement);

    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      showPrintMargin: false,
      maxLines: 20,
      fontSize: "100%"
    });
    this.editor.setTheme("ace/theme/textmate");
    this.editor.renderer.setOption("showLineNumbers", false);

    this.editor.getSession().on('change', () => {
      this.source = this.editor.getValue();
      this.manualUpdate = true;
    });
  }

  private setEditorType() {
    if (this.type === 'ts') {
      this.editor.getSession().setMode("ace/mode/typescript");
    }
    if (this.type === 'json') {
      this.editor.setReadOnly(true);
      this.editor.getSession().setMode("ace/mode/json");
    }
    if (this.type === 'html') {
      this.editor.getSession().setMode("ace/mode/html");
    }
  }

}
