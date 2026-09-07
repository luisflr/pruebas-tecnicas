// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbersLinkedList(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let list: ListNode = new ListNode(0);
  let current: ListNode = list;
  let temp = 0;

  while (l1 !== null || l2 !== null || temp !== 0) {
    const firstValue = l1 !== null ? l1.val : 0;
    const secondValue = l2 !== null ? l2.val : 0;

    const result = firstValue + secondValue + temp;

    temp = Math.floor(result / 10);
    const unit = result % 10;

    current.next = new ListNode(unit);
    current = current.next;

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  return list.next;
}
