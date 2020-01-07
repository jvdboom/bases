import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "home", component: HomeComponent },
  // { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // { enableTracing: true } // <-- debugging purposes only)
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
