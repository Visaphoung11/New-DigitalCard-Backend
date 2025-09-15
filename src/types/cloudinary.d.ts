declare module 'cloudinary' {
  export namespace v2 {
    export const config: any;
    export const uploader: {
      upload_stream: any;
      destroy: any;
    };
  }
}
