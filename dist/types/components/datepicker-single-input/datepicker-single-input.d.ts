import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import { DatePickerState, OptionsState } from "../../models/datepicker.interface";
export declare class DatepickerSingleInput {
    datepickerModel: DatePickerState;
    optionsModel: OptionsState;
    openDatePicker: boolean;
    componentWillLoad(): void;
    getLabel(): string;
    listenCloseEvent(): void;
    toggleDatepickerModal(): void;
    render(): JSX.Element;
}
