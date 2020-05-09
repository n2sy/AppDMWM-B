import { Routes, RouterModule } from '@angular/router'
import { CvComponent } from './cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { ColorComponent } from './color/color.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';
import { RhManagerComponent } from './rh-manager/rh-manager.component';

const DWMW_routes : Routes = [
    {path:'', redirectTo:'home', pathMatch:'prefix'},
    {path:'home', component:HomeComponent},
    {path:'cv' , children:[
        {path:'', component: CvComponent},
        {path:'edit/:id', component:UpdateComponent, canActivate: [LoginGuard]},
        {path:'add', component: AddComponent, canActivate: [LoginGuard]},
        {path:':id', component:InfosComponent}
    ]},
    {path:'msword', component:MiniWordComponent},
    {path:'rh', component:RhManagerComponent},
    {path:'color', component:ColorComponent},
    {path:'color/:cl', component:ColorComponent},
    {path:'login', component:LoginComponent, canActivate:[LogoutGuard]},
    {path:'not-found', component: NotFoundComponent},
    {path:'**', redirectTo: 'not-found'}

   
];

export const ROUTING = RouterModule.forRoot(DWMW_routes);

