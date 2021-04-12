/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let temp = l;

  if (temp === null) {
    return temp;
  }

  while (temp.value === k) {
    temp = temp.next;
  }

  let currentNode = temp;
  let nextNode = currentNode.next;

  while (nextNode != null) {
    if (nextNode.value === k) {
      currentNode.next = nextNode.next;
      if (currentNode.next === null) {
        break;
      }
    }
    currentNode = currentNode.next;
    nextNode = currentNode.next;
  }
  return temp;
}

module.exports = removeKFromList;
