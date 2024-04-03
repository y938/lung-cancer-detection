import "./Css/Lung.css"
import { useState } from "react"
import {MdCloudUpload, MdDelete} from 'react-icons/md'


export default function Lung(){
    const [image, setImage] = useState(null)
    const [filename, setFile] = useState("no selected file")
    return (
        <div className="container">
            <h1>Lung Cancer Detection Stystem</h1>
            <form onClick={()=> document.querySelector(".input-field").click()}>
                <input type="file" accept="image/*" className="input-field" hidden
                onChange={({target: {files}})=>{
                        files[0] && setFile(files[0].name)
                        if (files){
                            setImage(URL.createObjectURL(files[0]))
                        }
                }}
                />
                { image ?
                <img src={image} width={150} height={150} alt={filename}/> 
                :
                <>
                <MdCloudUpload color="#03A9F4" size={80} />
                <p>Browse Files to upload </p>
                </>
                }
            </form>
            <section className="last-row">
                <span>{filename} - </span>
                <MdDelete color="#03A9F4" size={20} onClick={()=>{
                    setImage(null)
                    setFile("no selected file")
                }}/>    
            </section>
        </div>
    )
}