import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
   {path: '', redirectTo: '/test', pathMatch: 'full'},
   //{path: '', component: TestComponent},
   {path: 'test', component: TestComponent},
   {path: 'demo', component: DemoComponent},
   {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [TestComponent, DemoComponent]
