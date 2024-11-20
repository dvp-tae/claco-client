import { Modal } from "@/components/common/Modal";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export type MoveModalProps = {
  clacoBookList: string[];
  onClose: () => void;
  onConfirm: () => void;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
};

export const MoveModal = ({
  clacoBookList,
  onClose,
  onConfirm,
  onSelect,
}: MoveModalProps) => {
  const [isMove, setIsMove] = useState<boolean>(false);
  const handleConfirm = () => {
    if (isMove) {
      onConfirm();
    } else {
      setIsMove(true);
    }
  };
  return (
    <Modal
      positiveButtonText="확인"
      negativeButtonText="취소"
      onNegativeButtonClick={onClose}
      onPositiveButtonClick={handleConfirm}
      title={isMove ? "" : "티켓을 이동할 티켓북을 선택해주세요"}
    >
      {isMove ? (
        <div className="flex flex-col items-center justify-center mb-[30px]">
          <span className="mb-2 headline2-bold">
            선택하신 폴더로 티켓을 이동하시겠어요?
          </span>
        </div>
      ) : (
        <div className="flex flex-col mb-[25px]">
          <RadioGroup defaultValue={clacoBookList[0]}>
            {clacoBookList.map((item, index) => (
              <div className="flex items-center space-x-2 mb-[5px]" key={index}>
                <RadioGroupItem
                  value={item}
                  id={String(index)}
                  onClick={() => onSelect(item)}
                  className="mr-[10px] border-grayscale-50 text-grayscale-50"
                />
                <label htmlFor={String(index)}>{item}</label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
    </Modal>
  );
};
