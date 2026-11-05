import React from 'react'
import ReactDOM from 'react-dom'

export default function PopUpMessage({ isOpen, confirmationMessage }) {
  if (!isOpen) return null;

  const isSuccess = confirmationMessage?.type === "success";

  return ReactDOM.createPortal(
    <div className={`fixed top-5 right-5 z-50 flex flex-col gap-1 p-4 max-w-sm w-full  ${isSuccess ? "bg-on-tertiary" :"bg-error-container"} border-l-4 border-primary rounded-xl shadow-2xl backdrop-blur-md animate-fade-in`}>
      <h3 className={`text-lg font-bold ${isSuccess ? "text-emerald-700" : "text-error"}`}>
        {confirmationMessage?.header}
      </h3>
      <p className="text-md font-semibold text-on-tertiary leading-relaxed">
        {confirmationMessage?.message}
      </p>
    </div>
  , document.getElementById('modal-root'))
}