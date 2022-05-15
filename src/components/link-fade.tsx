import React, { ReactNode, useCallback } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

interface IProps {
  children: ReactNode;
  node?: ReactNode;
  url: string;
  className?: string
}

export const LinkFade = ({ children, url }: IProps) => {
  const exitTransition = {
    length: 0.8,
    zIndex: 2,
    trigger: ({ node }: IProps) => {
      exitTransition.exitTrigger(node);
      if (node) (node as unknown as HTMLElement).style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback((container: any) => {
      container.childNodes[0].childNodes[1].setAttribute('style', 'animation: fadeOut 0.8s ease forwards;');
    }, []),
  };

  const entryTransition = {
    zIndex: 1,
    trigger: ({ node }: IProps) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback((container: any) => {
      container.childNodes[0].childNodes[1].setAttribute('style', 'animation: fadeIn 0.8s ease forwards;');
    }, []),
  };

  return (
      <TransitionLink to={url} exit={exitTransition} entry={entryTransition}>
        {children}
      </TransitionLink>
  );
};