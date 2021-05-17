/*

1)
Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.
*/
;((n1, n2) => n1 === n2 ? (n1 + n2) * 3 : (n1 + n2))()
/*
2)
Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.
*/
;((n1, n2) => (n1 === 50 || n2 === 50) || n1 + n2 === 50)()
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
;((string, pos) => {
        string = [...string];
        string.splice(pos + 1, 1);
        string = string.join('');
        return string;
    }
)()

/*
4)
 Create a function to find the largest of three given integers.
*/
;((n1, n2, n3) => Math.max([n1, n2, n3]))()
/*

5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
;((n1, n2) => {
    n1 >= 40 && n1 <= 60 &&
    n2 >= 40 && n2 <= 60
        ? '40-60'
        : n1 >= 70 && n1 <= 100 &&
        n2 >= 70 && n2 <= 100
        ? '70-100'
        : 'no ranges'
})()
/*
6)
Create a function that creates and returns the specified number of copies of a given string (positive number).
*/
;((str, n) => {
    return [].fill(str, 0, n);
})();
/*
7)
Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.
*/
;(str => !!str.match(/^(Los)/) || !!str.match(/^(New)/) ? str : '')();
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
;(arr => arr.reduce((a, item) => a += item))()
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3.
*/
;(arr => !!arr.find(item => item === 1) || !!arr.find(item => item === 3))()
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
;(arr => !arr.find(item => item === 1) && !arr.find(item => item === 3))()
/*
11)
Create a function to find the longest string from a given array of strings.
*/
;(arr => arr.reduce((a, item) => a = item.length > a.length ? item : a, ''))()
/*
12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
;(angle =>
        0 < angle && 90 > angle
            ? 'Acute'
            : 90 === angle
            ? 'Right'
            : 90 < angle && 180 > angle
                ? 'Obtuse'
                : 90 === angle
                    ? 'Straigh'
                    : 'Angle is 0 ?'
)()
/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
;( arr => {
    ;(arr => arr.reduce( (a, item, index) => a = item > a.item ? { item, index } : a , { item: 0 , i: 0 } ))()
})()
/*
14)
Create a function to get the largest even number from an array of integers.
*/
;(arr => arr.filter( item => item % 2 === 0).reduce( (a, item, index) => a = item>a ? item : a , Number.MIN_SAFE_INTEGER ) )()
/*
15)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
( (n1,n2) => n1 > 0 || n2 < 0 )(  )
/*
16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)
Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/