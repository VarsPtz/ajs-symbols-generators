export default function canIterate(input) {
  try {
    const verificationStatus = input[Symbol.iterator]();
    return true;
  } catch (e) {
    return false;
  }
}
