(()=>{var e=function(e){document.querySelectorAll("button.field-collection-add-button").forEach((function(e){var o=e.closest("[data-ea-collection-field]");o&&!o.classList.contains("processed")&&(t.handleAddButton(e,o),t.updateCollectionItemCssClasses(o))})),document.querySelectorAll("button.field-collection-delete-button").forEach((function(e){e.addEventListener("click",(function(){var o=e.closest("[data-ea-collection-field]");e.closest(".field-collection-item").remove(),document.dispatchEvent(new Event("ea.collection.item-removed")),t.updateCollectionItemCssClasses(o)}))}))};window.addEventListener("DOMContentLoaded",e),document.addEventListener("ea.collection.item-added",e);var t={handleAddButton:function(e,o){e.addEventListener("click",(function(){var e=o.classList.contains("field-array"),l=parseInt(o.dataset.numItems),c=this.parentElement.querySelector(".collection-empty");null!==c&&(c.outerHTML=e?'<div class="ea-form-collection-items"></div>':'<div class="ea-form-collection-items"><div class="accordion"><div class="form-widget-compound"></div></div></div>');var i=o.dataset.formTypeNamePlaceholder,n=new RegExp(i+"label__","g"),a=new RegExp(i,"g"),s=o.dataset.prototype.replace(n,l).replace(a,l);o.dataset.numItems=l+1;var d=e?".ea-form-collection-items":".ea-form-collection-items .accordion > .form-widget-compound",r=o.querySelector(d);if(r.insertAdjacentHTML("beforeend",s),!e){t.updateCollectionItemCssClasses(o);var m=r.querySelectorAll(".field-collection-item"),u=m[m.length-1];u.querySelector(".accordion-button").classList.remove("collapsed"),u.querySelector(".accordion-collapse").classList.add("show")}document.dispatchEvent(new Event("ea.collection.item-added"))})),o.classList.add("processed")},updateCollectionItemCssClasses:function(e){if(null!==e){var t=e.querySelectorAll(".field-collection-item");t.forEach((function(e){return e.classList.remove("field-collection-item-first","field-collection-item-last")}));var o=t[0];if(void 0!==o){o.classList.add("field-collection-item-first");var l=t[t.length-1];void 0!==l&&l.classList.add("field-collection-item-last")}}}}})();