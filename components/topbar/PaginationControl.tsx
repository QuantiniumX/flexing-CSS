import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  currentIndex: number;
  totalQuestions: number;
  onPageChange: (index: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentIndex,
  totalQuestions,
  onPageChange,
}) => {
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem className="flex">
            <PaginationPrevious
              href="#"
              onClick={() => onPageChange(Math.max(0, currentIndex - 1))}
              className="h-8 px-2 flex items-center justify-center text-sm"
            />
            <PaginationNext
              href="#"
              onClick={() =>
                onPageChange(Math.min(totalQuestions - 1, currentIndex + 1))
              }
              className="h-8 px-2 flex items-center justify-center text-sm"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PaginationControls;
