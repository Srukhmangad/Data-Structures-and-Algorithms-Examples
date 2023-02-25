function palindrome(str,l){
var  stack = [];
var midValue = parseInt(l/2);
var i ;
for(i= 0; i<midValue;i++){
    stack.push(str[i]);

    }
    if(l%2!=0){
        i++;
}
while(i!=l){
    var item = stack[stack.length-1];
    stack.pop();
    if(item!=str[i]){
        return false;
    }
    i++;

}
return true;
}

var str = "12344321";
var l = str.length;
console.log(palindrome(str,l));



