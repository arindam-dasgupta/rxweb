import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { ALPHA_NUMERIC_ROUTING } from './alphaNumeric.routing';
import { AlphaNumericComponent } from './alphaNumeric.component';
import { AlphaNumericExtendedModule } from '../../../../assets/examples/alphaNumeric/alphaNumeric.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";

@NgModule({
  imports: [
    ALPHA_NUMERIC_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, AlphaNumericExtendedModule, ClipboardModule,DisqusSharedModule],
  declarations: [AlphaNumericComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AlphaNumericModule { }

