//1. Write a function that can print any random number between any two given numbers (including them)?
const numbers = [1,2,3,4,5,6];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  
//2. How can you order roll numbers of students in your class sequentially?
  const rollNunber = [2,4,7,6,5,1,3];
    rollNunber.sort(ass);
    function ass(a,b){
      return (a-b);
  }
      document.getElementById("srnum").innerHTML =  rollNunber.sort(ass);

//3. How can you order names of students in your class sequentially?

    const stName = ["Moon", "Nuri", "Tutul", "Sumit", "Audity","Chumki"];
      stName.sort();
      document.getElementById('stName').innerHTML =  stName.sort();

//4. Write a function that can tell us whether an year is a leap year or not.
    function isLeapYear(year){
      if(year%400===0 && year%100===0 ||year%4===0){
        document.getElementById("leapYear").innerHTML = `${year} is leap year`;
      }else{
        document.getElementById("leapYear").innerHTML = `${year} is not leap year`;
      }
    }
    isLeapYear(2025);
      
//5. How would you determine the number of vowels in a sentence?
const vowels = ["a","e","i","o","u","A","E","I","O","U"];
    function countSentence(sentence){
      const arry = Array.from(sentence);
      let count = 0;
      arry.forEach(countVowels);
      function countVowels(value,index,array){
        if(vowels.includes(value)){
          count++;
        }  
      }
      return count++;
    }
    countSentence("I love you");
    document.getElementById("vowel").innerHTML = countSentence("I love you");

//6. How would you extract the duplicate numbers in an array?
    const dupNum = [1,2,3,4,1,3,5,7];
    dupNum.filter(extract);
    function extract(value,index,array){
      return dupNum.indexOf(value)!==index; 
      }
      document.getElementById("dp").innerHTML =  dupNum.filter(extract);
    

//7. How would you extract the unique numbers in an array?

    const unNum = [1,2,3,4,1,3,5,7];
    unNum.filter(unique);
    function unique(value,index,array){
      return unNum.indexOf(value)===index; 
      }
      document.getElementById("un").innerHTML =  unNum.filter(unique);








