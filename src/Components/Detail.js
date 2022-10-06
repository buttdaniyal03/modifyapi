import { useLocation } from 'react-router-dom';

const Detail = ({ zain, number, flag }) => {
    const location = useLocation();
    let singleData = location.state.data;
    console.log('singe==', singleData);
    return (
        // <div>
        //     <h1>Yasin</h1>
        //     <h5>ID: {singleData.id}</h5>
        //     <h4>{singleData.category}</h4>
        //     <img src={singleData.image} alt="" width="200px" height="200px" srcset="" />
        //     <h4>Price : {singleData.rating.count}</h4> 
        //     <h6 className="text">Rating : {singleData.rating.rate}</h6>
        // </div>
        <>
            <div className="grid-cover">
                <div className="container">
                    <div className="single-grid">
                        {
                            <div className=" inner-grid">
                                <h5>ID: {singleData.id}</h5>
                                <h4>{singleData.category}</h4>
                                <img src={singleData.image} alt="" width="200px" height="200px" srcset="" />
                                <h4>Price : {singleData.rating.count}</h4>
                                <h6 className="text">Rating : {singleData.rating.rate}</h6>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;