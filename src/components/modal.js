import ContactForm from "./contactForm";
import Contents from "@/constants/data";

export default function formModal({ closeModal }) {
  const handleClick = () => {
    closeModal(false);
  };
  return (
    <>
      {
        <div className="modal-container h-screen w-screen fixed top-0 z-50">
          <div className="background h-full w-full bg-slate-500 opacity-95 blur-lg backdrop-blur-3xl border-8 border-black absolute"></div>
          <div className="form w-full h-screen top-0 relative z-[100]">
            <div
              className="close-btn right-0 absolute text-right mt-2 mr-24 hover:cursor-pointer animate-pulse hover:animate-none"
              onClick={handleClick}
            >
              {Contents.images.close}
            </div>
            <ContactForm />
          </div>
        </div>
      }
    </>
  );
}
