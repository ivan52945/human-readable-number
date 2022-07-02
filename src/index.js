module.exports = function toReadable(number) {
  const number_string_list_to_19 = [ "", "one",    "two",    "three",    "four",     "five",    "six",     "seven",      "eight",    "nine", 
                                      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",  "eighteen", "nineteen",
                                   ];

  const number_list_string_dozens = ["", "eleventy","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", ];

  function toReadable_1_99(number){ 
    if(number <= 19)  return number_string_list_to_19[number];
  
    return number_list_string_dozens[(number-number%10)/10] + ((number%10 != 0) ? (" " + number_string_list_to_19[number%10]) : (""));
  };

  if(number == 0) return "zero";

  if(number <= 99) return toReadable_1_99(number);

  let readable_number = ( ((number - number % 100) / 100 > 0) ? (number_string_list_to_19[(number-number%100)/100] + " hundred") : "" ) + 
                        ( ((number % 100) > 0) ? " " + toReadable_1_99(number%100) : "" );
                        

  return readable_number
}
