import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appComparePassword]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: ComparePasswordDirective,
    multi: true
  }]
})
export class ComparePasswordDirective implements Validator {
  @Input() appComparePassword: string;
  validate(control: AbstractControl): {[key:string]: any} | null{
    const compare = control.parent.get(this.appComparePassword);
    if(compare && compare.value !== control.value){
      return {'notEqual': true } ;
    }
    return null;
  }

}
