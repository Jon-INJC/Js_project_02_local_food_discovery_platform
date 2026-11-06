import React from 'react'
import ReactDOM from 'react-dom'

export default function PopUpMessage({ isOpen, confirmationMessage }) {
  if (!isOpen) return null;

  const isSuccess = confirmationMessage?.type === "success";

  return ReactDOM.createPortal(
    <div className={`fixed top-5 right-5 z-50 flex flex-col gap-1 p-4 max-w-sm w-full  ${isSuccess ? "bg-on-tertiary" :"bg-error-container"} border-l-4 border-primary rounded-xl shadow-2xl backdrop-blur-md animate-fade-in`}>
      <h3 className={`text-xl font-bold font-main-header ${isSuccess ? "text-emerald-700" : "text-error"}`}>
        {confirmationMessage?.header}
      </h3>
      <p className="text-sm font-semibold font-main-body text-shadow-on-surface-variant leading-relaxed">
        {confirmationMessage?.message}
      </p>
    </div>
  , document.getElementById('modal-root'))
}