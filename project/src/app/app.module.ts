import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AccountLayoutComponent } from './shared/account-layout/account-layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { SidebarModule } from './shared/layout/sidebar/sidebar.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

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
        AccountLayoutComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ...MAT_MODULES,
        SharedModule,
        SidebarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
