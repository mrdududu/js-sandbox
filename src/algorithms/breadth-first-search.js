class Node {
  constructor(value) {
    this.parent = null
    this.value = value
    this.children = []
  }

  addChildren(...nodes) {
    // console.log('test', nodes)
    nodes.forEach(node => {
      node.setParent(this)
      this.children.push(node)
    })
  }

  setParent(node) {
    this.parent = node
  }

  find(val) {
    const queue = [this]
    while (queue.length) {
      const node = queue.shift()
      if (node.value === val) return node

      queue.push(...node.children)
    }

    return null
  }
}

const myTree = new Node('Root')
const node2 = new Node('Node 2')
const node3 = new Node('Node 3')
const node4 = new Node('Node 4')
const node5 = new Node('Node 5')
myTree.addChildren(node2, node3, node4)
node4.addChildren(node5)

const res = myTree.find('Node 3')

console.log(myTree)
console.log('res', res)
