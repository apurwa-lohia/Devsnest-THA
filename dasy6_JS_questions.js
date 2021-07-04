// 1.)  Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True
                        // var a='w3resource';
                        // var b=[1, 2, 4, 0];
                        // console.log(Array.isArray(a));

        // // 2.)Write a JavaScript function to clone an array
        // // Test Data :
        // // console.log(array_Clone([1, 2, 4, 0]));
        // // console.log(array_Clone([1, 2, [4, 0]]));
        // // [1, 2, 4, 0]
        // // [1, 2, [4, 0]]
                        // var a=[1, 2, 4, 0];
                        // var b=[1, 2, [4, 0]];
                        // console.log(a.slice(0))
                        // console.log(b.slice(0))

// 3.)Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []                      //?????????????????????????//
                            var a=[7, 9, 0, -2];
                            var b={[],3};
                            var c={[7, 9, 0, -2],3};
                            var d={[7, 9, 0, -2],6};
                            var e={[7, 9, 0, -2],-3};
                            console.log(a(0));
                            console.log(b(0));
                            console.log(c(0));
                            console.log(d(0));
                            console.log(e(0));

// 4.)Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
                                        var a=["Red", "Green", "White", "Black"];
                                        console.log(a.join(","));
                                        console.log(a.join(","));
                                        console.log(a.join("+"));



// 5.) Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
arr1[]=sort.arr1[];
var c=0;var d=0;var i=1;
while(i<=arr1.length()){
      if(arr1[i]===arr1[(i+1)]&&(c>=d))
   {c++;i++;
   }
   else{d=c;i++;
        continue;}
}
  console.log(c);
   
}
