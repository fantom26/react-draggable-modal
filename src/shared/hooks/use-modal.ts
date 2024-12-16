import { useCallback, useMemo, useState } from "react";

export interface IModalInfo<T> {
  type: T;
  width?: 38 | 58.5 | 85.5 | 144;
}

export type TModal<T> = { isOpen: boolean; data?: any } & IModalInfo<T>;

export const generateDefaultModal = <T>(type: T) => ({
  isOpen: false,
  type
});

export const useModal = <T>(defaultModal: T) => {
  const [modalState, setModalState] = useState<TModal<T>>(
    generateDefaultModal(defaultModal as T)
  );
  const closeModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      data: null,
      isOpen: false
    }));
  }, []);

  const openModal = useCallback(
    (modalInfo: IModalInfo<T>, data: any | null = null) => {
      setModalState({
        ...modalInfo,
        isOpen: true,
        data
      });
    },
    []
  );

  return useMemo(
    () => ({
      modalState,
      closeModal,
      openModal
    }),
    [modalState, closeModal, openModal]
  );
};
