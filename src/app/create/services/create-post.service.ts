import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CreatePost } from 'src/app/shared/models/createPost';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(
    private firestore: AngularFirestore,
    private router: Router
    ) { }

  createPost(postData: CreatePost ) {
    const postCollectionRef: AngularFirestoreCollection<CreatePost> = this.firestore.collection('posts');
    postCollectionRef.add(postData).then(() => {
      this.router.navigate(['profile']);
    });
  }
}
