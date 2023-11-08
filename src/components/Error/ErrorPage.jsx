import { Link,  } from "react-router-dom";


const ErrorPage = () => {
    
    
    return (
        
        <div className="text-5xl h-full pb-12 text-center bg-col0 text-col5" id="error-page">
        <h1 >Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        
        <img className="mx-auto" src="https://i.ibb.co/RvfbZ7G/ezgif-com-crop.gif" alt="" />
        <Link to="/"> <button className="btn border border-col5 hover:border-col5  rounded h-10 w-32 mt-2  text-lg font-bold bg-col5 text-col0 hover:text-col5 hover:bg-col0 ">
                  Home
                </button></Link>
      </div>
    );
};

export default ErrorPage;