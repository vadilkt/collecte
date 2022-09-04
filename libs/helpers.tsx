 import { ErrorsType, LoadingType } from "./types";

 export const extractFromUrlQuery= (key) => {
  const pairs =  window.location.search.split("?")[1].split("&");
  console.log(pairs);
  let result = "";
  pairs.forEach(pair => {
    const arr = pair.split("=");
    if(arr[0] == key){
      result = arr[1];
    }
  })
  return result;
 }
 
 export const checkErrors = (errors: Record<string,string[]>):boolean => {
    const keys = Object.keys(errors);
    return  keys.length > 0
  }

  export const getErrors = (errors: Record<string,string[]>): string[] => {
    if( checkErrors(errors) ) {
      const result : string[] = [];
      for(let k in errors){
        errors[k].forEach( error  => {
          result.push(error)
        })
      }
      return result;
    }else{
      return [] // Return an empty array.
    }
  } 

  export const checkLoading = (loading: LoadingType, k:string) : boolean => {
    if(loading[k] == undefined){
      return false
    }else{
      return true
    }
  }

  export const createError = (key: string, error: string): ErrorsType  => {
    return {
      [key]: [error]
    }
  }

 
  export const createLoading = (key: string): LoadingType => {
    return {
      [key]: true
    }
  }

  export const closeLoading = (values: LoadingType, key:string) : LoadingType => {
    const output : LoadingType = {};
    for(let k in values){
      if( k != key){
         output[k] = values[k]
      }
    }
    return output;
  }

  export const catchError = (error,catcher: any) => {

    if(error.response == undefined){
      catcher(() => createError("server_error","Une erreur c'est produite. Veuillez ressayer plus tard."))
      return 0;
    }

    if(error.response.status == 422){
      catcher(() => error.response.data.errors);
    }else{
      catcher(() => createError("server_error","Une erreur c'est produite. Veuillez ressayer plus tard."))
    }
    
  }