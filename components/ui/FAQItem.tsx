
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div className="border-b border-[#EDEFF1]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
      >
        <span
          className={`text-[14px] leading-relaxed sm:text-[15px] ${
            isOpen
              ? "font-bold text-primary-blue"
              : "font-medium text-[#263D5B]"
          }`}
        >
          {question}
        </span>

        <span
  className={`inline-block shrink-0 text-[23px] font-medium leading-none text-primary-yellow transition-transform duration-300 ease-in-out ${
    isOpen ? "rotate-45" : "rotate-0"
  }`}
  aria-hidden="true"
>
  +
</span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] pb-5 opacity-100"
            : "grid-rows-[0fr] pb-0 opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[650px] text-[12px] leading-[1.8] text-[#718092] sm:text-[13px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
