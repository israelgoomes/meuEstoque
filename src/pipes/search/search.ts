import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    //console.log('Termos', terms)
    try {
      terms = terms.toString().toLowerCase();
      console.log(terms)

      return items.filter( it => {
        if(it.name != undefined){
        return JSON.stringify(it.name).toLowerCase().includes(terms);
        } else {
          return JSON.stringify(it.tituloProjeto).toLowerCase().includes(terms);
        }
      });  
    } catch (error) {
      console.log('Erro no pipe search',error)
    }
    
  }

}