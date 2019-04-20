import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  posts$: Observable<Array<Post>>;
  constructor(private postService: ArticleService) { }

  ngOnInit() {
    this.posts$ = this.postService.getAllPost()
  }

}
