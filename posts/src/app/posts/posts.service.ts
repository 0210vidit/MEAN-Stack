import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpadated = new Subject<Post[]>();
  getPosts() {
    return [...this.posts];
  }

  getPostUpdatedListener() {
    return this.postsUpadated.asObservable();
  }
  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpadated.next([...this.posts]);
  }
}
