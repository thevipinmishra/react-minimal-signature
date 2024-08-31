"use client";

import Preview from "@/components/docs/Preview";
import { useState } from "react";
import { ReactMinimalSignature } from "react-minimal-signature";
import "react-minimal-signature/rmc.css";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [drawing, setDrawing] = useState<Boolean>(false);
  return (
    <main className="container space-y-8 py-10">
      <Preview title="Default">
        <ReactMinimalSignature label="Sign Here" />
      </Preview>

      <Preview title="No Guide">
        <ReactMinimalSignature label="Signature" withGuide={false} />
      </Preview>

      <Preview title="Render image preview">
        <ReactMinimalSignature
          label="No Clear Trigger"
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
      </Preview>
    </main>
  );
}
