import { useState, useEffect } from "react";

export default function useOutsideClick(ref) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return [isOpen, setOpen];
}
