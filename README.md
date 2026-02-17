## 1) What is the difference between null and undefined?
**Answer:**  
Null বোঝায় যে কোনো value নেই (ইচ্ছাকৃতভাবে empty রাখা হয়েছে), আর undefined বোঝায় variable declare করা হয়েছে কিন্তু কোনো value assign করা হয়নি।

## 2) What is the use of the map() function in JavaScript? How is it different from forEach()?
**Answer:**  
map() function ব্যবহার করা হয় যখন আমরা original array পরিবর্তন না করে একটি নতুন array তৈরি করতে চাই। forEach() function কোনো কিছু return করে না, কিন্তু map() function একটি নতুন array return করে।

## 3) What is the difference between == and ===?
**Answer:**  
'==' শুধুমাত্র value compare করে, কিন্তু '===' value এবং type দুটোই compare করে।

## 4) What is the significance of async/await in fetching API data?
**Answer:**  
এটি regular fetch এর মতো chaining কমায় এবং program-কে API response এর জন্য wait করতে দেয়, যাতে operations সঠিক order-এ execute হয়।

## 5) Explain the concept of Scope in JavaScript (Global, Function, Block)
**Answer:**  

**Global Scope** - যেসব variable কোনো function এর বাইরে declare করা হয়, সেগুলো program এর যেকোনো জায়গা থেকে access করা যায়।  

**Function Scope** - যেসব variable function এর ভিতরে declare করা হয়, সেগুলো শুধুমাত্র ওই function এর ভিতরেই access করা যায়।  

**Block Scope** - যেসব variable কোনো block {} এর ভিতরে declare করা হয়, সেগুলো শুধুমাত্র ওই block এর ভিতরেই access করা যায়।
