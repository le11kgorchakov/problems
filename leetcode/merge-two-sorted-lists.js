/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//     let temp;
//     // const res = (list2 + ',' + list1).split(',')
//     const res = [].concat(list2, list1)

//     for (let i = 0; i < res.length; i++) {
//         for (j = i + 1; j < res.length; j++) {
//             if (res[i] > res[j]) {
//                 temp = res[j];
//                 res[j] = res[i];
//                 res[i] = temp
//             }
//         }
//     }
//     return res
// };
// var mergeTwoLists = function(list1, list2) {
//     let i = 0, j = 0;
//     var out = [];
//     while(i < list1.length || j < list2.length) {
//       if(j == list2.length || i < list1.length && list1[i] < list2[j]) {
//         out.push(list1[i++]);
//       } else {
//         out.push(list2[j++]);
//       }
//     }
//     return out;
//   };

var mergeTwoLists = function(l1, l2) {
    var dummy = {
      val : -1,
      next : null
    };
    var curr = dummy;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            curr.next = l2;
            l2 = l2.next;
        } else {
            curr.next = l1;
            l1 = l1.next;
        }
        curr = curr.next;
    }
    
    curr.next = l1 || l2;

    return dummy.next;
}
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))