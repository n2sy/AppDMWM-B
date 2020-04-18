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

const DWMW_routes : Routes = [
    {path:'', component:HomeComponent},
    {path:'cv' , children:[
        {path:'', component: CvComponent},
        {path:'edit/:id', component:UpdateComponent},
        {path:':id', component:InfosComponent},
        {path:'add', component: AddComponent}
    ]},
    {path:'msword', component:MiniWordComponent},
    {path:'color', component:ColorComponent},
    {path:'color/:cl', component:ColorComponent},
    {path:'login', component:LoginComponent},
    {path:'not-found', component: NotFoundComponent},
    {path:'**', redirectTo: 'not-found'}

   
];

export const ROUTING = RouterModule.forRoot(DWMW_routes);

