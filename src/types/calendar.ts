export type CalendarProps = {
  mode?: "single" | "range";
  selectedDate?: Date | null;
  onDateSelect?: (date: Date) => void;
  startDate?: Date;
  endDate?: Date;
  rangeStart?: Date | null;
  rangeEnd?: Date | null;
  onRangeSelect?: (start: Date, end: Date) => void;
};

export type CalendarDayProps = {
  mode?: "single" | "range";
  day: number | null;
  isSelected: boolean;
  isInRange: boolean;
  isWithinRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  onClick: () => void;
};