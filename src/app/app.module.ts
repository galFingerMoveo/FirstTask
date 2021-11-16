import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './Components/App/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TeamsComponent } from './Components/App/Teams/teams/teams.component';
import { MatTableModule } from '@angular/material/table';
import { HomePageComponent } from './Components/App/HomePage/home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, TeamsComponent, HomePageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
