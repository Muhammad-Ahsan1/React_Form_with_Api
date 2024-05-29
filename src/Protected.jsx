import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Protected = ({ Component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate('/login');
        }
    }, [navigate]);
    
    return (
        <div>
            <Component />
        </div>
    );
};

Protected.propTypes = {
    Component: PropTypes.elementType.isRequired
};

export default Protected;
