import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StoreImagesService {

  constructor(private storage: AngularFireStorage) { }
}
