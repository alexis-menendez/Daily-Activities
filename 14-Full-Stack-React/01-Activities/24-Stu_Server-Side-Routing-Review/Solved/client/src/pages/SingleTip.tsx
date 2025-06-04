import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { retrieveTip, deleteTip } from "../api/tipAPI";
import UpdateTipForm from "../components/UpdateTipForm";

const SingleTip = () => {

    const { id } = useParams();
    // Initialize state for 'tip' using useState, setting it to an empty array of type UserData.
    const [tip, setTip] = useState({
        id:"",
        tip:"",
        username:""
    });

    // useEffect hook runs once on component mount due to empty dependency array.
    // It calls fetchtip to retrieve and set user data.
    useEffect(() => {
        fetchTip(id);
    }, []);

    // Async function fetchtip retrieves tip data from an external source.
    const fetchTip = async (id: string | undefined) => {
        // Call retrievetip function which asynchronously fetches user data.
        const data = await retrieveTip(id);
        // Update 'tip' state with the fetched data.
        setTip(data);
    }

    const hadleDeleteTip = async (id: string | undefined) => {
        const data = await deleteTip(id)

        window.location.assign('/')
    }

    return (
        <>
        <UpdateTipForm />
        <div className="card mb-3" key={tip.id}>
          <h4 className="card-header bg-primary text-light p-2 m-0">{tip.username}</h4>
          <div className="card-body bg-light p-2">
            <p>{tip.tip}</p>
            <a onClick={() => hadleDeleteTip(tip.id)}>Delete this tip</a>
          </div>
        </div>
        </>
        
    );
};

export default SingleTip;
