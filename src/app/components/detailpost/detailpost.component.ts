import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.—type=“interface”';
import { ServicesPostsService } from 'src/app/services/services-posts.service';

@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.css']
})
export class DetailpostComponent implements OnInit {

  post: Post | undefined
  postId!: number;
  

  private route = inject(ActivatedRoute)
  private postService = inject(ServicesPostsService)
  private router = inject(Router)

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = + params['id'];
      this.fetchPostDetails(this.postId)
    })
  }

  fetchPostDetails(id: number): void {
    this.postService.getById(id).subscribe(
      (data: Post) => {
        this.post = data;
      },
      (error) => {
        console.error('Error al obtener el detalle del post:', error);
      }
    );
  }

  
  close(): void {
    
    this.router.navigate(['/blog']);
  }
}

