function InvoiceButton({  handleSubmit, disable }) {

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <button disabled={disable} className="checkout btn" onClick={onSubmit}>
            {disable ? "Chargement..." : "valider"}
        </button>
    );
}

export default InvoiceButton;
