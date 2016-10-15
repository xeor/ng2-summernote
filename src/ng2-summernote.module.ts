import { NgModule, forwardRef } from '@angular/core';
import { Ng2Summernote } from './ng2-summernote.component.ts';

import {NG_VALUE_ACCESSOR} from '@angular/forms';


@NgModule({
    declarations: [Ng2Summernote],
    exports: [Ng2Summernote],
    providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Ng2Summernote), multi: true }
    ],
})
export class Ng2SummernoteModule { }
