import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { GREATER_THAN_ROUTING } from './greaterThan.routing';
import { GreaterThanComponent } from './greaterThan.component';
import { GreaterThanExtendedModule } from '../../../../assets/examples/greaterThan/greaterThan.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";

@NgModule({
  imports: [
    GREATER_THAN_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, GreaterThanExtendedModule, ClipboardModule,DisqusSharedModule],
  declarations: [GreaterThanComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class GreaterThanModule { }

