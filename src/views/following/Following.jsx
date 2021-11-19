import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import FollowersCard from "../../components/followersCard/FollowersCard"
import Header from "../../layout/Header"

const Following = () => {
    const {name} = useParams()
    const [followingData, setFollowingData] = useState([])

    useEffect(() => {
        const requestApi = async() =>{
            const urlDir = `https://api.github.com/users/${name}/following`
            const response = await fetch(urlDir)
            const result = await response.json()
            setFollowingData(result)
        }
        requestApi()
    }, [name])

    return (
        <div>
            <Header />
            {
                followingData?.map(data =>
                    <FollowersCard 
                    key={data?.id}
                    userName={data?.login}
                    image={data?.avatar_url}

                    />
                )
            }

        </div>
    )
}

export default Following
