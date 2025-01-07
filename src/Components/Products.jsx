import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    const apiUrl = "https://676abad4863eaa5ac0df6ff1.mockapi.io/Products"

    const getProductList = async () => {
        setLoading(true)
        try {
            const res = await axios.get(apiUrl)

            if (res.status === 200) {
                setLoading(false)
                setError("")
                setProductData(res.data)
            }


        }
        catch (error) {
            console.log(error)
            setLoading(false)
            setError("Something went wrong")
        }
    }

    useEffect(() => {
        getProductList()
    }, [])

    if (loading) {
        return <div className="loader">
            <div className='spinner'></div>
        </div>
    }
    const handleDeleteProduct = async (id) => {
        const res = await axios.delete(`${apiUrl}/${id}`)    //tempelate literal//
        if (res.status === 200) {
            getProductList()
        }
    }
  return (
    <>

{error && (<h2>{error}</h2>)}
            {productData && productData.length > 0 && (
                <div className='table'>
                    <h2>Product List</h2>
                    <table border={1}>

                        <thead><tr><td>Id</td>
                            <td>Products Name</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Action</td></tr></thead>
                        <tbody>

                            {productData && productData.map((items, index) => {
                                return (<tr key={index}>
                                    <td>{items.id}</td>
                                    <td>{items.Name}</td>
                                    <td>{items.Description}</td>
                                    <td>{items.Price}</td>
                                    <td> <Link to={`/add-products/${items.id}`}>Edit</Link>
                                    <button onClick={() =>{if (window.confirm("Are you sure you want to delete this product?")) {
                            handleDeleteProduct(items.id)}}}>Delete</button> </td>
                                </tr>)
                            })}

                        </tbody>
                    </table>
                </div>
            )}
     <Link className='add-product-link' to="/add-products">Add a Product</Link>
    </>
  )
}

export default Products