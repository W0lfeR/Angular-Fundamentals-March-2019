import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private postService: ArticleService, private router: Router ) { }

  ngOnInit() {
    this.form  = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      image:['', Validators.required],
      content:['', Validators.required],
    })
  }

  createPost(){
    this.postService.createPost(this.form.value).subscribe((data)=>{
      this.router.navigate(['/'])
    })
    
  }

  get f(){return this.form.controls}

  get invalid(){return this.form.invalid}

}