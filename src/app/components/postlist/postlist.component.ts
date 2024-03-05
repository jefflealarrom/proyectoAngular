import { Component, OnInit, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.—type=“interface”';
import { ServicesPostsService } from 'src/app/services/services-posts.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

post: Post []= [];

postService = inject(ServicesPostsService)

ngOnInit(): void {
  this.fetchPosts();
}

fetchPosts(): void {
  this.postService.getAll().subscribe(
    (data: Post[]) => {
      this.post = data;
    },
    (error) => {
      console.error('Error al obtener los posts:', error);
    }
  );
  }
}
