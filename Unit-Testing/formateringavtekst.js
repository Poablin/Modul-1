function fixText(text) {
   var trimmed = text.trim()
   var firstOnString = trimmed.slice(0, 1).toUpperCase();
   var restOnString = trimmed.slice(1).toLowerCase()
   
   return firstOnString + restOnString;
   
   
 
 
}
