const startOfLayers: any = {
    x: 80,
    y: 80
}

const layerDefaultSize: any = {
    x: 40,
    y: 40
}

export const indexLayer: any = {
    startX: startOfLayers.x,
    startY: startOfLayers.y - layerDefaultSize.y,
    gridWidth: layerDefaultSize.x,
    gridHeight: layerDefaultSize.y
}

export const stackLayer: any = {
    gridWidth: layerDefaultSize.x,
    gridHeight: layerDefaultSize.y,
    startX: indexLayer.startX + indexLayer.gridWidth,
    startY: startOfLayers.y
}

export const pointerLayer: any = {
    gridWidth: layerDefaultSize.x,
    gridHeight: layerDefaultSize.y,
    startX: stackLayer.startX + stackLayer.gridWidth,
    startY: startOfLayers.y - layerDefaultSize.y,
    imageWidth: 24,
    imageHeight: 24,
    fontSize: 24,
    offset: 5
}