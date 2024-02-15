# Anomaly detection

- Point anomaly: une seule valeur anormale
	- 90° de température ambiante
- Collective anomaly: un ensemble de valeurs fait que c'est anormal
	- De 3° à 30° en 0.5 secondes
- Contextual anomaly: une valeur isolée ne peut être considérée comme anormale ou pas… besoin de mise en contexte
	- Example: 3° en été

**Approaches**

- Graphical & statistical based
	- Valeur anormale apparaissent dans des régions à faible probabilités (sur un graph par example)
	- c'est notamment le cas si la distribution des données n'est pas connue (si il y a beaucoup de dimensions par example)
- Distance based
	- Calcul du plus proche voisin (KNN)
- Information based
	- Irrégularités
- Auto-encoder based
- Deep Anomaly detection → with CNN
	
- Kolmogorov complexity
- Shannon's entropy
	- Calcul de l'entropie générée par chaque tâche/problème
- Kullback-Liebler
- Spectral anomaly detection → using PCA
