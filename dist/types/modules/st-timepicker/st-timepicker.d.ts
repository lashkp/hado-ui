import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import moment, { Moment } from 'moment';
import { TimepickerState } from './st-timepicker.interface';
export declare class StTimepicker {
    current: moment.Moment;
    selected: any;
    start: moment.Moment;
    end: moment.Moment;
    dateSelected$: EventEmitter;
    isLoaded$: EventEmitter;
    showModal: boolean;
    defaultState: TimepickerState;
    config: TimepickerState;
    hourList: {
        value: moment.Moment;
        current: boolean;
        selected: boolean;
    }[];
    initialWithProps(): void;
    initialize(props?: TimepickerState): void;
    componentWillLoad(): void;
    minutesOfDay(m: Moment): number;
    selectHour(value: any): void;
    isValid(value: number): number;
    closeModal(): void;
    openModal(): void;
    render(): JSX.Element;
}
