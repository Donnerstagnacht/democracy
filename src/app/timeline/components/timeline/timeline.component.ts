import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PostID } from 'src/app/shared/models/createPost';
import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  posts$: Observable<PostID[]>;

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {
    this.readPosts();
  }

  readPosts(): void {
    this.posts$ = this.timelineService.readPosts();
  }

}
