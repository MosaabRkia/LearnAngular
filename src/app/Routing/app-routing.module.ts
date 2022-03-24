import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { CartPageComponent } from "../Pages/cart-page/cart-page.component";
import { MainPageComponent } from "../Pages/main-page/main-page.component";

const routes : Routes =[
    {path: 'main',component:MainPageComponent},
    {path: 'cart',component:CartPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [MainPageComponent,CartPageComponent];