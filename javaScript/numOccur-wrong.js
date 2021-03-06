/*
  Counting Occurrences of a Character in a String
  • Let's design a recursive method called numOccur().
  • numOccur(ch, str) should return the number of times that
    the character ch appears in the string str
  • Thinking recursively:
 */

var numOccur = function(ch, str) {
  //corner case
  if (ch === null || ch === '' || str === null || str === undefined ) {
    return 0;
  }
  
  var count = 0;

  function helper(ch, str,count){
      //base case
      if (str === '') {
        return count;
      }

      //recursive case
      if (ch === str[0]) {
        count + 1;
        helper(ch, str.substring(1), count);
      } else {
        helper(ch,str.substring(1),count);
      }
  }

 var result = helper(ch, str, count);

 return result;

};

numOccur('i','lili');