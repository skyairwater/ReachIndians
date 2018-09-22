import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SocialLoginModule, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider, AuthServiceConfig } from 'angular-6-social-login';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StarsComponent } from './stars/stars.component';

import { AppRoutingModule } from './app-routing/app-routing.module'
import { SlimLoadingBarComponent, SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { LoginComponent } from './login/login.component'
import { environment } from '../environments/environment';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: GoogleLoginProvider.PROVIDER_ID,                    
          provider: new GoogleLoginProvider(environment.googleClientId)          
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,                    
          provider: new FacebookLoginProvider(environment.facebookClientId)          
        }
      ]
  );
  return config;
}

@NgModule({
  imports: [
    BrowserModule,    
    AppRoutingModule,
    SlimLoadingBarModule,
    SocialLoginModule,
    HttpModule
  ],    
  declarations: [
    AppComponent,
    WelcomeComponent,
    StarsComponent,
    LoginComponent
  ],
  providers: [{ provide: AuthServiceConfig, useFactory: getAuthServiceConfigs }],
  bootstrap: [AppComponent]
})
export class AppModule { }
