export default function createInt8TypedArray(length, position, value) {
  if (length <= position) {
    throw new Error("Position outside range");
  }

  const buffer = new ArrayBuffer(length);
  const num = new DataView(buffer);
  num.setInt8(position, value);
  console.log(num.getUint8(position));

  return num;
}
