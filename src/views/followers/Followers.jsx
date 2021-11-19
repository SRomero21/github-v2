import React,{ useState, useEffect} from 'react'
import {useParams} from 'react-router-dom' 

//componentes
import Header from "../../layout/Header"
import FollowersCard from "../../components/followersCard/FollowersCard"
const Followers = () => {

    const {name} = useParams()
    const [followersInfo, setFollowersInfo ]= useState([])
    
    useEffect(() =>{
        const requestApi = async () =>{
            const urlDIr = `https://api.github.com/users/${name}/followers`
            const response = await fetch(urlDIr)
            const result = await response.json()
            setFollowersInfo(result)
        }
        requestApi()
    },[name])


    return (
        <div>
            <Header /> 
            {
                followersInfo?.map(info => 
                    <FollowersCard
                    key={info?.id}
                    userName={info?.login}
                    image={info?.avatar_url}

                    />
                )
            }
        </div>
    )
}

export default Followers
