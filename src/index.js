module.exports = function zeros(expression) {
  let mas_number_once = [];
  let mas_number_double = [];

  let massiv_word = [];
  massiv_word = expression.split('*');
  for(let a = 0 ; a < massiv_word.length ; a++)
  {   let ind = 0;
      for (let k = 0 ; k < massiv_word[a].length ;k++)
      {
         if(massiv_word[a][k] ==="!")
         {
             ind++;
         }
      }
      if(ind == 1)
      {
          mas_number_once.push(parseInt(massiv_word[a]));
      }else
      {
          mas_number_double.push(parseInt(massiv_word[a]));
      }
  }

  let count = 0;
/*Р Р°СЃС‡РµС‚ РіРґРµ !*/


  let result_once = BigInt(1);
  for (let m = 0; m < mas_number_once.length ;m++) {
      let result =BigInt(1);
      for (let i = 1; i <= mas_number_once[m]; i++) {
          result = result * BigInt(i);
      }
      result_once = result_once*result;
  }

  /*Р Р°СЃС‡РµС‚ РіРґРµ !!*/
  let result_double = BigInt(1);
 for (let h = 0; h < mas_number_double.length ;h++)
 {
     let result2 = BigInt(1);
     if((mas_number_double[h]%2)==0)
     {
         for (let u = 2; u <= mas_number_double[h]; u=u+2) {
             result2 = result2 * BigInt(u);
         }
     }
     else if ((mas_number_double[h]%2)!=0)
     {
         for (let z = 1; z <= mas_number_double[h]; z=z+2) {
             result2 = result2 * BigInt(z);
         }
     }
     result_double=result_double*result2;
 }




  let end = (BigInt((result_once*result_double))).toString(10);
      for (let j = end.length-1 ; 0 <=j  ;j--)
      {
        if(end[j]==="0")
        {
            count++;
        }
        else if(end[j]==='1' || end[j]==='2' || end[j]==='3' || end[j]==='4' || end[j]==='5' || end[j]==='6' || end[j]==='7' || end[j]==='8' || end[j]==='9')
          {
              break;
          }
      }
return count;
}
