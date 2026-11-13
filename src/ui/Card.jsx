import Flag from "./Flag";

export default function Card({style,account}){
    return(
        <div
        className={`flex flex-col`}
        >
            <Flag/>
            <div>
                <h3></h3>
                <p></p>
            </div>
        </div>
    )
}