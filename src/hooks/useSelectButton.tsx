import { useState } from 'react';

const useSelectButton = () => {
  const [selectBtn1, setSelectBtn1] = useState<string>('');
  const [selectBtn2, setSelectBtn2] = useState<string>('');

  const handleClicked = (type: string) => {
    setSelectBtn1(type);
  };
  const handleBtnClicked2 = (text: string) => {
    setSelectBtn2(text);
  };

  return {
    selectBtn1,
    selectBtn2,
    handleClicked,
    handleBtnClicked2,
  };
};

export default useSelectButton;
