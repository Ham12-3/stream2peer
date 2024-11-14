import { ReactNode, useContext } from "react";
import { GrClose } from "react-icons/gr";
import { StateContext } from "../context";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  onSubmit?: () => void;
}) => {
  if (!isOpen) return null; // If modal is not open, don't render anything

  const { loading } = useContext(StateContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={(e) => e.stopPropagation()}>
      <div className="bg-white max-h-[550px] overflow-y-auto px-6 pb-6 md:max-w-[550px] rounded-lg shadow-lg max-w-sm w-full relative">
        {/* Modal Close Button */}
        <button
          className="absolute z-20 top-3 right-4 text-gray-500 hover:text-gray-800"
          onClick={(e) => {
            onClose();
            // e.stopPropagation();
          }}
        >
          <GrClose size={22} />
        </button>

        {/* Modal Title */}
        {title && (
          <h2 className="text-xl pt-6 font-bold pb-4 sticky top-0 left-0 right-0 bg-white ">
            {title}
          </h2>
        )}

        {/* Modal Content */}
        <div className="mb-4">{children}</div>

        {/* Close Modal Button */}
        {onSubmit && (
          <button
            className="bg-orange-500 text-primary-white px-4 py-2 rounded"
            onClick={onSubmit}
          >
            {loading ? (
              <div className="grid place-content-center">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-[#FFFFFF]"></div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;