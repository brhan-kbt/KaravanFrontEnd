import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export default class ValidateForm{
    static validateAllFormFields(formGroup: FormGroup){
        Object.keys(formGroup.controls).forEach(field=>{
          const control = formGroup.get(field);
    
          if(control instanceof FormControl){
             control.markAsDirty({ onlySelf:true});
          }
          else if(control instanceof FormGroup ){
              this.validateAllFormFields(control);
          }
        })
      }

      static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {  
        if((control.value as string).indexOf(' ') >= 0){  
            return {cannotContainSpace: true}  
        }  
    
        return null;  
    }

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } => {
        if (!control.value) {
          // if control is empty return no error
          return null as any;
        }
    
        // test the value of the control against the regexp supplied
        const valid = regex.test(control.value);
    
        // if true, return no error (no error), else return error passed in the second parameter
        return valid ? null as any : error;
      };
    }
    
    

}