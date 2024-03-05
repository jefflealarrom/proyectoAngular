import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostlistComponent } from './components/postlist/postlist.component';
import { DetailpostComponent } from './components/detailpost/detailpost.component';
import { ErrorComponent } from './components/error/error.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: PostlistComponent },
  { path: 'inicio', component: PostlistComponent },
  { path: 'blog', component: PostlistComponent },
  { path: 'CreatePost', component: CreatepostComponent},
  { path: 'post/:id', component: DetailpostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registre', component: SingupComponent },
  { path: 'footer', component: FooterComponent},
  { path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
