const assert = require('assert')

// space O(m)
// time O(m(n+Log(m)))

var kWeakestRows = function (mat, k) {

   let res = []
   let weight = 0

   for (let i = 0; i < mat.length; i++) {
      weight = mat[i].indexOf(0)

      res.push({ row: i, weight: weight >= 0 ? weight : Number.MAX_SAFE_INTEGER })
   }

   return res.sort((a, b) => a.weight - b.weight).slice(0, k).map(el => el.row)
}

assert.deepEqual(kWeakestRows(
   [[1, 1, 0, 0, 0],
   [1, 1, 1, 1, 0],
   [1, 0, 0, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 1, 1, 1]], 3
), [2, 0, 3])

assert.deepEqual(kWeakestRows(
   [[1, 0, 0, 0],
   [1, 1, 1, 1],
   [1, 0, 0, 0],
   [1, 0, 0, 0]], 2
), [0, 2])

assert.deepEqual(kWeakestRows(
   [[1,0],[0,0],[1,0]],2
), [1,0])