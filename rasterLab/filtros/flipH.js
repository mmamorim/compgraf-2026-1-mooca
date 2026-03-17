
function flipH(imageLab) {
    let w = imageLab.image1.width
    let h = imageLab.image1.height
    for(let y=1; y <= h; y++) {
        for(let x=1; x <= w; x++) {
            let pixel = imageLab.image1.getPixel(x,y)
            imageLab.image2.setPixel(x,h-y,pixel)
        }
    }
    imageLab.image2.refresh()
}

export default flipH