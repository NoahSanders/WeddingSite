import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InfoComponent } from './components/info/info.component';
import { RegistryComponent } from './components/registry/registry.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        CarouselComponent,
        InfoComponent,
        RegistryComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'info', component: InfoComponent },
            { path: 'registry', component: RegistryComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
