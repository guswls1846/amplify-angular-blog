import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { Http, HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PastPostsComponent } from "./past-posts/past-posts.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { MastheadComponent } from "./masthead/masthead.component";
import { PreviewPostComponent } from "./preview-post/preview-post.component";
import { AuthorPostComponent } from "./author-post/author-post.component";
import { LoadingComponent } from "./loading/loading.component";

import { LoginComponent } from "./login/login.component";
import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { NgxsRouterPluginModule, RouterStateSerializer } from "@ngxs/router-plugin";
import { NgxsStoragePluginModule, StorageOption } from "@ngxs/storage-plugin";
import { CustomRouterStateSerializer } from "src/ngxs/router/router-state-custom";
import { StateModule } from "src/ngxs/state.module";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PastPostsComponent,
    ViewPostComponent,
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
      storage: StorageOption.SessionStorage,
      key: ["auth.token", "auth.username", "auth.group"]
    }),
    NgxsRouterPluginModule.forRoot()
    // environment.plugins,
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
