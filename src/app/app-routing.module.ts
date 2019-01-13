import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { TextNoteComponent } from './pages/text-note/text-note.component';
import { ArticleNoteComponent } from './pages/article-note/article-note.component';
import { DocumentNoteComponent } from './pages/document-note/document-note.component';
import { PictureNoteComponent } from './pages/picture-note/picture-note.component';
import { HomeComponent } from './pages/home/home.component';

// Guard
import { AuthAdminGuard } from './guards/auth-admin.guard';

const routes: Routes = [
    {
        path: '', component: HomeComponent, canActivate: [AuthAdminGuard],
        children: [
            { path: 'text-note', component: TextNoteComponent },
            { path: 'article-note', component: ArticleNoteComponent },
            { path: 'document-note', component: DocumentNoteComponent },
            { path: 'picture-note', component: PictureNoteComponent },
            { path: '', redirectTo: 'text-note', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]
    },
    // otherwise redirect to status
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
