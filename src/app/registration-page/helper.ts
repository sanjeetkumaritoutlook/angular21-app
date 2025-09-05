/**
 * @example
 * passwordEqual(path.confirmPassword,path.password)
 */

import { customError, FieldPath, validate } from "@angular/forms/signals";

export function passwordEqual(passwordPath:FieldPath<string>,otherPasswordPath:FieldPath<string>) {
    validate(passwordPath,(ctx)=>{
        const confirmPassword = ctx.value();
        const password = ctx.valueOf(otherPasswordPath);

        if(password === confirmPassword){
            return undefined;
        }
        return customError({
            kind:'password-mismatch',
            message:'Password and Confirm Password must match'
        })
    })
}