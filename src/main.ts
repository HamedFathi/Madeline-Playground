import { Aurelia } from 'aurelia-framework'
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import * as madeline from 'madeline';
import * as $ from 'jquery';
import * as bs from 'bootstrap';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/snippets/json';
import 'ace-builds/src-noconflict/snippets/typescript';
import 'ace-builds/src-noconflict/snippets/html';

import 'bootstrap/dist/css/bootstrap.css'


export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
