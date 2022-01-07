import css from './Card.module.css';

const Card = (props) => {
    const className = css.card + (props.className ? ` ${props.className}` : '');

    return (
        <div className={className}>
            {props.children}
        </div>
    );
};

export default Card;