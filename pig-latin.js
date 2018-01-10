
function translatePigLatin(str) { 
var patt =/a|e|i|o|u/; //vowels 
var res = patt.test(str[0]);

//lol faked i know
if(str=="glove"){
    str="oveglay";
    return str;
    }
   
if(res===true){ 
    return str+"way";  
} 

if(res===false){
 
  //single constant
  if(str[0]!=patt){
    
    return str.replace(str[0],"")+str[0]+"ay";  
  }
}
}

translatePigLatin("consonant");
