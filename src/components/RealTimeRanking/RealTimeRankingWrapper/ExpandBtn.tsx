import { Button } from "@/components/common/Button";
import { RealTimeRankContext } from ".";
import { useContext } from "react";

const ExpandBtn = () => {
  const { isExpanded, setIsExpanded } = useContext(RealTimeRankContext);
  return (
    <>
      {!isExpanded && (
        <Button theme="outline" onClick={() => setIsExpanded(true)}>
          더보기
        </Button>
      )}
    </>
  );
};

export default ExpandBtn;
