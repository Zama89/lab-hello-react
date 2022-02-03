import CardDeclarative from "./CardDeclarative";
import CardComponents from "./CardComponents";
import CardSW from "./CardSW";
import CardJSX from "./CardJSX";

function Cards (){
    return (
        <div className="Cards">
            <CardDeclarative />
            <CardComponents />
            <CardSW />
            <CardJSX />
        </div>
    );
}
export default Cards;