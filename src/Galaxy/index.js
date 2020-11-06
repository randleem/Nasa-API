import React, {useEffect, useState} from 'react'

function GalaxyViewer(){
    const [picture, setPicture] = useState({})
    const [tesPicture, setTesPicture] = useState({})

    useEffect(() => {
        if(picture){
            async function getPicture(){
                const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`,  {
                    headers: { accept: "application/json" },
                  })
                const data = await res.json();
                console.log(data.url);
                setPicture(data);
            }
            getPicture();
        }
    }, [])

    useEffect(() => {
        if(tesPicture){
            async function getPicture(){
                const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=mHHWfgZhaNvfiWbpDDUF5lVaogp6EaVT24quDRgu`,  {
                    headers: { accept: "application/json" },
                  })
                const data = await res.json();
                console.log(data.url);
                setTesPicture(data);
            }
            getPicture();
        }
    }, [])


    return(
        <div>
            <img src={picture?.url} width={`auto`} height={`500px`}></img>
            <p>{picture?.explanation}</p>

        </div>
    )
}

export default GalaxyViewer