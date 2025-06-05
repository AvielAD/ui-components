// components/SkeletonTable.js
const SkeletonTable = () => {
  return (
    <div className="animate-pulse z-40">
      {/* Banner con título y botón */}
      <div className="bg-secondary-200 h-16 flex items-center justify-between p-4 mb-4">
        <div className="h-4 bg-secondary-300 rounded-sm w-1/4"></div>
        <div className="h-8 bg-secondary-300 rounded-sm w-16"></div>
      </div>

      {/* Tabla */}
      <div className="grid grid-cols-4 gap-4">
        <div className="h-4 bg-secondary-200 rounded-sm col-span-1"></div>
        <div className="h-4 bg-secondary-200 rounded-sm col-span-3"></div>
        <div className="h-4 bg-secondary-200 rounded-sm col-span-2"></div>
        <div className="h-4 bg-secondary-200 rounded-sm col-span-2"></div>
        <div className="h-4 bg-secondary-200 rounded-sm col-span-1"></div>
        <div className="h-4 bg-secondary-200 rounded-sm col-span-3"></div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        <div className="h-8 bg-secondary-200 rounded-sm col-span-1"></div>
        <div className="h-8 bg-secondary-200 rounded-sm col-span-3"></div>
        <div className="h-8 bg-secondary-200 rounded-sm col-span-2"></div>
        <div className="h-8 bg-secondary-200 rounded-sm col-span-2"></div>
        <div className="h-8 bg-secondary-200 rounded-sm col-span-1"></div>
        <div className="h-8 bg-secondary-200 rounded-sm col-span-3"></div>
      </div>
    </div>
  );
};

export default SkeletonTable;
