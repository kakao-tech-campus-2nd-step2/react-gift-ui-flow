import { v4 as uuidv4 } from 'uuid';

export const NumberNode = () => {
  return (
    <>
      {[...Array(16)].map((_, index) => (
        <div key={uuidv4()}>{index + 1}</div>
      ))}
    </>
  );
};
