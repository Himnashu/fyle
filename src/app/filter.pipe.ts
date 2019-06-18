import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterstring : string , city :string): any {
    console.log(filterstring);
    if(value.length === 0   || filterstring===''){
      return value;
     }
    
     const resultarray = [];
     console.log(resultarray);
    for(const item of value){
      if(item.city==filterstring){
       resultarray.push(item);
      }
    }
    console.log(resultarray);
    return resultarray;
  
}

}
