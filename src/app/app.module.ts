import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HelloworldComponent } from "../app/components/helloworld/helloworld.component";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [HelloworldComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
