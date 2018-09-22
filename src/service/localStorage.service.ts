import {Injectable} from '@angular/core';

@Injectable()

export class localStorageService {

setLocalData(key:string, data:any) {
    return localStorage.setItem(key,JSON.stringify(data));
   
}

getLocalData(data:any) {
    return JSON.parse(localStorage.getItem(data));
}
removeLocalData(key:string) {
    return localStorage.removeItem(key)
}

}