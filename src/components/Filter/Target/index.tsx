import React, { useState } from 'react';
import Inner from '@components/common/Layout/Inner';
import Container from '@components/common/Layout/Container/Container';
import { FILTER_TARGETS } from '../constants';
import TargetItem from './TargetItem';

export default function Target() {
  const [selectedTarget, setSelectedTarget] = useState<string>(FILTER_TARGETS[0].name);

  return (
    <Inner maxWidth={1024}>
      <Container justifyContent="space-around">
        {FILTER_TARGETS.map(({ id, icon, name }) => (
          <TargetItem
            key={id}
            icon={icon}
            target={name}
            selected={selectedTarget === name}
            onSelect={() => setSelectedTarget(name)}
          />
        ))}
      </Container>
    </Inner>
  );
}
