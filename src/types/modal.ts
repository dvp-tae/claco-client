export type ModalProps = {
  title?: string;
  children?: React.ReactNode;
  positiveButtonText: string;
  negativeButtonText: string;
  disabled?: boolean;
  onPositiveButtonClick?: () => void;
  onNegativeButtonClick?: () => void;
};
