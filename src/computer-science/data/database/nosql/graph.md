---
aliases: []
tags: []
---

# Graph

A [graph database](https://wikipedia.org/wiki/graph_database) is suited to follow relations between objects. Data represented as a node with hierarchical relationships. It is complex to build and its architecture is modular.

*Usages: social networks, location-based services, recommendation systems, etc.*

*Examples: [Neo4j](https://wikipedia.org/wiki/neo4j), [OrientDB](https://wikipedia.org/wiki/orientdb)*

## Structure

$G=(V,E)$

The graph $G$ contains:

- Vertices $V$: a node of the graph
- Edges $E$: a directed or undirected link between two nodes

### Adjacency matrix

An [adjacency matrix](https://wikipedia.org/wiki/adjacency_matrix) helps to quickly look up a single edge and allows for quick addition of edges.

The graph must be (almost) complete and it can cost performance depending on its size.

**Performances**

$n$ is the number of vertices

- Browse a row or a column of the matrice (adjacent node/edge): $O(n)$
- Store the matrix: $O(n^2)$
- Browsing all edges of the graph: $O(n^2)$

### Adjacency list

An [adjacency list](https://wikipedia.org/wiki/adjacency_list) provides quick lookup of one vertex and allows for quick addition of new edges and vertices. However, searching for a single edge requires traversing the entire list.

**Performances**

$_n$ is the number of vertices
$m$ is the number of edges

- Store the lists: $O(n+m)$ 
- Browse all vertices of the graph: $O(n+m)$
- Check if $(v_1,v_2)$ is a vertice: $O(\deg(v_i))$
- Browse adjacent vertices of $v_i$ : $O(\deg(v_i))$

## Algorithms

- Find if path exists between 2 nodes
	- Directed graphes: Tarjan, Kosaraju
	- Undirected graphes: DFS, BFS 
- Find shortest path between 2 nodes
	- Bellman-Ford
	- Dijkstra (positive weights only)
- Connect all vertices together with edges subsets (MST)
	- Kruskal