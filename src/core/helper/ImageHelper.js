import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : `data:image/jpeg;base64,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`;
  return (
    <div className="rounded border border-info p-2">
      <img
        src={imageUrl}
        alt="phot"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
