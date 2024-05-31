export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// export const base64ToFile = (base64, filename, mimeType) => {
//   const arr = base64 && base64?.split(",");
//   const mime = arr[0]?.match(/:(.*?);/)[1] || mimeType;
//   const bstr = atob(arr[1]);
//   let n = bstr.length;
//   const u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr?.charCodeAt(n);
//   }
//   return new File([u8arr], filename, { type: mime });
// };
export const base64ToFile = (base64, filename, mimeType) => {
  if (typeof base64 !== "string") {
    console.error("Invalid base64 input:", base64);
    throw new Error("Invalid base64 input");
  }

  const arr = base64.split(",");
  console.log(arr);
  if (arr.length < 2) {
    console.error("Invalid base64 format:", base64);
    throw new Error("Invalid base64 format");
  }

  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : mimeType;

  try {
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  } catch (error) {
    console.error("Error converting base64 to file:", error);
    throw new Error("Error converting base64 to file");
  }
};
