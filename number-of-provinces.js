const assert = require('assert')

/* There are n cities. Some of them are connected, while some are not.
 If city a is connected directly with city b, and city b is connected
directly with city c, then city a is connected indirectly with city c.
A province is a group of directly or indirectly connected cities and
 no other cities outside of the group.
You are given an n x n matrix isConnected where
isConnected[i][j] = 1 if the ith city and the jth
city are directly connected, and isConnected[i][j] = 0 otherwise.
Return the total number of provinces.
 */


//M[i][j] == M[j][i]
var findCircleNum = function (M) {

    function find(nodes, i) {
        if (nodes[i] == -1)
            return i

        return find(nodes, nodes[i])
    }

    function union(nodes, i, j) {
        const node = find(nodes, i)
        const parent = find(nodes, j)

        if (node != parent)
            nodes[node] = parent;
    }

    // graph node is index, it's parent is value
    const nodes = new Array(M.length).fill(-1)

    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M.length; j++) {
            if (M[i][j] === 1 && i !== j && M[i][j] === M[j][i]) {
                union(nodes, i, j)
            }
        }
    }

    // node without parent it's parent itself
    // number of parent nodes = number of groups
    return nodes.filter(el => el === -1).length
}

//  [1, -1, -1]
assert.equal(findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
]), 2)

// single standing city is group also
assert.equal(findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]), 3)




