import React from 'react';
import icon404 from '../../assets/illustrations/404-search.svg?raw';
import iconRuntimeError from '../../assets/illustrations/runtime-error.svg?raw';
import iconEmptyArchive from '../../assets/illustrations/empty-archive.svg?raw';
import iconMessageSent from '../../assets/illustrations/message-sent.svg?raw';

// Icons8 "Notion Line Art" illustrations, recolored via --ill-line / --ill-bg
// custom properties so they theme with light/dark mode. Set both on the
// wrapper's className (Tailwind arbitrary properties) to match the exact
// background the illustration sits on.
const Illustration = ({ svg, className = '', title }) => (
  <div
    className={className}
    role={title ? 'img' : undefined}
    aria-label={title}
    aria-hidden={title ? undefined : true}
    dangerouslySetInnerHTML={{ __html: svg }}
  />
);

export const Illustration404 = (props) => <Illustration svg={icon404} {...props} />;
export const IllustrationRuntimeError = (props) => <Illustration svg={iconRuntimeError} {...props} />;
export const IllustrationEmptyArchive = (props) => <Illustration svg={iconEmptyArchive} {...props} />;
export const IllustrationMessageSent = (props) => <Illustration svg={iconMessageSent} {...props} />;
