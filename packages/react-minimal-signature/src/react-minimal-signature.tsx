"use client";

import {
  SignaturePad,
  type SignaturePadRootProps,
} from "@ark-ui/react/signature-pad";
import { ElementRef, forwardRef } from "react";

export interface ReactMinimalSignatureProps extends SignaturePadRootProps {
  label?: string;
  withClearTrigger?: boolean;
  withGuide?: boolean;
  classNames?: {
    root?: string;
    label?: string;
    control?: string;
    clearTrigger?: string;
    guide?: string;
  };
}

const ReactMinimalSignature = forwardRef<
  ElementRef<typeof SignaturePad.Root>,
  ReactMinimalSignatureProps
>((props, ref) => {
  const {
    label,
    className,
    classNames,
    withClearTrigger = true,
    withGuide = true,
    ...rest
  } = props;
  return (
    <SignaturePad.Root
      ref={ref}
      className={`rmc-root ${className} ${classNames?.root}`}
      {...rest}
    >
      {label ? (
        <SignaturePad.Label className={classNames?.label}>
          {label}
        </SignaturePad.Label>
      ) : null}
      <SignaturePad.Control className={classNames?.control}>
        <SignaturePad.Segment />
        {withClearTrigger ? (
          <SignaturePad.ClearTrigger className={classNames?.clearTrigger}>
            Clear
          </SignaturePad.ClearTrigger>
        ) : null}
        {withGuide ? (
          <SignaturePad.Guide className={classNames?.guide} />
        ) : null}
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
});

export default ReactMinimalSignature;
