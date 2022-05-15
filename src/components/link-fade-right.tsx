import React, { ReactNode, useCallback } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

interface IProps {
    children: ReactNode;
    node?: ReactNode;
    url: string;
    className?: string
}

export const LinkFadeRight = ({ children, url, className }: IProps) => {
  const exitTransition = {
    length: 0.8,
    zIndex: 2,
    trigger: ({ node }: IProps) => {
      exitTransition.exitTrigger(node);
      if (node) (node as unknown as HTMLElement).style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback((container: any) => {
        container.childNodes[0].childNodes[1].setAttribute(
        'style',
        'animation: fadeRightOut 0.8s cubic-bezier(.25,.1,.25,1) forwards;'
      );
    }, []),
  };

  const entryTransition = {
    zIndex: 1,
    trigger: ({ node }: IProps) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback((container: any) => {
      container.childNodes[0].childNodes[1].setAttribute(
        'style',
        'animation: fadeRightIn 0.8s cubic-bezier(.25,.1,.25,1) forwards;'
      );
    }, []),
  };

  return (
    <>
      <TransitionLink to={url} exit={exitTransition} entry={entryTransition} className={className}>
        {children}
      </TransitionLink>
    </>
  );
};
