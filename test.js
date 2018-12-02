function dig(obj,target){
  for(var key in obj){
    if(key===target){
      console.log(obj[key]);
    }
    else{
      if(obj[key] instanceof Object)
      dig(obj[key],target);
      else {
        if(obj[key] instanceof Object)
        dig(obj[key],target);
        else{console.log(undefined);
        }  
      }
    }
  }
}


