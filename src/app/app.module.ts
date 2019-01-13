import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Redux
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

// Modules
import { TextNoteModule } from '../app/pages/text-note/text-note.module';
import { ArticleNoteModule } from '../app/pages/article-note/article-note.module';
import { DocumentNoteModule } from '../app/pages/document-note/document-note.module';
import { PictureNoteModule } from '../app/pages/picture-note/picture-note.module';

// Services
import { ConfigService } from './services/config/config.service';
import { HelperService } from './services/helper/helper.service';

// Shared
import { SharedModule } from './shared/shared.module';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        AsideComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        NgReduxModule,
        TextNoteModule,
        ArticleNoteModule,
        DocumentNoteModule,
        PictureNoteModule
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
