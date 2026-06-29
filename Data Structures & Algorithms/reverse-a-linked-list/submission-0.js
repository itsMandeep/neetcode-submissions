/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // only intss or strings or any other type can be there
        // can value null or empty or undefined

        // algo
        // head -> 0 -> 1 ->  2 ->  3 -> null
        // null <- 0 <- 1 <- 2 <- 3 <- head

        // keep 3 pointers
        // current = head
        // prev = null
        // next = null

        // untill we find current to be null
        // repeat below
        // first save next pointer
        // next = current.next
        // current.next  = prev
        // prev = current
        // current = next

        console.log(head);

        // if(head === null){
        //     return head
        // }

        // let currentNode = head
        // let prevNode = null
        // let nextNode = null

        // while(currentNode){
        //     nextNode = currentNode.next
        //     currentNode.next = prevNode
        //     prevNode = currentNode
        //     currentNode = nextNode
        // }

        // head = prevNode

        // return head

        let prev = null;
        let current = head;

        while (current) {
            [current.next, prev, current] = [prev, current, current.next];
        }

        return prev;
    }
}
