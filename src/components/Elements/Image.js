import Banner from '../../images/Banner.jpg';

function Image({ alt, src }) {
    return (
        <div className="p-0">
            <img alt={alt} src={Banner} className="m-0" />
        </div>
    );
}

export default Image;