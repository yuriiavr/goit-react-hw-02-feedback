import propTypes from 'prop-types';
import css from '../Container/Container.module.css';

const Container = ({children }) => {
    return <div className={css.container}>{ children}</div>
}

Container.propTypes = {
    children: propTypes.object,
};

export default Container;