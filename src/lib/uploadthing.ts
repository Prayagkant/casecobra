// import {
//   generateUploadButton,
//   generateUploadDropzone,
//   generateReactHelpers
// } from "@uploadthing/react";

// import type { OurFileRouter } from "@/app/api/uploadthing/core";

// export const UploadButton = generateUploadButton<OurFileRouter>();
// export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
