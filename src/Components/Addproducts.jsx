import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Addproducts = ()  =>{

    const[formData,setFormData]=useState({
        Name:"",
        Description:"",
         Price:null
    });

    const[error,setError]=useState("");

    const navigate = useNavigate();

    const params = useParams();
    
    
    
const handleInputChange = (e) =>{
    const{name,value}=e.target
    setFormData({
        ...formData,
        [name]:value
    })
}
const apiUrl = "https://676abad4863eaa5ac0df6ff1.mockapi.io/Products"

const getProductsData = async () => {
    try {
        const res = await axios.get(`${apiUrl}/${params.id}`);
        if (res.status === 200) {
            setFormData(res.data )
        }
        
    } catch (error) {


    }
}


useEffect(()=>{
    if (params.id) {
        getProductsData();
    }
},[params.id])



const handleSubmit = async (e) => {
    e.preventDefault();
    if ((formData.Name !== "") && (formData.Description !== "") && (formData.Price !== "") ) 
    if (params.id) { 
    const res = await axios.put(`${apiUrl}/${params.id}`, formData)
    if (res.status === 201 || res.status=== 200) {
        const { Name,Description,Price } = res.data

        setFormData(
            {
                Name: Name ?? "",
                Description: Description ?? "",
                Price: Price ?? null

})

navigate('/products')
setError("")
}}
else{
    
    const res = await axios.post(apiUrl,formData)
      
    setFormData({
        Name:"",
        Description:"",
        Price:""
    }
)   
navigate('/products')
setError("")

}
else{
    setError("Fields are empty")
}

}
    return(<>

        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
        {error && <h3>{error}</h3>}
    
            <div>
                <label>Product Name</label>
                <input type="text" onChange={handleInputChange} name="Name" value={formData.Name}/>
            </div>
            <div>
                <label>Description</label>
                <textarea type="text" onChange={handleInputChange}  name="Description" value={formData.Description}></textarea>
            </div>
            <div>
                <label>Price</label>
                <input name="Price" onChange={handleInputChange} value={formData.Price} />
            </div>
            <div>
                <input className="submit_btn" type="submit"  />
            </div>
        </form>
        </>)
}

export default Addproducts