import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { postDetails } from "../apiRequest/apiRequest";
import BlogDetails from "../Component/BlogDetails";
import Loader from "../Component/Loader";


const DetailsPage = () => {
    const {postID} = useParams()
   
    const [newsList,setNewsList] = useState(null) ;

    useEffect(() => {

       (async()=>{
          let res = await postDetails(postID);
          setNewsList(res) ;
       })()

    },[postID])

console.log(newsList)

    return (
        <Layout>
        { newsList === null ? <Loader /> :  <BlogDetails newsList={newsList} /> } 
        </Layout>
    );
};

export default DetailsPage;