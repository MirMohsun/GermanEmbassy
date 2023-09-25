import {useState} from "react";

export type UseModal = {
    isVisible: boolean;
    openModal: (item?: any) => void;
    closeModal: () => void;
    additionalData: any | null;
};

export const useModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [additionalData, setAdditionalData] = useState(null);

    const openModal = (modalData: any) => {
        setIsVisible(true);
        setAdditionalData(modalData);
    };

    const closeModal = () => {
        setIsVisible(false);
    };

    return {
        isVisible,
        openModal,
        closeModal,
        additionalData
    };
};
