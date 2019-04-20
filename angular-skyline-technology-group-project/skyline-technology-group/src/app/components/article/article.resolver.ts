import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Post } from "../models/post";
import { Injectable } from "@angular/core";
import { ArticleService } from "./article.service";

@Injectable({
    providedIn: 'root'
})
export class SinglePostResolver implements Resolve<Post> {

    constructor(private articleService: ArticleService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];
        return this.articleService.getPost(id);
    }

}