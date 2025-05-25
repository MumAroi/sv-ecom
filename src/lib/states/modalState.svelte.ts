class ModalState {
    public value = $state<boolean>();
    constructor(modalState: boolean) {
        this.value = modalState;
    }

    setTrue() {
        this.value = true;
    }
    setFalse() {
        this.value = false;
    }
    toggleModal() {
        this.value = !this.value;
    }
}

export const signInModalState = new ModalState(false);
export const signUpModalState = new ModalState(false);
export const mobileAuthModalState = new ModalState(false);
export const resetPasswordModalState = new ModalState(false);
export const cartSheetState = new ModalState(false);
