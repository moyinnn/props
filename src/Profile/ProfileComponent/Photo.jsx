import img from "./me.jpg";

const PhotoComp = (props) => {

    return(
        <div>
            <img src={img} alt="Me" style={{width: 150}} />
            { props.children }
        </div>
    );
}

export default PhotoComp;