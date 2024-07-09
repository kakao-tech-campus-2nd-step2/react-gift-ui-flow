import { useParams } from 'react-router-dom';

import Header from '@/components/Header';

export default () => {
    const httpStatus = useParams().http_status;
    return (
        <div>
            <Header />
            <h2>Error: {httpStatus}</h2>
        </div>
    );
};
