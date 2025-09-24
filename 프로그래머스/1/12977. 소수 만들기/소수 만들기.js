function solution(nums) {
    let count = 0;

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function combine(start, depth, sum) {
        if (depth === 3) {
            if (isPrime(sum)) count++;
            return;
        }
        for (let i = start; i < nums.length; i++) {
            combine(i + 1, depth + 1, sum + nums[i]);
        }
    }

    combine(0, 0, 0);
    return count;
    
    // return combination(nums, 3);
}
    
  

// function combination(arr, n) {
//   let cnt = 0;
//   function backtrack(tmp, start) {
//     if (tmp.length === n) {
//       let sum = tmp.reduce((acc, cur) => acc + cur, 0);
//       if (prime(sum)) cnt++;
//       return;
//     }
//     for (let i = start; i < arr.length; i++) {
//       tmp.push(arr[i]);
//       backtrack(tmp, i + 1);
//       tmp.pop();
//     }
//   }
//   backtrack([], 0);
//   return cnt;
// }

// function prime(number) {
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }

