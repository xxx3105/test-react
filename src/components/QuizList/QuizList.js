import { QuizCard } from "../QuizCard/QuizCard";
import { List, ListItem} from "./QuizList.styled";

export const QuizList = ({items}) => {
    //console.log(props.items)
    return (
    <List> 
            {items.map(item => (
             <ListItem key={item.id} level={item.level}>
                <QuizCard item={item}/>
            </ListItem>
        ))}
    </List>
    );
    };




// [<div>1</div>,<div>2</div>, <div>3</div>, <div>4</div>        ]