/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Directive, ElementRef, Renderer, forwardRef} from '@angular/core';
import {NumberWrapper, isBlank} from '../facade/lang';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from './control_value_accessor';
import {StringWrapper, isBlank, isPresent, isPrimitive, isString, looseIdentical} from '../facade/lang';
import {Input} from "../../../../../tools/public_api_guard/core/index";



/**
 * The accessor for writing a text value and listening to changes that is used by the
 */
@Directive({
  selector:
      'input[type=text]'
})
export class TextValueInput  {


  @Input('value')
  set value(value: any) {
      this._value = value;
      if(value == undefined)
        this._setElementValue(_buildValueString(this.id, ''));
      else
        this._setElementValue(_buildValueString(this.id, value));
  }

  /** @internal */
  _setElementValue(value: string): void {
    this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
  }


  constructor(private _renderer: Renderer, private _elementRef: ElementRef) {}


}
