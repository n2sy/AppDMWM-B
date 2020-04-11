import { Routes, RouterModule } from '@angular/router'
import { CvComponent } from './cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { ColorComponent } from './color/color.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';

const DWMW_routes : Routes = [
    {path:'', component:HomeComponent},
    {path:'cv', component:CvComponent},
    {path:'cv/:id', component:InfosComponent},
    {path:'msword', component:MiniWordComponent},
    {path:'color', component:ColorComponent},
    {path:'color/:cl', component:ColorComponent},
    {path:'card', component:CardComponent},
];

export const ROUTING = RouterModule.forRoot(DWMW_routes);