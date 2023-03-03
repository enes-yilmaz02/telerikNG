import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodesModule } from '@progress/kendo-angular-barcodes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarcodeComponent } from './Components/barcodes/barcode/barcode.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { QRCodeModule } from '@progress/kendo-angular-barcodes';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { QrcodeComponent } from './Components/barcodes/qrcode/qrcode.component';
import { ValidationQRComponent } from './Components/barcodes/qrcode/validation-qr/validation-qr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionBarcodeComponent } from './Components/barcodes/option-barcode/option-barcode.component';
import { ChipModule } from '@progress/kendo-angular-buttons';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { ButtonComponent } from './Components/Buttons/button/button.component';
import { IconButtonComponent } from './Components/Buttons/button/icon-button/icon-button.component';
import { EventButtonComponent } from './Components/Buttons/button/event-button/event-button.component';
import { EventLogComponent } from './Components/Buttons/button/event-button/event-log/event-log.component';
import { BGroupComponent } from './Components/Buttons/buttonGroup/b-group/b-group.component';
import { NbGroupComponent } from './Components/Buttons/buttonGroup/b-group/nb-group/nb-group.component';
import { DisabledButtonGroupComponent } from './Components/Buttons/buttonGroup/b-group/disabled-button-group/disabled-button-group.component';
import { SelectionGroupButtonComponent } from './Components/Buttons/buttonGroup/b-group/selection-group-button/selection-group-button.component';
import { ButtonCollectionComponent } from './Components/Buttons/buttonGroup/b-group/button-collection/button-collection.component';
import { ChipComponent } from './Components/Buttons/Chips/chip/chip.component';
import { NChipComponent } from './Components/Buttons/Chips/chip/n-chip/n-chip.component';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { ApparanceComponent } from './Components/Buttons/Chips/chip/apparance/apparance.component';
import { ConfigurationComponent } from './Components/Buttons/Chips/chip/apparance/configuration/configuration.component';
import { ChipListComponent } from './Components/Buttons/chiplist/chip-list/chip-list.component';
import { OverviewComponent } from './Components/Buttons/chiplist/chip-list/overview/overview.component';
import { DropdownComponent } from './Components/Buttons/Drop-Down-Button/dropdown/dropdown.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GlobalComponent } from './Components/Buttons/global/global.component';
import { RTL } from "@progress/kendo-angular-l10n";
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { SparklineModule } from '@progress/kendo-angular-charts';
import { ChartsComponent } from './Components/charts/charts/charts.component';
import { ElementsComponent } from './Components/charts/elements/elements.component';
import { SeriesComponent } from './Components/charts/elements/series/series.component';
import { AxesComponent } from './Components/charts/elements/axes/axes.component';
import { ChartAreaComponent } from './Components/charts/elements/chart-area/chart-area.component';
import { CrosshairsComponent } from './Components/charts/elements/crosshairs/crosshairs.component';
import { ErorrBarsComponent } from './Components/charts/elements/erorr-bars/erorr-bars.component';
import { LabelsComponent } from './Components/charts/elements/labels/labels.component';
import { NotesComponent } from './Components/charts/elements/notes/notes.component';
import { PanesComponent } from './Components/charts/elements/panes/panes.component';
import { SelectionComponent } from './Components/charts/elements/selection/selection.component';
import { SeriesHighlightComponent } from './Components/charts/elements/series-highlight/series-highlight.component';
import { TooltipComponent } from './Components/charts/elements/tooltip/tooltip.component';
import { SeriesCComponent } from './Components/charts/series-c/series-c.component';
import { AreaSComponent } from './Components/charts/series-c/area-s/area-s.component';
import { BarSComponent } from './Components/charts/series-c/bar-s/bar-s.component';
import { BoxPlotSComponent } from './Components/charts/series-c/box-plot-s/box-plot-s.component';
import { BubbleSComponent } from './Components/charts/series-c/bubble-s/bubble-s.component';
import { BulletSComponent } from './Components/charts/series-c/bullet-s/bullet-s.component';
import { DonutSComponent } from './Components/charts/series-c/donut-s/donut-s.component';
import { FunnelSComponent } from './Components/charts/series-c/funnel-s/funnel-s.component';
import { HeatmapSComponent } from './Components/charts/series-c/heatmap-s/heatmap-s.component';
import { LinestyleSComponent } from './Components/charts/series-c/linestyle-s/linestyle-s.component';
import { PieSComponent } from './Components/charts/series-c/pie-s/pie-s.component';
import { PolarSComponent } from './Components/charts/series-c/polar-s/polar-s.component';
import { RadarSComponent } from './Components/charts/series-c/radar-s/radar-s.component';
import { RangeareaSComponent } from './Components/charts/series-c/rangearea-s/rangearea-s.component';
import { RangebarSComponent } from './Components/charts/series-c/rangebar-s/rangebar-s.component';
import { ScatterSComponent } from './Components/charts/series-c/scatter-s/scatter-s.component';
import { WaterfallSComponent } from './Components/charts/series-c/waterfall-s/waterfall-s.component';
import { PanningZoomingComponent } from './Components/charts/charts/panning-zooming/panning-zooming.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeComponent,
    QrcodeComponent,
    ValidationQRComponent,
    OptionBarcodeComponent,
    ButtonComponent,
    IconButtonComponent,
    EventButtonComponent,
    EventLogComponent,
    BGroupComponent,
    NbGroupComponent,
    DisabledButtonGroupComponent,
    SelectionGroupButtonComponent,
    ButtonCollectionComponent,
    ChipComponent,
    NChipComponent,
    ApparanceComponent,
    ConfigurationComponent,
    ChipListComponent,
    OverviewComponent,
    DropdownComponent,
    GlobalComponent,
    ChartsComponent,
    ElementsComponent,
    SeriesComponent,
    AxesComponent,
    ChartAreaComponent,
    CrosshairsComponent,
    ErorrBarsComponent,
    LabelsComponent,
    NotesComponent,
    PanesComponent,
    SelectionComponent,
    SeriesHighlightComponent,
    TooltipComponent,
    SeriesCComponent,
    AreaSComponent,
    BarSComponent,
    BoxPlotSComponent,
    BubbleSComponent,
    BulletSComponent,
    DonutSComponent,
    FunnelSComponent,
    HeatmapSComponent,
    LinestyleSComponent,
    PieSComponent,
    PolarSComponent,
    RadarSComponent,
    RangeareaSComponent,
    RangebarSComponent,
    ScatterSComponent,
    WaterfallSComponent,
    PanningZoomingComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarcodesModule,
    BrowserAnimationsModule,
    ButtonsModule,
    QRCodeModule,
    InputsModule,
    LabelModule,
    FormsModule,
    ReactiveFormsModule,
    ChipModule,
    DropDownButtonModule,
    DropDownsModule,
    LayoutModule,
    ChartsModule,
    SparklineModule
  ],
  providers: [{ provide: RTL, useValue: true }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
