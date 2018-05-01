const onesGroup = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const teensGroup = [" ", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
const tensGroup = [" ", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
const hundredsGroup = [" ", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]

function countFunction() {
    let numbers = " ";
    for (let h = 0; h < hundredsGroup.length; h++) {
        for (let t = 0; t < tensGroup.length; t++) {
            for (let o = 0; o < onesGroup.length; o++) {
                if(t===1 && o!==0 ){
                    numbers += ":"+hundredsGroup[h] + teensGroup[o] +" ";
                }else
                    numbers += ":" + hundredsGroup[h] + tensGroup[t] + onesGroup[o] + " ";
                }
            }

        }
    return numbers;
}
document.write(countFunction())