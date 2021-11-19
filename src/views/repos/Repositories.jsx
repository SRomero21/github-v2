import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Reposcard from "../../components/repos/Reposcard"
import Header from "../../layout/Header"

const Repositories = () => {

    const {name}= useParams()

    const [reposData, setReposData]= useState([])

    useEffect(() => {
        const requestApi = async() =>{
            const urlDir = `https://api.github.com/users/${name}/repos`
            const response = await fetch(urlDir)
            const result = await response.json()
            setReposData(result)
        }
        requestApi()
    }, [name])

    return (
        <div>
            <Header />
            {
                reposData?.map(data =>
                    <Reposcard 
                        repoName={data.name}
                        owner={name}
                        repoPrivate={data.private}
                    />
                )
            }
        </div>
    )

}

export default Repositories
