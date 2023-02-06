const assert = require('assert')

class Graph {

    constructor(dotsCount) {
        this.dotsCount = dotsCount;
        this.adjacencyList = [];
    }

    addDot(dotI, dotJ, weight) {
        this.adjacencyList[dotI] = this.adjacencyList[dotI] || []
        this.adjacencyList[dotI].push({
            connected: dotJ,
            weight
        })
    }
}

function sort(graph) {

    const dotsSorted = [];
    const visited = new Array(graph.dotsCount).fill(false)

    function sortVertex(v) {
        visited[v] = true;

        for (const j in graph.adjacencyList[v]) {
            const k = graph.adjacencyList[v][j];

            if (visited[k.connected]) {
                break
            }

            sortVertex(k.connected);
        }

        dotsSorted.push(v);
    }

    for (let i = 0; i < graph.dotsCount; i++)
        if (visited[i] == false) {
            sortVertex(i, visited, dotsSorted);
        }

    return dotsSorted
}

function solve(dotIndex, graph) {

    const dotsSorted = sort(graph)
    let distances = new Array(graph.dotsCount).fill(Number.MIN_VALUE);
    distances[dotIndex] = 0;

    // find distances in topological order
    while (dotsSorted.length) {

        let vertex = dotsSorted.pop();

        if (distances[vertex] != Number.MIN_VALUE) {
            for (let j in graph.adjacencyList[vertex]) {
                let i = graph.adjacencyList[vertex][j];
                if (distances[i.connected] < distances[vertex] + i.weight) {
                    distances[i.connected] = distances[vertex] + i.weight;
                }
            }
        }
    }

    return Math.max(...distances)
}

const graph0 = new Graph(8)

graph0.addDot(0, 6, 2);
graph0.addDot(1, 2, -4);
graph0.addDot(1, 4, 1);
graph0.addDot(1, 6, 8);
graph0.addDot(3, 0, 3);
graph0.addDot(3, 4, 5);
graph0.addDot(5, 1, 2);
graph0.addDot(7, 0, 6);
graph0.addDot(7, 1, -1);
graph0.addDot(7, 3, 4);
graph0.addDot(7, 5, -4);

assert.strictEqual(solve(1, graph0), 8)

const graph1 = new Graph(5)

graph1.addDot(0, 2, 3);
graph1.addDot(1, 3, 6);
graph1.addDot(1, 2, 2);
graph1.addDot(2, 4, 4);
graph1.addDot(2, 3, 7);
graph1.addDot(3, 4, -1);

assert.strictEqual(solve(1, graph1), 9)

console.log('done')