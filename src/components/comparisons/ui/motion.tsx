import React from 'react'

type AnimationProps = {
  initial?: unknown
  animate?: unknown
  whileInView?: unknown
  whileHover?: unknown
  transition?: unknown
  viewport?: unknown
}

const createMotionComponent = <Tag extends keyof JSX.IntrinsicElements>(tag: Tag) =>
  React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<Tag> & AnimationProps>(
    ({ initial, animate, whileInView, whileHover, transition, viewport, ...props }, ref) =>
      React.createElement(tag, { ...props, ref })
  )

export const motion = {
  div: createMotionComponent('div'),
  h1: createMotionComponent('h1'),
  p: createMotionComponent('p'),
}
