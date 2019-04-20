import { Component, OnInit, OnChanges} from '@angular/core';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { AuthService } from '../../authentication/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post: Post;
  form: FormGroup
  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    public postService: ArticleService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.post = this.route.snapshot.data['post'];
    
    this.form = this.fb.group({
      comment: ['', [Validators.required]]
    })
  }



  get f() { return this.form.controls }

  get invalid() { return this.form.invalid }

}