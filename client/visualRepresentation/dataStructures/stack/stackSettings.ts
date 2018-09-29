const startOfLayers: any = {
    x: 40,
    y: 40
}

const layerDefaultSize: any = {
    x: 40,
    y: 40
}

export const indexLayer: any = {
    startX: startOfLayers.x,
    startY: startOfLayers.y,
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
    gridWidth: 100,
    gridHeight: 100,
    startX: stackLayer.startX + stackLayer.gridWidth,
    startY: startOfLayers.y
}