import { useParams } from 'react-router-dom';

export default () => {
    const httpStatus = useParams().http_status;
    return <h2>Error: {httpStatus}</h2>;
};
