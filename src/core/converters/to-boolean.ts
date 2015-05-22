/**
 * Created by Alex on 21/05/2015.
 */
export interface IBooleanConversionParameters{
  invert?: boolean;
}
export class toBooleanValueConverter{
  public toView(value: any, options: IBooleanConversionParameters){
    var boolValue: boolean;
    if(value == null || typeof value === "undefined")
      boolValue = false;
    else if(value instanceof Boolean)
      boolValue = <boolean>value;
    else if(value instanceof Number)
      boolValue = <number>value != 0;
    else if (typeof value === "string")
      boolValue = (<string>value).length > 0;
    else if(value instanceof Array)
      boolValue = (<any>value).length > 0;
    else
      boolValue = true;
    return this.applyOptions(boolValue, options);
  }

  private applyOptions(value: boolean, paramters:IBooleanConversionParameters): boolean{
    if(paramters != null){
      if(paramters.invert)
        value = !value;
    }
    return value;
  }
}
