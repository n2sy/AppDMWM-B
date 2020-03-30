import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { TestDirComponent } from './test-dir/test-dir.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { TestClassComponent } from './test-class/test-class.component'
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
    TestClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
