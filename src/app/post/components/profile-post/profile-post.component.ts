import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DocumentReference } from '@firebase/firestore-types';
import { Comment } from 'src/app/shared/models/comment';
import { CreatePost, PostID } from 'src/app/shared/models/createPost';
import * as firebase from 'firebase/app';
import { CommentService } from '../../services/comment.service';
import { LikeService } from '../../services/like.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-profile-post',
  templateUrl: './profile-post.component.html',
  styleUrls: ['./profile-post.component.scss']
})
export class ProfilePostComponent implements OnInit {
  @Input() post: PostID;
  showTextStatus: boolean;
  showCommentStatus: boolean;
  comments$: Observable<Comment[]>;
  alreadyLiked$: Observable<boolean>;

  constructor(
    private commentService: CommentService,
    private likeService: LikeService
    ) { }

  ngOnInit(): void {
    this.showTextStatus = false;
    this.showCommentStatus = false;
    this.alreadyLiked$ = this.likeService.checkAlreadyLiked(this.post.id);
  }

  toggleText(): void {
    this.showTextStatus = !this.showTextStatus;
  }

  toggleComments(): void {
    if (!this.showCommentStatus) {
      // call databse
      this.readComments();
      this.showCommentStatus = true;
    } else {
      this.showCommentStatus = false;
    }
  }

  readComments(): void {
    this.comments$ = this.commentService.readComments(this.post.id);
  }

  createComment(comment: Comment): void {
    this.commentService.createComment(comment, this.post.id);
  }

  toggleLike(): void {
    this.likeService.checkAlreadyLiked(this.post.id).pipe(take(1)).subscribe(alreadyLiked => {
      if (alreadyLiked) {
        this.likeService.deleteLike(this.post.id);
      } else {
        this.likeService.createLike(this.post.id);
      }
    });
  }

}
