import * as react from 'react';
import { SignaturePadRootProps } from '@ark-ui/react/signature-pad';

interface ReactMinimalSignatureProps extends SignaturePadRootProps {
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
declare const ReactMinimalSignature: react.ForwardRefExoticComponent<ReactMinimalSignatureProps & react.RefAttributes<HTMLDivElement>>;

export { ReactMinimalSignature };
