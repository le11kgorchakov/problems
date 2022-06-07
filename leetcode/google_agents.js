/*
  Skyler wants to get auto insurance. When arriving at the insurance company, there are N agents (number 1 to N) serving nobody, 
  and M people have already arrived with the same demand. The company follows the rule of first arrived first served, and if more 
  than 2 agents can serve a customer at the same time, the customer will always choose the one with the smallest number. 
  For agents, each of them has a constant serving time that the ith agent will take T[i] minutes to serve a customer.

  Assume Skyler arrived at time 0, and all the agents are idle and start to serve the customers.

  How many minutes will Skyler wait before meeting with an agent?
*/

const timeCounter = (t, m) => {
  let res = 0
  let temp = Array.from({ length: t.length }, () => 0)
  let sorted = t.sort()
  let k = 0

  for (let i = 0; i < m; i++) {
      if (temp[k] >= 0) {
          temp[k] += sorted[k]
          k++
          if (k >= temp.length) k = 0
          temp
      }
      res = temp[k]
  }
  console.log(res)
}

timeCounter([2, 3, 1, 5], 5)


// T=0;   st = [0, 0, 0, 0]
//.      st = [2, 0, 0, 0]
//       st = [2, 3, 0, 0]
//       st = [2, 3, 1, 5]
//       st = [4, 3, 2, 5]