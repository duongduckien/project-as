import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Primeng
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { GrowlModule } from 'primeng/growl';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
    imports: [
        CommonModule,
        CalendarModule,
        CheckboxModule,
        InputSwitchModule,
        GrowlModule,
        ConfirmDialogModule,
        TooltipModule,
        TableModule,
        DropdownModule,
        OverlayPanelModule,
    ],
    declarations: [],
    exports: [
        CalendarModule,
        CheckboxModule,
        InputSwitchModule,
        GrowlModule,
        ConfirmDialogModule,
        TooltipModule,
        TableModule,
        DropdownModule,
        OverlayPanelModule,
    ]
})
export class SharedModule { }
