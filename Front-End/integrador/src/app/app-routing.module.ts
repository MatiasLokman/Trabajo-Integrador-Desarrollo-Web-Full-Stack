import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InboxComponent } from './pages/messages/inbox/inbox.component';
import { NewMessageComponent } from './pages/messages/new-message/new-message.component';
import { SentComponent } from './pages/messages/sent/sent.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path: 'signup', component: SignupComponent },

  { path: 'new-message', component: NewMessageComponent },
<<<<<<< HEAD
  
  { path: 'inbox', component: InboxComponent },
=======

  { path: 'sent', component: SentComponent },

>>>>>>> feat/sent
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
