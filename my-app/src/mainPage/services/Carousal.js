import Carousel from 'react-bootstrap/Carousel';
import  Service from "./Service"
import "./Service.css"
function DarkVariantExample(props) {
  const got=props.val
  return (
    <>
      
        <div className={`carausal-for-color${got}`}>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        /> */}
        <Service/>
     
      </Carousel.Item>
      <Carousel.Item>
      <Service/>
      <Carousel.Caption>
        {/* <h1>This one for anoop</h1> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
       
      <Service/>
        <Carousel.Caption>
         {/* Its not anoop */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
    </>
   
  );
}

export default DarkVariantExample;