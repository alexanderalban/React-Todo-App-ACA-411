import TodoCard from './TodoCard';

function FirstComponent(props) {
    console.log("This is FirstComp Props****", props.items)
    return (
        <div>
            <h1>This is our Listing Component</h1>
            <ul>{props.items.map((todo, index)=>{
                return <TodoCard key={index} title={todo}></TodoCard>
                })}</ul>
        </div>

    )
}

export default FirstComponent;