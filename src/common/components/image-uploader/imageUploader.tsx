import { ReactElement, ChangeEvent, useRef } from "react";

import { ReactComponent as ImageIcon } from "common/images/image-uploader/image.svg";
import { toBase64 } from "./helpers";
import { ImageUploaderProps } from "./types";

const ImageUploader = ({
  title,
  image,
  onChange,
}: ImageUploaderProps): ReactElement => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleOnChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    if (event?.target?.files?.length) {
      const newImage = await toBase64(event?.target?.files[0]);
      // eslint-disable-next-line
      // @ts-ignore
      return onChange(newImage);
    }
    onChange("");
  };

  return (
    <form
      className="relative border border-primary rounded-full w-40 h-40 cursor-pointer text-primary"
      onClick={() => fileRef?.current?.click()}
    >
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        className="hidden"
        onChange={handleOnChange}
      />
      {image ? (
        <>
          <img
            src={image}
            alt="avatar"
            className="rounded-full w-full h-full"
          />
          <button
            className="absolute top-0 right-0 text-lg w-8 h-8 pb-1 bg-error rounded-full text-white font-semibold"
            onClick={() => onChange("")}
            type="button"
          >
            x
          </button>
        </>
      ) : (
        <div className="flex flex-col gap-4 items-center absolute top-10 left-9">
          <span className="text-sm">{title}</span>
          <ImageIcon />
        </div>
      )}
    </form>
  );
};

export default ImageUploader;
