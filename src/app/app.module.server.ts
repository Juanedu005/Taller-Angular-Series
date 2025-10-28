import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { SerieModule } from './serie/serie.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    SerieModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
