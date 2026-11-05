import React from "react";
import ReactDOM from "react-dom";

export default function ConfirmationModal({
  isOpen,
  onClose,
  confirmationMessage,
}) {
  if (!isOpen) return null;

  const isSuccess = confirmationMessage?.type === "success";

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md transform rounded-2xl bg-white p-6 text-center shadow-2xl shadow-primary/20 transition-all border border-slate-100 animate-scale-up">
        {/* Animated Checkmark Circle */}
        <div
          className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ${confirmationMessage.type === "success" ? "bg-emerald-50 text-emerald-500" : "bg-error-container text-error"}`}
        >
          <svg
            className="h-10 w-10 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isSuccess ? (
              // Checkmark Path
              <path
                className="stroke-dash-array"
                d="M5 13l4 4L19 7"
                style={{
                  strokeDasharray: 30,
                  strokeDashoffset: 0,
                  animation:
                    "checkmark 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards",
                }}
              />
            ) : (
              // "X" Path for Errors
              <path
                d="M6 18L18 6M6 6l12 12"
                style={{
                  strokeDasharray: 30,
                  strokeDashoffset: 0,
                  animation:
                    "checkmark 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards",
                }}
              />
            )}
          </svg>
        </div>

        {/* Detailed Confirmation Content */}
        <h2 className="text-2xl font-extrabold text-slate-800">
          {confirmationMessage.header}
        </h2>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
          {confirmationMessage.message}
        </p>

        {/* Action Button */}
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-on-tertiary shadow-md transition-all hover:bg-primary-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}
