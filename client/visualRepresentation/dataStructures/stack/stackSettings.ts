const startOfLayers: any = {
    x: 80,
    y: 80
}

const layerDefaultSize: any = {
    x: 40,
    y: 40
}

export const codeInstructionLines = {
    push: 1,
    pop: 5
}

export const canvasArea: any = {
    width: 500,
    height: 600
} 

export const codeControlArea: any = {
    width: 600,
    height: 600,
}

export const codeControlCanvas: any = {
    startX: 80,
    startY: 80,
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
    animationSpeed: 30,
    startX: stackLayer.startX + stackLayer.gridWidth,
    startY: startOfLayers.y - layerDefaultSize.y,
    imageWidth: 24,
    imageHeight: 24,
    fontSize: 24,
    offset: 5,
    gridWidth: layerDefaultSize.x + 20,
    gridHeight: layerDefaultSize.y,
}