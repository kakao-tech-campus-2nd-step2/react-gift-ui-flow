import React from 'react';
import { Container } from '@components/common';
import { FILTER_TARGETS } from '../constants';
import TargetItem from './TargetItem';

export interface TargetProps {
  selectedTarget: string;
  selectTarget: (target: string) => void;
}

export default function Target({ selectedTarget, selectTarget, ...rest }: TargetProps) {
  return (
    <Container justifyContent="space-around" {...rest}>
      {FILTER_TARGETS.map(({ id, icon, name }) => (
        <TargetItem
          key={id}
          icon={icon}
          target={name}
          selected={selectedTarget === name}
          onSelect={() => selectTarget(name)}
        />
      ))}
    </Container>
  );
}
