import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ColorComponent } from "./color/color.component";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "./card/card.component";
import { ChildComponent } from "./child/child.component";
import { CvComponent } from "./cv/cv.component";
import { ListeComponent } from "./liste/liste.component";
import { ItemComponent } from "./item/item.component";
import { DetailComponent } from "./detail/detail.component";
import { CustomDirectiveDirective } from "./custom-directive.directive";
import { TestDirComponent } from "./test-dir/test-dir.component";
import { MiniWordComponent } from "./mini-word/mini-word.component";
import { TestClassComponent } from "./test-class/test-class.component";
import { NoImagePipe } from "./no-image.pipe";
import { CvPersonneService } from "./cv-personne.service";
import { RecruterComponent } from "./recruter/recruter.component";
import { HomeComponent } from "./home/home.component";
import { ROUTING } from "./app.routing";
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';
import { loginInterceptorProvider } from './login.interceptor';
import { LogoutGuard } from './logout.guard';
import { LoginGuard } from './login.guard';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CardComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    CustomDirectiveDirective,
    TestDirComponent,
    MiniWordComponent,
    TestClassComponent,
    NoImagePipe,
    RecruterComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    UpdateComponent,
    NotFoundComponent,
    AddComponent,
    LoginComponent,
    HttpComponent,
  ],
  imports: [BrowserModule, FormsModule, ROUTING, HttpClientModule],
 
  providers: [loginInterceptorProvider, LoginGuard, LogoutGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
