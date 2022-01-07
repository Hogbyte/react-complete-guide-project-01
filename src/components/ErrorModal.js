import css from './ErrorModal.module.css';

const ErrorModal = (props) => {
    const rootClassName = props.message.length > 0 ? css.backdropVisible : css.backdropHidden;

    const closeClickHandler = () => {
        props.onClose();
    }

    return (
        <div className={rootClassName}>
            <div className={css.content}>
                {props.message}<br />
                <br />
                <button type="button" onClick={closeClickHandler}>Close</button>
            </div>
        </div>
    );
}

export default ErrorModal;