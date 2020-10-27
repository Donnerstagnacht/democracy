import { Like } from './like';

export interface CreatePost {
  title: string;
  text: string;
  postImageUrl: string;
  author: string;
  likesTotal: number;
  commentsTotal: number;
}

export interface PostID extends CreatePost {
  id: string;
  comments?: Comment[];
  likes?: Like[];
}
