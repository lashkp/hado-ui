/*! Built with http://stenciljs.com */
HadoUi.loadBundle("8cxzmusw",["exports","./chunk1.js","./chunk2.js"],function(e,t,a){var n=window.HadoUi.h,i=function(){function e(){}return e.prototype.componentWillLoad=function(){console.log("[RangepickerInput] - componentWillLoad"),this.openDatePicker=this.rangepickerModel.openDatePicker,this.activeFormType=this.rangepickerModel.InputType,this.StartDateSelected=this.rangepickerModel.rangeStartValue,this.EndDateSelected=this.rangepickerModel.rangeEndValue},e.prototype.getLabel=function(e){return e?t.default(e).format("DD/MM/YYYY"):null},e.prototype.updateNavigation=function(e){this.activeFormType=e.detail,this.rangepickerModel.InputType=e.detail},e.prototype.updateStartDate=function(e){this.StartDateSelected=e.detail},e.prototype.updateEndDate=function(e){this.EndDateSelected=e.detail},e.prototype.toggleRangePickerModal=function(e){e&&(this.activeFormType=e,this.rangepickerModel.InputType=e),this.openDatePicker=!this.openDatePicker},e.prototype.render=function(){var e=this,t=this.rangepickerModel,a=t.rangeEndValue,i=t.rangeStartValue,o=this.optionsModel,r=o.calendarIconClass,l=o.labels,c=l.placeholder,s=l.placeholder_2;return n("div",{class:"oui-datepicker"},n("div",{class:"datepicker-range-input"},n("input-form",{onClick:function(){return e.toggleRangePickerModal("start")},value:this.getLabel(i),placeholder:c,iconClass:r}),n("input-form",{onClick:function(){return e.toggleRangePickerModal("end")},value:this.getLabel(a),placeholder:s,iconClass:r}),this.openDatePicker?n("rangepicker-modal",{rangepickerModel:this.rangepickerModel,optionsModel:this.optionsModel}):null))},Object.defineProperty(e,"is",{get:function(){return"rangepicker-input"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activeFormType:{state:!0},EndDateSelected:{state:!0},openDatePicker:{state:!0},optionsModel:{type:"Any",attr:"options-model"},rangepickerModel:{type:"Any",attr:"rangepicker-model"},StartDateSelected:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".datepicker-range-input{display:flex;justify-content:space-around;position:relative;flex-direction:row}\@media only screen and (max-width:780px){.datepicker-range-input{flex-direction:column}}.datepicker-range-input .datepicker-input-group{width:40%}\@media only screen and (max-width:780px){.datepicker-range-input .datepicker-input-group{width:100%;margin:5px 0}}.datepicker-range-input .datepicker-input.active{border-bottom:solid 2px}"},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){this.datePickerConfig={year:void 0,month:void 0},this.days=[]}return e.prototype.componentWillLoad=function(){this.current_date=t.default(),this.formType=this.rangepickerModel.InputType},e.prototype.componentDidLoad=function(){this.initCalendarDateValue()},e.prototype.initCalendarDateValue=function(){var e;e="start"===this.rangepickerModel.InputType?this.rangepickerModel.rangeStartValue||t.default():this.rangepickerModel.rangeEndValue||t.default(),this.datePickerConfig.year=Number(e.format("YYYY")),this.datePickerConfig.month=Number(e.format("MM"))-1,this.changeDateParmaValue()},e.prototype.updateDatepickerLabel=function(){this.yearLeft=this.datePickerConfig.year,this.monthLeft=this.optionsModel.labels.months[this.datePickerConfig.month];var e=a.validNewDateParam(this.datePickerConfig.year,this.datePickerConfig.month,"INCREMENT");this.yearRight=e.year.toString(),this.monthRight=this.optionsModel.labels.months[e.month]},e.prototype.changeDateParmaValue=function(){this.dataItemLeftConfig={animation:void 0,itemList:a.buildCalendar({year:this.datePickerConfig.year,month:this.datePickerConfig.month},this.optionsModel,this.rangepickerModel.rangeStartValue,{rangeStartValue:this.rangepickerModel.rangeStartValue,rangeEndValue:this.rangepickerModel.rangeEndValue})},this.dataItemRightConfig={animation:void 0,itemList:a.buildCalendar(a.validNewDateParam(this.datePickerConfig.year,this.datePickerConfig.month,"INCREMENT"),this.optionsModel,this.rangepickerModel.rangeStartValue,{rangeStartValue:this.rangepickerModel.rangeStartValue,rangeEndValue:this.rangepickerModel.rangeEndValue})},this.updateDatepickerLabel()},e.prototype.nextMonth=function(){this.datePickerConfig=a.validNewDateParam(this.datePickerConfig.year,this.datePickerConfig.month,"INCREMENT"),this.changeDateParmaValue()},e.prototype.prevMonth=function(){this.datePickerConfig=a.validNewDateParam(this.datePickerConfig.year,this.datePickerConfig.month,"DECREMENT"),this.changeDateParmaValue()},e.prototype.nextInputForm=function(e){this.navigationChange.emit(e),this.formType=e},e.prototype.chooseDate=function(e){var t=window.matchMedia("(max-width: 780px");"start"===this.formType?(this.rangepickerModel.rangeStartValue=e.detail,t.matches||this.nextInputForm("end"),this.startDateSelectedEvent.emit(e.detail)):(this.rangepickerModel.rangeEndValue=e.detail,this.endDateSelectedEvent.emit(e.detail)),this.changeDateParmaValue()},e.prototype.closeModal=function(){var e=this;document.getElementById("range-container").className="range-container on-modal-leave",setTimeout(function(){e.closeModalEvent.emit()},300)},e.prototype.render=function(){var e=this,t=this.optionsModel,i=t.angleLeftIconClass,o=t.angleRightIconClass,r=t.closeIconClass,l=t.labels,c=l.days.map(function(e){return n("li",null,a.filterDayLabel(e))});return n("div",{class:"rangepicker-container"},n("div",{class:"rangepicker-overlay",onClick:function(){return e.closeModal()}}),n("div",{id:"range-container",class:"range-container on-modal-enter"},n("div",{class:"rangepicker-modal previous-date "+("start"===this.formType?"active":"")},n("header",{class:"modal-header"},n("h2",{class:"title"},l.title),n("i",{class:r,onClick:function(){return e.closeModal()}})),n("article",{class:"modal-content"},n("header",{class:"content-header"},n("i",{class:"icon-prev "+i,onClick:function(){return e.prevMonth()}}),n("label",null,this.monthLeft," ",this.yearLeft),n("i",{class:"icon-next "+o,onClick:function(){return e.nextMonth()}})),n("article",null,n("ul",{class:"day-list"},c),n("date-item-list",{dataItemConfig:this.dataItemLeftConfig}))),n("footer",{class:"modal-footer"},n("button",{onClick:function(){return e.nextInputForm("end")}},l.rangeNextBtnValue))),n("div",{class:"rangepicker-modal next-date "+("end"===this.formType?"active":"")},n("header",{class:"modal-header"},n("h2",{class:"title"},l.title_2),n("i",{class:r,onClick:function(){return e.closeModal()}})),n("article",{class:"modal-content"},n("header",{class:"content-header"},n("i",{class:"icon-prev "+i,onClick:function(){return e.prevMonth()}}),n("label",null,this.monthRight," ",this.yearRight),n("i",{class:"icon-next "+o,onClick:function(){return e.nextMonth()}})),n("article",null,n("ul",{class:"day-list"},c),n("date-item-list",{dataItemConfig:this.dataItemRightConfig}))),n("footer",{class:"modal-footer"},n("button",{onClick:function(){return e.closeModal()}},l.datepickerBtnValue)))))},Object.defineProperty(e,"is",{get:function(){return"rangepicker-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationMode:{state:!0},dataItemLeftConfig:{state:!0},dataItemRightConfig:{state:!0},datePickerConfig:{state:!0},formType:{state:!0},localDateSelected:{state:!0},monthLeft:{state:!0},monthRight:{state:!0},optionsModel:{type:"Any",attr:"options-model"},rangepickerModel:{type:"Any",attr:"rangepicker-model"},yearLeft:{state:!0},yearRight:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"closeModalEvent",method:"closeModalEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"startDateSelectedEvent",method:"startDateSelectedEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"endDateSelectedEvent",method:"endDateSelectedEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"navigationChange",method:"navigationChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@keyframes Scale{0%{transform:scale(.6);opacity:0}100%{transform:scale(1);opacity:1}}\@keyframes UnScale{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}.on-modal-enter{animation-name:Scale;animation-duration:.3s;animation-fill-mode:forwards}.on-modal-leave{animation-name:UnScale;animation-duration:.3s;animation-fill-mode:forwards}.range-container{display:flex;flex-direction:column;justify-content:space-between;position:fixed;top:0;right:0;bottom:0;left:0;background:#fff;box-shadow:0 19px 38px rgba(41,41,41,.3),0 15px 12px rgba(41,41,41,.2);z-index:99}\@media only screen and (min-width:780px){.range-container{position:absolute;top:calc(100% + 25px);left:initial;bottom:initial;right:0;left:0;border-radius:6px;overflow-x:hidden}}.range-container .rangepicker-modal{display:flex;flex-direction:column}.range-container .rangepicker-modal.previous-date:before{display:none;content:'';width:20px;height:20px;background:#fff;position:absolute;top:0;left:25px;transform:rotate(45deg) translateY(-50%)}.range-container .rangepicker-modal.previous-date.active:before{display:block}\@media only screen and (min-width:780px){.range-container .rangepicker-modal.previous-date .icon-next{display:none}}.range-container .rangepicker-modal.next-date:after{display:none;content:'';width:20px;height:20px;background:#fff;position:absolute;top:0;right:25px;transform:rotate(45deg) translateY(-50%)}.range-container .rangepicker-modal.next-date.active:after{display:block}\@media only screen and (min-width:780px){.range-container .rangepicker-modal.next-date .icon-prev{display:none}}.range-container .rangepicker-modal .modal-header{position:relative;border-bottom:solid 1px #777;display:none}\@media only screen and (max-width:780px){.range-container .rangepicker-modal .modal-header{display:block}}.range-container .rangepicker-modal .modal-header h2{text-align:center}.range-container .rangepicker-modal .modal-header i{position:absolute;top:50%;right:15px;transform:translateY(-50%);color:#0088ce;font-size:32px}.range-container .rangepicker-modal .modal-content{padding:0 5%}.range-container .rangepicker-modal .modal-content .content-header{display:flex;justify-content:space-between;padding:15px 0}.range-container .rangepicker-modal .modal-content .content-header>*{color:#0088ce}.range-container .rangepicker-modal .modal-content .content-header i{font-size:26px}.range-container .rangepicker-modal .modal-content .content-header label{line-height:26px;text-transform:capitalize;font-size:22px}.range-container .rangepicker-modal .modal-footer{padding:40px 30px;display:none}\@media only screen and (max-width:780px){.range-container .rangepicker-modal .modal-footer{display:block}}.range-container .rangepicker-modal .modal-footer button{margin:0 auto;display:block;background:#0088ce;width:100%;font-size:18px}.range-container{display:flex;flex-direction:row;width:100%}.range-container .rangepicker-modal{width:40%;justify-content:space-around}\@media only screen and (max-width:780px){.range-container .rangepicker-modal{position:absolute;width:100%;flex-direction:column;justify-content:flex-start}.range-container .rangepicker-modal.previous-date{transform:translateX(-100%)}.range-container .rangepicker-modal.next-date{transform:translateX(100%)}.range-container .rangepicker-modal.active{animation-name:SlideRight;animation-duration:.3s;animation-fill-mode:forwards}}\@keyframes SlideRight{0%{transform:translateX(100%);opacity:0;display:none}100%{transform:translateX(0);opacity:1;display:initial}}"},enumerable:!0,configurable:!0}),e}();e.RangepickerInput=i,e.RangepickerModal=o,Object.defineProperty(e,"__esModule",{value:!0})});