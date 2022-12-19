import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ccm3ViewComponent } from './components/ccm3-view/ccm3-view.component';
import { ArtifactService } from 'src/app/services/artifact.service';

@NgModule({
  declarations: [
    AppComponent,
    Ccm3ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArtifactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
