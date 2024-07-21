const Explosive = ({ name, pathToImage }) => {
    return (
        <>
            <img src={process.env.PUBLIC_URL+"/img/exp/" + pathToImage}
                 alt="..."
                 style={{ width: "140px", height: "140px" }}
            />
            {name}
            <br/>
        </>
    );
};

export default Explosive;
