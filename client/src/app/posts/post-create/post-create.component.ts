import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/models/posts.model";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();
  constructor() {}

  ngOnInit() {}

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
    // this.newPost = "This is my first post";
  }
}
