/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Input: head = [1,2,3,4,5]
   Output: [3,4,5]
   Explanation: The middle node of the list is node 3.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    a = new ListNode(null)
    b = new ListNode(null)
    a = head
    b = head
    
     while(b && b.next){
        a = a.next
        b = b.next.next
     }
     console.log(b)
     return a
 };