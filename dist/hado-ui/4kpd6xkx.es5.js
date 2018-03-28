/*! Built with http://stenciljs.com */
HadoUi.loadBundle("4kpd6xkx",["exports","./chunk1.js","./chunk3.js"],function(e,t,a){var n=window.HadoUi.h,i={datesArray:[],openDatePicker:!1,dateSelected:void 0,id:void 0},o={datesArray:[],openDatePicker:!1,rangeStartValue:void 0,rangeEndValue:void 0,InputType:void 0},l={calendarIconClass:void 0,angleRightIconClass:void 0,angleLeftIconClass:void 0,closeIconClass:void 0,activePreviousDate:!1,mode:"single",startWeek:0,labels:{title:"First date",title_2:"Last date",placeholder:"...",placeholder_2:"...",datepickerBtnValue:"Valid",rangeNextBtnValue:"Next",months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},r=function(){function e(){}return e.prototype.reloadState=function(){this.initAppState()},Object.defineProperty(e.prototype,"props",{get:function(){return this.DpElement},enumerable:!0,configurable:!0}),e.prototype.initAppState=function(e){var a,n,r,s;(a=e||{mode:"single",singleValue:"2018-03-23",calendarIcon:"far fa-calendar-alt",angleRightIcon:"fas fa-angle-right",angleLeftIcon:"fas fa-angle-left",closeIcon:"fas fa-times",activePreviousDate:!0,rangeStartValue:"2018-03-23",rangeEndValue:"2018-03-30",startWeek:1,labels:{title:"Date de début",title_2:"Date de Fin",placeholder:"séléctionnez une date",placeholder_2:"séléctionnez une date",datepickerBtnValue:"Validé",rangeNextBtnValue:"Suivant",months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],days:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]}})&&(a.rangeStartValue&&(n=t.default(a.rangeStartValue)),a.rangeEndValue&&(r=t.default(a.rangeEndValue)),a.singleValue&&(s=t.default(a.singleValue)),this.datepickerModel=Object.assign({},i,{dateSelected:s}),this.rangepickerModel=Object.assign({},o,{rangeStartValue:n,rangeEndValue:r}),this.optionsModel=Object.assign({},l,{calendarIconClass:a.calendarIcon,angleRightIconClass:a.angleRightIcon,angleLeftIconClass:a.angleLeftIcon,closeIconClass:a.closeIcon,activePreviousDate:a.activePreviousDate,mode:a.mode,labels:a.labels,startWeek:a.startWeek}))},e.prototype.componentDidLoad=function(){this.datepickerIsLoaded.emit(!0)},e.prototype.componentWillLoad=function(){console.log("componentWillLoad"),console.log(this.config),this.config?this.initAppState(this.config):this.buildPropsValue()},e.prototype.buildPropsValue=function(){this.config={mode:this.mode,singleValue:this.singleValue,calendarIcon:this.calendarIcon,angleRightIcon:this.angleRightIcon,angleLeftIcon:this.angleLeftIcon,closeIcon:this.closeIcon,activePreviousDate:this.activePreviousDate,rangeStartValue:this.rangeStartValue,rangeEndValue:this.rangeEndValue,startWeek:this.startWeek,labels:{title:this.title,title_2:this.title2,placeholder:this.placeholder,placeholder_2:this.placeholder2,datepickerBtnValue:this.datepickerBtnValue,rangeNextBtnValue:this.rangeNextBtnValue,months:this.months,days:this.days}},console.log("buildPropsValue",this.config),this.initAppState(this.config)},e.prototype.render=function(){var e="range"===this.optionsModel.mode?n("rangepicker-input",{rangepickerModel:this.rangepickerModel,optionsModel:this.optionsModel}):null,t="single"===this.optionsModel.mode?n("datepicker-input",{datepickerModel:this.datepickerModel,optionsModel:this.optionsModel}):null;return n("div",{class:"oui-datepicker"},e,t)},Object.defineProperty(e,"is",{get:function(){return"hado-datepicker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activePreviousDate:{type:Boolean,attr:"active-previous-date"},angleLeftIcon:{type:String,attr:"angle-left-icon"},angleRightIcon:{type:String,attr:"angle-right-icon"},calendarIcon:{type:String,attr:"calendar-icon"},closeIcon:{type:String,attr:"close-icon"},config:{type:"Any",attr:"config",watchCallbacks:["reloadState"]},datepickerBtnValue:{type:String,attr:"datepicker-btn-value"},datepickerModel:{state:!0},days:{type:"Any",attr:"days"},DpElement:{elementRef:!0},initAppState:{method:!0},mode:{type:String,attr:"mode"},months:{type:"Any",attr:"months"},optionsModel:{state:!0},placeholder:{type:String,attr:"placeholder"},placeholder2:{type:String,attr:"placeholder2"},rangeEndValue:{type:String,attr:"range-end-value"},rangeNextBtnValue:{type:String,attr:"range-next-btn-value"},rangepickerModel:{state:!0},rangeStartValue:{type:String,attr:"range-start-value"},singleValue:{type:String,attr:"single-value"},startWeek:{type:Number,attr:"start-week"},title:{type:String,attr:"title"},title2:{type:String,attr:"title2"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"datepickerIsLoaded",method:"datepickerIsLoaded",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@keyframes Scale{0%{transform:scale(.6);opacity:0}100%{transform:scale(1);opacity:1}}\@keyframes UnScale{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}.modal.on-enter,.on-modal-enter{animation-name:Scale;animation-duration:.3s;animation-fill-mode:forwards}.modal.on-leave,.on-modal-leave{animation-name:UnScale;animation-duration:.3s;animation-fill-mode:forwards}.day-list{display:flex;flex-direction:row;flex-wrap:nowrap;list-style:none}.day-list li{width:calc(14% - 10px);text-align:center;padding:10px 5px;font-weight:700}.datepicker-overlay,.rangepicker-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:0 0;opacity:.3}.date-list{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;list-style:none;width:100%}ul{padding:0}.modal-container .overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:0 0;opacity:.3}\@media only screen and (max-width:780px){.modal-container .overlay{display:none}}.modal{position:absolute;width:100%;top:100%;left:initial;bottom:initial;right:0;border-radius:6px;overflow-x:hidden;z-index:99;box-shadow:0 19px 38px rgba(41,41,41,.3),0 15px 12px rgba(41,41,41,.2)}.modal:before{content:'';width:20px;height:20px;background:inherit;position:absolute;top:0;right:25px;transform:rotate(45deg) translateY(-50%)}.modal.has-header .modal-content{height:calc(100vh - 70px);overflow-y:scroll}\@media only screen and (max-width:780px){.modal{display:flex;position:fixed;top:0;width:100vw;height:100vh;background:#fff;flex-direction:column;z-index:99;border-radius:0}}.modal .modal-header{position:relative;border-bottom:solid 1px #efeeee;height:70px;display:none;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.1);box-shadow:0 2px 10px 0 rgba(0,0,0,.1)}\@media only screen and (max-width:780px){.modal .modal-header{display:block}}.modal .modal-header h2{text-align:center}.modal .modal-header i{position:absolute;top:50%;right:15px;transform:translateY(-50%);color:#0088ce;font-size:32px}.modal .modal-content .content-header{display:flex;justify-content:space-between;padding:15px 0}.modal .modal-content .content-header>*{color:#0088ce}.modal .modal-content .content-header i{font-size:26px}.modal .modal-content .content-header label{line-height:26px;text-transform:capitalize;font-size:22px}.modal .modal-footer{position:relative;height:70px;display:none;justify-content:center;align-items:center;border-top:solid 1px #efeeee;-webkit-box-shadow:0 -2px 10px 0 rgba(0,0,0,.1);box-shadow:0 -2px 10px 0 rgba(0,0,0,.1)}\@media only screen and (max-width:780px){.modal .modal-footer{display:flex}}.modal .modal-footer button{text-align:center;background:#0088ce;min-width:33%}\@keyframes Scale{0%{transform:scale(.6);opacity:0}100%{transform:scale(1);opacity:1}}\@keyframes UnScale{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}.modal.on-enter,.on-modal-enter{animation-name:Scale;animation-duration:.3s;animation-fill-mode:forwards}.modal.on-leave,.on-modal-leave{animation-name:UnScale;animation-duration:.3s;animation-fill-mode:forwards}button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}.oui-datepicker>*{font-family:Arial,sans-serif}"},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){}return e.prototype.closeModal=function(){this.modalEvent$.emit()},e.prototype.render=function(){var e=this,t=this.iconClass,a=this.title;return n("div",{class:"modal-container"},n("div",{id:"modalComponent",class:"modal has-header on-enter"},n("header",{class:"modal-header"},n("h2",null,a),n("i",{class:t,onClick:function(){return e.closeModal()}})),n("article",{class:"modal-content"},n("slot",null))),n("div",{class:"overlay",onClick:function(){return e.closeModal()}}))},Object.defineProperty(e,"is",{get:function(){return"hado-modal-dialog"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{iconClass:{type:String,attr:"icon-class"},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"modalEvent$",method:"modalEvent$",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}(),c=function(){function e(){this.current=t.default(),this.start=t.default().startOf("day"),this.end=t.default().endOf("day"),this.defaultState={value:void 0,format:"HH:mm",labels:{title:"title 1",btnValue:"submit",closeIcon:"fas fa-times",timeIcon:"far fa-clock",placeholder:"..."}},this.showModal=!1,this.hourList=[],this.config=this.defaultState}return e.prototype.initialWithProps=function(){this.config&&this.initialize(this.config)},e.prototype.initialize=function(e){this.config=Object.assign({},this.defaultState,this.config),e&&e.value&&(Number.isInteger(this.minutesOfDay(this.config.value)/30)?console.log("YYESS",this.isValid(this.minutesOfDay(this.config.value))):console.log("NNNO",this.isValid(this.minutesOfDay(this.config.value)))),this.selected=this.config.value;for(var a=this.start.diff(this.end,"hour"),n=this.start,i=this.isValid(this.minutesOfDay(this.current)),o=0;o<=2*Math.abs(a)+1;o++){var l=!1;this.minutesOfDay(n)===i&&(l=!0),n=0===o?t.default(n):t.default(n.add(30,"minute")),this.hourList=this.hourList.concat([{value:n.format("HH:mm"),current:l,selected:!1}])}},e.prototype.componentWillLoad=function(){this.isLoaded$.emit()},e.prototype.minutesOfDay=function(e){return e.minutes()+60*e.hours()},e.prototype.selectHour=function(e){var a=t.default();this.selected=e,this.hourList=this.hourList.map(function(t){return t.selected=t.value===e,t});var n=this.selected.split(":");a.set({hour:Number(n[0]),minutes:Number(n[1])}),this.dateSelected$.emit(a),this.closeModal()},e.prototype.isValid=function(e){for(var t=e,a=30;0<=a;a--)if(t+=1,Number.isInteger(t/30))return t},e.prototype.closeModal=function(){var e=this;document.getElementById("modalComponent").className="modal has-header on-leave",setTimeout(function(){e.showModal&&(e.showModal=!1)},300)},e.prototype.openModal=function(){!this.showModal&&(this.showModal=!0)},e.prototype.render=function(){var e=this,t=this.config.labels,a=t.closeIcon,i=t.timeIcon,o=t.title,l=t.placeholder,r=this.hourList.map(function(t){return n("li",{onClick:function(){return e.selectHour(t.value)},class:"hour-item "+(t.current?"current":"")+" "+(t.selected?"selected":"")},t.value)});return n("div",{class:"timepicker-container"},n("hado-input-form",{onClick:function(){return e.openModal()},value:this.selected?this.selected:void 0,placeholder:l,iconClass:i}),this.showModal?n("div",{class:"modal-container"},n("div",{id:"modalComponent",class:"modal has-header on-enter"},n("header",{class:"modal-header"},n("h2",null,o),n("i",{class:a,onClick:function(){return e.closeModal()}})),n("article",{class:"modal-content"},n("ul",{class:"hour-list"},r))),n("div",{class:"overlay",onClick:function(){return e.closeModal()}})):null)},Object.defineProperty(e,"is",{get:function(){return"hado-timepicker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{type:"Any",attr:"config",watchCallbacks:["initialWithProps"]},hourList:{state:!0},initialize:{method:!0},showModal:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"dateSelected$",method:"dateSelected$",bubbles:!0,cancelable:!0,composed:!0},{name:"isLoaded$",method:"isLoaded$",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@keyframes Scale{0%{transform:scale(.6);opacity:0}100%{transform:scale(1);opacity:1}}\@keyframes UnScale{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}.modal.on-enter,.on-modal-enter{animation-name:Scale;animation-duration:.3s;animation-fill-mode:forwards}.modal.on-leave,.on-modal-leave{animation-name:UnScale;animation-duration:.3s;animation-fill-mode:forwards}.day-list{display:flex;flex-direction:row;flex-wrap:nowrap;list-style:none}.day-list li{width:calc(14% - 10px);text-align:center;padding:10px 5px;font-weight:700}.datepicker-overlay,.rangepicker-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:0 0;opacity:.3}.date-list{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;list-style:none;width:100%}ul{padding:0}.modal-container .overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:0 0;opacity:.3}\@media only screen and (max-width:780px){.modal-container .overlay{display:none}}.modal,.timepicker-container .modal{position:absolute;width:100%;top:100%;left:initial;bottom:initial;right:0;border-radius:6px;overflow-x:hidden;z-index:99;box-shadow:0 19px 38px rgba(41,41,41,.3),0 15px 12px rgba(41,41,41,.2)}.modal:before,.timepicker-container .modal:before{content:'';width:20px;height:20px;background:inherit;position:absolute;top:0;right:25px;transform:rotate(45deg) translateY(-50%)}.modal.has-header .modal-content{height:calc(100vh - 70px);overflow-y:scroll}\@media only screen and (max-width:780px){.modal,.timepicker-container .modal{display:flex;position:fixed;top:0;width:100vw;height:100vh;background:#fff;flex-direction:column;z-index:99;border-radius:0}}.modal .modal-header,.timepicker-container .modal .modal-header{position:relative;border-bottom:solid 1px #efeeee;height:70px;display:none;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.1);box-shadow:0 2px 10px 0 rgba(0,0,0,.1)}\@media only screen and (max-width:780px){.modal .modal-header,.timepicker-container .modal .modal-header{display:block}}.modal .modal-header h2,.timepicker-container .modal .modal-header h2{text-align:center}.modal .modal-header i,.timepicker-container .modal .modal-header i{position:absolute;top:50%;right:15px;transform:translateY(-50%);color:#0088ce;font-size:32px}.modal .modal-content .content-header{display:flex;justify-content:space-between;padding:15px 0}.modal .modal-content .content-header>*{color:#0088ce}.modal .modal-content .content-header i{font-size:26px}.modal .modal-content .content-header label{line-height:26px;text-transform:capitalize;font-size:22px}.modal .modal-footer{position:relative;height:70px;display:none;justify-content:center;align-items:center;border-top:solid 1px #efeeee;-webkit-box-shadow:0 -2px 10px 0 rgba(0,0,0,.1);box-shadow:0 -2px 10px 0 rgba(0,0,0,.1)}\@media only screen and (max-width:780px){.modal .modal-footer{display:flex}}.modal .modal-footer button{text-align:center;background:#0088ce;min-width:33%}.input-group{position:relative;display:flex;background:#0088ce;border-radius:6px;margin:5px 0;flex-direction:column}.input-group:before{position:absolute;top:calc(100% - 2px);height:2px;background:#0088ce;content:'';left:50%;transform:translateX(-50%);animation-duration:.3s;animation-fill-mode:forwards}.input-group.on-enter:before{animation-name:Expand}.input-group.on-leave:before{animation-name:Minimize}.input-group input{padding:13px 20px;width:calc(80% - 40px);background:#efeeee;color:#0088ce;border:none;border-radius:6px 0 0 6px;font-size:14px;outline:0}.input-group i{position:absolute;top:50%;right:10%;transform:translateY(-50%) translateX(50%);color:#fff;font-size:22px}\@keyframes Expand{0%{width:0%}100%{width:98%}}\@keyframes Minimize{0%{width:98%}100%{width:0%}}.current{color:#0088ce}.timepicker-container{position:relative}.timepicker-container>*{font-family:Arial,sans-serif}\@media only screen and (min-width:780px){.timepicker-container .modal .modal-content{max-height:320px;overflow-y:scroll}}.timepicker-container .modal .overlay{position:fixed;top:0;right:0;left:0;bottom:0;background:orange;opacity:.2}.timepicker-container .modal .hour-list{display:flex;flex-direction:column;-ms-overflow-style:none;overflow:-moz-scrollbars-none;list-style-type:none;border-radius:0 3px 3px 0;margin:0;border-radius:0 0 6px 6px}.timepicker-container .modal .hour-list .hour-item{width:calc(100% - 40px);padding:10px 20px;border-bottom:solid 1px #efeeee}\@media only screen and (max-width:780px){.timepicker-container .modal .hour-list .hour-item{padding:18px 20px;text-align:center}}.timepicker-container .modal .hour-list .hour-item:hover{color:#fff;background:#89b2c7;border-color:#89b2c7}.timepicker-container .modal .hour-list .hour-item.selected{background:#0088ce;border-color:#0088ce;color:#fff}"},enumerable:!0,configurable:!0}),e}();e.HadoInputForm=a.InputFormComponent,e.HadoDatepicker=r,e.HadoModalDialog=s,e.HadoTimepicker=c,Object.defineProperty(e,"__esModule",{value:!0})});