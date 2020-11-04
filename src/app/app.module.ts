import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { ContactComponent } from "./component/contact/contact.component";
import { PastPostsComponent } from "./component/past-posts/past-posts.component";

import { NavbarComponent } from "./component/navbar/navbar.component";
import { FooterComponent } from "./component/footer/footer.component";
import { MastheadComponent } from "./component/masthead/masthead.component";
import { PreviewPostComponent } from "./component/preview-post/preview-post.component";
import { AuthorPostComponent } from "./component/author-post/author-post.component";
import { LoadingComponent } from "./component/loading/loading.component";

import { LoginComponent } from "./component/login/login.component";
import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { NgxsRouterPluginModule, RouterStateSerializer } from "@ngxs/router-plugin";
import { NgxsStoragePluginModule, StorageOption } from "@ngxs/storage-plugin";
import { CustomRouterStateSerializer } from "src/ngxs/router/router-state-custom";
import { StateModule } from "src/ngxs/state.module";
import { environment } from "src/environments/environment";
import { NgMatSearchBarModule } from "ng-mat-search-bar";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PastPostsComponent,
    NavbarComponent,
    FooterComponent,
    MastheadComponent,
    PreviewPostComponent,
    AuthorPostComponent,
    LoadingComponent,
    LoginComponent
  ],
  entryComponents: [LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMatSearchBarModule,
    NgxsModule.forRoot([...StateModule.Modules], {
      developmentMode: !environment.production,
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      },
      compatibility: {
        strictContentSecurityPolicy: true
      }
    }),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.LocalStorage,
      key: ["auth.token", "auth.username", "auth.group"]
    }),
    NgxsRouterPluginModule.forRoot()
    // environment.plugins,
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
