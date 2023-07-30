import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { SidebarModule } from './shared/components/layout/sidebar/sidebar.module';

import { PokemonModule } from './pokemon/pokemon.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MarvelModule } from './marvel/marvel.module';

import { PageLayoutComponent } from './shared/components/page-layout/page-layout.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { HomeComponent } from './home/home.component';

import { PokeApiService } from './core/services/poke-api.service';
import { MarvelApiService } from './core/services/marvel-api.service';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

const MAT_MODULES = [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
]
@NgModule({
    declarations: [
        AppComponent,
        PageLayoutComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        ...MAT_MODULES,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        SidebarModule,
        DashboardModule,
        PokemonModule,
        MarvelModule,
        FontAwesomeModule,
    ],
    providers: [
        PokeApiService,
        MarvelApiService,
        { 
            provide: LOCALE_ID, 
            useValue: 'pt-br' 
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
