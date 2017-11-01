import { ListHandwritingService } from './components/color-picker/service/list-handwriting.service';
import { WritingService } from './components/writing/service/writing.service';
import { HttpModule } from '@angular/http';
import { FormGroup, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {PanelModule} from 'primeng/primeng';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { AlertModule } from 'ngx-bootstrap';
import {DropdownModule} from 'primeng/primeng';
import {ColorPickerModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { AdvancedSettingsComponent } from './components/advanced-settings/advanced-settings.component';
import { WritingComponent } from './components/writing/writing.component';
import {InputTextareaModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    AdvancedSettingsComponent,
    WritingComponent
  ],
  imports: [
    [AlertModule.forRoot()],
    BrowserModule,
    PanelModule,
    GrowlModule,
    ColorPickerModule,
    FormsModule,
    AccordionModule,
    SelectButtonModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    HttpModule,
    InputTextareaModule,
    BrowserAnimationsModule
  ],
  providers: [WritingService, ListHandwritingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
