import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoComponent } from './todo-container/todo/todo.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoComponent,
    TodoHeaderComponent,
  ],
    imports: [
        BrowserModule,
        DragDropModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
