---
aliases: [ANN, Artifical Neural networks, CNN, Convolution Neural Network]
---

# Neural networks

**Types**
- Discriminative ANN: [supervised learning](../computer-science/machine-learning/supervised/supervised.md) (e.g recognition tasks)
- Generative ANN: [unsupervised learning](../computer-science/machine-learning/unsupervised/unsupervised.md)

## Convolution Neural Network

- Fonctionne pour toutes donnée qui a une corrélation spatio-temporel
	- e.g. où l'ordre des données est importante
		- → piste audio, texte, image, …
	- pas utile dans le cadre de données dont l'ordre n'a pas d'importance
		- → colonnes avec "age, genre, taille, poids, etc."
- Matrice de coefficients
- Some pondérée de poids x des entrées
	- xi = coordoonées du kernel dans l'image
	- wi = le kernel
	- x1w1+x2w2+x3w3 … = $\sum wixi$
- Sur une image, permet p.ex de:
	- Détecter les bords, courbes
	- Floutter, réduire, "résumer" l'image 
- Détection de spécificités de l'image → features de l'image (pattern detector)
- Un ou plusieurs noyaux (kernels) de convolution pour faire ressortir les caractéristiques de l'image
https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53

## Couches

- de couches ≠ + de paramètres
	- Example → pooling: réduit la taille des images, induisant - de paramètres
	- ![](https://miro.medium.com/v2/resize:fit:792/1*uoWYsCV5vBU8SHFPAPao-w.gif)
- Backpropagation
	- Mise à jour des poids, mais ça peut se faire que sur les dernière couches → on gèle les poids synaptiques de la première couche
- Padding
	- ![](https://miro.medium.com/v2/resize:fit:790/1*nYf_cUIHFEWU1JXGwnz-Ig.gif)

### Quadrants

- Top-left: large dataset, but different from pre-tranined model's dataset
	- All dataset is re-trained
- Top-right: large dataset, similar to the pre-trained model's dataset
- Bottom-left: small dataset, different from pre-trained model's dataset
- Bottom-right: small dataset, similar to pre-traine last layer are re-trained

### Pre-trained CNN & Architectures

- Object recognition
	- VGGs, ResNets, Inceptions, DenseNets
	- MobileNet (light model for embedded systems)
- Face recognition
	- VGG-Face
- Object localization
	- Mask R-CNN, YOLO, SSD
- Semantic, OpenPose
- X-Ray diagnosis
	- CheXNet

## Object detection

Phase 1: réduire la dimension → encodeur
- Convolution avec stride + pooling
- Output → vecteur latent
Phase 2: Augmentation de la dimension → décodeur
- Convolution transposée
- Construit des masques de segmentation

![](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*LH_JiIJngSllUZ0F8JYcwQ.png)

https://towardsdatascience.com/understanding-u-net-61276b10f360

### R-CNN

*R!
Extract Region Of Interest (ROI) and warped regions to detect object
- Faster R-CNN (250x faster)
https://towardsdatascience.com/r-cnn-fast-r-cnn-faster-r-cnn-yolo-object-detection-algorithms-36d53571365e

### YOLO

*You On ch cell has bounding boxes (bbox)
- Network predict class probability and shift between bbox
- Select boxes with high probability (> x)

## Semantic Segmentation

- Utilisation d'un décodeur pour calcul du masque
- Définit pixel par pixel si correspond à la classe

## En 3D

- Voxel
	- Création d'une grille régulière (une image, comme en 3D)
	- Et donc possibilité de faire du CNN (convolutions en 3D plutôt qu'en 2D)
	- Très inefficace car data très lourde
- Mesh (ensemble de triangles)
- Nuage de points

## Resources

- [poloclub.github.io/cnn-explainer](https://poloclub.github.io/cnn-explainer/) – CNN explainer