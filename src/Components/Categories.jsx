import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Categories = ({category}) => {
    const {image,subcategory_Name} = category;
    return (
        <Link to={`/subcategory/${subcategory_Name}`}>
        <div  className="h-[300px] w-[380px] category flex justify-center items-center cursor-pointer" style={{background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${image}) no-repeat center`}}>
            <h5 className='font-semibold text-xl text-white'>{subcategory_Name}</h5>
        </div>
        </Link>
    );
};

Categories.propTypes = {
    category : PropTypes.object
}
export default Categories;