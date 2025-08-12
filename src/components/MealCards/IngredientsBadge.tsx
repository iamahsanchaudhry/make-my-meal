interface PillProps {
  item: string;
  className?: string;
}

const IngredientsBadge = ({ item, className = "" }: PillProps) => {
  return (
    <div
      className={`inline-flex bg-blue-300 dark:bg-blue-800 rounded-[22px] px-3 py-1 text-md sm:text-sm ${className}`}
    >
      <h3 className="font-semibold">{item}</h3>
    </div>
  );
};

export default IngredientsBadge;
