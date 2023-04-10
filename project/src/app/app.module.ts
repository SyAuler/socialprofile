import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageLayoutComponent } from './shared/components/page-layout/page-layout.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { SidebarModule } from './shared/components/layout/sidebar/sidebar.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokeApiService } from './core/services/poke-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MarvelModule } from './marvel/marvel.module';
import { MarvelApiService } from './core/services/marvel-api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
