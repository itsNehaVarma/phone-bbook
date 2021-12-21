import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    setLocal(type: string, user: any) {
      return localStorage.setItem(type, JSON.stringify(user));

    }
    getLocal(type: string) {
      return localStorage.getItem(type)
    }

    remove(type: string) {
    return localStorage.removeItem(type);
    }
}