import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';

import { appConfig } from './app.config';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';



const serverConfig: ApplicationConfig = {
  providers: [
              provideClientHydration(),
              provideHttpClient()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
