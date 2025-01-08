"use strict";

function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
    const regex = /\{\{(.*?)\}\}/g;

    let filledStr = this.template.replace(regex, (_, group) => {
        return dictionary[group] !== undefined ? dictionary[group] : "";
    })
    return filledStr;
}