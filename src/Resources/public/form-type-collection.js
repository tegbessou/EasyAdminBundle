(()=>{var e=function(e){document.querySelectorAll("button.field-collection-add-button").forEach((function(e){var o=e.closest("[data-ea-collection-field]");o&&!o.classList.contains("processed")&&(t.handleAddButton(e,o),t.updateCollectionItemCssClasses(o))})),document.querySelectorAll("button.field-collection-delete-button").forEach((function(e){e.addEventListener("click",(function(){var o=e.closest("[data-ea-collection-field]");e.closest(".field-collection-item").remove(),document.dispatchEvent(new Event("ea.collection.item-removed")),t.updateCollectionItemCssClasses(o)}))}))};window.addEventListener("DOMContentLoaded",e),document.addEventListener("ea.collection.item-added",e);var t={handleAddButton:function(e,o){e.addEventListener("click",(function(){var e=o.classList.contains("field-array"),l=parseInt(o.dataset.numItems),c=l,i=this.parentElement.querySelector(".collection-empty");null!==i&&(i.outerHTML=e?'<div class="ea-form-collection-items"></div>':'<div class="ea-form-collection-items"><div class="accordion"><div class="form-widget-compound"></div></div></div>');var n=o.dataset.formTypeNamePlaceholder,a=new RegExp(n+"label__","g"),s=new RegExp(n,"g"),d=o.dataset.prototype.replace(a,c).replace(s,c);o.dataset.numItems=l+1;var r=e?".ea-form-collection-items":".ea-form-collection-items .accordion > .form-widget-compound",m=o.querySelector(r);if(m.insertAdjacentHTML("beforeend",d),!e){t.updateCollectionItemCssClasses(o);var u=m.querySelectorAll(".field-collection-item"),f=u[u.length-1];f.querySelector(".accordion-button").classList.remove("collapsed"),f.querySelector(".accordion-collapse").classList.add("show")}document.dispatchEvent(new Event("ea.collection.item-added"))})),o.classList.add("processed")},updateCollectionItemCssClasses:function(e){if(null!==e){var t=e.querySelectorAll(".field-collection-item");t.forEach((function(e){return e.classList.remove("field-collection-item-first","field-collection-item-last")}));var o=t[0];if(void 0!==o){o.classList.add("field-collection-item-first");var l=t[t.length-1];void 0!==l&&l.classList.add("field-collection-item-last")}}}}})();