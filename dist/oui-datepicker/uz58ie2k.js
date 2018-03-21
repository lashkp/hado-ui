/*! Built with http://stenciljs.com */
const{h:t}=window.OuiDatepicker;import e from"./chunk1.js";class s{checkStyle(t){t.animation&&(this.DateItemListHTML.className=`hydrated on-${t.animation}`,setTimeout(()=>{this.DateItemListHTML.classList.remove(`on-${t.animation}`)},300)),this.dateItemListHost=t.itemList}chooseDate(t){t.disable||(this.dateItemListHost=this.dateItemListHost.map(e=>(e.selected=e.date===t.date,e)),this.DateItemListEvent.emit(t))}getStyleClass(t){if(!t)return;const e=[];return t.disable&&e.push("inactive"),t.selected&&e.push("selected"),t.current&&e.push("current"),t.isBetween&&e.push("isBetween"),e.join(" ")}getLabel(t){return e(t).format("DD")}render(){const e=this.dateItemListHost?this.dateItemListHost.map(e=>t("li",{onClick:()=>this.chooseDate(e),class:this.getStyleClass(e)},this.getLabel(e.date),t("span",{class:"circle"},this.getLabel(e.date)))):null;return t("ul",{class:"date-list"},e)}static get is(){return"date-item-list"}static get properties(){return{dataItemConfig:{type:"Any",attr:"data-item-config",watchCallbacks:["checkStyle"]},dateItemList:{type:"Any",attr:"date-item-list"},dateItemListHost:{state:!0},DateItemListHTML:{elementRef:!0}}}static get events(){return[{name:"startDateSelectedEvent",method:"startDateSelectedEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"endDateSelectedEvent",method:"endDateSelectedEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"DateItemListEvent",method:"DateItemListEvent",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@keyframes Next{0%{opacity:0;transform:translateX(25%)}100%{opacity:1;transform:translateX(0)}}\@keyframes Previous{0%{opacity:0;transform:translateX(-25%)}100%{opacity:1;transform:translateX(0)}}.on-enter{animation-name:Next;animation-duration:.3s;display:block}.on-leave{animation-name:Previous;animation-duration:.3s;display:block}li{position:relative;width:14%;text-align:center;height:46px;line-height:46px}li .circle{display:none;background:#0088ce;color:#fff;border-radius:90px;position:absolute;top:0;bottom:0;width:46px;left:50%;transform:translateX(-50%)}li.inactive{opacity:.2}li.current{color:#0088ce}li.isBetween{color:#ef8e36}li.selected .circle{display:block}"}}export{s as DateItemList};