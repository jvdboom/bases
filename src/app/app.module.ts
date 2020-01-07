import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent, AboutComponent } from "./components";

import { DropdownModule } from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ToastModule } from "primeng/toast";
import { TableModule } from "primeng/table";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule, DropdownModule, MenubarModule, MenuModule, ProgressSpinnerModule,
    ToastModule, TableModule, ToolbarModule, TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
