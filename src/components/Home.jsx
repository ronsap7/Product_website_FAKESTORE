import { Link } from "react-router-dom"


export default function Home(){
    return(
        <>
        
        
      <div className="min-h-screen bg-blue-100 flex ">

        <div className="flex w-100 ">
            <div className="flex flex-col">
                <h1 className="text-7xl font-bold text-gray-800 p-8 m-8">Product Website using FAKE STORE API</h1>
                <Link to = "/products" >
                <button className="w-96 ml-14 p-2 ">
                    <h2 className="text-3xl  bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
                    focus:outline-none focus:ring focus:ring-violet-300 rounded-full text-neutral-100 ">Explore PRODUCTS</h2>
                </button>
                </Link>
            </div>
        <img className="min-w-20 min-h-10" src="/5995360.jpg" alt="" />
        </div>
      </div>
     
      
      </>
    )
}