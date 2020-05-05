import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <h1>Страница информации</h1>
            <p>Страница информации p</p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к задачам</button>
        </React.Fragment>
    );

} 