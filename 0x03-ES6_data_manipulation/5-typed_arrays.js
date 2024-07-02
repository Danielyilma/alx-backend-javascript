export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const num = new DataView(buffer);
  num.setInt8(position, value);

  return buffer;
}
