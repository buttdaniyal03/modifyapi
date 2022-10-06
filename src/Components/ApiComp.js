import './Api.css';
// import Detail from './Detail';
import { useNavigate } from 'react-router-dom';
const ApiComp = ({ user }) => {

    const navigate = useNavigate();

    const toDetail = (singleEntry) => {
        console.log('check==', singleEntry);
        navigate('/detail', {
            state: {
                data: singleEntry,
            }
        });

    }

    return (
        <>
            <div className="grid-cover">
                <div className="container">
                    <div className="grid-wrapper">
                        {
                            user.map((curElem) => {

                                return (
                                    <div className=" inner-grid">
                                        <h5>ID: {curElem.id}</h5>
                                        <h4>{curElem.category}</h4>
                                        <img src={curElem.image} alt="" width="200px" height="200px" srcset="" />
                                        <h4>Price : {curElem.rating.count}</h4>
                                        <h6 className="text">Rating : {curElem.rating.rate}</h6>
                                        <button className='btn detail' onClick={() => { toDetail(curElem) }}>Show Details</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ApiComp;