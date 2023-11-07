import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { postLatest } from "../apiRequest/apiRequest";
import BlogList from "../Component/BlogList";
import Loader from "../Component/Loader";


const HomePage = () => {
 
    const [newsList,setNewsList] = useState(null) ;

    useEffect(() => {

       (async()=>{
          let res = await postLatest();
          setNewsList(res) ;
       })()

    },[])



    return (
        <Layout>
          {
            newsList === null? <Loader /> :  <BlogList newsList={newsList} /> 
          }
        </Layout>
    );
};

export default HomePage;