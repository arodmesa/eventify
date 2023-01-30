function GridOfComponents({arrayOfComponents}){
    return(
        <>
            <div className="divGrid">
                {arrayOfComponents}
            </div>
            <hr className='horizontalLine'/>
        </>        
    )
}
export default GridOfComponents;