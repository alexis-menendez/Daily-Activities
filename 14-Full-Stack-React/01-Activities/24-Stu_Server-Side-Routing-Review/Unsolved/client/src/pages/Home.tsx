import { useState, useEffect } from "react";
import { retrieveTips } from "../api/tipAPI";
import type { TipData } from "../interfaces/TipData";
import TipList from "../components/Tips"
import TipForm from "../components/TipForm";

const Home = () => {

    // Initialize state for 'tips' using useState, setting it to an empty array of type UserData.
    const [tips, setTips] = useState<TipData[]>([]);

    // useEffect hook runs once on component mount due to empty dependency array.
    // It calls fetchtips to retrieve and set user data.
    useEffect(() => {
        fetchTips();
    }, []);

    // Async function fetchtips retrieves user data from an external source.
    const fetchTips = async () => {
        // Call retrievetips function which asynchronously fetches user data.
        const data = await retrieveTips();
        // Update 'tips' state with the fetched data.
        setTips(data);
    }

    return (
        <>
        <TipForm />
        <TipList tips={tips} />
        </>
        
    );
};

export default Home;
