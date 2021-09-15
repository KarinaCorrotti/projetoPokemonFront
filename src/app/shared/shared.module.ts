import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PkmCardComponent } from './components/pkm-card/pkm-card.component';
import { PkmButtontypeComponent } from './components/pkm-buttontype/pkm-buttontype.component';

@NgModule({
  declarations: [
    PkmCardComponent,
    PkmButtontypeComponent
  ],
  exports: [
    PkmCardComponent,
    PkmButtontypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   
    HttpClientModule,
  ],
  providers: [],
  bootstrap: []
})

export class SharedModule { }