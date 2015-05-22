export class toBooleanValueConverter {
    toView(value, options) {
        var boolValue;
        if (value == null || typeof value === "undefined")
            boolValue = false;
        else if (value instanceof Boolean)
            boolValue = value;
        else if (value instanceof Number)
            boolValue = value != 0;
        else if (typeof value === "string")
            boolValue = value.length > 0;
        else if (value instanceof Array)
            boolValue = value.length > 0;
        else
            boolValue = true;
        return this.applyOptions(boolValue, options);
    }
    applyOptions(value, paramters) {
        if (paramters != null) {
            if (paramters.invert)
                value = !value;
        }
        return value;
    }
}
//# sourceMappingURL=to-boolean.js.map