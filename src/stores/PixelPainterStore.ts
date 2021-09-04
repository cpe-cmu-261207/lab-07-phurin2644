import {Store} from 'pullstate'
import ColorPicker from '../components/ColorPicker'


type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] ,
  ColorPick: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  ColorPick: '#000000'
})

export const PickColor = (color: string) => {
  PixelPainterStore.update(
    s => {s.ColorPick = color}
  )
}

export const PaintColor = (x: number, y: number) => {
  PixelPainterStore.update(
    s => {s.canvas[x][y] = s.ColorPick}
  )

}

export const Clear = () => {
  PixelPainterStore.update(
    s => {s.canvas = createEmptyCanvas()}
  )
}

const createRandomCanvas = () => {
  const output: string[][] = []
  const colorRandom: string[] = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E']
  
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      let x = Math.floor(Math.random() * 12);
      output[i].push(colorRandom[x])
    }
  }
  return output
}

export const Random = () => {
  PixelPainterStore.update(
    s => {s.canvas = createRandomCanvas()}
  )
}