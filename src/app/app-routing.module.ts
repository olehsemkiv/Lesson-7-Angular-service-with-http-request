import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { AdminBlogComponent } from './components/admin-blog/admin-blog.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'adminblog'},
  {path: 'blog', component: BlogComponent},
  {path: 'adminblog', component: AdminBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
