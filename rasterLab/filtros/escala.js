function escala(imageLab) {
    let fatorW = 0.7
    let fatorH = 0.7
    let h = imageLab.image1.height
    let w = imageLab.image1.width
    let hDest = parseInt(h / fatorH)
    let wDest = parseInt(w / fatorW)
    if (hDest > h) {
        hDest = h
    }
    if (wDest > w) {
        wDest = w
    }
    for (let y = 1; y <= hDest; y++) {
        for (let x = 1; x <= wDest; x++) {
            let posX = parseInt(x * fatorW)
            let posY = parseInt(y * fatorH)
            let pixel = imageLab.image1.getPixel(posX, posY)
            imageLab.image2.setPixel(x, y, pixel)
        }
    }
    imageLab.image2.refresh()
}

export default escala