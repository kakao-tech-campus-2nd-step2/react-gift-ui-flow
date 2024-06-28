export interface FixedSize {
  width: string,
  height: string,
}
type ElementSize = FixedSize | 'responsive' | 'small' | 'big';
export default ElementSize;
