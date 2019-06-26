import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { SpaceComponent } from './components/space/space.component';
import { HighlightedBlockComponent } from './components/highlighted-block/highlighted-block.component';
import { StandardBlockComponent } from './components/standard-block/standard-block.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SpaceComponent,
    HighlightedBlockComponent,
    StandardBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
