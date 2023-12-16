---
aliases: [Satellite imagery]
tags: []
---

# Remote Sensing

[Remote sensing](https://wikipedia.org/wiki/remote_sensing) is the acquisition of something (e.i, object, phenomenon, etc) without having physical contact with it. It is notably used in environment and geography analysis, land planning, etc.


Big factors used in remote sensing
- 5000+ satellites orbiting Earth in total, with 3500+ used for communication and 1000+ for observation.

## Orthophoto

[Orthophoto](https://wikipedia.org/wiki/orthophoto)
- Orthorectification: correct image so elements in the map can be correctly measured
- can supperpose to a map

### Calcul colinearity

https://wikipedia.org/wiki/Collinearity_equation

Colineraity
1. Axe Y = south/north, Axe X = east/west. Axe z = altitude → permet de définir point M
2. Associate 1 pixel to a distance → 1 pixel = 10cm

**Modèle 3D**

If the drone take photo that "shift" a bit and take the surface of a building rather than the plain roof. Some stuff need to be 3d modelize to avoid them to be "merged" in the landscape.

MNS: model numerique de Surface
- Prend en compte le modèle 3d de l'objet

MNT: " " de Terrain
- Coute moins cher à produire
- Plus facile, moins complexe
- Convient pour des faibles résolutions (ex. 1 pixel = 100m) → car si les batiments sont shifted, c'est pas si gave.

## Resolutions

### Temporal resolution

Amount of time (e.g days) that passes between imagery collection periods for a given surface location

https://www.atlasai.co/learn/what-is-temporal-resolution

### Spectral resolution

https://medium.com/remote-sensing-in-agriculture/hyperspectral-imaging-in-agriculture-opportunities-benefits-and-future-perspectives-ba112d2b741a

wavelength: 400-800 nanomètres (nm) = spectre visible

- Hyperspectral: 
- Multispectral: example avec la plante verte vs. en plastique → proche-infrarouge permet de les déterminer
- RGB
- Atmosphère laisse passer certaines longueurs d'ondes électromagnétiques (dont la lumière)…
- … ce qui permet aussi d'observer l'atmosphère (par example autour de 1400 nm)

### Processing levels

- Level 1C: ortho-rectified, top of the atmosphere (can see cloud and stuff)
- Level 2A: ortho-rectified, surface reflectance (color-rectified, more natural color of terrain) → mask clouds, cloudshades, snow, water
- Level 3A: monthly ortho-rectified synthesis of non-cloudy pixels from level 2A

## Indices

- [NDVI](https://wikipedia.org/wiki/normalized_difference_vegetation_index) – Normalized difference vegetation index
- [NDWI](https://wikipedia.org/wiki/normalized_difference_water_index) – Normalized Difference Water Index

## Tools

- https://earthexplorer.usgs.gov/
- https://earthengine.google.com/
- https://www.opendatacube.org/
- https://scihub.copernicus.eu


---
