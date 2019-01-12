import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Redux
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

// Services
import { ConfigService } from './services/config/config.service';
import { HelperService } from './services/helper/helper.service';

// Shared
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        NgReduxModule
    ],
    providers: [
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: appConfigFactory,
            deps: [ConfigService],
            multi: true
        },
        HelperService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}

/**
 * Load config services
 */
export function appConfigFactory(config: ConfigService) {
    return () => config.load();
}
