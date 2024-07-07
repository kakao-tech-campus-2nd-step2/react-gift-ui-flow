import { useState } from 'react';

const useSelectButton = () => {
  const [selectBtn1, setSelectBtn1] = useState<string>('ALL');
  const [selectBtn2, setSelectBtn2] = useState<string>('받고 싶어한');

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
