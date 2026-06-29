/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */


    // can it be null/empty/undefined
    // assuming there will be only ints positive
    
    mergeTwoLists(list1, list2) {
        const array = []

        let current = list1
        while(current){
            array.push(current.val)
            current = current.next
        }

        current = list2
        while(current){
            array.push(current.val)
            current = current.next
        }

        array.sort((a,b) => a - b)

        if(!array.length){
            return null
        }

        let head = new ListNode(array[0], null)
        let currentNode = head
        

        for(let i = 1; i<array.length; i++){
            let node = new ListNode(array[i], null)
            currentNode.next = node
            currentNode = currentNode.next
        }

        return head

    }
}
