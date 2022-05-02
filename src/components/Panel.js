
const Panel = ({ name, height, component, bg }) => {

    const style = {
        backgroundColor: bg,
        height: height,
    }

    return (
        <div style={style} className="text-white rounded-10" >
            {component}
        </div>
    );
} 

export default Panel;