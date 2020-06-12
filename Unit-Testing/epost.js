function emailTest(eMail) {
   var indexAt = eMail.indexOf('@');
   var indexSpace = eMail.indexOf(' ');
   var indexDot1 = eMail.indexOf('.@');
   var indexDot2 = eMail.indexOf('@.')
   var correctEmail = '';
   
   if (indexAt > 0 && indexSpace < 0 && indexDot1 > 0 && indexDot2 > 0) {
    correctEmail = 'True';
   } else {
    correctEmail = 'False';
   } return correctEmail;
}