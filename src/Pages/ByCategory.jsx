import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { postByCategory } from "../apiRequest/apiRequest";
import Loader from "../Component/Loader";
import BlogList from "../Component/BlogList";


const ByCategory = () => {
    const {categoryID} = useParams()

    const [newsList,setNewsList] = useState(null) ;

    useEffect(() => {

       (async()=>{
          let res = await postByCategory(categoryID);
          setNewsList(res) ;
       })()

    },[categoryID])

    return (
        <Layout>
            {
            newsList === null? <Loader /> :  <BlogList newsList={newsList} /> 
          }
        </Layout>
    );
};

export default ByCategory;