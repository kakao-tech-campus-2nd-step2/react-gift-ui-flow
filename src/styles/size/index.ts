interface FixedSize {
  width: number,
  height: number,
}
type ElementSize = FixedSize | 'responsive';
export default ElementSize;
