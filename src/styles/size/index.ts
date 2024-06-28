interface FixedSize {
  width: string,
  height: string,
}
type ElementSize = FixedSize | 'responsive';
export default ElementSize;
