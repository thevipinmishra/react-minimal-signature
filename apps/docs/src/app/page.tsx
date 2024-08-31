"use client";

import { useState } from "react";
import { ReactMinimalSignature } from "react-minimal-signature";
import "react-minimal-signature/rmc.css";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [drawing, setDrawing] = useState<Boolean>(false);
  return (
    <div className="p-10 space-y-8">
      <ReactMinimalSignature label="Sign Here" />

      <ReactMinimalSignature label="No Guide" withGuide={false} />

      <div>
        <ReactMinimalSignature
          label="No Clear Trigger"
          withClearTrigger={false}
          onDraw={() => setDrawing(true)}
          onDrawEnd={(details) => {
            setDrawing(false);
            details.getDataUrl("image/png").then((url) => setImageUrl(url));
          }}
        />

        {drawing && <span>Drawing...</span>}
        {imageUrl && (
          <img src={imageUrl} className="w-[200px] mx-auto" alt="Signature" />
        )}
      </div>
    </div>
  );
}
